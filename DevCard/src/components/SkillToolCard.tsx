import type React from 'react';
import type { Skill, SkillProps } from '../types/types';


export const SkillToolCard: React.FC<SkillProps> = ({ skills }) => {

    return (

        <div className="skill-card">

            <h3>Tools</h3>

            <ul className="list-unstyled mb-0 skill-list">


                {skills.map((skill: Skill) => (

                    <li
                        key={skill.id}
                        className="d-flex align-items-center gap-2 mb-2"
                    >

                        <div className="skill-style">

                            <img
                                src={`/image/${skill.image}`}
                                alt={`Logo de ${skill.name}`}
                                className="skill-icon"
                                width={24}
                                height={24}
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