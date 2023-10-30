import { DefaultTemplate } from "../../components/DefaultTemplate";
import pageStyles from "../../styles/modules/pageBox.module.scss";

export const UserPage = ({ user, userLogout }) => {
    return (
        <DefaultTemplate user={user} userLogout={userLogout}>
            <main className={pageStyles.pageBox}>
                <div className="container sm">
                    <div>
                        <h1>Olá, Lilian Ávila</h1>
                        <p>primeiro módulo (Introdução ao Frontend)</p>
                    </div>
                    <div>
                        <h2>Que pena! Estamos em desenvolvimento</h2>
                        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                    </div>
                </div>
            </main>
        </DefaultTemplate>
    );
};