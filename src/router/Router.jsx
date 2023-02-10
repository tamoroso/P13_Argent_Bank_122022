import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { Error, Home, Login, Profile } from "../pages";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exaxt path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
