import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";
import Unauthorized from "./pages/Unauthorized";
import AdminPage from "./pages/AdminPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Home page with permissions check */}
          <Route
            path="/"
            element={
              <PrivateRoute requiredPermission="home">
                <Home />
              </PrivateRoute>
            }
          />

          {/* Profile page accessible to any logged-in user */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          {/* Unprotected routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Offers page with permissions check */}
          <Route
            path="/offers"
            element={
              <PrivateRoute requiredPermission="offers">
                <Offers />
              </PrivateRoute>
            }
          />

          {/* Admin page with permissions check */}
          <Route
            path="/admin"
            element={
              <PrivateRoute requiredPermission="admin">
                <AdminPage />
              </PrivateRoute>
            }
          />

          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
      <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </>
  );
}

export default App;
