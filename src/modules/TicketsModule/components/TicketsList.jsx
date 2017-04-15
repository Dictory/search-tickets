import React from 'react';
import styles from './TicketsList.css';
import Ticket from './Ticket.jsx';
import NotFound from './NotFound.jsx';
import inFilter from '../actions/inFilter';

const TicketsList = ({ tickets, loading, filter }) => {
  const listFiltered = tickets.filter(ticket => inFilter(filter, ticket.get('stops')));
  const list = listFiltered.entrySeq().map(([key, ticket]) => <Ticket key={key} item={ticket.toJS()} />);
  const element = listFiltered.size > 0
    ? list
    : <NotFound />
  return (
    <div className={styles.list}>
      { loading
        ? <div>...loading</div>
        : element
      }
    </div>
  );
};

export default TicketsList;
