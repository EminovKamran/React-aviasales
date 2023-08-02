import React from 'react';

import styles from './TicketFilter.module.scss';

function TicketFilter() {
  return (
    <div className={styles.ticketFilters}>
      <span className={styles.ticketFiltersTitle}>Количество пересадок</span>
      <label className={styles.ticketFiltersName}>
        <input className={styles.checkbox} type='checkbox' />
        <span className={styles.fakeCheckbox} />
        <span>Все</span>
      </label>
      <label className={styles.ticketFiltersName}>
        <input className={styles.checkbox} type='checkbox' />
        <span className={styles.fakeCheckbox} />
        <span>Без пересадок</span>
      </label>
      <label className={styles.ticketFiltersName}>
        <input className={styles.checkbox} type='checkbox' />
        <span className={styles.fakeCheckbox} />
        <span>1 пересадка</span>
      </label>
      <label className={styles.ticketFiltersName}>
        <input className={styles.checkbox} type='checkbox' />
        <span className={styles.fakeCheckbox} />
        <span>Без пересадок</span>
      </label>
      <label className={styles.ticketFiltersName}>
        <input className={styles.checkbox} type='checkbox' />
        <span className={styles.fakeCheckbox} />
        <span>3 пересадки</span>
      </label>
    </div>
  );
}

export default TicketFilter;
