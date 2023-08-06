import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchAvia } from '../../store/aviaSlice';
import Ticket from '../Ticket';

import styles from './TicketList.module.scss';

function TicketList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAvia());
  }, [dispatch]);

  const tickets = useSelector((state) => state.aviaSlice.tickets);

  return (
    <div className={styles.ticket}>
      {tickets.map((ticket, index) =>
        index <= 10 ? <Ticket key={ticket.id} ticket={ticket} /> : null,
      )}
    </div>
  );
}

export default TicketList;
