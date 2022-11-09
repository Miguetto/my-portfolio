import { NavLink } from 'react-router-dom';


export const Navbar = () => {

    return (
        <nav className="">

            <div className="">
                <div className="">

                    <NavLink 
                        className="link"
                        to="/portfolio"
                    >
                        Inicio
                    </NavLink>

                    <NavLink 
                        className="link"
                        to="/biografia"
                    >
                        Biografía
                    </NavLink>

                    <NavLink 
                        className="link"
                        to="/proyectos"
                    >
                        Proyectos
                    </NavLink>

                    <NavLink 
                        className="link"
                        to="/contacto"
                    >
                        Contacto
                    </NavLink>
                    
                    <a 
                        className="link"
                        href="https://github.com/Miguetto/"
                        target="_blank"
                    >
                        GitHub
                    </a>

                    <a 
                        className="link"
                        href="https://www.linkedin.com/in/miguedev/"
                        target="_blank"
                    >
                        LinkedIn
                    </a>

                    
                </div>
            </div>
        </nav>
    )
}