import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => {
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}sfsfsf sdfs </p>

        </div>
    };

    return (
        <div className='sidebar'> 
            <div className='sidebar__top'>
                <img src='https://images.unsplash.com/photo-1513151233558-d860c5398176?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' alt='' />
                
                <Avatar src={user.photoUrl} className='sidebar__avatar' >{ user.email[0]}</Avatar>
                <h2>{ user.displayName }</h2>
                <h4>{ user.email }</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2,000</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on Post</p>
                    <p className='sidebar__statNumber'>2,900</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programmming')}
                {recentItem('desing')}
                {recentItem('developer')}
            </div>

        </div>
    )
}

export default Sidebar
