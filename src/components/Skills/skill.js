import React from 'react';
import './skill.css'
import Skill from './skills2';

export default function skill() {

    const coursedetail = [
        { date: new Date(2021, 8, 18), title: 'HTML', done: '90%' },
        { date: new Date(2021, 8, 18), title: 'CSS', done: '90%' },
        { date: new Date(2021, 8, 18), title: 'JS', done: '50%' },
        { date: new Date(2021, 8, 18), title: 'React', done: '50%' },
        { date: new Date(2021, 8, 18), title: 'Php', done: '50%' },
        { date: new Date(2021, 8, 18), title: 'Python', done: '30%' }
      ];

    return (
        <div className="skilld">
            <Skill 
                date={coursedetail[0].date}
                title={coursedetail[0].title}
                done={coursedetail[0].done} />
            <Skill
                date={coursedetail[1].date}
                title={coursedetail[1].title}
                done={coursedetail[1].done} />
            <Skill 
                date={coursedetail[2].date}
                title={coursedetail[2].title}
                done={coursedetail[2].done} />
            <Skill 
                date={coursedetail[3].date}
                title={coursedetail[3].title}
                done={coursedetail[3].done} />
            <Skill 
                date={coursedetail[4].date}
                title={coursedetail[4].title}
                done={coursedetail[4].done} />
            <Skill 
                date={coursedetail[5].date}
                title={coursedetail[5].title}
                done={coursedetail[5].done} />
                </div>
            )
}
