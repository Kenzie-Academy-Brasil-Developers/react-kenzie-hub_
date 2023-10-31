import { LoginForm } from "../../components/forms/LoginForm";
import pageStyles from "../../styles/modules/pageBox.module.scss";
import React, { useState } from "react";

export const HomePage = ({setUser}) => {
   
    return (
        <main className={pageStyles.pageBox}>
            <div className="container">
                <div className="containerBox">
                    <h1 className="title center">Login</h1>
                    <LoginForm setUser={setUser} />
                </div>
            </div>
        </main>
    );
};