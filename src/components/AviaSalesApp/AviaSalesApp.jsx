import React from 'react';

import Header from '../Header';
import TicketFilter from '../TicketFilter';
import TicketTabs from '../TicketTabs';

import styles from './AviaSalesApp.module.scss';

function AviaSalesApp() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.container}>
          <TicketFilter />
          <TicketTabs />
        </div>
      </div>
    </main>
  );
}

export default AviaSalesApp;
