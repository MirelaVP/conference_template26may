import './App.css';
import { Container, Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, useNavigate, Route } from "react-router";
import Details from './pages/details';
import Login from './pages/login';
import Logistics from './pages/logistics';
import Participants from './pages/participants';
import Register from './pages/register';
import Table from 'react-bootstrap/Table';
import { faViacoin } from '@fortawesome/free-brands-svg-icons';
import uni from './assets/uni.jpeg'
import logo_uni from './assets/logo_uni.jpg'
import fnr_logo from './assets/fnr_logo.gif'


function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar expand='lg' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TEA 2023</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/'); }}>HOME</Nav.Link>
            <Nav.Link onClick={() => { navigate('/details'); }}>Details</Nav.Link>
            <Nav.Link onClick={() => { navigate('/logistics'); }}>Location</Nav.Link>
            <Nav.Link onClick={() => { navigate('/participants'); }}>Participants</Nav.Link>
            <Nav.Link onClick={() => { navigate('/login'); }}>Data/Login</Nav.Link>
            <Nav.Link onClick={() => { navigate('/register'); }}>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<div>
          <div className="main-bg">
            {/* <div className={}>
            <img src={uni} alt="pic_header"/>
            </div> */}
            <h2 className='centered'>
              <font color={'brown'}>
              TEA 2023
              </font>
            </h2>
          </div>
          <h2>Crash TEsting machine learning force fields: Applicability, best practices, limitations</h2>
          <p>The Workshop “Crash TEsting machine learning force fields: Applicability, best practices, limitations" (a.k.a TEA) brings together experts in machine learning force fields (MLFF) from 23-25 October 2023. The workshop will define the state of the art in the area, establish best-practice applications for different MLFF architectures, draft existing challenges, and discuss ways of resolving them. </p>
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
          <Table className={"table"}>
            <tbody>
              <tr>
                <th>
                  <img style={{ width: 100, height: 100}} src={logo_uni} />
                </th>
                <th>
                  <img style={{ width: 180, height: 100}} src={fnr_logo} />
                </th>
              </tr>
            </tbody>
          </Table>
          <hr
            style={{
              background: 'lime',
              color: 'lime',
              borderColor: 'pink',
              height: '3px',
            }}
          />
          
          <h2>Speaker thumbnails</h2>
          <hr
            style={{
              background: 'lime',
              color: 'lime',
              borderColor: 'pink',
              height: '3px',
            }}
          />
          <Table className={"table"}>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
        }></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/logistics" element={<Logistics />}></Route>
        <Route path="/participants" element={<Participants />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
