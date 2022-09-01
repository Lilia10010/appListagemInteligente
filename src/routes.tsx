import { Routes, Route } from "react-router-dom";
import { Details } from "./pages/Details";
import { Detailsx } from "./pages/Detailsx";
import { Err } from "./pages/Erro";
import { Home } from "./pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Err />} />
      <Route path="/" element={<Home />} />
      <Route path="/:id/details" element={<Details />} />
      <Route path="/:id/detailsx" element={<Detailsx />} />
    </Routes>
  );
};
