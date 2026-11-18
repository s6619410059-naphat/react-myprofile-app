import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import EduExp from "./pages/EduExp.jsx";
import Spec from "./pages/Spec.jsx";
import Projects from "./pages/Projects.jsx";
import Skill from "./pages/Skill.jsx";
import ContactMe from "./pages/ContactMe.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/eduexp" element={<EduExp />} />
      <Route path="/spec" element={<Spec />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skill />} />
      <Route path="/contactme" element={<ContactMe />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}