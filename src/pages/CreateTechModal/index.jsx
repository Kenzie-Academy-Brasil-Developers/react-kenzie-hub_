import { Link } from "react-router-dom"

export const CreateTechModal = () => {
    return(
        <DefaultTemplate>
            <main>
                <div>
                    <Link to="/user">Voltar</Link>
                    <h1>Cadastrar Tecnologias</h1>
                </div>
            </main>
        </DefaultTemplate>

    )
}