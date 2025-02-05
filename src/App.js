import React from "react";
import { Route, Routes } from "react-router-dom";
import CalendlyDemo from "./components/CalendlyDemo";
import ContactUs from "./components/ContactUs";
import Privacy from "./components/Privacy";
import TermsOfUse from "./components/TermsOfUse";
import AboutUs from "./pages/AboutUs";

import CaseManagement from "./pages/CaseManagement";
import DisputeXPage from "./pages/DisputeXPage";
import HomePage from "./pages/HomePage";
import MonitorXPage from "./pages/MonitorXPage";
import Report from "./pages/Report";
import ValidXPage from "./pages/ValidXPage";
import BlogPage from "./pages/BlogPage";
import Login from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/solution/validX" element={<ValidXPage />} />
      <Route path="/solution/monitorX" element={<MonitorXPage />} />
      <Route path="/solution/disputeX" element={<DisputeXPage />} />
      <Route path="/book-a-demo" element={<CalendlyDemo />} />
      <Route path="/about-us" element={<AboutUs />} />

      <Route path="/terms-conditions" element={<TermsOfUse />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/report" element={<Report />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/solution/case-management" element={<CaseManagement />} />








      <Route path="/auth">
          <Route path="login" element={<Login />} />
          {/* <Route path="register" element={<Register />} /> */}
        </Route>
    </Routes>
  );
}

export default App;
