import { UserPage } from "../../pages/UserPage";
// import styles from './style.module.css';

export const Header = ({ user, userLogout }) => {
    return (
        <header className={styles.container}>
            <div>
                <div>
                    <h1>Kenzie Hub</h1>
                    <div>
                        <p className="paragraph">{user.name}</p>
                        <p className="paragraph">{user.email}</p>
                    </div>
                    <button className="btnOutline" onClick={() => userLogout()}>Sair</button>
                </div>
            </div>
        </header>
    );
};