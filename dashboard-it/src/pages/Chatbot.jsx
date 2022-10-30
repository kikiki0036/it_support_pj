import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Widget, addResponseMessage, markAllAsRead } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
const Chatbot = () => {
    const chat = (newMessage) => {
        axios.defaults.withCredentials = false;
        axios.post('http://127.0.0.1:5000/chatbot', { msg: newMessage }).then((response) => {
            addResponseMessage(`ฺBOT : ${response.data}`);
        });
        
        markAllAsRead();
        // axios.defaults.withCredentials = true;
    };

    return (
       
        <Widget
            handleNewUserMessage={chat}
            title="แชทบอท"
            subtitle="สามารถสอบถามปัญหาได้"
            senderPlaceHolder="Insert your question"
        />
    )

}

export default Chatbot