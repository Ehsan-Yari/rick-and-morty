import Background from "./assets/background.jpg";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
const App = () => {
  return (
    <main className="h-screen overflow-hidden font-quicksand relative z-10 bg-red">
      <Navbar />
      <img
        src={Background}
        alt="background"
        className="absolute inset-0 -z-10 pointer-events-none w-full h-full"
      />
        <Hero />
    </main>
  );
};

export default App;
