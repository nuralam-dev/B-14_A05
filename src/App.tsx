import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechSection from "./components/techItem/TechSection";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-50/30 flex flex-col justify-between font-sans">
      <div>
        <Navbar />
        <Hero />
        <TechSection />
      </div>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;
