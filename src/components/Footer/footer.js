import React from 'react';
import whatsapp from './src_footer/whatsapp.png';
import facebook from './src_footer/facebook.png';
import instagram from './src_footer/instagram.png';
import Twitter from './src_footer/twitter.png';
import Pinterest from './src_footer/pinterest.png';
import Tumblr from './src_footer/tumblr.png';
import './footer.css';

export default function footer() {
    return (
        <div id="footer" className="footer">
            <div className="footer_logo">
                <h1 className="Logo">KIRAN<span>LAL</span></h1>
                <div className="footer_social">
                    <a href="#"><img src={ whatsapp } alt="whatsapp" width="25px" /></a>
                    <a href="https://www.facebook.com/kiranlal6dx/"><img src={ facebook } alt="facebook" width="25px" /></a>
                    <a href="https://www.instagram.com/kiranlal_2/"><img src={ instagram } alt="instagram" width="25px" /></a>
                    <a href="https://twitter.com/kiranlal2_"><img src={ Twitter } alt="instagram" width="25px" /></a>
                    <a href="https://in.pinterest.com/kiranlal/"><img src={ Pinterest } alt="pinterest" width="25px" /></a>
                    <a href="https://www.tumblr.com/blog/kiranlal2-blog"><img src={ Tumblr } alt="tumblr" width="25px" /></a>
                </div>
            </div>
            <hr />
            <div className="copyrights">
                <p>@ 2021 KIRANLAL.</p>
            </div>
        </div>
    )
}
