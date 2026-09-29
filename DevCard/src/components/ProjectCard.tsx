
import type { Project, ProjectProps } from "../types/types";





export const ProjectCard: React.FC<ProjectProps> = ({ projects }) => {


    return (

        <div className="container">

            <div className="projects-grid">

                {projects.map((project: Project) =>


                    <div key={project.id} className="project-card">

                        <h5>
                            {project.title}
                        </h5>


                        <img
                            src={`/image/${project.image}`}
                            alt={`Logo de ${project.title}`}
                            className="project-img"
                            loading="lazy"
                        />

                        <p>
                            {project.description}
                        </p>


                        

                        <h6>[Technology Stack]</h6>
                        <div>
                            {project.tech.map((techIcon: string, index: number) => (
                                <img
                                    key={index}
                                    src={`/image/${techIcon}`}
                                    alt={`Logo de ${techIcon}`}
                                    className="tech-icon"
                                    loading="lazy"
                                    onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).src = "/images/_fallback.png";
                                    }}
                                />
                            ))}
                        </div>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            GitHub Repository
                        </a>

                        <a
                            href={project.linkvideo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Video Tutorial
                        </a>



                    </div>

                )}
               
            </div>


        </div>
    
    )
}