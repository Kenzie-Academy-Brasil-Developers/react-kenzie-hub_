import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Select = forwardRef(({ error, label, id, ...rest }, ref) => {
    return (
        <div>
            <label className="label" htmlFor={id}>{label}</label>
            <select className={styles.selectBox} ref={ref} {...rest}>
                <option value="Primeiro">Introdução ao Frontend</option>
                <option value="Segundo">Frontend Avançado</option>
                <option value="Terceiro">Introdução ao Backend</option>
                <option value="Quarto">Backend Avançado</option>
            </select>
        </div>
    );
});