import React from 'react';

import styles from './TicketList.module.scss';

function TicketList() {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticket__header}>
        <span className={styles.ticket__price} />
        <img src='' alt='' className={styles.ticket__img} />
      </div>
      <ul className={styles.ticket__info}>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  );
}

export default TicketList;
