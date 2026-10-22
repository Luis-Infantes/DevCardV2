import * as React from "react";
import type { ProfessionalTrayectory, ProfessionalTrajectoryProps } from "../types/types";




export const ProfessionalTrajectoryCard: React.FC<ProfessionalTrajectoryProps> = ({ data }) => {

    const sortedData = [...data].sort((a, b) => Number(b.order) - Number(a.order));

    return (

        <div className="container">


            <div className="professional-grid">

                {sortedData.map((trayectory: ProfessionalTrayectory) =>


                    <div key={trayectory.order} className="card-certification">

                      

                                <img
                                    src={trayectory.image}
                                    alt={`Logo de ${trayectory.image}`}
                                    className="professional-icon"
                                    loading="lazy"

                                />

                                <h5>
                                    {trayectory.date}
                                </h5>


                    

                        <p>
                            {trayectory.description}
                        </p>

                    </div>

                )}
            </div>


        </div>

    );
}