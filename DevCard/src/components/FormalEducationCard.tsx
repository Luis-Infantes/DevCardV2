import * as React from "react";
import type {   FormalEducation, FormalEducationProps } from '../types/types';





export const FormnalEducationCard: React.FC<FormalEducationProps> = ({ formaleducation }) => {


    return (

        <div className="container">

            <div className="education-grid">

                {formaleducation.map((education: FormalEducation) =>


                    <div key={education.id} className="card-education">


                        <img
                            src={`/image/${education.image}`}
                            alt={`Logo de ${education.title}`}
                            className="education-icon"
                            loading="lazy"
                        />

                        <h5>
                            {education.title}
                        </h5>




                        <p>
                            {education.description}
                        </p>

                        <p>
                            {education.date}
                        </p>

                        <a
                            href={education.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Credentials
                        </a>

                       

                    </div>

                )}

            </div>


        </div>

    )
}