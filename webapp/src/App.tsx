import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Sidebar } from './components/sidebar/sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          {/* <Route
          path="/signin"
          element={<SignIn />}
        /> */}
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
