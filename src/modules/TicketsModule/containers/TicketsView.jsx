import React, { Component } from 'react';
import { connect } from 'react-redux';
import load from '../actions/load';
import TicketsList from '../components/TicketsList';
import Filters from './Filters';
import '../components/TicketsList.css';

class TicketsView extends Component {
  componentDidMount() {
    this.props.dispatch(load());
  }
  render() {
    const { ticketsStore } = this.props;
    return (
      <div styleName="box">
        <Filters />
        <TicketsList
          tickets={ticketsStore.get('items')}
          filter={ticketsStore.getIn(['filters', 'stops'])}
          loading={ticketsStore.get('isFetching')}
        />
      </div>
    );
  }
}

export default connect(({ ticketsStore }) => ({ ticketsStore }))(TicketsView);
