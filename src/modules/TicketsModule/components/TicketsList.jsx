import React from 'react';
import map from 'lodash/map';
import styles from './TicketsList.css';
import Ticket from './Ticket.jsx';

const TicketsList = ({ tickets, loading }) => {
  const list = map(tickets, (ticket, i) => <Ticket key={i} item={ticket} />);
  return (
    <div className={styles.list}>
      { loading && tickets.length > 0
        ? <div>...loading</div>
        : list
      }
    </div>
  );
};

export default TicketsList;
