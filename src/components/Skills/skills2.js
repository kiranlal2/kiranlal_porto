import React from 'react';
import './skills2.css';

export default function skills2(props) {
    return (
        <div className="expression">
            {/* <p>{props.percentage}</p> */}
            <p>{props.date.toISOString()}</p>
            <h3>{props.title}</h3>
            <h3>{props.done}</h3>
        </div>
    )
}
