import { useContext } from "react"
import { Link } from "react-router-dom"
import { TechContext } from "../../providers/TechContext";


export const TechList = () => {
    const { techList } = useContext(TechContext);
    console.log(techList)

    return (
        <div>
            <div>
                <h1 className="title">Tecnologias</h1>
                <Link className="headline" to="/user/create">Adicionar</Link>
            </div>
            <ul>
                {
                    techList.map((tech) => (
                        <TechCard key={tech.id} tech={tech}/>
                    ))
                }
            </ul>
        </div>
    )
}