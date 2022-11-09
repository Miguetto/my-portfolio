import { proyectos } from "../../../public/proyects/proyects";

export const ProyectoItem = () => {
    
    return (
        <>
            {
                proyectos.map((proyect) => (
                    <a key={ proyect.title } className="card__link" href={proyect.url} target="_blank">
                        <div className="card">
                            <h2>{proyect.title}</h2>
                            <p className="card__title">{proyect.description}</p>
                            <p className="card__apply">{proyect.language}<i className="fas fa-arrow-right"></i>
                            </p>
                        </div>
                    </a>
                ))
            }

        </>

    )
}
