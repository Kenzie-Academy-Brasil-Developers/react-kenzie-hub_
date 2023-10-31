import { Header } from "../../components/Header";
import { RegisterForm } from "../../components/forms/RegisterForm";
import pageStyles from "../../styles/modules/pageBox.module.scss";
import { Link, useNavigate } from "react-router-dom";

export const RegisterPage = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* <div>
                <Link className="linkBack" to="/">Voltar</Link>
            </div> */}
            <main className={pageStyles.pageBox}>
                <div className="container sm">
                    <div className="">
                        <h1 className="title center">Crie sua conta</h1>
                        <p className="headline">Rápido e grátis, vamos nessa</p>
                        <RegisterForm />
                    </div>
                </div>
            </main>
        </>
    );
};
