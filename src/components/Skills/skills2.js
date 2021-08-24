import React from 'react';
import './skills2.css';

export default function skills2(props) {
    return (
        <div className="expression">
            <h3>{props.title}</h3>
            <div className="skil_card">
                <progress value={props.percentage} max="100" />
            </div>
            <h3>{props.done}</h3>
        </div>
    )
}