import React from 'react';
import './skill.css'
import Skill from './skills2';

export default function skill() {

    const coursedetail = [
        { title: 'HTML', percentage: 90, done: "90%" },
        { title: 'CSS', percentage: 90,  done: "90%" },
        { title: 'JS', percentage: 50,  done:"50%" },
        { title: 'React', percentage: 40, done:"40%" },
        { title: 'Php', percentage: 50,  done:"50%" },
        { title: 'Python', percentage: 30,  done: "30%" }
      ];

    return (
        <div className="skilld">
            <Skill 
                title={coursedetail[0].title}
                percentage={coursedetail[0].percentage}
                done={coursedetail[0].done} />
            <Skill
                title={coursedetail[1].title}
                percentage={coursedetail[1].percentage}
                done={coursedetail[1].done} />
            <Skill 
                title={coursedetail[2].title}
                percentage={coursedetail[2].percentage}
                done={coursedetail[2].done} />
            <Skill 
                title={coursedetail[3].title}
                percentage={coursedetail[3].percentage}
                done={coursedetail[3].done} />
            <Skill 
                title={coursedetail[4].title}
                percentage={coursedetail[4].percentage}
                done={coursedetail[4].done} />
            <Skill 
                title={coursedetail[5].title}
                percentage={coursedetail[5].percentage}
                done={coursedetail[5].done} />
        </div>
    )
}
