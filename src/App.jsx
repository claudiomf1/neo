import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About/About";
import Nav from "./Nav";
import FormInput from "./components/Formimput/FormInput";
import FormClient from "./components/FormCliente/FormCliente";
import { GoogleApiProvider } from "react-gapi";
import { MyAuthComponent } from "./components/MyAuthComponent";
import { MyDriveComponent } from "./components/MyDriveComponent";

import "bootstrap/dist/css/bootstrap.min.css";
const { VITE_APP_GOOGLE_CLIENT_ID } = import.meta.env;
function App() {
  return (
    <GoogleApiProvider clientId={VITE_APP_GOOGLE_CLIENT_ID}>
      <MyAuthComponent />
      <MyDriveComponent />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Home />} />
        <Route path="formulario" element={<FormInput />} />
        <Route path="formcliente" element={<FormClient />} />
      </Routes>
    </GoogleApiProvider>
  );
}

export default App;
