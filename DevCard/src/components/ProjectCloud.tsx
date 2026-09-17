import { useState } from "react";
import type { ProjectCloudProps, ProjectProps } from "../types/types";
import { DevCardProject } from "./projects/DevCardProject";
import { BluePayProject } from "./projects/BluePayProject";
import { AlaCarteProject } from "./projects/AlaCarteProject";


export const ProjectCloud: React.FC<ProjectCloudProps> = ({ projectscloud }) => {

    const [_open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev)



    return (

        <div className="container">

            <div className="projects-grid">
                <div className="card-project"><DevCardProject projectscloud={projectscloud} /></div>
                <div className="card-project"><BluePayProject projectscloud={projectscloud} /></div>
                <div className="card-project"><AlaCarteProject projectscloud={projectscloud} /></div>
            </div>

        </div>

    )
}