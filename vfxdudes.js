gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true },
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

let homeHero = gsap.timeline();

homeHero.from(
  ".home-hero-heading-1-wrap h1",
  {
    y: "100%",
    duration: 2,
    ease: "expo.inOut",
  },
  "homeHero"
),
  homeHero.from(
    ".home-hero-heading-2-wrap h1",
    {
      y: "100%",
      duration: 2.1,
      ease: "expo.inOut",
    },
    "homeHero"
  ),
  homeHero.from(
    ".home-hero-heading-3-wrap h1",
    {
      y: "100%",
      duration: 2.2,
      ease: "expo.inOut",
    },
    "homeHero"
  );

homeHero.to(
  ".home-hero-heading-2-img",
  {
    width: "33rem",
    duration: 5,
    ease: "expo.inOut",
  },
  "homeHero"
);

homeHero.to(
  ".home-hero-heading-1-img",
  {
    width: "45rem",
    duration: 5,
    ease: "expo.inOut",
  },
  "homeHero"
);

homeHero.to(
  ".home-hero-heading-3-img",
  {
    width: "28rem",
    duration: 7,
    ease: "expo.inOut",
  },
  "homeHero"
);

// homeHero.to(
//   ".our-work-txt",
//   {
//     height: "80vh",
//     duration:0.1
//   },
//   "homeHero"
// );

gsap.to(".home-ab-svg img", {
  rotate: 800,
  duration: 4,
  scrollTrigger: {
    trigger: ".home-ab-svg img",
    scroller: ".smooth-scroll",
    start: "-200% center",
    end: "7000% bottom",
    scrub: true,
    // markers:true
  },
});

gsap.set(".home-wwd-txt p", {
  x: "-200%",
});

gsap.to(".home-wwd-txt p", {
  x: "200%",
  // ease:"expo.inOut",
  scrollTrigger: {
    trigger: ".home-wwd-wrap",
    scroller: ".smooth-scroll",
    start: "top top",
    end: "500% bottom",
    scrub: true,
    // markers:true,
    pin: true,
  },
});

let servicesCards = gsap.timeline({
  scrollTrigger: {
    trigger: ".home-services-wrap",
    scroller: ".smooth-scroll",
    start: "top top",
    end: "1500%",
    pin: true,
    // markers: true,
    scrub: 1,
  },
});

gsap.set(".home-services-card", {
  y: "200%",
});
// servicesCards.to(
//     ".home-services-card",
//     {
//       y:"0%",
//       stagger:1,
//       ease:"expo.inOut",
//       duration:5,
//     },
// );
servicesCards.to(".hsc1", {
  y: "0%",
  rotate:1,
  ease: "sine.inOut",
  duration: 5,
});

servicesCards.to(".hsc2", {
  y: "0%",
  ease: "sine.inOut",
  duration: 5,
});

servicesCards.to(".hsc3", {
  y: "0%",
    rotate:3,
  ease: "sine.inOut",
  duration: 5,
});

servicesCards.to(".hsc4", {
  y: "0%",
  ease: "sine.inOut",
  duration: 5,
});

servicesCards.to(".hsc5", {
  y: "0%",
    rotate:3,
  ease: "sine.inOut",
  duration: 5,
});

servicesCards.to(".hsc6", {
  y: "0%",
  ease: "sine.inOut",
  duration: 5,
});

servicesCards.to(".hsc7", {
  y: "0%",
    rotate:3,
  ease: "sine.inOut",
  duration: 5,
});

servicesCards.to(".hsc8", {
  y: "0%",
  ease: "sine.inOut",
  duration: 5,
});

servicesCards.to(".hsc9", {
  y: "0%",
  ease: "sine.inOut",
  duration: 5,
});


// const canvas = document.querySelector("#page>canvas");
// const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// window.addEventListener("resize", function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   render();
// });

// function files(index) {
//   var data = `
//     ./Assets/5/Image1.png
//     ./Assets/5/Image2.png
//     ./Assets/5/Image3.png
//     ./Assets/5/Image4.png
//     ./Assets/5/Image5.png
//     ./Assets/5/Image6.png
//     ./Assets/5/Image7.png
//     ./Assets/5/Image8.png
//     ./Assets/5/Image9.png
//     ./Assets/5/Image10.png
//     ./Assets/5/Image11.png
//     ./Assets/5/Image12.png
//     ./Assets/5/Image13.png
//     ./Assets/5/Image14.png
//     ./Assets/5/Image15.png
//     ./Assets/5/Image16.png
//     ./Assets/5/Image17.png
//     ./Assets/5/Image18.png
//     ./Assets/5/Image19.png
//     ./Assets/5/Image20.png
//     ./Assets/5/Image21.png
//     ./Assets/5/Image22.png
//     ./Assets/5/Image23.png
//     ./Assets/5/Image24.png
//     ./Assets/5/Image25.png
//     ./Assets/5/Image26.png
//     ./Assets/5/Image27.png
//     ./Assets/5/Image28.png
//     ./Assets/5/Image29.png
//     ./Assets/5/Image30.png
//     ./Assets/5/Image31.png
//     ./Assets/5/Image32.png
//     ./Assets/5/Image33.png
//     ./Assets/5/Image34.png
//     ./Assets/5/Image35.png
//     ./Assets/5/Image36.png
//     ./Assets/5/Image37.png
//     ./Assets/5/Image38.png
//     ./Assets/5/Image39.png
//     ./Assets/5/Image40.png
//     ./Assets/5/Image41.png
//     ./Assets/5/Image42.png
//     ./Assets/5/Image43.png
//     ./Assets/5/Image44.png
//     ./Assets/5/Image45.png
//     ./Assets/5/Image46.png
//     ./Assets/5/Image47.png
//     ./Assets/5/Image48.png
//     ./Assets/5/Image49.png
//     ./Assets/5/Image50.png
//     ./Assets/5/Image51.png
//     ./Assets/5/Image52.png
//     ./Assets/5/Image53.png
//     ./Assets/5/Image54.png
//     ./Assets/5/Image55.png
//     ./Assets/5/Image56.png
//     ./Assets/5/Image57.png
//     ./Assets/5/Image58.png
//     ./Assets/5/Image59.png
//     ./Assets/5/Image60.png
//     ./Assets/5/Image61.png
//     ./Assets/5/Image62.png
//     ./Assets/5/Image63.png
//     ./Assets/5/Image64.png
//     ./Assets/5/Image65.png
//     ./Assets/5/Image66.png
//     ./Assets/5/Image67.png
//     ./Assets/5/Image68.png
//     ./Assets/5/Image69.png
//     ./Assets/5/Image70.png
//     ./Assets/5/Image71.png
//     ./Assets/5/Image72.png
//     ./Assets/5/Image73.png
//     ./Assets/5/Image74.png
//     ./Assets/5/Image75.png
//     ./Assets/5/Image76.png
//     ./Assets/5/Image77.png
//     ./Assets/5/Image78.png
//     ./Assets/5/Image79.png
//     ./Assets/5/Image80.png
//     ./Assets/5/Image81.png
//     ./Assets/5/Image82.png
//     ./Assets/5/Image83.png
//     ./Assets/5/Image84.png
//     ./Assets/5/Image85.png
//     ./Assets/5/Image86.png
//     ./Assets/5/Image87.png
//     ./Assets/5/Image88.png
//     ./Assets/5/Image89.png
//     ./Assets/5/Image90.png
//     ./Assets/5/Image91.png
//     ./Assets/5/Image92.png
//     ./Assets/5/Image93.png
//     ./Assets/5/Image94.png
//     ./Assets/5/Image95.png
//     ./Assets/5/Image96.png
//     ./Assets/5/Image97.png
//     ./Assets/5/Image98.png
//     ./Assets/5/Image99.png
//     ./Assets/5/Image100.png
//     ./Assets/5/Image101.png
//     ./Assets/5/Image102.png
//     ./Assets/5/Image103.png
//     ./Assets/5/Image104.png
//     ./Assets/5/Image105.png
//     ./Assets/5/Image106.png
//     ./Assets/5/Image107.png
//     ./Assets/5/Image108.png
//     ./Assets/5/Image109.png
//     ./Assets/5/Image110.png
//     ./Assets/5/Image111.png
//     ./Assets/5/Image112.png
//     ./Assets/5/Image113.png
//     ./Assets/5/Image114.png
//     ./Assets/5/Image115.png
//     ./Assets/5/Image116.png
//     ./Assets/5/Image117.png
//     ./Assets/5/Image118.png
//     ./Assets/5/Image119.png
//     ./Assets/5/Image120.png
//     ./Assets/5/Image121.png
//     ./Assets/5/Image122.png
//     ./Assets/5/Image123.png
//     ./Assets/5/Image124.png
//     ./Assets/5/Image125.png
//     ./Assets/5/Image126.png
//     ./Assets/5/Image127.png
//     ./Assets/5/Image128.png
//     ./Assets/5/Image129.png
//     ./Assets/5/Image130.png
//     ./Assets/5/Image131.png
//     ./Assets/5/Image132.png
//     ./Assets/5/Image133.png
//     ./Assets/5/Image134.png
//     ./Assets/5/Image135.png
//     ./Assets/5/Image136.png
//     ./Assets/5/Image137.png
//     ./Assets/5/Image138.png
//     ./Assets/5/Image139.png
//     ./Assets/5/Image140.png
//     ./Assets/5/Image141.png
//     ./Assets/5/Image142.png
//     ./Assets/5/Image143.png
//     ./Assets/5/Image144.png
//     ./Assets/5/Image145.png
//     ./Assets/5/Image146.png
//     ./Assets/5/Image147.png
//     ./Assets/5/Image148.png
//     ./Assets/5/Image149.png
//     ./Assets/5/Image150.png
//     ./Assets/5/Image151.png
//     ./Assets/5/Image152.png
//     ./Assets/5/Image153.png
//     ./Assets/5/Image154.png
//     ./Assets/5/Image155.png
//     ./Assets/5/Image156.png
//     ./Assets/5/Image157.png
//     ./Assets/5/Image158.png
//     ./Assets/5/Image159.png
//     ./Assets/5/Image160.png
//     ./Assets/5/Image161.png
//     ./Assets/5/Image162.png
//     ./Assets/5/Image163.png
//     ./Assets/5/Image164.png
//     ./Assets/5/Image165.png
//     ./Assets/5/Image166.png
//     ./Assets/5/Image167.png
//     ./Assets/5/Image168.png
//     ./Assets/5/Image169.png
//     ./Assets/5/Image170.png
//     ./Assets/5/Image171.png
//     ./Assets/5/Image172.png
//     ./Assets/5/Image173.png
//     ./Assets/5/Image174.png
//     ./Assets/5/Image175.png
//     ./Assets/5/Image176.png
//     ./Assets/5/Image177.png
//     ./Assets/5/Image178.png
//     ./Assets/5/Image179.png
//     ./Assets/5/Image180.png
//     ./Assets/5/Image181.png
//     ./Assets/5/Image182.png
//     ./Assets/5/Image183.png
//     ./Assets/5/Image184.png
//     ./Assets/5/Image185.png
//     ./Assets/5/Image186.png
//     ./Assets/5/Image187.png
//     ./Assets/5/Image188.png
//     ./Assets/5/Image189.png
//     ./Assets/5/Image190.png
//     ./Assets/5/Image191.png
//     ./Assets/5/Image192.png
//     ./Assets/5/Image193.png
//     ./Assets/5/Image194.png
//     ./Assets/5/Image195.png
//     ./Assets/5/Image196.png
//     ./Assets/5/Image197.png
//     ./Assets/5/Image198.png
//     ./Assets/5/Image199.png
//     ./Assets/5/Image200.png
//     ./Assets/5/Image201.png
//     ./Assets/5/Image202.png
//     ./Assets/5/Image203.png
//     ./Assets/5/Image204.png
//     ./Assets/5/Image205.png
//     ./Assets/5/Image206.png
//     ./Assets/5/Image207.png
//     ./Assets/5/Image208.png
//     ./Assets/5/Image209.png
//     ./Assets/5/Image210.png
//     ./Assets/5/Image211.png
//     ./Assets/5/Image212.png
//     ./Assets/5/Image213.png
//     ./Assets/5/Image214.png
//     ./Assets/5/Image215.png
//     ./Assets/5/Image216.png
//     ./Assets/5/Image217.png
//     ./Assets/5/Image218.png
//     ./Assets/5/Image219.png
//     ./Assets/5/Image220.png
//     ./Assets/5/Image221.png
//     ./Assets/5/Image222.png
//     ./Assets/5/Image223.png
//     ./Assets/5/Image224.png
//     ./Assets/5/Image225.png
//     ./Assets/5/Image226.png
//     ./Assets/5/Image227.png
//     ./Assets/5/Image228.png
//     ./Assets/5/Image229.png
//     ./Assets/5/Image230.png
//     ./Assets/5/Image231.png
//     ./Assets/5/Image232.png
//     ./Assets/5/Image233.png
//     ./Assets/5/Image234.png
//     ./Assets/5/Image235.png
//     ./Assets/5/Image236.png
//     ./Assets/5/Image237.png
//     ./Assets/5/Image238.png
//     ./Assets/5/Image239.png
//     ./Assets/5/Image240.png
//     ./Assets/5/Image241.png
//     ./Assets/5/Image242.png
//     ./Assets/5/Image243.png
//     ./Assets/5/Image244.png
//     ./Assets/5/Image245.png
//     ./Assets/5/Image246.png
//     ./Assets/5/Image247.png
//     ./Assets/5/Image248.png
//     ./Assets/5/Image249.png
//     ./Assets/5/Image250.png
//     ./Assets/5/Image251.png
//     ./Assets/5/Image252.png
//     ./Assets/5/Image253.png
//     ./Assets/5/Image254.png
//     ./Assets/5/Image255.png
//     ./Assets/5/Image256.png
//     ./Assets/5/Image257.png
//     ./Assets/5/Image258.png
//     ./Assets/5/Image259.png
//     ./Assets/5/Image260.png
//     ./Assets/5/Image261.png
//     ./Assets/5/Image262.png
//     ./Assets/5/Image263.png
//     ./Assets/5/Image264.png
//     ./Assets/5/Image265.png
//     ./Assets/5/Image266.png
//     ./Assets/5/Image267.png
//     ./Assets/5/Image268.png
//     ./Assets/5/Image269.png
//     ./Assets/5/Image270.png
//     ./Assets/5/Image271.png
//     ./Assets/5/Image272.png
//     ./Assets/5/Image273.png
//     ./Assets/5/Image274.png
//     ./Assets/5/Image275.png
//     ./Assets/5/Image276.png
//     ./Assets/5/Image277.png
//     ./Assets/5/Image278.png
//     ./Assets/5/Image279.png
//     ./Assets/5/Image280.png
//     ./Assets/5/Image281.png
//     ./Assets/5/Image282.png
//     ./Assets/5/Image283.png
//     ./Assets/5/Image284.png
//     ./Assets/5/Image285.png
//     ./Assets/5/Image286.png
//     ./Assets/5/Image287.png
//     ./Assets/5/Image288.png
//     ./Assets/5/Image289.png
//     ./Assets/5/Image290.png
//     ./Assets/5/Image291.png
//     ./Assets/5/Image292.png
//     ./Assets/5/Image293.png
//     ./Assets/5/Image294.png
//     ./Assets/5/Image295.png
//     ./Assets/5/Image296.png
//     ./Assets/5/Image297.png
//     ./Assets/5/Image298.png
//     ./Assets/5/Image299.png
//     ./Assets/5/Image300.png
//  `;
//   return data.split("\n")[index];
// }

// const frameCount = 300;

// const images = [];
// const imageSeq = {
//   frame: 1,
// };

// for (let i = 0; i < frameCount; i++) {
//   const img = new Image();
//   img.src = files(i);
//   images.push(img);
// }

// gsap.to(imageSeq, {
//   frame: frameCount - 1,
//   snap: "frame",
//   ease: `none`,
//   scrollTrigger: {
//     scrub: 0.15,
//     trigger: `#page>canvas`,
//     start: `top top`,
//     end: `700% top`,
//     scroller: `.smooth-scroll`,
//   },
//   onUpdate: render,
// });

// images[1].onload = render;

// function render() {
//   scaleImage(images[imageSeq.frame], context);
// }

// function scaleImage(img, ctx) {
//   var canvas = ctx.canvas;
//   var hRatio = canvas.width / img.width;
//   var vRatio = canvas.height / img.height;
//   var ratio = Math.max(hRatio, vRatio);
//   var centerShift_x = (canvas.width - img.width * ratio) / 2;
//   var centerShift_y = (canvas.height - img.height * ratio) / 2;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(
//     img,
//     0,
//     0,
//     img.width,
//     img.height,
//     centerShift_x,
//     centerShift_y,
//     img.width * ratio,
//     img.height * ratio
//   );
// }
// ScrollTrigger.create({

//   trigger: "#page",
//   pin: true,
//   markers:true,
//   scroller: `.smooth-scroll`,
//   start: `top top`,
//   end: `700% top`,
// });



// SERVICES 
// const images = gsap.utils.toArray(".column-content.image");
// const titleContainers = gsap.utils.toArray(".column.left .column-content");
// ScrollTrigger.create({
//   trigger: ".column-wrapper",
//   scroller:".smooth-scroll",
//   start: "top top",
//   end: "+=" + (images.length - 1) * 100 + "%",
//   pin: ".right",
//   markers: true
// });

// // gsap.from(".right",{
// //   x:"-100%",
// //   scrollTrigger:{
// //     trigger: ".right",
// //     scroller:".smooth-scroll",
// //     start: "-100% top",
// //     end: "end end",
// //     ease:"expo.inOut",
// //     markers: true,
// //     scrub:true
// //   }
// // })
// titleContainers.forEach((title, i) => {
//   ScrollTrigger.create({
//     trigger: title,
//     scroller:".smooth-scroll",
//     start: "top 60%",
//     end: "top 60%",
//     // markers: {
//     //   indent: 150 * (i + 1)
//     // },
//     id: i + 1,
//     onEnter: () => {
//       if (i) {
//         gsap.to(images, {
//           yPercent: -100 * i,
//           ease: "linnar",
//           overwrite: true
//         });
//       }
//     },
//     onEnterBack: () => {
//       if (i) {
//         gsap.to(images, {
//           yPercent: -100 * (i - 1),
//           ease: "linnar",
//           overwrite: true
//         });
//       }
//     }
//   });
// });



// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// wheel scroll animation

    // this setup code only runs when viewport is at least 992px wide
    let wheel = document.querySelector('.wheel__wrapper'),
        numLines = 11,
        radius = numLines * 30,
        angle = -180 / numLines,
        origin = `50% 50% -${radius}px`;

    gsap.set(wheel, {
        transformOrigin: "50% 50%",
    });
    gsap.set(wheel.querySelectorAll('.wheel__text-item'), {
        z: radius,
        rotationX: index => angle * index,
        transformOrigin: origin,
    });
    gsap.to(wheel, {
        rotationX: 160,
        ease: "none",
        transformOrigin: "50% 50%",
        scrollTrigger: {
            trigger: '.wheel__container',
            scroller:".smooth-scroll",
            start: "top top",
            end: `top+=${window.innerHeight * 3} bottom`,
            // markers: true,
            scrub: true,
            pin: true, // Pin the element during the animation
            snap: {
                snapTo: 1 / 11,
                duration: 0.5
            }
        }
    });

// mm.add("(max-width: 991px)", () => {
//     const textItems = document.querySelectorAll(".wheel__text-item");
//     textItems.forEach((item, i) => {
//         gsap.to(item, {
//             scrollTrigger: {
//                 trigger: item,
//                 scroller:".smooth-scroll",
//                 start: "top center",
//                 end: "top top",
//                 scrub: true,
//                 //markers: true,     
//             },
//             alignSelf: "end",
//         })
//     });
// });

// Initialize audio element
const soundEffect = new Audio('Assets/SOUND/SCROLL SOUND.mp3');

// Map to store whether sound is playing for each element
const isSoundPlayingMap = new Map();

// Add event listener for scroll updates
locoScroll.on("scroll", (instance) => {
    let items = document.querySelectorAll('.wheel__text-item');
    let wheel = document.querySelector('.wheel__wrapper');

    items.forEach(item => {
        let rect = item.getBoundingClientRect();
        let centerX = wheel.offsetWidth / 2;
        let centerY = wheel.offsetHeight / 2;

        // Check if the item's center is within a certain range of the wheel's center
        if (rect.left <= centerX && rect.right >= centerX && rect.top <= centerY && rect.bottom >= centerY) {
            item.classList.add('green'); // Add green class if center is within range
            
            // Play sound effect only if it's not already playing for this element
            if (!isSoundPlayingMap.has(item)) {
                isSoundPlayingMap.set(item, true); // Set flag to indicate sound is playing for this element
                playSoundEffect(); // Play sound effect
            }
        } else {
            item.classList.remove('green'); // Remove green class if center is not within range
            // Remove entry from map when element is not in range
            isSoundPlayingMap.delete(item);
        }
    });
});

// Function to play sound effect
function playSoundEffect() {
    soundEffect.currentTime = 0; // Reset sound to the beginning
    soundEffect.play(); // Play sound effect
}

