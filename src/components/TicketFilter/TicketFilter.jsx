import { useSelector, useDispatch } from 'react-redux';

import { checkboxConfig } from '../../store/aviaSlice';

import styles from './TicketFilter.module.scss';

function TicketFilter() {
  const dispatch = useDispatch();
  const filtersCheckbox = useSelector((state) => state.aviaSlice.filters);

  return (
    <div className={styles.ticketFilters}>
      <span className={styles.ticketFiltersTitle}>Количество пересадок</span>
      {filtersCheckbox.map((item) => (
        <label key={item.id} className={styles.ticketFiltersName}>
          <input
            type='checkbox'
            className={styles.checkbox}
            checked={item.checked}
            onChange={() => dispatch(checkboxConfig(item.id))}
          />
          <span className={styles.fakeCheckbox} />
          <span>{item.text}</span>
        </label>
      ))}
    </div>
  );
}

export default TicketFilter;
