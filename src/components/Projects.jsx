import project1 from "../assets/projects/288195850_2078830708953354_6884361717487755349_n.jpg"
import logo1 from "../assets/logos/Logo Otohô PDF_.png"
import DesignLinks from "./DesignLinks"
import project2 from "../assets/projects/299116817_2123334451169646_3545464982896329798_n.jpg"
import logo2 from "../assets/logos/lacsa.png"
import project3 from "../assets/projects/310600365_2166988183470939_129424833818857034_n.jpg"
import logo3 from "../assets/logos/new logo white final.png"
import project4 from "../assets/projects/316277222_2208711792631911_7521905798783844156_n.jpg"
import project5 from "../assets/projects/PROJECT COVER 2020-2021.png"
import project6 from "../assets/projects/cover.png"
import project7 from "../assets/projects/338375601_561725136054277_6572340031902788472_n.jpg";
import logo7 from "../assets/logos/WhatsApp Image 2023-05-27 at 8.12.25 PM.png";

const ProjectsContainer = ()=>{
    return (
        <div className="font-oswald">
            <h1 className="text-6xl">Portfolio</h1>
            <div className="p-6 flex flex-wrap justify-center gap-5 bg-[#1b1b1b]">
                <ProjectCard img={project1} logo={logo1} title="AS OTOHO CLUB IDENTITY"
                behance="https://www.behance.net/gallery/145597271/AS-OTOHO-CLUB-IDENTITY"/>

                <ProjectCard img={project2} logo={logo2} title="LACASADELTIFOSO PAGE WORKS"
                behance="https://www.behance.net/gallery/149976893/LACASADELTIFOSO-PAGE-WORKS"/>

                <ProjectCard img={project5} logo={logo3} title="ARAB CONTRACTORS FC 2020-2021"
                behance="https://www.behance.net/gallery/128586561/My-Work-for-ARAB-CONTRACTORS-FC-(-2020-2021-)-Season"/>

                <ProjectCard img={project3} logo={logo3} title="ARAB CONTRACTORS FC 2021-2022"
                behance="https://www.behance.net/gallery/151502913/My-Work-for-ARAB-CONTRACTORS-FC-(-2021-2022-)-Season"/>

                <ProjectCard img={project6} logo={logo3} title="ARAB CONTRACTORS FC 2022-2023"
                behance="https://www.behance.net/gallery/179214687/My-Work-for-ARAB-CONTRACTORS-FC-(-2022-2023-)-Season"/>

                <ProjectCard img={project4} logo="https://logodownload.org/wp-content/uploads/2018/07/world-cup-2022-logo-2.png" title="Qatar World Cup 2022"
                behance="https://www.behance.net/gallery/157331363/The-predicted-champions-of-the-Qatar-2022-World-Cup"/>

                <ProjectCard img={project7} logo={logo7} title="Fc Rheinfelden & Fc Stein Official"
                behance="https://www.behance.net/gallery/167063647/Fc-Rheinfelden-Fc-Stein-Official-Identities"/>
                
                
            </div>
        </div>
    )
}

const ProjectCard = (props)=>{
    return (
        <div className="w-full h-[300px] lg:w-[30%] overflow-hidden relative flex border-2 rounded-md project-box">

            <div className="slider-back absolute z-10 h-full bg-[#222222] w-0">
                <div className="absolute w-10 h-80 bg-blue-800 top-0 left-40 rotate-45 rounded-full"></div>
                <div className="absolute w-14 h-80 bg-indigo-800 top-20 left-40 -rotate-45 rounded-full"></div>
            </div>
            
            <img src={props.img} alt="" className="object-cover w-full blur-sm"/>

            <div className="z-10 absolute bg-[#181818d2] w-full h-full p-4 flex flex-row justify-between details-box">

                <img src={props.logo} className="max-w-[25%] md:max-w-[50%] object-contain -rotate-12 logo" alt="" />  

                <div className="flex items-center w-full justify-center flex-col gap-8">
                    <h1 className="text-2xl text-center">{props.title}</h1>
                    <DesignLinks behance={props.behance}/>
                    
                </div>

            </div>

        </div>
    )
}

export default ProjectsContainer