import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css';
import MainLayout from './layout/MainLayout';
import LandingPage from './pages/LandingPage';
import MainLayout2 from './layout/MainLayout2';
import LandingPage2 from './pages/LandingPage2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          </Route>
          <Route path="العربية" element={<MainLayout2 />}>
          <Route index element={<LandingPage2 />} />
          </Route>
        {/* <Route path="/Signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
