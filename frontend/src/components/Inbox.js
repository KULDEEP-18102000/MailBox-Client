import { useEffect,useState } from "react"
import axios from "axios"
import ListGroup from 'react-bootstrap/ListGroup';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { mailActions } from "../store/Mail";
import {useDispatch, useSelector} from 'react-redux'
import './Inbox.css'; 
import { GoDotFill } from "react-icons/go";
import { UseSelector } from "react-redux";

function Inbox(){

    // const [mails,setMails]=useState([])

    const dispatch=useDispatch()

    const history=useHistory()

    const mails=useSelector(state=>state.Mail.inboxMails)
    console.log(mails)

    useEffect(()=>{
        const fetchMails=async()=>{
            try {
                const token=localStorage.getItem('token')
            const response=await axios.get('http://localhost:5000/mail/getinboxmails',
        { headers: { 
          "Authorization": token ,
          'Content-Type': 'application/json',
        } }
        )
        console.log(response)
        // console.log(response.data[0]?.editorState?._immutable?.currentContent?.blockMap)
        // const objkeys=Object.keys(response.data[0]?.editorState?._immutable?.currentContent?.blockMap)
        // console.log(response.data[0]?.editorState?._immutable?.currentContent?.blockMap['4tmeu']?.text)
        const mails_Array=[]
        response?.data?.forEach(element => {
            let subject=element.subject
            const objkeys=Object.keys(element?.editorState?._immutable?.currentContent?.blockMap)
            let text=element?.editorState?._immutable?.currentContent?.blockMap[objkeys[0]]?.text
            let id=element?._id
            let readMail=element?.readMail
            let obj={
                id:id,
                subject:subject,
                text:text,
                readMail:readMail
            }
            dispatch(mailActions.addInboxMail({mail:obj}))
            // mails_Array.push(obj)

        });
        // console.log(mails_Array)
        // setMails(mails_Array)
                
            } catch (error) {
                console.log(error)
                alert('something went wrong')
            }
            
        }
        dispatch(mailActions.resetInboxMails())
        fetchMails()
    },[])

    const openMailDetailPage=(id)=>{
        history.push(`/inbox/${id}`,{ from: 'inbox' })
    }

    const deleteMail=async(id)=>{
        try {
            const response=await axios.delete(`http://localhost:5000/mail/deletemail/${id}`)
            console.log(response)
            dispatch(mailActions.deleteMailFromInbox({mailId:id}))
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <ListGroup>
        {/* {console.log(mails[0])} */}
        {mails.map((mail)=>(
            
            <>
            {mail.readMail==false && <GoDotFill />}
            <ListGroup.Item key={mail.id}>{mail.subject}  {mail?.text}</ListGroup.Item>
            <button onClick={()=>{openMailDetailPage(mail.id)}}>Open</button>
            <button onClick={()=>{deleteMail(mail.id)}}>Delete</button>
            </>
            // <h5>{mail.subject}</h5>
        ))}
    </ListGroup>
        
        </>
    )
}

export default Inbox