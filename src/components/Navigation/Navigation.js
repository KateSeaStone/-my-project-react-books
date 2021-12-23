import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation(props) {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Главная
      </NavLink>
      <NavLink
        to="/authors"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Authors
      </NavLink>
      <NavLink
        to="/books"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Books
      </NavLink>
    </nav>
  );
}
