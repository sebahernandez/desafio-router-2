import { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { useNavigate } from "react-router-dom";

const Personajes = () => {
  const [selectedPersonaje, setSelectedPersonaje] = useState("");

  const personajes = useContext(ApiContext);

  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    setSelectedPersonaje(e.target.value);
  };

  const handleButtonClick = () => {
    if (selectedPersonaje) {
      const personaje = personajes.find(
        (personaje) => personaje.name === selectedPersonaje
      );
      console.log(personaje);
      navigate(`/personajes/${personaje.id}`);
    } else {
      console.log("No se ha seleccionado ningún personaje.");
    }
  };

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(8,204, 450, 0.2), rgba(7, 255, 255, 0.9)), url("./assets/img/bg-rickandmorty.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="container vh-100">
        <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center glass-effect ">
            <img
              src="./assets/img/rickandmorty.png"
              alt="Rick and Morty"
              className="mb-3 w-50"
            />
            {personajes ? (
              <select
                className="form-select custom-select"
                onChange={handleSelectChange}
                value={selectedPersonaje}
              >
                <option value="">-- Seleccione un personaje --</option>
                {personajes.map((personaje) => (
                  <option key={personaje.id} value={personaje.name}>
                    {personaje.name}
                  </option>
                ))}
              </select>
            ) : (
              <p>Cargando personajes...</p>
            )}
            <button
              disabled={selectedPersonaje === ""}
              className="btn btn-dark mt-3"
              onClick={handleButtonClick}
            >
              Ver Detalle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personajes;
