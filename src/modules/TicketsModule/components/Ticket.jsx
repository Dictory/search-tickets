import React from 'react';
import dateFormat from 'dateformat';
import Button from './Button';
import styles from './Ticket.css';

dateFormat.i18n = {
  dayNames: [
    'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб',
    'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота',
  ],
  monthNames: [
    'ян', 'фв', 'март', 'апр', 'май', 'июль', 'июнь', 'авг', 'сен', 'окт', 'ноя', 'дек',
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
  ],
};
const toTime = time => time.replace(/^\d{1}:/, '0$&').replace(/:\d{1}$/, '$&0');

const getStopsString = stops => `${stops} пересадк${stops === 1 ? 'а' : 'и'}`;

const getDate = date => dateFormat(date, 'dd mmm yyyy, ddd')

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
    stops,
    price,
  },
}) => (
  <div className={styles.box}>
    <div className={styles.left}>
      <div className={styles.logo} />
      <Button price={price} />
    </div>
    <div className={styles.right}>
      <div className={styles.path}>
        <div className={styles.pathOrigin}>{toTime(departureTime)}</div>
        <div className={styles.pathBox}>
          {stops > 0 && <div className={styles.stopsCount}>{getStopsString(stops)}</div>}
          <div className={styles.pathLine} />
        </div>
        <div className={styles.pathArrival}>{toTime(arrivalTime)}</div>
      </div>
      <div className={styles.info}>
        <div>
          <div className={styles.infoMain}>{`${origin}, ${originName}`}</div>
          <div className={styles.infoSub}>{getDate(departureDate)}</div>
        </div>
        <div className={styles.infoArrival}>
          <div className={styles.infoMain}>{`${destinationName}, ${destination}`}</div>
          <div className={styles.infoSub}>{getDate(arrivalDate)}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Ticket;
