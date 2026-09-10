import { Suspense } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechSection from "./components/techItem/TechSection";

function App() {
  return (
    <div className="min-h-screen bg-slate-50/30 flex flex-col justify-between font-sans">
      <div>
        <Navbar />
        <Hero />
        <Suspense fallback={"LOADING...."}>
          <TechSection />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
