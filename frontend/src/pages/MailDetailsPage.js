import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useEffect,useState } from 'react';
// import axios from 'axios';
import { EditorState } from 'draft-js';
import { mailActions } from '../store/Mail';
import { useDispatch } from 'react-redux';

function MailDetailPage(){

    // const {id}=useParams()
    // console.log(id)

    const dispatch=useDispatch()

    const [editorState,setEditorState]=useState(EditorState.createEmpty())

    const [mailState,setMailState]=useState({
        receiverEmail:"",
        subject:"",
        senderEmail:"",
        text:""
    })

    useEffect(()=>{
        // const fetchMailDetails=async()=>{
        //     try {
                
        //         const response=await axios.get(`http://localhost:5000/mail/getMailDetail/${id}`)
        //         console.log(response)
        //         dispatch(mailActions.editInboxMail({id:id}))
        //         setEditorState(response.data.editorState)
        //         const objkeys=Object.keys(response.data?.editorState?._immutable?.currentContent?.blockMap)
        //         let text=response.data?.editorState?._immutable?.currentContent?.blockMap[objkeys[0]]?.text
        //         setMailState({
        //             receiverEmail:response.data.receiverEmail,
        //             subject:response.data.subject,
        //             senderEmail:response.data.senderEmail,
        //             text:text
        //         })
        //     } catch (error) {
        //         console.log(error)
        //         alert('Something Went Wrong')
        //     }
        // }
        // fetchMailDetails()
    },[])

    return(
        <>|
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>mail</Card.Title>
        <Card.Text>
          Regarding
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </>
    )
}

export default MailDetailPage