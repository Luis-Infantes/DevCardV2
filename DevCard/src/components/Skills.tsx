import type React from 'react';
import type { SkillProps } from '../types/types';
import { SkillCard } from './SkillCard';

export const Skills: React.FC<SkillProps> = ({ skills }) => {
    // Agrupamos y filtramos ignorando mayúsculas/minúsculas por seguridad con el seeder
    const frontSkills = skills.filter(s => s.category.toLowerCase() === "front-end");
    const backSkills = skills.filter(s => s.category.toLowerCase() === "back-end");
    const cloudSkills = skills.filter(s => s.category.toLowerCase() === "cloud");
    const toolSkills = skills.filter(s => s.category.toLowerCase() === "tools");

    return (
        <div >
         
            {/* Mantenemos tu clase original CSS encargada de posicionar Front al lado de Back, etc. */}
            <div className="skills-grid">
                <SkillCard title="Frontend" skills={frontSkills} />
                <SkillCard title="Backend" skills={backSkills} />
                <SkillCard title="Cloud" skills={cloudSkills} />
                <SkillCard title="Tools" skills={toolSkills} />
            </div>
        </div>
    );
};
