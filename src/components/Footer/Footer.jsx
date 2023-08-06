import styles from './Footer.module.scss';

function Footer() {
  return (
    <button
      type='button'
      aria-label='show ticket'
      className={styles.showButton}
    >
      Показать еще 5 билетов{' '}
    </button>
  );
}

export default Footer;
