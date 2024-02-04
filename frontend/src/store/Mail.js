import { createSlice } from "@reduxjs/toolkit";

const initialMailStore={
    inboxMails:[],
    sentBoxMails:[]
}

const mailSlice=createSlice({
    name:'Mail',
    initialState:initialMailStore,
    reducers:{
        setInboxMails(state,action){
            state.inboxMails=action.payload.mails
        },
        addInboxMail(state,action){
            console.log("came outside")
            if(action.payload.mail.senderEmail==action.payload.mail.receiverEmail){
                console.log("came inside")
                state.inboxMails.push(action.payload.mail)
            }
        },
        setSentBoxMails(state,action){
            state.sentBoxMails=action.payload.mails
        },
        addSentBoxMail(state,action){
            state.sentBoxMails.push(action.payload.mail)
        },
        resetInboxMails(state,action){
            state.inboxMails=[]
        },
        resetSentboxMails(state,action){
            state.sentBoxMails=[]
        },
        editInboxMail(state,action){
            const updatedMails=[]
            for (let index = 0; index < state.inboxMails.length; index++) {
                const element = state.inboxMails[index];
                if(element.id==action.id){
                    element.readMail=true
                }
                updatedMails.push(element)
            }
            state.inboxMails=updatedMails
        },
        deleteMailFromInbox(state,action){
            console.log("id",action.payload.mailId)
            const updatedMails=state.inboxMails.filter((mail)=>{
                return mail.id!=action.payload.mailId
            })
            console.log(updatedMails)
            state.inboxMails=updatedMails
        },
        deleteMailFromSentbox(state,action){
            const updatedMails=state.sentBoxMails.filter((mail)=>{
                return mail.id!=action.mailId
            })
            state.sentBoxMails=updatedMails
        }
    }
})

export const mailReducer=mailSlice.reducer
export const mailActions=mailSlice.actions