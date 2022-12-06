import { Route, Routes } from "react-router-dom";
import "./App.css";

import { PlayerTimesDisplay } from "./components/PlayerTimesDisplay/PlayerTimesDisplay";
import { SelectTime2 } from "./components/selectTime/SelectTime";
import { Complex } from "./pages/Complex/Complex";
import { Homepage } from "./pages/HomePage/HomePage";
import { Login } from "./pages/login/Login";
import { Players } from "./pages/Players/Players";
import { Register } from "./pages/Register/Register";
import { Profile } from "./pages/Profile/Profile";
import { ProfileComplex } from "./pages/ProfileComplex/ProfileComplex";
import { ProfilePlayer } from "./pages/ProfilePlayer/ProfilePlayer";
import { ComplexForm } from "./pages/ComplexForm/ComplexForm";
import { PlayerForm } from "./pages/PlayerForm/PlayerForm";

import { Navbar } from "./components/HomePage/Navbar/Navbar";

export const App = () => {
  return (
  <>
  <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/complex" element={<Complex />} />
      <Route path="/players" element={<Players />} />
      <Route path="/profile/complex/:idComplex" element={<ProfileComplex />} />
      <Route path="/profile/player/:idPlayer" element={<ProfilePlayer />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/form/complex" element={<ComplexForm />} />
      <Route path="/form/player" element={<PlayerForm />} />
    </Routes>
  </>
  );
};
