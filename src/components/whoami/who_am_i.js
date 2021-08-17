import React from 'react';
import hobby from './src_who_am_i/who_am_i.png'
import './who_am_i.css';

export default function who_am_i() {
    return (
        <div id="who_am_i" className="who_am_i">
            <div className="tittle">
                <h2 className="sub_tittle">WHO AM I</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusamus ut et, cupiditate eos molestias deleniti delectus, officiis itaque mollitia dolor enim, odio totam. Tempore a neque doloremque expedita quas?</p>
            </div>
            <div className="lal_img">
                <img src={ hobby } alt="Hobby" width="500px" />
            </div>
        </div>
    )
}

