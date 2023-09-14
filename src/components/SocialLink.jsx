import "../style/SocialLink.css";

const SocialLink = (props)=>{

    const OpenLink = (url)=>{
        window.open(url, "_blank", "noreferrer");
    }

    return (

        <button className="cont" onClick={()=> OpenLink(props.url)}>

            <span className={`btn1 ${props.app}`}><i className={`fa-brands fa-${props.app} text-xl text-black`}></i></span>

            <span className="tooltiptext1">
                <div className="card">
                    
                </div>
                <div className="username text-black">@{props.username}</div>
            </span>
        </button>

    )
}

export default SocialLink