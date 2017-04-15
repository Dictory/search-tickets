import React from 'react';
import styles from './Ticket.css';

const Ticket = ({
  item: {
    origin,
    originName,
    destination,
    destinationName,
    departureDate,
    departureTime,
    arrivalDate,
    arrivalTime,
    carrier,
    stops,
    price,
  },
}) => (
  <div className={styles.box}>
    <p>{ origin }</p>
    <p>{ originName }</p>
    <p>{ destination }</p>
    <p>{ stops }</p>
    <p>{ price }</p>
  </div>
);

export default Ticket;
