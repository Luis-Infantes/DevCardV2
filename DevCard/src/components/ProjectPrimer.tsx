import { useState } from "react";
import type { ProjectPrimerProps } from "../types/types";
import { SocialHomeProject } from "./projects/SocialHomeProject";
import { PopularGroupsProject } from "./projects/PopularGroupsProject";



export const ProjectPrimer: React.FC<ProjectPrimerProps> = ({ projectsprimer }) => {

    const [_open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev)



    return (

        <div className="container">

            <div className="projects-grid">

                <div className="card-project"><PopularGroupsProject projectsprimer={projectsprimer} /></div>
                <div className="card-project"><SocialHomeProject projectsprimer={projectsprimer} /></div>

            </div>

        </div>

    )
}