
import pageStyles from "../../styles/modules/pageBox.module.scss";
import styles from './style.module.scss';


export const UserPage = ({ user, userLogout }) => {
    return (
            <main className={pageStyles.pageBox}>
                    <div className={styles.container}>
                        <h1>Olá!</h1>
                        <p className="headline">primeiro módulo (Introdução ao Frontend)</p>
                    </div>
                    <div className={styles.container}>
                        <h2 className={styles.title}>Que pena! Estamos em desenvolvimento</h2>
                        <p className="headline">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                    </div>
            </main>
    );
};