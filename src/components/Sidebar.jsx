import React from 'react';
import Navbar from '../components/Navbar.jsx'
import SearchChat from './SearchChat.jsx';
import Chats from './Chats.jsx';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Navbar />
            <SearchChat/>
            <Chats />
        </div>
    )
}

export default Sidebar