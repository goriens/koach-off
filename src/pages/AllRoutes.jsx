import { Routes, Route } from "react-router-dom";
import { Login } from "./user/Login";
import { Home } from "./Home";
import { Signup } from "./user/Signup";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
