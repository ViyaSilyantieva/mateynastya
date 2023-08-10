import styles from "./Header.module.scss";
import Contact from "../Contact/Contact";
import Book from "../Book/Book";
import Logo from "../Logo/Logo";



const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Logo/>
                <nav className={styles.header__nav}>
                    <div className={styles.nav__container}>
                        <Book/>
                        <Contact/>
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header;