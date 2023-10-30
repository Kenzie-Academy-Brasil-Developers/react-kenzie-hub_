import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ errors, Label, id, ...rest }, ref) => {
    return (
        <div >
            <label className="label" htmlFor={id}>{Label}</label>
            <input className={styles.inputBox} ref={ref} {...rest}/>
            <span className="error">{errors && errors.mesage}</span>     
        </div>
    );
});