
document.addEventListener("DOMContentLoaded",()=>{
    const obs=new IntersectionObserver((e)=>{
        for(const x of e){if(x.isIntersecting)x.target.classList.add("in")}
    },{threshold:0.25});
    document.querySelectorAll(".anim").forEach(el=>obs.observe(el));
});
