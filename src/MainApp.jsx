import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import App from './App';

function MainApp() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}

export default MainApp;
