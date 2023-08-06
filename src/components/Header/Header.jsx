import logo from '../../image/Logo.svg';

import styles from './Header.module.scss';

function Header() {
  return <img src={logo} alt='Logo' className={styles.logo} />;
}

export default Header;
