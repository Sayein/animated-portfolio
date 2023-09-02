let timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
});

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

function flatmouse(){
   
let xaxis=1;
let yaxis=1;

let prevx=0;
let prevy=0;

window.addEventListener('mousemove',function(detls) {
    clearTimeout(timeout);
    xaxis=gsap.utils.clamp(0.8,1.2,detls.clientX - prevx);
    yaxis=gsap.utils.clamp(0.8,1.2,detls.clientY - prevy);

    prevx=detls.clientX;
    prevy=detls.clientY;

        mouseFollower(xaxis,yaxis);
        
    timeout=setTimeout(function () {
        document.querySelector(".follow-circle").style.transform=`translate(${detls.clientX}px, ${detls.clientY}px) scale(1,1)`;
    },100);

        });
    }

    function mouseFollower(xaxis,yaxis){
        window.addEventListener('mousemove',function(detls) {
            document.querySelector(".follow-circle").style.transform=`translate(${detls.clientX}px, ${detls.clientY}px) scale(${xaxis},${yaxis})`;
            document.querySelector(".follow-circle").style.opacity=`1`;
        });
    }

    mouseFollower();
    flatmouse();
    displacement();


document.querySelectorAll(".effect-box").forEach(
    function (elemnts) {
        let rotate=0;
        let rotatediff=0;

        elemnts.addEventListener("mouseleave", function(details){
            gsap.to(elemnts.querySelector("img"),{
                opacity:0,
                ease:Power3,
                duration:0.5,
          }); 
        });


        elemnts.addEventListener("mousemove",function (details) { 
            let ydiff=details.clientY-elemnts.getBoundingClientRect().top;
            rotatediff=details.clientX-rotate;
            rotate=details.clientX;
            gsap.to(elemnts.querySelector("img"),{
                  opacity:1,
                  ease:Power3,
                  top:ydiff,
                  left:details.clientX,
                  rotate:gsap.utils.clamp(-5,5,rotatediff),
            }); 
        });
    });