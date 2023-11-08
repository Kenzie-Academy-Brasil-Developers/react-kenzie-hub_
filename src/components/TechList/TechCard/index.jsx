import {MdEdit, MdDelete, MdVisibility} from "react-icons/md";

export const TechCard = ({tech}) => {
    return(
        <li>
            <div>
                <span className="paragraph">
                    <strong>{tech.title}</strong>
                </span>
                <p className="paragraph">{tech.status}</p>
                <button title="Editar" aria-label="edit">
                    <MdEdit />
                </button>
                <button title="Deletar" aria-label="delete">
                    <MdDelete />
                </button>
                <button title="Visualizar" aria-label="">
                    <MdVisibility />
                </button>
            </div>
        </li>
    )
}