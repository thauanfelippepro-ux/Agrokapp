/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import HelpCenter from "./pages/HelpCenter";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Cookies from "./pages/Cookies";
import Tutorials from "./pages/Tutorials";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-agrokapp-bg font-sans text-agrokapp-text relative selection:bg-agrokapp-green/20">
        {/* Global Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-agrokapp-green/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[100px] -translate-x-1/2"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/ajuda" element={<HelpCenter />} />
              <Route path="/tutoriais" element={<Tutorials />} />
              <Route path="/termos" element={<Terms />} />
              <Route path="/privacidade" element={<Privacy />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/cookies" element={<Cookies />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
