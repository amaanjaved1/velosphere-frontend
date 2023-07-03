import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import React from "react";
import { HomePage } from "scenes/homePage";
import { LoginPage } from "scenes/loginPage";
import { RegisterPage } from "scenes/registerPage";
import { ConnectionsPage } from "scenes/connectionsPage";
import { ProfilePage } from "scenes/profilePage";
import { RequestsPage } from "scenes/requestsPage";
import { SearchResultsPage } from "scenes/searchResultsPage";
import { RegistrationSuccessPage } from "scenes/registrationSuccess";
import { PrivateRoutes } from "./private";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/registration-success"
            element={<RegistrationSuccessPage />}
          />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/connections" element={<ConnectionsPage />} />
            <Route path="/profile/:profileEmail" element={<ProfilePage />} />
            <Route path="/requests" element={<RequestsPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
