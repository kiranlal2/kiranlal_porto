import React from 'react';
import experienceimg from './src_experience/experience.png';
import './experience.css'

export default function experience() {

    const paragra = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium ea similique voluptate error modi vero, tempora laborum asperiores quisquam animi consequuntur natus esse aut repellat cum earum ratione autem cupiditate!';

    return (
        <div id="experience" className="experience">
            <div className="experience_content">
                <div className="experience_1">
                    <img src={experienceimg} alt="experience image" width="500px" />
                </div>
                <div className="experience_2">
                    <h2 className="sub_tittle">My Experience</h2>
                    <p>{paragra}</p><br />
                    <p>{paragra}</p><br />
                    <p>{paragra}</p>
                </div>
            </div>
        </div>
    )
}


