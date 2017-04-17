import React from 'react';
import dateFormat from 'dateformat';
import Button from './Button';
import './Ticket.css';

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
  <div styleName="box">
    <div styleName="left">
      <div styleName="logo" />
      <Button price={price} />
    </div>
    <div styleName="right">
      <div styleName="path">
        <div styleName="pathOrigin">{toTime(departureTime)}</div>
        <div styleName="pathBox">
          {stops > 0 && <div styleName="stopsCount">{getStopsString(stops)}</div>}
          <div styleName="pathLine" />
        </div>
        <div styleName="pathArrival">{toTime(arrivalTime)}</div>
      </div>
      <div styleName="info">
        <div>
          <div styleName="infoMain">{`${origin}, ${originName}`}</div>
          <div styleName="infoSub">{getDate(departureDate)}</div>
        </div>
        <div styleName="infoArrival">
          <div styleName="infoMain">{`${destinationName}, ${destination}`}</div>
          <div styleName="infoSub">{getDate(arrivalDate)}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Ticket;
