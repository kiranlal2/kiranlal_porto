import React from 'react';
import lalslogo from './src_header/Klal_logo.png';
import './Header.css';


export default function Header() {
    return (
        <div className="header_nav">
            <div className="nav_logo">
                <img src={ lalslogo } alt="klals logo" width="50px"/>
                <h1 className="Logo">KIRAN<span>LAL</span></h1>
            </div>
            <div className="nav_menu">
                <a href="#who_am_i"><h4>WHO I AM</h4></a>
                <a href="#skills"><h4>SKILLS</h4></a>
                <a href="#projects"><h4>MY WORK</h4></a>
                <a href="#experience"><h4>EXPERIENCE</h4></a>
                <a href="#footer"><h4>CONNECT WITH ME</h4></a>
            </div>
        </div>
    )
}
