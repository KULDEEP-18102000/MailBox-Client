import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import axios from 'axios'
import { NavLink,useHistory } from 'react-router-dom/cjs/react-router-dom';
// import { authActions } from '../../store/Auth';
// import { authActions } from '../../store/Auth';
import { authActions } from '../store/Auth';
import {useDispatch} from 'react-redux'

function LoginPage() {

  const dispatch=useDispatch()

  const history=useHistory()

    const [user,setUser]=useState({
        email:'',
        password:'',
        confirmPassword:''
    })


    const onChangeHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const loginHandler=async(e)=>{
      try {
        e.preventDefault()
        const response=await axios.post('http://localhost:5000/user/login',user)
        console.log(response.data)
    //     const response= await fetch('http://localhost:5000/user/login',{
    //   method:'POST',
    //   body:JSON.stringify(user),
    //   headers:{
    //     'Content-Type':'application/json'
    //   }
    // })
    //     if(!response.ok){
    //       const res=await response.json()
    //       alert("bad")
    //       return
    //     }
        // localStorage.setItem('token',response.data.token)
        dispatch(authActions.login({token:response.data.token}))
        setTimeout(()=>{
          dispatch(authActions.logOut())
        },300000)
        history.push('/')
      } catch (error) {
        let err
        // console.log(error.response.data.message)
        if(error?.response?.data?.message){
          err=error.response.data.message
        }else{
          err='Something Went Wrong'
        }
        alert(err)
      }
        
    }

  return (
    <Container>
    <Form onSubmit={loginHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={user.email} onChange={onChangeHandler}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={onChangeHandler}/>
      </Form.Group>
      <NavLink variant="primary" className="nav-link" aria-current="page" to="/signup">Don't have an account?SignUp</NavLink>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </Container>
  );
}

export default LoginPage;