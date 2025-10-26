import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main>
        <Hero3D />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
