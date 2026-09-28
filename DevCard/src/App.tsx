import { useEffect, useState } from "react";
import { IntroCard } from "./components/IntroCard";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBackCard } from "./components/SkillBackCard";
import { SkillCloudCard } from "./components/SkillCloudCard";
import { SkillFrontCard } from "./components/SkillFrontCard";
import { SkillToolCard } from "./components/SkillToolCard";
import { getDevCard } from "./services/devcard.service";
import { CertificationCard } from "./components/CertificationCard";
import { ProfessionalTrajectoryCard } from "./components/ProfessionalTrajectoryCard";
import { FormnalEducationCard } from "./components/FormalEducationCard";
import { AdditionalTrainingCard } from "./components/AdditionalTrainingCard";
import { LanguageCard } from "./components/LanguageCard";
import { NetworkCard } from "./components/NetworkCard";








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
                <h2>Certificates</h2>
                <CertificationCard certifications={data.certification} />
            </div>


            <div className="custom-card">
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                   
                    <SkillFrontCard skills={data.skillsfront} />                
                    <SkillBackCard skills={data.skillsback} />
                    <SkillCloudCard skills={data.skillscloud} />
                    <SkillToolCard skills={data.skillstool} />
                </div>
            </div>


            <div className="custom-card">
                <h2>Projects & Learning</h2>
                <ProjectCard projects={data.projects} />
            </div>

            <div className="custom-card">
                <h2>Professional Tarjectory</h2>
                <ProfessionalTrajectoryCard data={data.professionaltrajectory} />
            </div>


            <div className="custom-card">
                <h2>Education & Formation</h2>
                <FormnalEducationCard formaleducation={data.formaleducation} />

            </div>

            <div className="custom-card">
                <h2>Additional Training</h2>
                <AdditionalTrainingCard additionaltraining={data.additionaltraining} />
            </div>

            <div className="custom-card">
                <h2>Languages</h2>
                <LanguageCard languages={data.language} />
            </div>

            <div className="custom-card">
                <h2>Networks</h2>
                <NetworkCard networks={data.network} />
            </div>

            
        </div>

    
    );
}

export default App;
