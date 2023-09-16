import DesignLinks from "./DesignLinks"

import axios from "axios"
import { useEffect, useState } from "react"

const ProjectsContainer = ()=>{

    const [projects, setProjects] = useState([])

    const fetchProjects = async ()=>{
        const res = await axios.get('http://sohailmohamed.onrender.com/projects')
    }

    useEffect(()=>{
        fetchProjects().then((res)=> setProjects(res.data)).catch((err)=> console.error(err))
    }, [])

    return (
        <div className="font-oswald">
            <h1 className="text-6xl">Portfolio</h1>
            <div className="p-6 flex flex-wrap justify-center gap-5 bg-[#1b1b1b]">

                { projects.map((p)=> 
                    <ProjectCard img={p.cover} logo={p.logo} title={p.title}
                    behance={p.behance}/>
                )}

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