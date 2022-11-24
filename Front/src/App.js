import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Complex } from "./pages/Complex/Complex";
import { Players } from "./pages/Players/Players";
import { Registers } from "./pages/Registers/Registers";
import { ProfileComplex } from "./pages/ProfileComplex/ProfileComplex";
import { ProfilePlayer } from "./pages/ProfilePlayer/ProfilePlayer";
import { Homepage } from "./pages/HomePage/HomePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/complex" element={<Complex />} />
      <Route path="/players" element={<Players />} />
      <Route path="/profile/complex/:idComplex" element={<ProfileComplex />} />
      <Route path="/profile/player/:idPlayer" element={<ProfilePlayer />} />
      <Route path="/profile" element={<ProfilePlayer />} />
      <Route path="/login" />
      <Route path="/register" element={<Registers />} />
    </Routes>
  );
};
