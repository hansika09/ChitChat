import React, { useContext } from 'react';
import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';
import Messages from './Messages';
import InputPanel from './InputPanel';
import { ChatContext } from "../context/ChatContext";

const ChatScreen = () => {
    const { data } = useContext(ChatContext);

    return (
        <div className='chatscreen'>
            <div className="chatInfo">
                <img src={data.user.photoURL} />
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src={Cam} />
                    <img src={Add} />
                    <img src={More} />
                </div>
            </div>
            <Messages />
            <InputPanel />
        </div>
    )
}

export default ChatScreen