import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import {darkTheme, lightTheme} from './utils/Theme';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
//import Hero from './components/HeroSection';
import Education from './components/Education'
import Footer from './components/Footer';
import Contact from './components/Contact'
import Projects from './components/Projects'
import Certifications from './components/Certifications';
import CertificateDetails from './components/CertificateDetails';






import { useState, useEffect } from "react";
import './App.css';
import HeroSection from "./components/HeroSection";
//import About from "./components/About";
import ProjectDetails from "./components/ProjectDetails";


const Body = styled.div`
background-color:${({ theme }) => theme.bg};
width: 100%;
height: 100%;
overflow-x: hidden;
`;

const Wrapper = styled.div`
background: linear-gradient(
  38.73deg,
rgba(204, 0,187, 0.15) 0%,
rgba(201, 32, 184, 0) 50%),
linear-gradient(
  141.27deg,
  rgba(0, 70, 209, 0) 50%,
  rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% -5vw));
`;



function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [openModal1, setOpenModal1] = useState({ state: false, certificate: null });
  const [loading, setLoading] = useState(true);
  
  console.log(openModal);
  console.log(openModal1);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
  // Simulate loading time (e.g. 2 seconds)
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000); // Adjust the duration if needed

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return (
    <div className="loader-container">
      <div className="loader" ></div>
    </div>
  );
}
  return (
    <>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body >
          <HeroSection darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Wrapper>
            <Skills />
            <Certifications openModal1={openModal1} setOpenModal1={setOpenModal1} />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }

          {openModal1.state &&
            <CertificateDetails openModal1={openModal1} setOpenModal1={setOpenModal1} />
          }
        </Body>
      </Router>
    </ThemeProvider>
     </>
  );
}

export default App;


