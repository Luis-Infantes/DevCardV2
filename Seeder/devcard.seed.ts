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
                    "Welcome to DevCardStudio. This is my interactive CV, where I present my projects and my knowledge of cloud technologies and web development.",
                avatarimg: "LogoDevCardStudio.png",
                link:"/image/Luis-Infantes-CV-DevCard.pdf",
            },



            certification: [



                {

                    id: "#1",
                    title: "Power Platform Developer",
                    image: "PL-400.png",
                    date: "2026",
                    link: "https://learn.microsoft.com/es-es/users/luisinfanteslacal-7036/credentials/dc8149e10c6ba558?ref=https%3A%2F%2Fwww.linkedin.com%2F"

                },


                {
                    id: "#2",
                    title: "AWS Developer",
                    image: "DVA-C02.png",
                    date: "2026",
                    link: "https://www.credly.com/badges/6172789c-d8ea-4e13-b1b3-ae63a87b19bf/public_url"

                },

                {

                    id: "#3",
                    title: "Azure Developer",
                    image: "az-204.png",
                    date: "2026",
                    link: "https://learn.microsoft.com/es-es/users/luisinfanteslacal-7036/credentials/912029c9b430fab"

                },

                {

                    id: "#4",
                    title: "Power Platform Fundamentals",
                    image: "PL-900.png",
                    date: "2025",
                    link: "https://learn.microsoft.com/es-es/users/luisinfanteslacal-7036/credentials/e182d2f15d51e9ff?ref=https%3A%2F%2Fwww.linkedin.com%2F"

                },

            ],






            skillsfront: [
                { id: "#1", name: "HTML", category: "Front-end", image: "HTML.png" },
                { id: "#2", name: "CSS", category: "Front-end", image: "css.png" },
                { id: "#3", name: "Bootstrap", category: "Front-end", image: "Bootstrap.png" },
                { id: "#4", name: "JavaScript", category: "Front-end", image: "JS.png" },
                { id: "#5", name: "TypeScript", category: "Front-end", image: "TS.png" },
                { id: "#6", name: "React", category: "Front-end", image: "React.png" },
                { id: "#7", name: "Angular", category: "Front-end", image: "Angular.png" }
            ],
            skillsback: [
                { id: "#1", name: "C#", category: "Back-end", image: "CSharp.png" },
                { id: "#2", name: "Node.js", category: "Back-end", image: "Node.png" },
                { id: "#3", name: "ASP.NET", category: "Back-end", image: "AspNet.png" },
                { id: "#4", name: ".NET", category: "Back-end", image: "Net.png" },
                { id: "#5", name: ".NET Core", category: "Back-end", image: "NetCore.png" },
                { id: "#6", name: "Entity Framework", category: "Back-end", image: "NetFramework.png" },
                
            ],
            skillscloud: [

                { id: "#1", name: "Power Platform",  category: "cloud", image: "PowerPlat.png" },
                { id: "#2", name: "Azure",  category: "cloud", image: "Azure.png" },
                { id: "#3", name: "AWS", category: "cloud", image: "aws.png" },
                { id: "#4", name: "Power Apps", category: "cloud", image: "PowerApps.png" },
                { id: "#5", name: "Power Automate", category: "cloud", image: "PowerAuto.png" },
                { id: "#6", name: "Power BI", category: "cloud", image: "PowerBi.png" },
            ],
            skillstool: [
                { id: "#1", name: "Docker",  category: "tools", image: "Docker.png" },
                { id: "#2", name: "Insomnia",  category: "tools", image: "Insomnia.png" },
                { id: "#3", name: "Git",  category: "tools", image: "GitBash.png" },
                { id: "#4", name: "GitHub",  category: "tools", image: "GitHubLog.png" },
                { id: "#5", name: "MySQL", category: "tools", image: "SQL.png" },
                { id: "#6", name: "MongoDB", category: "tools", image: "MongoDB.png" },
                { id: "#7", name: "Visual Studio", category: "tools", image: "VisualStudio.png" },
                { id: "#8", name: "VS Code", category: "tools", image: "VisualSCode.png" },
            ],



            projects: [

                {
                    id: "#1",
                    title: "Dev Card V2",
                    description: "Interactive portfolio showcasing projects, certifications, and technical skills through a cloud-based architecture powered by React, Azure Functions, Microsoft Graph, and SharePoint.",

                    tech: ["React.png", "Azure.png","PowerPlat.png", "Node.png", "css.png","Bootstrap.png", "HTML.png"],
                    link: "https://github.com/Luis-Infantes/DevCardV2",
                    linkvideo: "#",
                    image: "DevCardV2Project.jpg",
                 
                },


                {
                    id: "#2",
                    title: "Blue Pay",
                    description: "Basic banking transaction management project, developed using the MVC pattern and deployed on Azure, leveraging Azure SQL, App Service, Service Bus, and Logic Apps for resource and process management.",
                    tech: ["NetCore.png", "Azure.png", "css.png", "Bootstrap.png", "HTML.png"],
                    link: "https://github.com/Luis-Infantes/BluePayProject",
                    linkvideo: "https://www.linkedin.com/posts/luis-infantes-artdesign_azure-mvc-asp-activity-7447556741376020480--yTz?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIU7MkBwS6rReTXpX251bZXD676xSBMVlg",
                    image: "BluePayProject.jpg",
                   
                },


                {
                    id: "#3",
                    title: "A la Carte",
                    description: "This Power Platform solution automates restaurant orders from the table to the service, manages recipe inventory, and provides statistical reports using apps and workflows.",
                    tech: ["PowerPlat.png", "PowerApps.png", "PowerAuto.png", "PowerBi.png"],
                    link: "",
                    linkvideo: "https://www.linkedin.com/posts/luis-infantes-artdesign_powerplatform-powerapps-powerautomate-ugcPost-7475166021025202176-TlbJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIU7MkBwS6rReTXpX251bZXD676xSBMVlg",
                    image: "ALaCarte.jpg",
                  
                },


                {
                    id: "#4",
                    title: "Turbo Point",
                    description: "Angular-based application focused on dynamic tables, filtering, and automated price calculations. Built using TypeScript, Bootstrap, HTML, and CSS to gain hands-on experience with Angular development.",
                    tech: ["Angular.png", "TS.png", "Bootstrap.png", "HTML.png", "css.png"],
                    link: "https://github.com/Luis-Infantes/turboPoint",
                    linkvideo: "https://www.linkedin.com/posts/luis-infantes-artdesign_angular-typescript-bootstrap-activity-7429809856238235648-b81z?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIU7MkBwS6rReTXpX251bZXD676xSBMVlg",
                    image: "TurboPointProject.jpg",
                   
                },


                {
                    id: "#5",
                    title: "C.R.O.M.E Play",
                    description: "Game store event management system built with ASP.NET Core MVC, featuring event organization, member registration, database integration, and customer profile management.",
                    tech: ["NetCore.png", "JS.png", "Bootstrap.png", "css.png", "HTML.png"],
                    link: "https://github.com/Luis-Infantes/CROME-Play",
                    linkvideo: "https://www.linkedin.com/posts/luis-infantes-artdesign_mvc-csharp-javascript-activity-7414960980377591808-TzBi?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIU7MkBwS6rReTXpX251bZXD676xSBMVlg",
                    image: "CromePlayProject.jpg",
                    
                },


                {
                    id: "#6",
                    title: "Bit-School",
                    description: "This Angular project provides a much broader perspective on what I have learned about the framework. In this small application, we manage CRUD operations for a computer training academy.",
                    tech: ["Angular.png", "TS.png", "css.png", "Bootstrap.png", "HTML.png"],
                    link: "https://github.com/Luis-Infantes/BitSchoolProject",
                    linkvideo: "https://lnkd.in/p/eq7VXv-b",
                    image: "BitSchoolProject.jpg",
                  
                },


                {
                    id: "#7",
                    title: "Popular Groups",
                    description: "A small interface for listing fictional bands, displaying their details and a list of concerts, all interconnected. It helped me greatly in taking my first steps with the MVC pattern.",
                    tech: ["Net.png", "css.png", "HTML.png"],
                    link: "https://github.com/Luis-Infantes/PopularGroupsProject",
                    linkvideo: "https://www.linkedin.com/posts/luis-infantes-artdesign_mvc-csharp-fullstackdevelopment-activity-7397199942424899584--UJ8?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIU7MkBwS6rReTXpX251bZXD676xSBMVlg",
                    image: "PopularGroupsProject.jpg",
                    
                },


                {
                    id: "#8",
                    title: "Social Home",
                    description: "Residential community platform where users can manage personal profiles and communicate through a shared chat system. Built with JavaScript, HTML, and CSS.",
                    tech: ["JS.png", "css.png", "HTML.png"],
                    link: "https://github.com/Luis-Infantes/social-home",
                    linkvideo: "https://www.linkedin.com/posts/luis-infantes-artdesign_fullstack-cloud-desarrolloweb-activity-7378727767246286848-akHA?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIU7MkBwS6rReTXpX251bZXD676xSBMVlg",
                    image: "SocialHomeProject.jpg",
                    
                },



            ],


            professionaltrajectory: [

                { id: "13", img: "Diploma.png", date: "Oct - 2026", description: "Course - A2 English (Busuu)" },
                { id: "12", img: "Diploma.png",date: "Aug - 2026", description: "Course - A1 English (Busuu)" },
                { id: "11", img:"MasterTitle.png", date: "Jul - 2026", description:"Master - Full-Stack Development & Cloud Architectures (Tajamar)" },
                { id: "10", img: "Certificate.png", date: "Jun - 2026", description:"Certification - Power Platform Associate (Microsoft)" },
                { id: "9", img: "Certificate.png", date: "May - 2026", description:"Certification - AWS Associate (AWS)" },
                { id: "8", img: "Certificate.png", date: "Apr - 2026", description:"Certification - Azure Associate (Microsoft)" },
                { id: "7", img: "Certificate.png", date: "2025", description:"Certification - Power Platform Fundamentals (Microsoft)" },
                { id: "6", img: "Diploma.png", date: "2024", description:"Course - Power Apps (Udemy)" },
                { id: "5", img: "Diploma.png", date: "2024", description:"Course - Power Automate (Udemy)" },
                { id: "4", img: "Diploma.png", date: "2024", description:"Course - Power Pages (Udemy)" },
                { id: "3", img: "Diploma.png", date: "2024", description:"Course - Power Platform (Udemy)" },
                { id: "2", img: "MasterTitle.png", date: "2013", description:"Master - Web Development (CEI)" },
                { id: "1", img: "MasterTitle.png", date: "2012", description:"Master - Web Design (CEI)" },
                





            ],


            formaleducation: [
                {
                    id: "#1",
                    title: "Master Full-Stack Development & Cloud Architectures",
                    description: "Training in Front‑End web development with Angular and React; Back‑End programming with C# and Node.js; database development with SQL Server, data access, and Entity Framework; web application development with ASP.NET Core; creation of cloud solutions in Microsoft Azure aligned with the AZ‑204 certification and in Amazon Web Services aligned with the DVA‑C02 certification; and development of enterprise solutions with Power Platform focused on the PL‑400 certification.",
                    image: "Tajamar.png",
                    link: "/image/Master_Desarrollo_FullStack_Tajamar.pdf",
                    startdate: "2025 - 2026",
                   
                    
                },





                {
                    id: "#2",
                    title: "Master Web Development",
                    description: "Master in Web Development, focused on building dynamic applications and websites using PHP, HTML5, CSS3, and MySQL. It included the use of Apache as the web server and Atom as the primary code editor.",
                    link:"/image/CEICDW2.jpeg",
                    image: "CEI.png",
                    startdate: "2013",
                  
                },


                {
                    id: "#3",
                    title: "Master Web Design",
                    description: "Master in Web Design, focused on creating user interfaces and website layouts using HTML5 and CSS3. The training covered responsive design principles, semantic structure, web accessibility, and best practices for layout design.",
                    link: "/image/CEICDW1.jpeg",
                    image: "CEI.png",
                    startdate: "2012",
                   
                },



            ],


            additionaltraining: [


                {
                    id: "#1",
                    title: "Power Apps, Power Automate, and Power Pages",
                    description: "Additional training in Power Platform through Udemy courses, where I deepened my practical knowledge of Power Platform, Power Apps, Power Automate, and Power Pages. Although these courses were not official certifications, they provided a solid foundation and hands-on experience that I later strengthened and formalized while preparing for the PL-900 certification through Microsoft Learn's official learning paths.",
                    link: "/image/UdemyC.jpg",
                    image: "Udemy.png",
                    startdate: "2024",
                   
                },




            ],


            language: [



                {
                    id: "#1",
                    image: "language.png",
                    title: "English",
                    level: "A2",
                    link: "/image/A2.pdf",
                   

                },


            ],



            network: [


                {
                    id: "#1",
                    image: "linkedin.png",
                    title: "Linkedin",
                    link: "https://linkedin.com/in/luis-infantes-artdesign",

                },

                {
                    id: "#2",
                    image: "github.png",
                    title: "Github",
                    link: "https://github.com/Luis-Infantes",

                },


            ]

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
 




