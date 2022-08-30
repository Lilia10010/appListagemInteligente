import react from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Details } from "./pages/Details";
import { Err } from "./pages/Erro";
import { Home } from "./pages/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Err />} />
        <Route path="/" element={<Home />} />
        <Route path="/:id/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
