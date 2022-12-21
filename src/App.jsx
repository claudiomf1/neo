import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About/About.jsx";
import Nav from "./Nav.jsx";
import FormInput from "./components/Formimput/FormInput.tsx";
import FormClient from "./components/FormCliente/FormCliente.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
//const { VITE_GOOGLE_CLIENT_ID } = import.meta.env;
//

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Home />} />
        <Route path="formulario" element={<FormInput />} />
        <Route path="formcliente" element={<FormClient />} />
      </Routes>
    </>
  );
}

export default App;
