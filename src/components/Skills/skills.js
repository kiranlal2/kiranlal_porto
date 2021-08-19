import React from 'react';
import html from './src_skills/html5.png';
import css from './src_skills/css3.png';
import javascript from './src_skills/javascript.png';
import reac from './src_skills/react.png';
import phpp from './src_skills/php.png';
import pyth from './src_skills/python.png';
import gitt from './src_skills/github.png';
import photoshop from './src_skills/photoshop.png';
import illustrator from './src_skills/illustrator.png';
import lightroom from './src_skills/photography.png';
import indesign from './src_skills/indesign.png';
import premiere from './src_skills/premiere.png';
import aftereffects from './src_skills/aftereffects.png';
import Davinci from './src_skills/davinci_resolve.png';
import sketch from './src_skills/sketch.png';
import xd from './src_skills/xd.png';
import figma from './src_skills/figma.png';
import dsmax from './src_skills/3dsmax.png';
import maya from './src_skills/maya.png';
import skillpic from './src_skills/skills.png';
import './skills.css';

export default function skills() {

    return (
        <div id="skills" className="skills">
            <h2 className="sub_tittle">SKILLS</h2>
            <div className="skill_content">
                <div className="skill_icons">
                    <a href="#"><img src={ html } alt="HTML5" width="50px" /></a>
                    <a href="#"><img src={ css } alt="CSS3" width="50px" /></a>
                    <a href="#"><img src={ javascript } alt="JS" width="50px" /></a>
                    <a href="#"><img src={ reac } alt="React js" width="50px" /></a>
                    <a href="#"><img src={ phpp } alt="Php" width="50px" /></a>
                    <a href="#"><img src={ pyth } alt="Python" width="50px" /></a>
                    <a href="#"><img src={ gitt } alt="Github" width="50px" /></a>
                    <a href="#"><img src={ sketch } alt="Sketch" width="50px" /></a>
                    <a href="#"><img src={ figma } alt="Figma" width="50px" /></a>
                </div>
                <div className="skill_img">
                    <img src={ skillpic } alt="Skills" width="500px" />
                </div>
                <div className="skill_icons">
                    <a href="#"><img src={ xd } alt="Xd" width="50px" /></a>
                    <a href="#"><img src={ photoshop } alt="photoshop" width="50px" /></a>
                    <a href="#"><img src={ illustrator } alt="illustrator" width="50px" /></a>
                    <a href="#"><img src={ lightroom } alt="lightroom" width="50px" /></a>
                    <a href="#"><img src={ indesign } alt="indesign" width="50px" /></a>
                    <a href="#"><img src={ premiere } alt="premiere" width="50px" /></a>
                    <a href="#"><img src={ aftereffects } alt="after effects" width="50px" /></a>
                    <a href="#"><img src={ Davinci } alt="Davinci resolve" width="40px" /></a>
                    <a href="#"><img src={ dsmax } alt="3dsmax" width="50px" /></a>
                    <a href="#"><img src={ maya } alt="maya" width="50px" /></a>
                </div>
            </div>
        </div>
    )
}
