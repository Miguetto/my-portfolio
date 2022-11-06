import { Navigate, Route, Routes } from 'react-router-dom';
import { BiografiaPage, ContactoPage, PortfolioPage, ProyectosPage } from '../pages';




export const PortfolioRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="biografia" element={<BiografiaPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="proyectos" element={<ProyectosPage />} />
        <Route path="contacto" element={<ContactoPage />} />

        <Route path="/" element={<Navigate to="/portfolio" />} />

      </Routes>
    </>
  )
}