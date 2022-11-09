import { Navigate, Route, Routes } from "react-router-dom";
import { BiografiaPage, ContactoPage, PortfolioPage, ProyectosPage} from "../portfolio/index";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="biografia" element={<BiografiaPage />} />
        <Route path="proyectos" element={<ProyectosPage />} />
        <Route path="contacto" element={<ContactoPage />} />

        <Route path="/" element={<Navigate to="/portfolio" />} />

      </Routes>
    </>
  )
}
