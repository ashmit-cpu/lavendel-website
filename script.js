window.addEventListener("DOMContentLoaded", (event) => {

    gsap.registerPlugin(ScrollTrigger);

    // Herosection gsap script 

    ScrollTrigger.defaults({
       
        toggleActions: "restart pause resume pause", 
    });

    const timelineHeader = gsap.timeline({
        scrollTrigger: {
            id: "ZOOM", 
            trigger: ".hero-section", 
            scrub: 1,
            start: "top top", 
            end: "+=100% 50px", 
            pin: true, 
        }
    });

    timelineHeader
        .to(".image-1", {
            scale: 1.5
        }, "sameTime")
        .to(".image-2", {
            scale: 10,
            opacity: 0
        }, "sameTime")

        .to(".text-overlay",{
            opacity: 1

        }, "sameTime")



    // We work section 

    gsap.to(" .we-work .card-container", {
        x: () => -(document.querySelector(".we-work .card-container").scrollWidth - window.innerWidth + window.innerWidth / 3) + "px",
        ease: "none",
        height: "auto",
        scrollTrigger: {
            trigger: ".we-work",
            start: "top top",
            end: () => "+=" + (document.querySelector(".we-work .card-container").scrollWidth + window.innerWidth / 2),
            pin: true,
            scrub: true,
            markers: false, 
        }
    });


    
    // Client logos images
    gsap.from(".client-logos img", {
        scale: 3, 
        opacity: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".our-clients",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
        }
    });
    gsap.from(".our-clients .content", {
        opacity: 0,

        ease: "none",
        scrollTrigger: {
            trigger: ".our-clients",
            start: "top center",
            end: "bottom top",
            
            scrub: true,
            markers: false 
        }
    });
    gsap.to(".our-clients .content", {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
            trigger: ".our-clients",
            start: "top center",
            end: "bottom top",
            
            scrub: true,
            // pin: true,
            markers: false 
        }
    });

});