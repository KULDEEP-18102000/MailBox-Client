import { useState,useEffect } from "react"
import axios from "axios"
import { mailActions } from "./store/Mail"
import {  useDispatch } from "react-redux"

const UseFetch=(input)=>{

    console.log(input)

    const [data,setData]=useState([])


    const dispatch=useDispatch()

    useEffect(()=>{
        const fetchMails=async()=>{
            try {
                const token=localStorage.getItem('token')
            const response=await axios.get(input.url,
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
            
            if(input.type=='inbox'){
                dispatch(mailActions.addInboxMail({mail:obj}))
            }
            else if(input.type=='sentbox'){
                dispatch(mailActions.addSentBoxMail({mail:obj}))
            }
            
            mails_Array.push(obj)

        });
        // console.log(mails_Array)
        // setMails(mails_Array)
        setData(mails_Array)
                
            } catch (error) {
                console.log(error)
                alert('something went wrong')
            }
            
        }
        
        setInterval(()=>{
            if(input.type=='inbox'){
                dispatch(mailActions.resetInboxMails())
            }
            else if(input.type=='sentbox'){
                dispatch(mailActions.resetSentboxMails())
            }
            
            fetchMails()
        },15000)

        // if(input.type=='inbox'){
        //     dispatch(mailActions.resetInboxMails())
        // }
        // else if(input.type=='sentbox'){
        //     dispatch(mailActions.resetSentboxMails())
        // }
        
        fetchMails()
    },[input.url])

    return [data]
}

export default UseFetch