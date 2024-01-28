import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import MailEditor from './MailEditor';
import LoginPage from '../pages/LoginPage';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom/cjs/react-router-dom';

function SideBar() {

    const history=useHistory()
  return (
    // <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    //   <Row>
    //     <Col sm={3}>
    //     <Button className='m-3' variant="secondary">Compose</Button>
    //       <Nav variant="pills" className="flex-column">
    //         <Nav.Item>
    //           <Nav.Link eventKey="first">Inbox</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="second">Sent</Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //     </Col>
    //     <Col sm={9}>
    //       <Tab.Content>
    //         <Tab.Pane eventKey="first"><MailEditor/></Tab.Pane>
    //         <Tab.Pane eventKey="second"><LoginPage/></Tab.Pane>
    //       </Tab.Content>
    //     </Col>
    //   </Row>
    // </Tab.Container>

    <Navbar bg="light" expand="lg" className="sidebar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
        <Button className='m-3' variant="secondary" onClick={()=>{history.push('/compose')}}>Compose</Button>
        <NavLink to="/inbox" className="nav-link" activeClassName="active">
            Inbox
          </NavLink>
          <NavLink to="/signup" className="nav-link" activeClassName="active">
            Sent
          </NavLink>
          {/* Add more links as needed */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SideBar;