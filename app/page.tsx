import About from "./component/about";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Header from "./component/header";
import Hero from "./component/hero";
import Skill from "./component/skills";
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skill/>
      <Contact/> 
      <Footer/>

      </div>
  );
}
