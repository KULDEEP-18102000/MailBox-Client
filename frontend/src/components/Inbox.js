import { useEffect,useState } from "react"
import axios from "axios"
import ListGroup from 'react-bootstrap/ListGroup';


function Inbox(){

    const [mails,setMails]=useState([])

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
        console.log(response.data[0]?.editorState?._immutable?.currentContent?.blockMap)
        const objkeys=Object.keys(response.data[0]?.editorState?._immutable?.currentContent?.blockMap)
        console.log(response.data[0]?.editorState?._immutable?.currentContent?.blockMap['4tmeu']?.text)
        setMails(response.data)
                
            } catch (error) {
                console.log(error)
                alert('something went wrong')
            }
            
        }
        fetchMails()
    },[])

    return(
        <>
        <ListGroup>
        {console.log(mails[0])}
        {mails.map((mail)=>(
            <>
            
            <ListGroup.Item>{mail.subject}  {mail?.editorState?._immutable?.currentContent?.blockMap['4tmeu']?.text}</ListGroup.Item>
            </>
            // <h5>{mail.subject}</h5>
        ))}
    </ListGroup>
        
        </>
    )
}

export default Inbox