import React from 'react';
import biopic from './src_main/bio_pic2.png';
import linkedin from './src_main/linkedin.png';
import behance from './src_main/behance.png';
import github from './src_main/github.png';
import gmail from './src_main/gmail.png';
import './Main_bnr.css';


export default function MainBanner() {

    return (
        <div className="main_banner">
            <div className="hero_content">
                <div className="profile">
                    <div className="bio_pic">
                        <img src={ biopic } alt="bio pic" height="300px" width="300px" />
                    </div>
                    <div className="bio">
                        <div className="bio_detail">
                            <h1>Kiran Lal</h1>
                            <p>Front End Developer || UI/UX <br></br> Graphics Designer</p>
                        </div>
                        <div className="social_icons">
                            <a href="https://www.linkedin.com/in/kiran-lal/"><img src={ linkedin } alt="linkedin" width="25px" /></a>
                            <a href="https://www.behance.net/kiranlalJ"><img src={ behance } alt="behance" width="25px" /></a>
                            <a href="https://github.com/kiranlal2"><img src={ github } alt="github" width="25px" /></a>
                            <a href="https://mail.google.com/mail/u/3/#inbox?compose=new"><img src={ gmail } alt="gmail" width="25px" /></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}