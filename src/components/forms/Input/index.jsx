import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ errors, label, id, ...rest }, ref) => {
    return (
        <div >
            <label className={styles.labelAbove} htmlFor={id}>{label}</label>
            <input className={styles.inputBox} ref={ref} {...rest}/>
            <span className={styles.mandatory}>{errors && errors.message}</span>     
        </div>
    );
});