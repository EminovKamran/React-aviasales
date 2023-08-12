import { useSelector, useDispatch } from 'react-redux';

import TicketList from '../TicketList';
import Footer from '../Footer';
import { buttonConfig } from '../../store/aviaSlice';

import styles from './TicketTabs.module.scss';

function TicketTabs() {
  const dispatch = useDispatch();
  const buttons = useSelector((state) => state.aviaSlice.buttons);

  return (
    <div className={styles.ticketDisplay}>
      <div className={styles.tabs}>
        {buttons.map((item) => (
          <button
            key={item.id}
            type='button'
            className={`${styles.tabsActive} ${
              item.active ? styles.active : ''
            }`}
            onClick={() => dispatch(buttonConfig(item.id))}
            disabled={item.disabled}
          >
            {item.text}
          </button>
        ))}
      </div>
      <TicketList />
      <Footer />
    </div>
  );
}

export default TicketTabs;
