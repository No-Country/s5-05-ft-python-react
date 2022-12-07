import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { instance } from "./axios/axiosConfig";

import { Complex } from "./pages/Complex/Complex";
import { ComplexForm } from "./pages/ComplexForm/ComplexForm";
import { Homepage } from "./pages/HomePage/HomePage";
import { Login } from "./pages/login/Login";
import { PlayerForm } from "./pages/PlayerForm/PlayerForm";
import { Players } from "./pages/Players/Players";
import { Profile } from "./pages/Profile/Profile";
import { ProfileComplex } from "./pages/ProfileComplex/ProfileComplex";
import { ProfilePlayer } from "./pages/ProfilePlayer/ProfilePlayer";
import { Register } from "./pages/Register/Register";

import { Navbar } from "./components/HomePage/Navbar/Navbar";
import { PrivatesPages } from "./router/PrivateRoutes";
import { UserContext } from "./context/userContext";
import { useContext } from "react";

export const App = () => {
  const { userCredentials } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route element={<PrivatesPages />}>
          <Route
            path="/profile/complex/:idComplex"
            element={<ProfileComplex />}
          />
          <Route path="/profile/player/:idPlayer" element={<ProfilePlayer />} />
          <Route path="/complex" element={<Complex />} />
          <Route path="/players" element={<Players />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/form/player" element={<PlayerForm />} />
        </Route>
        <Route path="/form/complex" element={<ComplexForm />} />

        <Route
          path="/login"
          element={userCredentials.login ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/register"
          element={userCredentials.login ? <Navigate to={"/"} /> : <Register />}
        />
      </Routes>
    </>
  );
};
