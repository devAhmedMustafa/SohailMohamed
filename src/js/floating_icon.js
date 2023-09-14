const floating = async (icon, posY)=>{
    window.onscroll = ()=>{
        icon.style.top = `${ window.scrollY - 640 + posY }px`;
    }
}

export default floating;