import React from "react";
import { RegisterForm } from "../../components/forms/RegisterForm";
import { Link } from "react-router-dom";
import Logo from "../../assets/KenzieHub.png";
import styles from './style.module.scss';
import "../../styles/typography.scss"


export const RegisterPage = () => {

    return (
        <>
            <div className={styles.containerBox}>
                <img src={Logo} alt="LenzieHub Logo" />
                <Link className={styles.linkBack} to="/">Voltar</Link>
            </div>
            <main className={styles.pageBox}>
                <div className="container">
                    <div >
                        <h1 className="title center">Crie sua conta</h1>
                        <p className={styles.headline}>Rápido e grátis, vamos nessa</p>
                        <RegisterForm />
                    </div>
                </div>
            </main>
        </>
    );
};
