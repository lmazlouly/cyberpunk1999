import React from 'react'
import Avatar from './Avatar';
import { NavLink } from "react-router-dom";
import lucyavatar from './../img/Avatar/lucyAvatar.png'
import jackieavatar from './../img/Avatar/jackieAvatar.png'
import jhonnyavatar from './../img/Avatar/jhonnyAvatar.png'

function Characters(props) {
    return (
        <section className='characters'>
            <NavLink to="/"><Avatar char={lucyavatar} name = "lucy"/></NavLink>;
            <NavLink to="/David"><Avatar char={jackieavatar} name = "Jackie"/></NavLink>;
            <Avatar char={jhonnyavatar} name = "Jhonny"/>
        </section>
    );
}

export default Characters;