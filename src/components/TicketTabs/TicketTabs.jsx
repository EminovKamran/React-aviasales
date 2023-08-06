import TicketList from '../TicketList';
import Footer from '../Footer';

import styles from './TicketTabs.module.scss';

function TicketTabs() {
  return (
    <div className={styles.ticketDisplay}>
      <div className={styles.tabs}>
        <button type='button' className={styles.tabsActive}>
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button type='button' className={styles.tabsActive}>
          САМЫЙ БЫСТРЫЙ
        </button>
        <button type='button' className={styles.tabsActive}>
          ОПТИМАЛЬНЫЙ
        </button>
      </div>
      <TicketList />
      <Footer />
    </div>
  );
}

export default TicketTabs;
