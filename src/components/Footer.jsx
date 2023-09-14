const Footer = ()=>{

    const OpenLink = (url)=>{
        window.open(url, "_blank", "noreferrer");
    }

    return (
        <div className="bg-[#1b1b1b] flex justify-center py-4 font-oswald text-xl gap-4 border-t-[1px] border-[#414141]">
            <div className="bg-[#ffffff17] px-4 py-1 rounded-full">Developed By: Ahmed Mustafa</div>
            <button onClick={()=> OpenLink("https://www.instagram.com/ahmedmustafa.dev/")}>
                <i className="fa-brands fa-instagram"></i>
            </button>
            <button onClick={()=> OpenLink("https://www.ahmedmustafa.vercel.app")}>
                <i className="fa-solid fa-laptop-code"></i>
            </button>
        </div>
    )
}

export default Footer;