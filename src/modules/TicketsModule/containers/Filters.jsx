import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import inFilter from '../actions/inFilter';
import { CLEAR_VALUE } from '../constants';
import { addFilter, removeFilter, clearFilter, onlyFilter } from '../actions/filterActions';

class Filters extends Component {
  getFilters = () => [
    { value: CLEAR_VALUE, label: 'Все' },
    { value: 0, label: 'Без пересадок' },
    { value: 1, label: '1 пересадка' },
    { value: 2, label: '2 пересадки' },
    { value: 3, label: '3 пересадки' },
  ];
  getFiltersValues = value => this.getFilters().map(v => v.value)
    .filter(v => v !== value && v !== CLEAR_VALUE);
  filterBy = 'stops';
  handleToggle = (value) => {
    if (value !== CLEAR_VALUE) {
      const filter = this.props.ticketsStore.getIn(['filters', this.filterBy]);
      const action = !inFilter(filter, value) ? removeFilter : addFilter;
      this.props.dispatch(action({ value }));
    } else this.props.dispatch(clearFilter({}));
  }
  handleOnly = value => this.props.dispatch(onlyFilter({ values: this.getFiltersValues(value) }));
  render() {
    const { ticketsStore } = this.props;
    return (
      <Filter
        items={this.getFilters()}
        filter={ticketsStore.getIn(['filters', this.filterBy])}
        handleToggle={this.handleToggle}
        handleOnly={this.handleOnly}
      />
    );
  }
}

export default connect(({ ticketsStore }) => ({ ticketsStore }))(Filters);
