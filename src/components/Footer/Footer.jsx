import { useDispatch } from 'react-redux';

import { showTickets } from '../../store/aviaSlice';

import styles from './Footer.module.scss';

function Footer() {
  const dispatch = useDispatch();
  return (
    <button
      type='button'
      aria-label='show ticket'
      className={styles.showButton}
      onClick={() => dispatch(showTickets())}
    >
      Показать еще 5 билетов{' '}
    </button>
  );
}

export default Footer;
