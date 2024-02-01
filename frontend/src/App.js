import './App.css';
// import SignUpPage from './Pages/SignupPage';
import SignUpPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Route,Redirect } from 'react-router-dom/cjs/react-router-dom';
import { UseSelector, useSelector } from 'react-redux';
import ComposeMailPage from './pages/ComposeMailPage';
import InboxMailPage from './pages/InboxMailPage';
import MailDetailPage from './pages/MailDetailsPage';

function App() {

  const isAuthenticated=useSelector(state=>state.Auth.isAuthenticated)

  return (
    <div>
      <Route exact path='/signUp'>
      <SignUpPage/>
      </Route>

      <Route exact path='/login'>
      <LoginPage/>
      </Route>

      <Route exact path='/'>
      {isAuthenticated && <HomePage/>}
        {!isAuthenticated && <Redirect to='/login'/>}
      </Route>

      <Route exact path='/compose'>
      {isAuthenticated && <ComposeMailPage/>}
        {!isAuthenticated && <Redirect to='/login'/>}
      </Route>

      <Route exact path='/inbox'>
      {isAuthenticated && <InboxMailPage/>}
        {!isAuthenticated && <Redirect to='/login'/>}
      </Route>

      <Route exact path='/inbox/:id'>
      {isAuthenticated && <MailDetailPage/>}
        {!isAuthenticated && <Redirect to='/login'/>}
      </Route>

      {/* <Route path='/home/*' element={<HomePage />}></Route> */}

      {/* <SideBar/> */}

      {/* <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <SideBar />
        </Col>
        <Col xs={10} id="page-content-wrapper">
          
          <h2>
            Welcome To Mail Box Client
          </h2>

      <Route exact path='/compose'>
      <MailEditor/>
      </Route>

      <Route exact path='/inbox'>
      <Inbox/>
      </Route>

        </Col>
      </Row>
    </Container> */}

    </div>
  );
}

export default App;