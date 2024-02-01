import { useHistory } from "react-router-dom/cjs/react-router-dom"
import { NavLink } from "react-router-dom/cjs/react-router-dom"
import { useDispatch } from 'react-redux';
import { authActions } from "../store/Auth";
import { useSelector } from 'react-redux';

const NavBar=()=>{

    const history=useHistory()

    // const isAuthenticated=useSelector(state=>state.auth.isAuthenticated)

    const dispatch=useDispatch()

    const inboxMails=useSelector(state=>state.Mail.inboxMails)


    const logOut=()=>{
        // ctx.logOutHandler()
        dispatch(authActions.logOut())
        history.push('/login')
    }


    return(
        <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        
        <button onClick={logOut}>Logout</button>  
        
        
      </ul>
    </div>

    
  </div>
</nav>
        </>
    )
}

export default NavBar