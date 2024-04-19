import { useEffect } from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CardCharacter = ({ personaje }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (personaje) {
      document.body.style.backgroundImage = getBackgroundGradient(
        personaje.status
      );
    }

    // Limpieza: Restaura el fondo original al desmontar o al cambiar de personaje
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [personaje]);

  if (!personaje) return null;

  const getBackgroundGradient = (status) => {
    switch (status) {
      case "Alive":
        return "linear-gradient(to right, #dff0d8, #a5d6a7)";
      case "Dead":
        return "linear-gradient(to right, #f2dede, #e57373)";
      case "unknown":
      default:
        return "linear-gradient(to right, #fcf8e3, #fff59d)";
    }
  };

  const handleClick = () => {
    navigate("/personajes");
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card style={{ backgroundColor: "#ffffff" }}>
        <Card.Img
          variant="top"
          src={personaje.image}
          alt={`Imagen de ${personaje.name}`}
        />
        <Card.Body>
          <Card.Title>{personaje.name}</Card.Title>
          <Card.Text>
            Especie: {personaje.species}
            <br />
            Estado: {personaje.status}
            <br />
            Género: {personaje.gender}
            <br />
            Origen: {personaje.origin?.name}
            <br />
            Última ubicación conocida: {personaje.location?.name}
          </Card.Text>
        </Card.Body>
      </Card>
      <button className="btn btn-dark mt-5" onClick={handleClick}>
        Volver a buscar
      </button>
    </div>
  );
};

CardCharacter.propTypes = {
  personaje: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string,
    }),
    location: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

export default CardCharacter;
