import { useContext } from "react";
import { MainContextState } from "./context/MainContextProvider";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from 'react-bootstrap/Dropdown';

/* IMPORTANDO ICONOS BOOTSTRAP*/
import "bootstrap-icons/font/bootstrap-icons.css";

const Navegacion = () => {
  // const{dataState, setDataState }=useContext(MainContextState)

  // const logOut=() => {
  //   setDataState({... dataState,username:'anonymous', isLoggedIn:false})
  // }

  return (
    <Navbar className="navbar navbar-dark negro">
      <Container fluid>
        <Navbar.Brand href="/">
          <img className="logo" src="./Netflix.png"></img>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/series">Series</Nav.Link>
          <Nav.Link href="/peliculas">Películas</Nav.Link>
          <Nav.Link href="#Lista">Mi lista</Nav.Link>
          {/* <Nav.Link href="#Idiomas">Explora por idiomas</Nav.Link> */}
          <Dropdown className="nav-item dropdown">
                <Dropdown.Toggle variant="bg-dark border-secondary text-light" id="dropdown-autoclose-true">
                  Español
                </Dropdown.Toggle>
                <Dropdown.Menu  variant='dark'>
                  <Dropdown.Item href="#opcion-1">Español</Dropdown.Item>
                  <Dropdown.Item href="#opcion-2">English</Dropdown.Item>
                </Dropdown.Menu>
          </Dropdown>
          
        </Nav>
        
        

        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Link>
            <i className="bi bi-search"></i>
          </Nav.Link>
          <Nav.Link>
            <i className="bi bi-lightbulb"></i>
          </Nav.Link>
          <Nav.Link>
            <i
              className="bi bi-box-arrow-in-left"
              title="cerrar sesión"
              onClick={() => {
                logOut();
              }}
            ></i>
          </Nav.Link>
          <Nav.Link>
            <img className="perfil" src="./perfil.png"></img>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navegacion;