// import { UserPage } from "../../pages/UserPage";
import styles from './style.module.scss';
import Logo from "../../assets/KenzieHub.png";

export const Header = ({userLogout }) => {
    const user = localStorage.getItem("USER")

    return (
        <header className={styles.containerBox}>
            <div>
                <div className='headline'>
                    <img className={styles.headerImage} src={Logo}></img>
                    {user && (
                    <button className="btnOutline" onClick={() => userLogout()}>Sair</button>
                    )}
                </div>
            </div>
        </header>
    );
};