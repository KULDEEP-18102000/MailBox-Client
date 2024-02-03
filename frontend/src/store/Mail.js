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
            state.inboxMails.push(action.payload.mail)
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
        }
    }
})

export const mailReducer=mailSlice.reducer
export const mailActions=mailSlice.actions