import { LoginForm } from "../../components/forms/LoginForm";
import pageStyles from "../../styles/modules/pageBox.module.scss";

export const HomePage = ({setUser}) => {
    return (
        <main className={pageStyles.pageBox}>
            <div className="container sm">
                <div className="">
                    <h1 className="title center">Login</h1>
                    <LoginForm setUser={setUser}/>
                </div>
            </div>
        </main>
    );
};