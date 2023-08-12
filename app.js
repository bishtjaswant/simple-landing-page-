
// add smooth scrolling 
let scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});



//gsap animation
function gsapAnimation() {
    let tl = gsap.timeline();
    tl.
    from("#nav",    {
        duration: 1.1,
        opacity: 0,
        y: -10, 
        ease: Expo.easeInOut,
    })
    .to(".anim_element_text",    {
        duration: 2, 
        y: "0", 
        ease: Expo.easeInOut,
        stagger: .2
    })
    .from(".heading_footer",    {
        y: -10,
        duration: 1.1, 
        opacity: 0,
        delay: .1,
        ease: Expo.easeInOut,
    })

}

gsapAnimation();


// move cursor entire visible part of the screen
// mouse skew

let timeout=null;

function mouseSkew( ) {

        let xScale = 0;
        let yScale = 0; 
        
        let xPrevValue = 0;
        let yPrevValue = 0;

    window.addEventListener('mousemove', function (details) {
     
        clearTimeout(timeout);

        xScale= gsap.utils.clamp(.8,1.2, (details.clientX - xPrevValue));
        yScale= gsap.utils.clamp(.8,1.2, (details.clientY - yPrevValue));

        xPrevValue = details.clientX;
        yPrevValue = details.clientY;

       let site_circle = document.querySelector("#site_circle");
       site_circle.style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xScale}, ${yScale})`;

        timeout = setTimeout(function(){
            site_circle.style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1, 1)`;
        }, 100);
    });
}

mouseSkew();

//update time;
function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();


    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    let text = `${hours} : ${minutes} `;
    if (hours > 11) {
        text += 'PM'
    } else {
        text += ' AM'
    }

    text += ' EST'
    document.querySelector("#time").innerHTML = text;
}

setInterval(updateTime, 1000);




document.querySelectorAll(".element").forEach(function (ele) {
    let rotate =0;
    let diffRotate = 0;

    //when mouse move on div
    ele.addEventListener("mousemove", function ( detail) {
        diffRotate = rotate - detail.clientY ;
        rotate= detail.clientX;
         gsap.to(ele.querySelector('img'), {
            opacity:1 ,
            // display:'block',
            ease:Power1,
            top: detail.clientY -  ele.getBoundingClientRect().top ,
            left: detail.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffRotate*0.5), 
         });
    });
  
    //when mouse leave on div
    ele.addEventListener("mouseleave", function (  ) {
         gsap.to(ele.querySelector('img'), {
            opacity:0 ,
            duration:.6
         });
    });
    
});







