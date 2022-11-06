import { useFetchProyects } from '../hooks/useFetchProyects';

export const ProyectoItem = () => {

    const { proyects, isLoading } = useFetchProyects();
    
    return (
        <>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            {
                proyects.map((proyect) => (
                    <a className="card__link" href={proyect.url} target="_blank">
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
