import React from 'react';
import './projects.css';

export default function projects(props) {
    return (
        <div className="projects">
            <div className="some_projects">
                <div className="project_0">{props.number}</div>
                <p>{props.projName}</p>
            </div>
        </div>
    )
}
