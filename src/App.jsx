import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Inquiry from './pages/Inquiry';
import Contact from './pages/Contact';

// Main application entry point with client-side routing and animated page transitions.
function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.main
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="page-container app-shell"
              >
                <Home />
              </motion.main>
            }
          />
          <Route
            path="/about"
            element={
              <motion.main
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="page-container app-shell"
              >
                <About />
              </motion.main>
            }
          />
          <Route
            path="/services"
            element={
              <motion.main
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="page-container app-shell"
              >
                <Services />
              </motion.main>
            }
          />
          <Route
            path="/inquiry"
            element={
              <motion.main
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="page-container app-shell"
              >
                <Inquiry />
              </motion.main>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.main
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="page-container app-shell"
              >
                <Contact />
              </motion.main>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
