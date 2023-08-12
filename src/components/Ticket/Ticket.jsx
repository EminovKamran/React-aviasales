import uniqid from 'uniqid';
import { format } from 'date-fns';

import styles from './Ticket.module.scss';

export function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket;

  function endingStops(count) {
    if (count === 1) {
      return 'пересадка';
    }
    if (count >= 2 && count <= 4) {
      return 'пересадки';
    }
    return 'пересадок';
  }
  function correctTime(time) {
    const hour = (time / 60).toFixed(0);
    const min = time % 60;
    return `${hour}ч ${min}м`;
  }

  return (
    <div className={styles.ticketDescription}>
      <div className={styles.ticketHeader}>
        <span className={styles.ticketPrice}>{price.toLocaleString()} ₽</span>
        <img
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt=''
          className={styles.ticketImg}
        />
      </div>
      <ul className={styles.ticketInfo}>
        <li className={styles.ticketContainer}>
          {segments.map((item) => (
            <div key={uniqid()} className={styles.ticketList}>
              <div className={styles.ticketItem}>
                <span>{`${format(Date.parse(item.date), 'HH:mm')} - ${format(
                  new Date(Date.parse(item.date) + item.duration * 60000),
                  'HH:mm',
                )}`}</span>
                <span className={styles.ticketName}>
                  {item.origin} - {item.destination}
                </span>
              </div>
              <div className={styles.ticketItem}>
                <span>{correctTime(item.duration)}</span>
                <span className={styles.ticketName}>В ПУТИ</span>
              </div>
              <div className={styles.ticketItem}>
                <span>{` ${item.stops}`}</span>
                <span className={styles.ticketName}>
                  {item.stops.length === 0
                    ? 'Без пересадок'
                    : `${item.stops.length} ${endingStops(item.stops.length)}`}
                </span>
              </div>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Ticket;
