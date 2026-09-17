import { useEffect, useState } from "react";
import { EducationCard } from "./components/EducationCard";
import { IntroCard } from "./components/IntroCard";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBackCard } from "./components/SkillBackCard";
import { SkillCloudCard } from "./components/SkillCloudCard";
import { SkillFrontCard } from "./components/SkillFrontCard";
import { SkillToolCard } from "./components/SkillToolCard";
import { getDevCard } from "./services/devcard.service";
import { ProjectCloud } from "./components/ProjectCloud";
import { ProjectPrimer } from "./components/ProjectPrimer";







export const App = () => {


    //Conexion con la Api para conectar con los datos de la BD de Mongo

    const [data, setData] = useState<any>(null);

    useEffect(() => {

        getDevCard().then(setData).catch(console.error)
    }, []);

    if (!data) return <p>Cargando...</p>


    return (
    

        <div className="container">

            
            <div className="custom-card">
                    <IntroCard data={data.intro} />
            </div>


            <div className="custom-card">
                <h2>Technical Skills</h2>
                <p>An overview of the technologies and tools I work with, organized by area and presented as skill categories.</p>
                <SkillFrontCard skillsFront={data.skillsfront} />
                <SkillBackCard skillsBack={data.skillsback} />
                <SkillCloudCard skillsCloud={data.skillscloud} />
                <SkillToolCard skillsTool={data.skillstool} />

            </div>


            <div className="custom-card">
                <h2>Cloud & Backend Projects</h2>
                <p>Cloud project deployment and solution development with Microsoft Power Platform, focused on modern application development and digital transformation within the Microsoft ecosystem.</p>
                <ProjectCloud projectscloud={data.projectscloud} />
            </div>
            
                <div className="custom-card">
                <h2>Frontend & Backend Code Projects</h2>
                <p>Small projects created for backend and frontend development. These projects are intended as technical practice to improve my layout design skills, programming logic, and data management.</p>
                <ProjectCard projects={data.projects} />
            </div>

            <div className="custom-card">
                <h2>Experimental Technology Projects</h2>
                <p>Introductory projects and first exposure to new technologies, developed with the aim of understanding their core concepts, tools, and workflow.</p>
                <ProjectPrimer projectsprimer={data.projectsprimer} />
            </div>

            <div className="custom-card">
                <h2>Education & Certificates</h2>
                <p>My recent education includes official training in software development and cloud technologies, along with complementary courses to expand my technical knowledge and skills.</p>
                <EducationCard educations={data.education} />
                   
            </div>
   
            
        </div>

    
    );
}

export default App;
