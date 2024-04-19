import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Personajes from "./views/Personajes";
import Detalle from "./views/Detalle";
import NavbarMenu from "./components/Navbar";

function App() {
  return (
    <>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/:id" element={<Detalle />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
