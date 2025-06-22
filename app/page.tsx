import Home from "./components/Home";
import { Aboutme } from "./components/Aboutme";
import { HeroSection } from "./components/Hero-section";
import { Navbar } from "./components/Navbar";
import { Contactme } from "./components/Contactme";
import { Projects } from "./components/Projects";
import { Journey } from "./components/Journey";
import { Footer } from "./components/footer";
export default function Main() {
  return (
    <div className="">
      <Home/>
      <Navbar/>
      <HeroSection/>
      <Aboutme/>
      <Projects/>
      <Journey/>
      <Contactme/>
      <Footer/>
    </div>
  );
}
