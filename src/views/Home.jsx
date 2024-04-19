import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container
      fluid
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `linear-gradient(rgba(8,204, 450, 0.2), rgba(7, 255, 255, 0.9)), url("./assets/img/bg-rickandmorty.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center text-center text-white">
          <img
            src="./assets/img/rickandmorty.png"
            alt="logo"
            style={{ width: "100%" }}
          />
          <Button variant="dark" href="/personajes">
            Ver Personajes
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
