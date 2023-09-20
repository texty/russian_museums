
gsap.registerPlugin(ScrollTrigger);

// const isMobile = window.matchMedia("(pointer: coarse)").matches;

const isMobile = window.matchMedia("(min-width: 800px)").matches; 



if (isMobile) {
  const sections = gsap.utils.toArray(".horizontal__item");
  let maxWidth = 0;

  const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section) => {
      maxWidth += section.offsetWidth;
      maxWidth += gsap.getProperty(section, "marginLeft");
    });
    maxWidth += 20;
    maxWidth += window.innerWidth;
    maxWidth -= sections[0].offsetWidth;
    return maxWidth;
  };

  getMaxWidth();
  ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

  gsap.set("section.spacer", {
    minHeight: window.innerHeight - document.querySelector(".horizontal").offsetHeight,
  });

  gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal",
      pin: ".wrapper",
      scrub: 0.5,
      markers: false,
      end: () => `+=${maxWidth}`,
      invalidateOnRefresh: true,
    },
  });

  sections.forEach((sct, i) => {
    ScrollTrigger.create({
      horizontal: true,
      trigger: sct,
      start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
      end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
      toggleClass: { targets: sct, className: "active" },
    });
  });
}


// gsap.registerPlugin(ScrollTrigger);

// //var condition = "(pointer: coarse)";
// var condition = "(min-width: 800px)"

// const isMobile = window.matchMedia(condition).matches;

// let isTouchscreen = window.matchMedia(condition).matches;
// let sections = gsap.utils.toArray(".horizontal__item");
// let maxWidth = 0;

// const getMaxWidth = () => {
//   maxWidth = 0;
//   sections.forEach((section) => {
//     maxWidth += section.offsetWidth;
//     maxWidth += gsap.getProperty(section, "marginLeft");
//   });
//   maxWidth += 20;
//   maxWidth += window.innerWidth;
//   maxWidth -= sections[0].offsetWidth;
//   return maxWidth;
// };

// const updateAnimations = () => {
//   getMaxWidth();
//   ScrollTrigger.refresh();
//   gsap.set("section.spacer", {
//     minHeight: window.innerHeight - document.querySelector(".horizontal").offsetHeight,
//   });
// };

// const initAnimations = () => {
//   updateAnimations();

//   gsap.to(sections, {
//     x: () => `-${maxWidth - window.innerWidth}`,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".horizontal",
//       pin: ".wrapper",
//       scrub: 0.5,
//       markers: false,
//       end: () => `+=${maxWidth}`,
//       invalidateOnRefresh: true,
//     },
//   });

//   sections.forEach((sct, i) => {
//     ScrollTrigger.create({
//       horizontal: true,
//       trigger: sct,
//       start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
//       end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
//       toggleClass: { targets: sct, className: "active" },
//     });
//   });
// };

// initAnimations();

// // Event listener for window resize
// window.addEventListener("resize", () => {
//   // Check if the touchscreen status has changed
//   const newIsTouchscreen = window.matchMedia(condition).matches;
//   if (isTouchscreen !== newIsTouchscreen) {
//     isTouchscreen = newIsTouchscreen;
//     // Reinitialize animations
//     initAnimations();
//   } else {
//     // Just update animations
//     updateAnimations();
//   }
// });
