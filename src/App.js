
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ValidXPage from './pages/ValidXPage';
import MonitorXPage from './pages/MonitorXPage';
import DisputeXPage from './pages/DisputeXPage';
import CalendlyDemo from './components/CalendlyDemo';

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/solution/validX" element={<ValidXPage />} />
    <Route path="/solution/monitorX" element={<MonitorXPage />} />
    <Route path="/solution/disputeX" element={<DisputeXPage />} />
    <Route path="/book-a-demo" element={<CalendlyDemo />} />
  </Routes>
  );
}

export default App;
