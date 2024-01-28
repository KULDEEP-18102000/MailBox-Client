import logo from './logo.svg';
import './App.css';
// import SignUpPage from './Pages/SignupPage';
import SignUpPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Route,Redirect } from 'react-router-dom/cjs/react-router-dom';
import { UseSelector, useSelector } from 'react-redux';

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
    </div>
  );
}

export default App;