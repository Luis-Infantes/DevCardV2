import * as React from "react";
import type { AdditionalTraining, AdditionalTrainingProps} from '../types/types';





export const AdditionalTrainingCard: React.FC<AdditionalTrainingProps> = ({ additionaltraining }) => {


    return (

        <div className="container">

            <div className="training-grid">

                {additionaltraining.map((addtional: AdditionalTraining) =>


                    <div key={addtional.id} className="card-training">

                        <img
                            src={`/image/${addtional.image}`}
                            alt={`Logo de ${addtional.title}`}
                            className="training-icon"
                            loading="lazy"
                        />

                        <h5>
                            {addtional.title}
                        </h5>


                        <p>
                            {addtional.description}
                        </p>

                        <p>
                            {addtional.date}
                        </p>

                        <a
                            href={addtional.link}
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