import React from "react";
import Logo from "../../assets/KenzieHub.png";
import styles from './style.module.scss';
import { Link, useNavigate } from "react-router-dom";

export const UserPage = ({ user }) => {
    const navigate = useNavigate();
    
    return (
        <>
            <div className={styles.dadContainer}>
                <div className={styles.containerSon1}>
                    <img src={Logo} alt="KenzieHub Logo"></img>
                    {user && (<Link to="/" className={styles.btnOutline}>Sair</Link>)}
                </div>
                <main>
                    <div className={styles.containerSon2}>
                        <h1>Olá {user ? user.name : ""}!</h1>
                        <p className={styles.headline}>Primeiro módulo (Introdução ao Frontend)</p>
                    </div>
                    <div className={styles.containerSon3}>
                        <h2 className={styles.title}>Que pena! Estamos em desenvolvimento</h2>
                        <p className={styles.headline}>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                    </div>
                </main>
            </div>
        </>
    );
};