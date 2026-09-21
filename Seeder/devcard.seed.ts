import "dotenv/config";
import { ClientSecretCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";


async function seed() {

    


    const credential = new ClientSecretCredential(

        process.env.TENANT_ID!,
        process.env.CLIENT_ID!,
        process.env.CLIENT_SECRET!

    );

   

    const token = await credential.getToken(
        "https://graph.microsoft.com/.default"
    );

   





    

    

        const devCard = {
            intro: {
                
                fullname: "Luis Infantes Lacal",
                title: "Hybrid Software Developer | Azure | AWS | Power Platform | React | Angular | C# | .NET Core | Node",
                description:
                    "Welcome to DevCard. This is my interactive CV, where I present my projects and my knowledge of cloud technologies and web development.",
                powerPlatformCertification: "PL-400.png",
                azureCertification: "az-204.png",
                awsCertification: "DVA-C02.png",
                avatarimg: "avatar.png",
                email: "LuisInfantesLacal@outlook.es",
                linkedin: "linkedin.com/in/luis-infantes-artdesign",
                github: "github.com/Luis-Infantes",
            },



            projectscloud: [


                {
                    id: "#1",
                    title: "Dev Card",
                    description: "This project is an interactive CV in which we are currently situated. Its interface is designed as a visual experience, allowing users easy access to all my work and the knowledge I acquire day by day. Through this project, I learned how to build a complete application, using React for the front end and Node.js for the back end. The database is hosted on MongoDB Atlas. The front end is uploaded to my GitHub repository, which I used to connect with my Render account in order to deploy the back end and publish the application.",
                    tech: ["React", "Node", "MongoDB", "Bootstrap", "HTML"],
                    link: "https://github.com/Luis-Infantes/DevCardWeb",
                    linkvideo: "https://www.youtube.com/watch?v=kczaty4Xf-g&t=7s",
                    image: "DevCard.png",
                    slug: "devcard"
                },


                {
                    id: "#2",
                    title: "Blue Pay",
                    description: "Basic banking transaction management project, developed using the MVC pattern and deployed on Azure, leveraging Azure SQL, App Service, Service Bus, and Logic Apps for resource and process management.",
                    tech: ["MVC", "Azure", "CSS", "HTML"],
                    link: "https://github.com/Luis-Infantes/BluePayProject",
                    linkvideo: "https://www.linkedin.com/posts/luis-infantes-artdesign_azure-mvc-asp-activity-7447556741376020480--yTz?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIU7MkBwS6rReTXpX251bZXD676xSBMVlg",
                    image: "bluePay.png",
                    slug: "bluepay"
                },


                {
                    id: "#3",
                    title: "A la Carte",
                    description: "This Power Platform solution automates restaurant orders from the table to the service, manages recipe inventory, and provides statistical reports using apps and workflows.",
                    tech: ["Power Apps", "Power Automate", "Power Bi"],
                    link: "",
                    linkvideo: "https://www.linkedin.com/posts/luis-infantes-artdesign_powerplatform-powerapps-powerautomate-ugcPost-7475166021025202176-TlbJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIU7MkBwS6rReTXpX251bZXD676xSBMVlg",
                    image: "logoTFM.png",
                    slug: "alacarte"
                },




            ],



            projects: [




                {
                    id: "#1",
                    title: "Turbo Point",
                    description: "It is a small project developed in Angular, aimed at practicing the use of dynamic tables, filters, and the automatic recalculation of prices when applying surcharges and discounts. Through this project, I learned how application development works in Angular.",
                    tech: ["Angular", "TypeScript", "Bootstrap", "HTML", "CSS"],
                    link: "https://github.com/Luis-Infantes/turboPoint",
                    linkvideo: "https://www.linkedin.com/posts/luis-infantes-artdesign_angular-typescript-bootstrap-activity-7429809856238235648-b81z?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIU7MkBwS6rReTXpX251bZXD676xSBMVlg",
                    image: "turboPoint.jpg",
                    slug: "turbopoint"
                },


                {
                    id: "#2",
                    title: "C.R.O.M.E Play",
                    description: "C.R.O.M.E Play is an application designed to manage different events for a game store. Profiles can be created for each type of game, allowing users to create, edit, and delete all kinds of events. In addition, member or customer profiles can be registered to manage personal data and sign up for these events. This project helped me learn how to build an ASP.NET Core MVC application and how to work with a database within the same project.",
                    tech: [ "MVC","ASP.NET Core", "JavaScript", "Bootstrap", "HTML"],
                    link: "https://github.com/Luis-Infantes/CROME-Play",
                    linkvideo: "https://www.linkedin.com/posts/luis-infantes-artdesign_mvc-csharp-javascript-activity-7414960980377591808-TzBi?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIU7MkBwS6rReTXpX251bZXD676xSBMVlg",
                    image: "CromePlay.png",
                    slug: "cromeplay"
                },


                {
                    id: "#3",
                    title: "Bit-School",
                    description: "This Angular project provides a much broader perspective on what I have learned about the framework. In this small application, we manage CRUD operations for a computer training academy.",
                    tech: ["Angular", "TypeScript", "CSS", "HTML"],
                    link: "https://github.com/Luis-Infantes/BitSchoolProject",
                    linkvideo: "https://www.linkedin.com/posts/luis-infantes-artdesign_mvc-csharp-fullstackdevelopment-activity-7397199942424899584--UJ8?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIU7MkBwS6rReTXpX251bZXD676xSBMVlg",
                    image: "bitSchool.png",
                    slug: "bitschool"
                },


            ],

            projectsprimer: [



                {
                    id: "#1",
                    title: "Popular Groups",
                    description: "A small interface for listing fictional bands, displaying their details and a list of concerts, all interconnected. It helped me greatly in taking my first steps with the MVC pattern.",
                    tech: ["MVC", "ASP.NET", "CSS", "HTML"],
                    link: "https://github.com/Luis-Infantes/PopularGroupsProject",
                    linkvideo: "https://www.linkedin.com/posts/luis-infantes-artdesign_mvc-csharp-fullstackdevelopment-activity-7397199942424899584--UJ8?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIU7MkBwS6rReTXpX251bZXD676xSBMVlg",
                    image: "popularGroups.png",
                    slug: "populargroups"
                },


                {
                    id: "#2",
                    title: "Social Home",
                    description: "Social Home is an application project designed to manage different events within a residential community. After prior registration, users can access an interface where they can manage personal data and write messages in a community chat.",
                    tech: ["JavaScript", "CSS", "HTML"],
                    link: "https://github.com/Luis-Infantes/social-home",
                    linkvideo: "https://www.linkedin.com/posts/luis-infantes-artdesign_fullstack-cloud-desarrolloweb-activity-7378727767246286848-akHA?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIU7MkBwS6rReTXpX251bZXD676xSBMVlg",
                    image: "SocialHome.png",
                    slug: "socialhome"
                },




            ],



            education: [
                {
                    id: "#1",
                    title: "Master Full-Stack Development & Cloud Architectures",
                    description: "Training in Front‑End web development with Angular and React; Back‑End programming with C# and Node.js; database development with SQL Server, data access, and Entity Framework; web application development with ASP.NET Core; creation of cloud solutions in Microsoft Azure aligned with the AZ‑204 certification and in Amazon Web Services aligned with the DVA‑C02 certification; and development of enterprise solutions with Power Platform focused on the PL‑400 certification.",
                    center: "Tajamar.png",
                    link: "/image/Master_Desarrollo_FullStack_Tajamar.pdf",
                    startdate: "2025 - 2026",
                    slug: "tajamar"
                    
                },


                {
                    id: "#2",
                    title: "Power Apps, Power Automate, and Power Pages",
                    description: "Formación complementaria en Power Platform a través de cursos de Udemy, donde profundicé en el uso práctico de Power Apps, Power Automate y Power Pages. Aunque no son certificaciones oficiales, estos cursos me proporcionaron una base sólida y experiencia aplicada que posteriormente reforcé y formalicé preparando la certificación PL‑900 a través de las rutas oficiales de Microsoft Learn.",
                    link:"/image/UdemyC.jpg",
                    center: "Udemy.png",
                    startdate: "2024",
                    slug: "udemy"
                },


                {
                    id: "#3",
                    title: "Master Web Development",
                    description: "Master in Web Development, focused on building dynamic applications and websites using PHP, HTML5, CSS3, and MySQL. It included the use of Apache as the web server and Atom as the primary code editor.",
                    link:"/image/CEICDW2.jpeg",
                    center: "CEI.png",
                    startdate: "2013",
                    slug: "cei"
                },


                {
                    id: "#4",
                    title: "Master Web Design",
                    description: "Master in Web Design, focused on creating user interfaces and website layouts using HTML5 and CSS3. The training covered responsive design principles, semantic structure, web accessibility, and best practices for layout design.",
                    link: "/image/CEICDW1.jpeg",
                    center: "CEI.png",
                    startdate: "2012",
                    slug: "cei"
                },



                {
                    id: "#5",
                    title: "Power Platform Developer",
                    description: "Power Platform Developer certification validates the technical skills to design, develop, and extend complex business solutions within the Microsoft Power Platform ecosystem, demonstrating expertise in app customization, process automation, and external systems integration through custom code and cloud services.",
                    link: "https://learn.microsoft.com/es-es/users/luisinfanteslacal-7036/credentials/dc8149e10c6ba558?ref=https%3A%2F%2Fwww.linkedin.com%2F",
                    center: "PL-400.png",
                    startdate: "2026",
                    slug: "certificates"
                },


                {
                    id: "#6",
                    title: "AWS Certified Developer",
                    description: "The AWS Certified Developer - Associate (DVA-C02) certification validates the technical skills to design, develop, and maintain cloud-based applications on Amazon Web Services, demonstrating expertise in writing optimized code, using serverless services, implementing security practices, and efficiently deploying solutions on the AWS infrastructure.",
                    link: "https://www.credly.com/badges/6172789c-d8ea-4e13-b1b3-ae63a87b19bf/public_url",
                    center: "DVA-C02.png",
                    startdate: "2026",
                    slug: "certificates"
                },



                {
                    id: "#7",
                    title: "Azure Developer Associate",
                    description: "The Microsoft Certified: Azure Developer Associate (AZ-204) certification validates the technical skills to design, build, test, and maintain cloud applications and services on Microsoft Azure, demonstrating expertise in developing storage solutions, implementing security, optimizing performance, and integrating compute and third-party services in the cloud.",
                    link: "https://learn.microsoft.com/api/credentials/share/es-es/LuisInfantesLacal-7036/912029C9B430FAB?sharingId=BD8D51D6F5F5B864",
                    center: "az-204.png",
                    startdate: "2026",
                    slug: "certificates"
                },


                {
                    id: "#8",
                    title: "Power Platform Fundamentals",
                    description: "The Microsoft Certified: Power Platform Fundamentals (PL-900) certification validates foundational knowledge of the capabilities and business value of Microsoft Power Platform, demonstrating an initial understanding of creating simple applications, automating business processes, analyzing data, and using artificial intelligence tools without the need for deep coding.",
                    link: "https://learn.microsoft.com/es-es/users/luisinfanteslacal-7036/credentials/e182d2f15d51e9ff?ref=https%3A%2F%2Fwww.linkedin.com%2F",
                    center: "PL-900.png",
                    startdate: "2025",
                    slug: "certificates"
                },



            ],
            skillsfront: [
                { id: "#1", name: "HTML", level: "Advanced", category: "Front-end", image: "HTML.png" },
                { id: "#2", name: "CSS / Bootstrap", level: "Advanced", category: "Front-end", image: "css.png" },
                { id: "#3", name: "JavaScript", level: "Advanced", category: "Front-end", image: "JS.png" },
                { id: "#4", name: "TypeScript", level: "Advanced", category: "Front-end", image: "TS.png" },
                { id: "#5", name: "React", level: "Advanced", category: "Front-end", image: "React.png" },
                { id: "#6", name: "Angular", level: "Advanced", category: "Front-end", image: "Angular.png" }
            ],
            skillsback: [
                { id: "#1", name: "C#", level: "Advanced", category: "Back-end", image: "CSharp.png" },
                { id: "#2", name: ".NET", level: "Advanced", category: "Back-end", image: "Net.png" },
                { id: "#3", name: "Entity Framework Core", level: "Advanced", category: "Back-end", image: "NetCore.png" },
                { id: "#4", name: "Node.js", level: "Advanced", category: "Back-end", image: "Node.png" },
            ],
            skillscloud: [
                { id: "#1", name: "Power Apps", level: "Advanced", category: "cloud", image: "PowerApps.png" },
                { id: "#2", name: "Power Automate", level: "Advanced", category: "cloud", image: "PowerAuto.png" },
                { id: "#3", name: "Power BI", level: "Advanced", category: "cloud", image: "PowerBi.png" },
                { id: "#4", name: "Power Platform", level: "Advanced", category: "cloud", image: "PowerPlat.png" },
                { id: "#5", name: "Azure", level: "Advanced", category: "cloud", image: "Azure.png" },
                { id: "#6", name: "Amazon Web Service", level: "Advanced", category: "cloud", image: "aws.png" },
            ],
            skillstool: [
                { id: "#1", name: "Docker", level: "Basic", category: "tools", image: "Docker.png" },
                { id: "#2", name: "Insomnia", level: "Advanced", category: "tools", image: "Insomnia.png" },
                { id: "#3", name: "Git", level: "Advanced", category: "tools", image: "GitBash.png" },
                { id: "#4", name: "GitHub", level: "Advanced", category: "tools", image: "GitHub.png" },
                { id: "#5", name: "Visual Studio", level: "Advanced", category: "tools", image: "VisualStudio.png" },
                { id: "#6", name: "Visual Studio Code", level: "Advanced", category: "tools", image: "VisualSCode.png" },
                { id: "#7", name: "My SQL", level: "Advanced", category: "tools", image: "SQL.png" },
                { id: "#8", name: "MongoDB", level: "Advanced", category: "tools", image: "MongoDB.png" },
            ],
    }




    const jsonData = JSON.stringify(devCard);

    const response = await fetch(
        `https://graph.microsoft.com/v1.0/sites/${process.env.SITE_ID}/lists/${process.env.LIST_ID}/items/1/fields`,
        {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token?.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                JsonData: jsonData
            })
        }
    );

    console.log(response.status);



}

seed()
 




