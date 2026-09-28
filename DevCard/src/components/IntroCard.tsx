import * as React from "react";
import type { IntroProps } from "../types/types";




export const IntroCard: React.FC<IntroProps> = ({ data }) => {

    return (

        <div>


            <div className="introcard-style">
                <img
                    src={`/image/${data.avatarimg}`}
                    alt={`Logo de ${data.avatarimg}`}
                    className="avatar-icon"
                    loading="lazy"
                    onError={(e) => {
                        // Fallback si la imagen no existe
                        
                        (e.currentTarget as HTMLImageElement).src = "/images/_fallback.png";
                    }}
                />

                
                <h1>{data.fullname}</h1>
                <h5>{data.title}</h5>
                <p>{data.description}</p>

                <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    Dowload Digital CV
                </a>


            </div>


            



            
        </div>
    );
}