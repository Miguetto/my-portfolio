import { Navbar } from "../../ui"

export const PortfolioPage = () => {
  return (
    <div className="home">
      <div>
        <svg className="form2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#DFB756" d="M40,-56.1C53.3,-53.7,66.4,-45,70.8,-33C75.2,-21,70.9,-5.7,69.2,10.4C67.6,26.5,68.6,43.4,62.2,57.6C55.7,71.8,41.7,83.2,26.6,85.3C11.4,87.5,-5.1,80.3,-21,74.3C-36.9,68.3,-52.3,63.5,-63.4,53.4C-74.6,43.3,-81.6,28,-84.9,11.6C-88.2,-4.8,-87.8,-22.4,-81.3,-37.3C-74.8,-52.3,-62.2,-64.7,-47.6,-66.5C-33.1,-68.3,-16.5,-59.5,-1.6,-57C13.4,-54.6,26.8,-58.5,40,-56.1Z" transform="translate(100 100)" />
        </svg>
        <svg className="form1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#6C6027" d="M22.8,-40.8C32.5,-34,45.3,-33.7,51.8,-28C58.4,-22.3,58.7,-11.2,59,0.2C59.3,11.5,59.6,23,53.3,29.2C47,35.4,34.2,36.2,24.2,40.3C14.2,44.4,7.1,51.9,0,51.9C-7.1,51.9,-14.2,44.4,-27.5,42.2C-40.8,40,-60.2,43,-65.8,36.8C-71.5,30.6,-63.4,15.3,-61.8,0.9C-60.1,-13.4,-65,-26.9,-63.3,-39.9C-61.6,-52.9,-53.3,-65.5,-41.7,-71.2C-30.1,-76.9,-15,-75.6,-4.2,-68.3C6.6,-61,13.2,-47.6,22.8,-40.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="content">
        <div className="content-0 animate__animated animate__fadeIn">
          <div className="header">
            Hola.
          </div>
          <div className="blurb">
            <span>
              Mi nombre es Miguel Ángel Caro.<br/>
              Conoce más sobre mí, bienvenido/a a mi portfolio.
            </span>
          </div>
          <div className="stripe an1"></div>
        </div>

        <div className="navBar">
          <Navbar />
        </div>
      </div>
    </div>
  )
}
