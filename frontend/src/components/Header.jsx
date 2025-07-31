import { Link } from "react-router-dom";
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.headerContainer}>
            <header className={styles.header}>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
        </header>
        </div>
    );
}

export default Header;