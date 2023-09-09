import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./navbar.css"
import logo from '../../images/sucasa-logo.png';

const Navigation: React.FC = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 100) {
        setIsScrolled(true);
    } else {
        setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleClickOutside = (event: MouseEvent) => {
    if (nodeRef.current && event.target instanceof Node && !nodeRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  
  

  

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Navbar bg="primary" variant="dark" expand="lg" className='top-navbar'>
        <h3>Call us at 425-246-5330 for a free estimate!</h3>
      </Navbar>
      <Navbar bg="light" variant="light" expand="lg" className={`bottom-navbar ${isScrolled ? "sticky-navbar" : ""}`}>
        <Container fluid className="d-flex justify-content-between px-4 navbar-custom-container">
          <Navbar.Brand as={Link} to="/">
            <img className="logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto nav-links'>
              <Nav.Link as={Link} to="/" className="my-link">Home</Nav.Link>
              <NavDropdown 
  title={<Link to="/services" className="my-link" onClick={() => setIsOpen(false)}>Services</Link>} 
  id="basic-nav-dropdown"
  show={isOpen}
  onMouseEnter={() => setIsOpen(true)}
  onMouseLeave={() => setIsOpen(false)}
>

                  <NavDropdown.Item className='service-links' as={Link} to="/interior">Interior Painting</NavDropdown.Item>
                  <NavDropdown.Item className='service-links' as={Link} to="/exterior">Exterior Painting</NavDropdown.Item>
                  <NavDropdown.Item className='service-links' as={Link} to="/commercial">Commercial Painting</NavDropdown.Item>
                  <NavDropdown.Item className='service-links' as={Link} to="/pressure">Pressure Washing</NavDropdown.Item>

              </NavDropdown>
              <Nav.Link as={Link} to="/projects" className="my-link">Projects</Nav.Link>
              <Nav.Link as={Link} to="/Location" className="my-link">Service Locations</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="my-link">Contact</Nav.Link>
              <Nav.Link as={Link} to="/" className="my-link-social"> <i className="fa fa-instagram"></i> </Nav.Link>
              <Nav.Link as={Link} to="/" className="my-link-social"> <i className="fa fa-facebook"></i> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
