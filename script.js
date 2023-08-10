const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function mouseFollower(){
    window.addEventListener('mousemove',function(details) {
        document.querySelector(".follow-circle").style.transform=`translate(${details.clientX}px, ${details.clientY}px)`;
    })
}

function displacement(){
    let timel=gsap.timeline();

    timel.to(".nav",{
        y:'0',
        opacity:1,
        duration:0.5,
        ease: Expo.easeInOut
    })

    .to(".displacement-elem",{
        y:0,
        duration:0.5,
        ease: Expo.easeInOut,
        stagger:0.2
    })
    
}

mouseFollower();
displacement();