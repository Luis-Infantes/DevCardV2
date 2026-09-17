import * as React from "react";
import type {  EducationProps } from '../types/types';
import { useState } from 'react';
import { TajamarEducation } from './educations/TajamarEducation';
import { UdemyEducation } from './educations/UdemyEducation';
import { CeiEducation } from './educations/CeiEducation';
import { CertificatesEducation } from "./educations/Certificates";








export const EducationCard: React.FC<EducationProps> = ({ educations }) => {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev)



    return (

        <div className="container">

            <div className="projects-grid">

                <div className="card-project"><CertificatesEducation educations={educations} /></div>
                <div className="card-project"><TajamarEducation educations={educations} /></div>
                <div className="card-project"><UdemyEducation educations={educations} /></div>
                <div className="card-project"><CeiEducation educations={educations} /></div>

            </div>


        </div>

    )
}