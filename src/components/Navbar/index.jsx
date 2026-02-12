import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems,ToggleButton, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink, ToggleButtonMobile} from './navbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constant';
//import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from "react";




const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav darkMode={darkMode} scrolled={scrolled}>
      <NavbarContainer>
        <NavLogo to='/'>
          <a href='/' style={{ display: "flex", alignItems: "center", color:  theme.text_primary, marginBottom: '20;', cursor: 'pointer', textDecorationLine:'none' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="/">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#certificate'>Certifications</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        <ToggleButton onClick={() => setDarkMode(!darkMode)} title="Toggle Theme">
          {darkMode ? <FaSun /> : <FaMoon />}
        </ToggleButton>


        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#/" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#certificate' onClick={() => {
              setIsOpen(!isOpen)
            }}>Certifications</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', width: '100%' }}>
      <ToggleButtonMobile
        onClick={() => {
          setDarkMode(!darkMode);
          setIsOpen(false); // close the menu
        }}
        title="Toggle Theme"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </ToggleButtonMobile>
    </div>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar