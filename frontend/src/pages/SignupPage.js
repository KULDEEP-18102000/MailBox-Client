import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import axios from 'axios'
import { NavLink } from "react-router-dom/cjs/react-router-dom"


function SignUpPage() {

    const [user,setUser]=useState({
        email:'',
        password:'',
        confirmPassword:''
    })

    const onChangeHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const signUpHandler=async(e)=>{
        e.preventDefault()
        const response=await axios.post('http://localhost:5000/user/signup',user)
        console.log(response)
    }

  return (
    <Container>
    <Form onSubmit={signUpHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={user.email} onChange={onChangeHandler}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={onChangeHandler}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="confirmPassword" name='confirmPassword' value={user.confirmPassword} onChange={onChangeHandler}/>
      </Form.Group>

      <NavLink variant="primary" className="nav-link" aria-current="page" to="/login">Already have an account?Login</NavLink>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default SignUpPage;