
//-----------------TITLE & DESCRIPTION-----------------------

export type Title = {

    title: string;
    description: string;
    
}

export type TitleProps = {

    data: Title
}

//-------------PRESENTATION-----------------------------------

export type Intro = {

    fullname: string;
    title: string;
    description: string;
    avatarimg: string; 
    link: string;

}


export type IntroProps = {

    data: Intro;
}





//-------------CERTIFICACIONS---------------------------------------


export type Certification = {


    id: string;
    title: string;
    image: string;
    date: string;
    link: string;

}

export type CertificationProps = {

    certifications: Certification[];
}






//----------SKILLS-------------------------------------------

export type Skill = {
    id: string;
    name: string;
    category: string;
    image: string;
}

export type SkillProps = {
    skills: Skill[];
}






//-------------PROJECTS----------------------------------------


export type Project = {

    id: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
    linkvideo: string;
    image: string;
 
}


export type ProjectProps = {

    projects: Project[];
}




//--------------PROFESIONAL TRAJECTORY---------------

export type ProfessionalTrayectory = {

    id: string;
    img: string;
    date: string;
    description: string;
}

export type ProfessionalTrajectoryProps = {

    data: ProfessionalTrayectory[]; 
}




//-------------- FORMAL EDUCATION--------------------------------------------------


export type FormalEducation = {

    id: string;
    title: string;
    description: string;
    date: string;
    link: string;
    image: string;
   
}

export type FormalEducationProps = {

    formaleducation: FormalEducation[];
}


//-----------------ADDITIONAL TRAINING ---------------------------------------------------


export type AdditionalTraining = {

    id: string;
    title: string;
    description: string;
    date: string;
    link: string;
    image: string;
    slug: string; // identificador de cada centro
}

export type AdditionalTrainingProps = {

    additionaltraining: AdditionalTraining[];
}





//------------------LANGUAGES-----------------------------------


export type Language = {
    id: string;
    title: string;
    level: string;
    image: string;
    link: string;
}

export type LanguageProps = {
    languages: Language[];
}


//------------------NETWORKS-----------------------------------

export type Network = {

    id: string;
    title: string;
    image: string;
    link: string;
}

export type NetworkProps = {
    networks: Network[];
}











