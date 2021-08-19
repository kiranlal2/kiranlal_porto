import React from 'react';
import './work.css';
import Project from './projects';

export default function work() {
    const myproject = [
        { number: 1, projname: 'Project 1' },
        { number: 2, projname: 'Project 2' },
        { number: 3, projname: 'Project 3' },
        { number: 4, projname: 'Project 4' },
        { number: 5, projname: 'Project 5' },
        { number: 6, projname: 'Project 6' },
        
    ];

    return (
        <div id="projects" className="work">
            
            <h2 className="sub_title">My Works</h2>
            
            <div className="all_project">
                <Project 
                    number={myproject[0].number}
                    projname={myproject[0].projname}
                 />
                <Project 
                    number={myproject[1].number}
                    projname={myproject[1].projname}
                 />
                <Project 
                    number={myproject[2].number}
                    projname={myproject[2].projname}
                 />
                <Project 
                    number={myproject[3].number}
                    projname={myproject[3].projname}
                 />
                <Project 
                    number={myproject[4].number}
                    projname={myproject[4].projname}
                 />
                <Project 
                    number={myproject[5].number}
                    projname={myproject[5].projname}
                 />
            </div>
        </div>
    )
}
