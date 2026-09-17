

export type Intro = {

    fullname: string;
    title: string;
    description: string;
    powerPlatformCertification: string;
    azureCertification: string;
    awsCertification: string;
    avatarimg: string; 
    email: string;
    linkedin: string;
    github: string;
}


export type IntroProps = {

    data: Intro;
}




//-----------------------------------------------------


export type Project = {

    id: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
    linkvideo: string;
    image: string;
    slug: string; // identificador de cada proyecto
}


export type ProjectProps = {

    projects: Project[];
}






//-----------------------------------------------------

export type ProjectCloud = {

    id: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
    linkvideo: string;
    image: string;
    slug: string; // identificador de cada proyecto
}


export type ProjectCloudProps = {

    projectscloud: ProjectCloud[];
}





//------------------------------------------------------

export type ProjectPrimer = {

    id: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
    linkvideo: string;
    image: string;
    slug: string; // identificador de cada proyecto
}


export type ProjectPrimerProps = {

    projectsprimer: ProjectPrimer[];
}




//----------------------------------------------------------------


export type Education = {

    id: string;
    title: string;
    description: string;
    startdate: string;
    link: string;
    center: string;
    slug: string; // identificador de cada centro
}

export type EducationProps = {

    educations: Education[];
}


//-----------------------------------------------------

export type skillFront = {

    id: string;
    name: string;
    level: "Basic" | "Advanced" | "Expert";
    category: String;
    image: string;
}

export type SkillFrontProps = {

    skillsFront: skillFront[];

}

//-----------------------------------------------------



export type skillBack = {

    id: string;
    name: string;
    level: "Basic" | "Advanced" | "Expert";
    category: String;
    image: string;
}

export type SkillBackProps = {

    skillsBack: skillBack[];

}


//-----------------------------------------------------



export type skillCloud = {

    id: string;
    name: string;
    level: "Basic" | "Advanced" | "Expert";
    category: String;
    image: string;
}

export type SkillCloudProps = {

    skillsCloud: skillCloud[];

}


//-----------------------------------------------------


export type skillTool = {

    id: string;
    name: string;
    level: "Basic" | "Advanced" | "Expert";
    category: String;
    image: string;
}

export type SkillToolProps = {

    skillsTool: skillTool[];

}


//-----------------------------------------------------











