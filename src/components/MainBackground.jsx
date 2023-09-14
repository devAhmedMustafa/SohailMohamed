import back from "../assets/video_back.mp4"

const MainBG = ()=>{
    return (
        <div className="h-screen overflow-hidden absolute main-bg">
            <div className="bg-[#0e0e0ebe] w-full h-full absolute"></div>
            <video autoPlay muted loop className="-z-10 object-cover h-full lg:h-auto 2xl:h-auto">
                <source src={back}/>
            </video>
        </div>
    )
}

export default MainBG