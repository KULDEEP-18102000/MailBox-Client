import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import { EditorState } from 'draft-js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

function MailEditor(){

    const [editorState,setEditorState]=useState(EditorState.createEmpty())

    const [mailState,setMailState]=useState({
        recipientMail:"",
        subject:""
    })

    const onEditorStateChange=(editorStateChange)=>{
        // console.log(editorStateChange)
        setEditorState(editorStateChange)
    }

    const mailChangeHandler=async(e)=>{
        // e.preventDefault()
        setMailState({...mailState,[e.target.name]:e.target.value})
        
    }

    const mailSubmitHandler=async(e)=>{
        e.preventDefault()
        const obj={
            recipientMail:mailState.recipientMail,
            subject:mailState.subject,
            editorState:editorState
        }
        console.log(obj)
        const token = localStorage.getItem('token')
        console.log(token)
        const response=await axios.post('http://localhost:5000/mail/sendmail',obj,
        { headers: { 
          "Authorization": token ,
          'Content-Type': 'application/json',
        } }
        )
        console.log(response.data)
        setMailState({ recipientMail:"",subject:""})
        setEditorState(EditorState.createEmpty())
        alert("Mail sent successfully")
    }

    return(
        <>

<Form onSubmit={mailSubmitHandler}>
<Form.Label  htmlFor="inputRecipient">To</Form.Label>
      <Form.Control
        type="email"
        id="inputRecipient"
        aria-describedby="passwordHelpBlock"
        name="recipientMail"
        value={mailState.recipientMail}
        onChange={mailChangeHandler}
      />
      <Form.Control
      className="my-3"
        type="text"
        id="inputSubject"
        placeholder="Enter Your Subject"
        aria-describedby="passwordHelpBlock"
        name="subject"
        value={mailState.subject}
        onChange={mailChangeHandler}
      />
        <Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={onEditorStateChange}
/>;

      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </>
    )
}

export default MailEditor