import './App.css';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Routes, useNavigate, Route } from "react-router";
import Details from './pages/details';
import Logistics from './pages/logistics';
import Participants from './pages/participants';
import Register from './pages/register';

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Conference Name</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/'); }}>HOME</Nav.Link>
            <Nav.Link onClick={() => { navigate('/details'); }}>Details</Nav.Link>
            <Nav.Link onClick={() => { navigate('/logistics'); }}>Location</Nav.Link>
            <Nav.Link onClick={() => { navigate('/participants'); }}>Participants</Nav.Link>
            <Nav.Link onClick={() => { navigate('/register'); }}>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<div>
          <div className='main-bg' />
          Here's a banana
          <h2>Conference name here</h2>
          <p>Some details about it?</p>
          <hr
            style={{
              background: 'lime',
              color: 'lime',
              borderColor: 'pink',
              height: '3px',
            }}
          />
          <h2>Sponsors</h2>
          <p>Need to put some scrollig logo stuff here</p>
          <hr
            style={{
              background: 'lime',
              color: 'lime',
              borderColor: 'pink',
              height: '3px',
            }}
          />
          <h2>Speaker thumbnails</h2>
          <p>Table of the speaker pictures</p>
          <hr
            style={{
              background: 'lime',
              color: 'lime',
              borderColor: 'pink',
              height: '3px',
            }}
          />
        </div>
        }></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/logistics" element={<Logistics />}></Route>
        <Route path="/participants" element={<Participants />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
