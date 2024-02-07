import { useEffect,useState } from "react"
import axios from "axios"
import ListGroup from 'react-bootstrap/ListGroup';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { mailActions } from "../store/Mail";
import {useDispatch, useSelector} from 'react-redux'
import './Inbox.css'; 
import { GoDotFill } from "react-icons/go";
import { UseSelector } from "react-redux";
import UseFetch from "../useFetch";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sentbox(){

    // const [mails,setMails]=useState([])

    const [data]=UseFetch({url:`http://localhost:5000/mail/getsentboxmails`,type:'sentbox'})
    console.log(data)

    const dispatch=useDispatch()

    const history=useHistory()

    const mails=useSelector(state=>state.Mail.sentBoxMails)
    console.log(mails)

    // useEffect(()=>{
    //     const fetchMails=async()=>{
    //         try {
    //             const token=localStorage.getItem('token')
    //         const response=await axios.get('http://localhost:5000/mail/getsentboxmails',
    //     { headers: { 
    //       "Authorization": token ,
    //       'Content-Type': 'application/json',
    //     } }
    //     )
    //     console.log(response)
    //     // console.log(response.data[0]?.editorState?._immutable?.currentContent?.blockMap)
    //     // const objkeys=Object.keys(response.data[0]?.editorState?._immutable?.currentContent?.blockMap)
    //     // console.log(response.data[0]?.editorState?._immutable?.currentContent?.blockMap['4tmeu']?.text)
    //     const mails_Array=[]
    //     response?.data?.forEach(element => {
    //         let subject=element.subject
    //         const objkeys=Object.keys(element?.editorState?._immutable?.currentContent?.blockMap)
    //         let text=element?.editorState?._immutable?.currentContent?.blockMap[objkeys[0]]?.text
    //         let id=element?._id
    //         let readMail=element?.readMail
    //         let obj={
    //             id:id,
    //             subject:subject,
    //             text:text,
    //             readMail:readMail
    //         }
    //         dispatch(mailActions.addSentBoxMail({mail:obj}))
    //         // mails_Array.push(obj)

    //     });
    //     // console.log(mails_Array)
    //     // setMails(mails_Array)
                
    //         } catch (error) {
    //             console.log(error)
    //             alert('something went wrong')
    //         }
            
    //     }
        
    //     setInterval(async()=>{
    //         dispatch(mailActions.resetSentboxMails())
    //         fetchMails()
    //     },5000)
    //     // fetchMails()
    // },[])

    const openMailDetailPage=(id)=>{
        history.push(`/inbox/${id}`,{ from: 'sentbox' })
    }

    return(
        <>
        <ListGroup>
        {/* {console.log(mails[0])} */}
        {mails.map((mail)=>(
            
            <>
            {/* <ListGroup.Item key={mail.id}>{mail.subject}  {mail?.text}</ListGroup.Item>
            <button onClick={()=>{openMailDetailPage(mail.id)}}>Open</button> */}

            <ListGroup.Item style={{cursor:'pointer'}} key={mail.id} onClick={()=>{openMailDetailPage(mail.id)}}>
            <Container>
      <Row>
        <Col xs={10}> <b>{mail.subject}</b>  {mail?.text}</Col>
        {/* <Col><IoMdMailOpen onClick={()=>{openMailDetailPage(mail.id)}}/></Col> */}
        <Col></Col>
      </Row>
    </Container>
                
            </ListGroup.Item>
            </>
            // <h5>{mail.subject}</h5>
        ))}
    </ListGroup>
    
    
        
        </>
    )
}

export default Sentbox