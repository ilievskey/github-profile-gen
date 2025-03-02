import './App.css'
import Nav from "./components/Nav.tsx";
import Intro from "./components/Intro.tsx";
import Experiences from "./components/Experiences.tsx";
import Contact from "./components/Contact.tsx";
import Skills from "./components/Skills.tsx";

function App() {

  return (
    <>
        <Nav/>
        <Intro/>
        <Experiences/>
        <Skills/>
        <Contact/>
    </>
  )
}

export default App
