import { useState } from "react";
import type { ProjectProps } from "../types/types";
import { TurboPointProject } from "./projects/TurboPointProject";
import { CromePlayProject } from "./projects/CromePlayProject";
import { BitSchoolProject } from "./projects/BitSchoolProject";




export const ProjectCard: React.FC<ProjectProps> = ({ projects }) => {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev)



    return (

        <div className="container">

            <div className="projects-grid">
                
                <div className="card-project"><CromePlayProject projects={projects} /></div>
                <div className="card-project"><BitSchoolProject projects={projects} /></div>
                <div className="card-project"><TurboPointProject projects={projects} /></div>
               
            </div>


        </div>
    
    )
}