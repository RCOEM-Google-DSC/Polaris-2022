import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/homepage/home";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./components/pageAnimation/main";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <AnimatedPage key={1}>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/hawai"
          element={
            <AnimatedPage key={2}>
              <Home />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
