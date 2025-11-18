import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Carousel />
        <About />
      </main>
    </>
  );
};

export default App;
