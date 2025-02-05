import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy load the components
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ValidXPage = React.lazy(() => import('./pages/ValidXPage'));
const MonitorXPage = React.lazy(() => import('./pages/MonitorXPage'));
const DisputeXPage = React.lazy(() => import('./pages/DisputeXPage'));
const CalendlyDemo = React.lazy(() => import('./components/CalendlyDemo'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solution/validX" element={<ValidXPage />} />
        <Route path="/solution/monitorX" element={<MonitorXPage />} />
        <Route path="/solution/disputeX" element={<DisputeXPage />} />
        <Route path="/book-a-demo" element={<CalendlyDemo />} />
      </Routes>
    </Suspense>
  );
}

export default App;
