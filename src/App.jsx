import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Printing3D from "./components/Printing3D";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Courses from "./components/Courses";
import Footer, { WhatsAppFloat } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-void text-bone font-body">
      <Header />
      <main>
        <Hero />
        <Services />
        <Printing3D />
        <Results />
        <Testimonials />
        <About />
        <Courses />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
