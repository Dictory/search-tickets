import React, { Component } from 'react';
import { connect } from 'react-redux';
import load from '../actions/load';
import TicketsList from '../components/TicketsList';
import Filter from '../components/Filter';
import styles from '../components/TicketsList.css';

class TicketsView extends Component {
  componentDidMount() {
    this.props.dispatch(load());
  }
  getFilters = () => [
    { value: 0, label: 'Без пересадок' },
    { value: 1, label: '1 пересадка' },
    { value: 2, label: '2 пересадки' },
    { value: 3, label: '3 пересадки' },
  ];
  render() {
    const { ticketsStore: { isFetching, items } } = this.props;
    return (
      <div className={styles.box}>
        <Filter filters={this.getFilters()} />
        <TicketsList tickets={items} loading={isFetching} />
      </div>
    );
  }
}

export default connect(({ ticketsStore }) => ({ ticketsStore }))(TicketsView);
