import * as React from "react";
import type { NetworkProps } from "../types/types";
import { Envelope, Github, Linkedin } from "react-bootstrap-icons";



export const ContactNetworkCard: React.FC<NetworkProps> = ({ networks }) => {


    return (
        <div>
            <div className="introcard-grid-redes" >


                <div className=" Intro-Style d-flex align-items-center justify-content-center gap-2">

                    <a href="https://www.linkedin.com/in/luis-infantes-artdesign/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={30} color="#35648f" />
                    </a>
                    <p className="mb-0 ">{networks.name}</p>
                </div>

                <div className=" Intro-Style d-flex align-items-center justify-content-center gap-2">

                    <a href="https://github.com/Luis-Infantes" target="_blank" rel="noopener noreferrer">
                        <Github size={30} color="#35648f" />
                    </a>
                    <p className="mb-0">{networks.name}</p>
                </div>

                <div className=" Intro-Style d-flex align-items-center justify-content-center gap-2">
                    <Envelope size={30} color="#35648f" />
                    <p className="mb-0">{networks.name}</p>
                </div>


            </div>

        </div>
    
    );

}