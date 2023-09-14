import "../style/DesignLinks.css"

const DesignLinks = (props)=>{

    const OpenLink = (url)=>{
        window.open(url, "_blank", "noreferrer");
    }

    return (
        <button onClick={()=> OpenLink(props.behance)} class="btn-cssbuttons">
            <span className="font-oswald">Check Project</span><span>
  
            </span>
            <ul>
            <li>
                
            </li>
            <li>
                <button>
                    <i className="fa-brands fa-behance"></i>
                </button>
            </li>
            <li>
            
            </li>
            </ul>
        </button>
    )
}

export default DesignLinks