import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Alert } from 'antd';

import { fetchAvia } from '../../store/aviaSlice';
import Ticket from '../Ticket';
import Spinner from '../Spinner';

import styles from './TicketList.module.scss';

function TicketList() {
  const dispatch = useDispatch();

  const stop = useSelector((state) => state.aviaSlice.stop);
  const tickets = useSelector((state) => state.aviaSlice.tickets);
  const filters = useSelector((state) => state.aviaSlice.filters);
  const status = useSelector((state) => state.aviaSlice.status);
  const count = useSelector((state) => state.aviaSlice.count);

  useEffect(() => {
    dispatch(fetchAvia());
  }, [dispatch, stop]);

  const filterTickets = () => {
    const checkedBoxes = filters.filter((box) => box.checked);
    if (!checkedBoxes) {
      return [];
    }

    if (checkedBoxes.find((box) => box.text === 'Все')) {
      return tickets;
    }

    if (tickets) {
      return tickets.filter((ticket) =>
        ticket.segments.every((seg) => {
          const listTrans = checkedBoxes.map((box) => box.transfers);
          return (
            listTrans.find((filter) => filter === seg.stops.length) !==
            undefined
          );
        }),
      );
    }

    return [];
  };

  const newFilteredTickets = filterTickets().slice(0, count);

  const spinner = status && <Spinner />;

  return (
    <>
      {newFilteredTickets.length ? spinner : null}
      <div className={styles.ticket}>
        {!newFilteredTickets.length ? (
          <Alert
            message='Важная информация'
            description='Рейсов, подходящих под заданные фильтры, не найдено.'
            type='info'
            showIcon
          />
        ) : (
          newFilteredTickets.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))
        )}
      </div>
    </>
  );
}

export default TicketList;
