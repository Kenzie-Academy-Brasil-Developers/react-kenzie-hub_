import { forwardRef } from "react";
import styles from "./style.module.scss";
import React from "react";

export const Input = forwardRef(({ errors, label, id, ...rest }, ref) => {
    return (
        <div >
            <label className={styles.labelAbove} htmlFor={id}>{label}</label>
            <input className={styles.inputBox} ref={ref} {...rest}/>
            {errors? <p className={styles.mandatory}>{errors.message}</p> : null}
        </div>
    );
});