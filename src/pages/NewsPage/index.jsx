import { useContext } from "react";
import { UserContext } from "../../providers/UsersContext";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export const NewsPage = () => {
    const { user } = useContext(UserContext)
    return (
        <main>
            <div className={styles.container}>
                {user ? (
                    <>
                        <h2 className={styles.title}>Seja bem vindo(a){user.name}!</h2>
                        <Link  className={styles.nameUser} to="/user">Usuário</Link>
                    </>
                ): (
                    <>
                        <h2 className="title">Faça login agora!</h2>
                        <Link className={styles.nameUser} to="/" state={{lastRoute: "/news"}}>login</Link>
                    </>
                )};
            </div>
        </main>
    );
};