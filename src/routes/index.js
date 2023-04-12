import { HashRouter, Routes, Route } from "react-router-dom";
import Adm from "../pages/Administracao";

export default function RoutesApp() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Adm />} />
      </Routes>
    </HashRouter>
  );
}
