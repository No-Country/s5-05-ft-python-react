import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomeCourt } from "./pages/HomeCourt";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeCourt />} />
      <Route path="/profile" />
      <Route path="/login" />
      <Route path="/register" />
    </Routes>
  );
};
