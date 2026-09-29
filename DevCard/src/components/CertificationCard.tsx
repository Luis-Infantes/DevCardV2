import * as React from "react";
import type { Certification, CertificationProps } from "../types/types";





export const CertificationCard: React.FC<CertificationProps> = ({ certifications }) => {




    return (
    
        <div className="container">

            <div className="certification-grid">

                {certifications.map((certifications: Certification) => 


                    <div key={certifications.id} className="card-certification">


                        

                            <img
                                src={`/image/${certifications.image}`}
                                alt={`Logo de ${certifications.title}`}
                                className="certification-icon"
                                loading="lazy"
                            />

                            <h6>
                                {certifications.title}
                            </h6>

                            <p>
                                {certifications.date}
                            </p>

                            <a
                                href={certifications.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View Credential
                            </a>



                    </div>
                
                )}

                    
                

            </div>


        </div>
    
    );


}