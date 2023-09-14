import "../style/floatingtags.css"
import GraphicArt from "./Monalisa";
import { useEffect } from "react";
import "../style/Animations.css";
import fiverr from "../assets/fiverr.png"
import upwork from "../assets/upwork.png";

const Intro = ()=>{

    useEffect(()=>{
        window.onload = ()=>{
            document.querySelector('.sohail').classList += 'title_anim';
            document.querySelector('.mohamed').classList += 'title_anim';
        }
    })

    const OpenLink = (url)=>{
        window.open(url, "_blank", "noreferrer");
    }

    return (
        <div className="font-oswald flex-col md:flex-row items-center gap-8 font-extrabold p-10 xl:p-20 2xl:p-40 relative flex justify-between 2xl:pb-12">

            <GraphicArt/>
    
            <div className="relative w-fit flex flex-col gap-6 items-center">

                <h1 className="text-5xl md:text-7xl flex justify-center gap-2 2xl:flex-col 2xl:text-9xl w-full overflow-hidden name">
                    <span className="sohail translate-x-96">Sohail </span>
                    <span className="mohamed translate-x-96">Mohamed</span>
                </h1>

                <div className="hidden md:block">

                    <div className="floating-tags flex gap-4 font-medium">
                        <span>Creativity</span>
                        <span>Exclusivity</span>
                        <span>Professional</span>
                        <span>Problem Solving</span>
                        <span>Passionate</span>
                        
                        
                    </div>
                    <div className="floating-tags flex gap-4 font-medium">                
                        <span>Colloring</span>
                        <span>Motion Graphics</span>
                        <span>Illustration</span>
                        <span>Manipulation</span>     
                        <span>Attractive</span>
                        <span>Quality</span>   
                    </div>
                    <div className="floating-tags flex gap-4 font-medium">
                        <span>Sports</span>
                        <span>Social Media Poster</span>
                        <span>Branding</span>
                    </div>
                </div>

                <button onClick={()=> OpenLink("https://www.fiverr.com/sohailmohamed")} className="flex cursor-pointer items-center gap-6 px-6 py-2 border-2 rounded-full justify-center relative overflow-hidden fiverr-hire">
                    <div className="w-0 h-full absolute bg-white -z-10 transition-all duration-[0.2s]"></div>
                    <h1 className="text-xl md:text-3xl transition-all duration-500">HIRE ME NOW!</h1>
                    <button onClick={()=> OpenLink("https://www.fiverr.com/sohailmohamed")}>
                        <img src={fiverr} className="w-8 md:w-12" alt="" />
                    </button>
                    <button onClick={()=> OpenLink("https://www.upwork.com/freelancers/~01cd36f97dee19a70f")}>
                        <img src={upwork} className="w-8 md:w-12" alt="" />
                    </button>
                </button>

            </div>

            

        </div>
    )
}

export default Intro;