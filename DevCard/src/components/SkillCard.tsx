import type React from 'react';
import type { Skill } from '../types/types';

interface SkillCardProps {
    title: string;
    skills: Skill[];
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
    return (
        <div className="skill-card">
            <h3>{title}</h3>
            <ul className="list-unstyled mb-0 skill-list">
                {skills.map((skill: Skill) => (
                    // Convertimos skill.order a número si en tu seeder viene como string "1", "2"
                    <li key={skill.order} className="d-flex align-items-center">
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
