import logo from './logo.svg';
import './App.css';
// import SignUpPage from './Pages/SignupPage';
import SignUpPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SideBar from './components/SideBar';
import { Route,Redirect } from 'react-router-dom/cjs/react-router-dom';
import { UseSelector, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import MailEditor from './components/MailEditor';
import Inbox from './components/Inbox';

function App() {

  const isAuthenticated=useSelector(state=>state.Auth.isAuthenticated)

  return (
    <div>
      {/* <Route exact path='/signUp'>
      <SignUpPage/>
      </Route>

      <Route exact path='/login'>
      <LoginPage/>
      </Route>

      <Route exact path='/'>
      {isAuthenticated && <HomePage/>}
        {!isAuthenticated && <Redirect to='/login'/>}
      </Route> */}
      {/* <SideBar/> */}

      <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <SideBar />
        </Col>
        <Col xs={10} id="page-content-wrapper">
          {/* Your main content goes here */}
          <h2>
            Welcome To Mail Box Client
          </h2>
          <Route exact path='/signUp'>
      <SignUpPage/>
      </Route>

      <Route exact path='/compose'>
      <MailEditor/>
      </Route>

      <Route exact path='/login'>
      <LoginPage/>
      </Route>

      <Route exact path='/inbox'>
      <Inbox/>
      </Route>

      <Route exact path='/'>
      {isAuthenticated && <HomePage/>}
        {!isAuthenticated && <Redirect to='/login'/>}
      </Route>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;