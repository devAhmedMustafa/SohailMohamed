import "../style/ExploreMe.css";

const ShowMore = ()=>{

    const ShowMore = ()=>{
        $(document).ready(function(){
            // Add smooth scrolling to all links
            $(".show").on('click', function(e) {
                e.preventDefault();
                const href = $(this).attr("href");
                $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
            });
        });
    }

    return (
        <div className="show-more flex justify-center">
            <a href="#skills" className="show" onClick={ShowMore}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#1d4ed8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Explore me
            </a>
            
        </div>
    )
}

export default ShowMore