import "./css/main.css";
import { Header } from "./header/Header.js";
import { Banner } from "./Banner/Banner.js";
import { Three } from "./Three/Three.js";
import { Footer } from "./Footer/Footer.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Three />
      <Footer />
    </div>
  );
}

export default App;
