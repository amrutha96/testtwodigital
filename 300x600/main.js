// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    var bannerText = document.querySelector('.banner-text');
    var logo = document.querySelector('.logo');

    // Animation for banner text
    gsap.from(bannerText, {
        duration: 1.5,
        y: -100,
        opacity: 0,
        ease: "power2.out"
    });

    // Animation for logo
    gsap.from(logo, {
        duration: 1.5,
        x: 100,
        opacity: 0,
        ease: "power2.out",
        delay: 0.5 
    });
    gsap.to(".proffesional", {
        top: "10px",
        left: "10px",
        duration: 1,
    });
    // Create a GSAP timeline
    var tl = gsap.timeline();
    tl.to(".bulb", {
            opacity: 1,
            top: "calc(18% - 110px)", // Position just above the banner text
            duration: 0.5,
            ease: "power2.out",
            delay: 1.5,
            onComplete: function () {
                var filament = document.querySelector("#filament"); // Select the filament path
                var t4 = gsap.timeline({
                    repeat: -1,
                    repeatDelay: 1
                }); // Repeat the animation indefinitely with a delay of 1 second between repeats

                var flickerDuration = 0.1;

                // Add animations to the timeline
                t4.to(filament, {
                        duration: flickerDuration,
                        fill: "#fff"
                    }) // Change fill color to white quickly
                    .to(filament, {
                        duration: flickerDuration,
                        fill: "#000",
                        delay: flickerDuration
                    }) // Change fill color back to black quickly after a short delay
                    .to(filament, {
                        duration: flickerDuration,
                        fill: "#fff",
                        delay: flickerDuration * 2
                    }) // Flicker to white again
                    .to(filament, {
                        duration: flickerDuration,
                        fill: "#000",
                        delay: flickerDuration * 3
                    }) // Flicker to black again
                    // Gradually increase flicker duration until it stays white
                    .to(filament, {
                        duration: flickerDuration * 2,
                        fill: "#fff",
                        delay: flickerDuration * 4
                    })
                    // After flickering, set the fill color to white and stop the animation
                    .to(filament, {
                        duration: 0,
                        fill: "#fff"
                    });
            }
        })
        .to(".bulb", {
            top: "calc(25% - 120px)", // Adjust the final position slightly above the banner text
            duration: 1,
            yoyo: true,
            repeat: 1,
            ease: "bounce.out",
            onComplete: function () {
                gsap.to(".smaller-text", {
                    opacity: 1,
                    duration: 1,
                    delay: 0.5 
                });
            }
        })
        .to(".bulb", {
            opacity: 0, 
            y: -200, 
            duration: 1, 
            delay: 2 
        })
        .to(".banner-frame, .proffesional", {
            opacity: 0, 
            duration: 1,
            ease: "power2.out"
        })
        .to(".car", {
            opacity: 1,
            top: "calc(22% - 110px)", 
            duration: 0.5,
            ease: "power2.out",
        })
        .to(".text3", {
            duration: 1,
            opacity: 1,
            ease: "power2.out"
        })
        .to(".text4", {
            opacity: 1,
            duration: 1.5,
            ease: "power2.out"
        })
        .to(".btn-cta", {
            opacity: 1,
            duration: 2.5,
            ease: "power2.out"
        })
        .to(".arrow", {
            x: 5, // Move the arrow to the right by 10 pixels
            duration: 0.5, 
            repeat: -1, 
            yoyo: true, 
            ease: "power1.inOut" 
        })
        .to(".important-info", {
            opacity: 1,
            duration: 2.5,
            ease: "power2.out"
        });
    var showDisclaimerBtn = document.getElementById("important-info");
    var closeDisclaimerBtn = document.getElementById("closeDisclaimerBtn");
    var disclaimer = document.getElementById("disclaimer");

    // Animation to slide in the disclaimer
    function showDisclaimer() {
        gsap.to(disclaimer, {
            left: 0, 
            duration: 0.5, 
            opacity: 1
        });
    }

    // Animation to slide out the disclaimer
    function hideDisclaimer() {
        gsap.to(disclaimer, {
            left: -300, 
            duration: 0.5, 
            opacity: 0
        });
    }

    // Event listeners for the buttons
    showDisclaimerBtn.addEventListener("click", showDisclaimer);
    closeDisclaimerBtn.addEventListener("click", hideDisclaimer);
});