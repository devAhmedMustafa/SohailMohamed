import SocialLink from "./SocialLink"

const Navbar = ()=>{

    const SendGmail = ()=>{
        const url = "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmVgvGLWNFjPrCWnXxMRvRjwqzLvwKtzTqKsbbVbttXcmQjCljdNFFTcCgMfhgphlBKBWg";
        window.open(url, "_blank", "noreferrer");
    }

    return (

        <div className="flex justify-between items-center w-full">
            <span className="font-oswald text-2xl hidden lg:block"><span>Graphic Designer</span> &#9679; Where Creativity is unlimited</span>

            <button onClick={SendGmail} className="font-oswald gap-3 py-2 px-5 bg-white items-center rounded-full hidden md:flex">
                <span className="hidden lg:block text-black">Email Me</span>
                <i className="fa-solid fa-envelope text-black"></i>
            </button>

            <div className="flex md:gap-5 justify-around w-full md:w-fit">
                <SocialLink username="super_sohail_10" app="behance"
                url="https://www.behance.net/Super_Sohail_10"/>
                <SocialLink username="super.sohail110" app="facebook"
                url="https://www.facebook.com/Super.Sohail110/"/>
                <SocialLink username="super_sohail_10" app="x-twitter"
                url="https://twitter.com/Super_Sohail_10"/>
                <SocialLink username="super_sohail_10" app="instagram"
                url="https://www.instagram.com/super_sohail_10/"/>
                <SocialLink username="super_sohail" app="linkedin"
                url="https://www.linkedin.com/in/super-sohail/"/>
                <SocialLink username="Sohail_Mohamed" app="whatsapp"
                url="https://api.whatsapp.com/send?phone=201100995529"/>
            </div>

        </div>
   
    )
}

export default Navbar