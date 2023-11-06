import { LoginForm } from "../../components/forms/LoginForm";
import React from "react";
import Logo from "../../assets/KenzieHub.png";
import styles from './style.module.scss';
import "../../styles/modules/pageBox.module.scss";
import "../../styles/container.scss";
import "../../styles/typography.scss";
import "../../styles/button.scss";

export const HomePage = () => {
    return (
        <>
            <div className={styles.containerBox}>
                <img className={styles.headerImage} src={Logo}></img>
            </div>
            <main className={styles.pageBox}>
                <div className="container">
                    <div className="containerBox">
                        <h1 className="title center">Login</h1>
                        <LoginForm />
                    </div>
                </div>
            </main>
        </>
    );
};