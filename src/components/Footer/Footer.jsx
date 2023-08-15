import { useDispatch, useSelector } from 'react-redux';

import { showTickets } from '../../store/aviaSlice';

import styles from './Footer.module.scss';

function Footer() {
  const dispatch = useDispatch();
  const showButton = useSelector((state) => state.aviaSlice.tickets);
  const filters = useSelector((state) => state.aviaSlice.filters);

  const notChecked = filters.some((filter) => filter.checked);

  if (showButton.length > 5 && notChecked) {
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

  return null;
}

export default Footer;
