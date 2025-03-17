import { Route, Routes } from "react-router-dom";
import { Pokemon } from "../components/pages/Pokemon";
import { Pokemons } from "../components/pages/Pokemons";

export const AppRoutes = () => {
  // ✅ Ganti nama agar tidak bentrok
  return (
    <Routes>
      <Route path="/pokemons" element={<Pokemons />} />
      <Route path="/pokemons/:name" element={<Pokemon />} />
    </Routes>
  );
};
