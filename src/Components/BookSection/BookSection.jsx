import Portada from "../../../public/images/forjada-en-versos-portada.png";
import ContraPortada from "../../../public/images/forjada-en-versos-contraportada.png";
import { useEffect, useState } from "react";

function BookSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Una vez que el componente se monte, activa la transición
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="book-container">
        <div className="p-div">
          <h1 className="h1-style">FORJADA EN VERSOS</h1>
          <h2 className="h2-style">
            Una novela ambientada en la{" "}
            <span className="highlight">Granada</span> de inicios del siglo XX,
            en pleno apogeo de la <span className="highlight">poesía</span> y de
            la <span className="highlight">Generación del 27</span>. Una
            historia <span className="highlight">feminista</span> en la que se
            narra las penurias y los sacrificios de una{" "}
            <span className="highlight">mujer</span> que pudo llegar a ser la
            mejor <span className="highlight">poeta</span> de su generación, a
            la altura de <span className="highlight">Lorca</span> o de{" "}
            <span className="highlight">Juan Ramón Jiménez</span>. La realidad
            de su época intentó callarla, pero la pluma la hizo{" "}
            <span className="highlight">ETERNA</span>.
          </h2>
        </div>
        <div className="images-div">
          <img
            className={`libro-completo ${loaded ? "loaded" : ""}`}
            id="portada"
            src={Portada}
          />
          <img
            className={`libro-completo ${loaded ? "loaded" : ""}`}
            id="contraportada"
            src={ContraPortada}
          />
        </div>
      </div>
    </>
  );
}

export default BookSection;
