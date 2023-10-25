import styles from "./style.module.scss";
import { LoginForm } from "../../components/forms/LoginForm";

export const HomePage = () => {
    return(
    <main className={styles.container}>
        <h1>Página de login</h1>
        <LoginForm />
    </main>)
};