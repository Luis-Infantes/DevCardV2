import type React from 'react';
import type { Skill, SkillProps } from '../types/types';


export const SkillFrontCard: React.FC<SkillProps> = ({ skills }) => {

    return (

        <div className="skill-card">

            <h3>Frontend</h3>

            <ul className="list-unstyled mb-0 skill-list">


                {skills.map((skill: Skill) => (

                    <li
                        key={skill.id}
                        className="d-flex align-items-center"
                    >

                        <div className="skill-style">
                            <img
                                src={`/image/${skill.image}`}
                                alt={`Logo de ${skill.name}`}
                                className="skill-icon"
                                loading="lazy"
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src = "/images/_fallback.png";
                                }}
                            />

                            <h5>{skill.name}</h5>

                        </div>             

                    </li>

                ))}

            </ul>

        </div>

    );

};
