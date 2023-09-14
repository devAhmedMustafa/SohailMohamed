import photoshop from "../assets/photoshop.png"
import illustrator from "../assets/illustrator.png"
import indesign from "../assets/indesign.png"
import after_effects from "../assets/after-effects.png"
import html from "../assets/html-5.png"
import css from "../assets/css-3.png"
import office from "../assets/office.png"
import "../style/skills.css"


const Skills = ()=>{

    return (
        <div className="flex justify-between flex-col font-oswald lg:flex-row" id="skills">

            <div className="lg:w-[50%] text-xl bg-[#1b1b1b] p-8 rounded-md leading-8 flex flex-col gap-12 justify-center">

                <h1 className="text-5xl">About Me</h1>
                
                <p className="lg:ml-10 border-l-2 pl-4 md:px-5">
                    My name is Sohail Mohamed .
                    I am a Graphic Designer from Cairo , Egypt .
                    I have 5 years of experience in graphic design .
                    I work in many fields of design like : ( Sports Posters - Social Media Posters - Logos - Flyers - Branding - Manipulation - Motion Graphics - etc. )
                    I am distinguished by the speed of executing orders, choosing the appropriate and attractive colors, and making the work of the highest quality and the most beautiful image with the utmost dedication and love of work .
                </p>

                <h1 className="text-5xl">My Skills</h1>
                
                <div className="md:ml-10 px-5">
                    <ul className="flex flex-wrap gap-2 md:gap-4 md:justify-around">
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>InDesign</li>
                        <li>After Effects</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Microsoft Office</li>
                    </ul>
                </div>

                <h1 className="text-4xl">Conversation Languages</h1>

                <div className="ml-10 px-5">
                    <ul className="flex flex-wrap justify-around">
                        <li>English</li>
                        <li>Arabic</li>
                        <li>German</li>
                    </ul>
                </div>
                
            </div>

            <div className="w-full lg:w-[50%] flex justify-center">
                <div className="p-0 relative w-fit h-fit">
                    <img src={photoshop} alt="" className='ps w-full' />
                    <img src={illustrator} alt="" className="al absolute top-20 left-2 w-12 md:w-20 hover:w-28 transition-all tra"/>
                    <img src={indesign} alt="" className="id absolute top-0 right-60 w-12 md:w-20 hover:w-28 transition-all"/>
                    <img src={after_effects} alt="" className="ae absolute bottom-0 left-[50%] w-12 md:w-20 hover:w-28 transition-all"/>
                    <img src={html} alt="" className="html absolute top-10 right-2 w-12 md:w-20 hover:w-28 transition-all"/>
                    <img src={css} alt="" className="css absolute bottom-20 right-0 w-12 md:w-20 hover:w-28 transition-all"/>
                    <img src={office} alt="" className="office absolute bottom-10 left-2 w-12 md:w-20 hover:w-28 transition-all"/>
                </div>
            </div>
            
        </div>
    )
}

export default Skills;