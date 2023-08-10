import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.section}>
                <div className={styles.social__section}>
                    <a href="https://www.instagram.com/mateynastya/" target="_blank"><img className={styles.icon__inst} src="src/image/inst.svg"></img></a>
                    <h4 className={styles.icon__title}>Instagram</h4>
                    <a href="https://www.instagram.com/mateynastya/" target="_blank" className={styles.icon__text}>mateynastya</a>
                </div>
                <div className={styles.social__section}>
                    <a href="https://t.me/mateynastya"  target="_blank"><img className={styles.icon__tel} src="src/image/tel.svg"></img></a>
                    <h4 className={styles.icon__title}>Telegram</h4>
                    <a href="https://t.me/mateynastya"  target="_blank" className={styles.icon__text}>+375297791701 (Belarus)</a>
                    <a href="https://t.me/mateynastya"  target="_blank" className={styles.icon__text}>+48500377440 (Poland)</a>
                </div>
                <div className={styles.social__section}>
                    <a href="mailto:mateychik.nastya@gmail.com" target="_blank"><img className={styles.icon__mail} src="src/image/mail.svg"></img></a>
                    <h4 className={styles.icon__title}>Mail</h4>
                    <a href="mailto:mateychik.nastya@gmail.com" target="_blank" className={styles.icon__text}>mateychik.nastya@gmail.com</a>
                </div>
            </section>
        </footer>
    )
};


export default Footer;