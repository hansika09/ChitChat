import React from 'react';
import Sidebar from '../components/Sidebar.jsx'
import ChatScreen from '../components/ChatScreen.jsx'
import '../style.css'

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <Sidebar/>
                <ChatScreen/>
            </div>
        </div>
    )
}

export default Home