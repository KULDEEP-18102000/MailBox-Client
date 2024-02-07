import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { EditorState } from 'draft-js';
import { mailActions } from '../store/Mail';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from '../components/SideBar';

function MailDetailPage(){

    const {id}=useParams()
    console.log(id)

    const { state } = useLocation();
    const previousPage = state ? state.from : null;
    console.log(previousPage)

    const dispatch=useDispatch()

    const [editorState,setEditorState]=useState(EditorState.createEmpty())

    const [mailState,setMailState]=useState({
        receiverEmail:"",
        subject:"",
        senderEmail:"",
        text:""
    })

    useEffect(()=>{
        const fetchMailDetails=async()=>{
            try {
                
                const response=await axios.get(`http://localhost:5000/mail/getMailDetail/${id}?previousPage=${previousPage}`)
                console.log(response)
                dispatch(mailActions.editInboxMail({id:id}))
                setEditorState(response.data.editorState)
                const objkeys=Object.keys(response.data?.editorState?._immutable?.currentContent?.blockMap)
                let text=response.data?.editorState?._immutable?.currentContent?.blockMap[objkeys[0]]?.text
                setMailState({
                    receiverEmail:response.data.receiverEmail,
                    subject:response.data.subject,
                    senderEmail:response.data.senderEmail,
                    text:text
                })
            } catch (error) {
                console.log(error)
                alert('Something Went Wrong')
            }
        }
        fetchMailDetails()
    },[])

    return(
        <>
        <Container fluid>
            
      <Row>
        <Col xs={2} id="sidebar-wrapper">
        <SideBar/>
        </Col>
        {/* <Col><IoMdMailOpen onClick={()=>{openMailDetailPage(mail.id)}}/></Col> */}
        <Col xs={10} id="page-content-wrapper">
            <Card style={{ width: '40rem',margin:'5px' }}>
      <Card.Body>
      <Card.Text>From :- {mailState.senderEmail}</Card.Text>
      <Card.Text>To :- {mailState.receiverEmail}</Card.Text>
        <Card.Title>{mailState.subject}</Card.Title>
        <Card.Text>
          {mailState.text}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col></Col>
      </Row>
    </Container>
        
        </>
    )
}

export default MailDetailPage