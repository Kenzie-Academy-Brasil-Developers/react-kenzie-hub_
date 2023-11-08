import React, { useContext } from "react";
import Logo from "../../assets/KenzieHub.png";
import styles from './style.module.scss';
import { UserContext } from "../../providers/UsersContext";
import { TechList } from "../../components/TechList";

export const UserPage = () => {
    const {user, userLogout} = useContext(UserContext);

    return (
        <>
            <div className={styles.dadContainer}>
                <div className={styles.containerSon1}>
                    <img src={Logo} alt="KenzieHub Logo"></img>
                    {user && <button onClick={userLogout} className={styles.btnOutline}>Sair</button>}
                </div>
                <main>
                    <div className={styles.containerSon2}>
                        <h1>Olá {user ? user.name : ""}!</h1>
                        <p className={styles.headline}>Primeiro módulo (Introdução ao Frontend)</p>
                    </div>
                    <div className={styles.containerSon3}>
                        <TechList/>
                    </div>
                </main>
            </div>
        </>
    );
};