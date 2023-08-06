import uniqid from 'uniqid';

import styles from './Ticket.module.scss';

export function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket;

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
                <span>{item.date}</span>
                <span className={styles.ticketName}>
                  {item.origin} - {item.destination}
                </span>
              </div>
              <div className={styles.ticketItem}>
                <span>{item.duration}</span>
                <span className={styles.ticketName}>В ПУТИ</span>
              </div>
              <div className={styles.ticketItem}>
                <span>{` ${item.stops}`}</span>
                <span className={styles.ticketName}>
                  {!item.stops.length
                    ? 'Без пересадок'
                    : `${item.stops.length} пересадки`}
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
