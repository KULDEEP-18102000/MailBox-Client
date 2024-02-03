import MailEditor from "../components/MailEditor"
import SideBar from "../components/SideBar";
import { Route,Redirect } from 'react-router-dom/cjs/react-router-dom';
import {  useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
// import Inbox from "../components/Inbox";
import Sentbox from "../components/SentBox";
import NavBar from "../components/NavBar";


function SentBoxMailPage(){

    const isAuthenticated=useSelector(state=>state.Auth.isAuthenticated)

    return(
        <>
        <NavBar/>
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

          <Sentbox/>
      
        </Col>
      </Row>
    </Container>
        </>
    )
}

export default SentBoxMailPage