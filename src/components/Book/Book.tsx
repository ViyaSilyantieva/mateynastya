import styles from "./Book.module.scss";


const Book = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button__book}>BOOK</button>
        </div>
    )
};


export default Book;