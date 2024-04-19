import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardCharacter from "../components/CardCharacter";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const Detalle = () => {
  const [personaje, setPersonaje] = useState(null);
  const personajes = useContext(ApiContext);
  const { id } = useParams();

  useEffect(() => {
    const foundPersonaje = personajes?.find((p) => p.id.toString() === id);
    setPersonaje(foundPersonaje);
  }, [id, personajes]);

  return (
    <>
      <section>
        <div className="container">
          {personaje ? (
            <CardCharacter personaje={personaje} />
          ) : (
            <p>No se encontró el personaje o está cargando...</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Detalle;
