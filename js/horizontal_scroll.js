gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".horizontal__item");
    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach(section => {
        maxWidth += section.offsetWidth;
        maxWidth += gsap.getProperty(section, 'marginLeft');
      });
      maxWidth += 20;
      maxWidth += window.innerWidth;
      maxWidth -= sections[0].offsetWidth;
      return maxWidth;
    };

    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    gsap.set('section.spacer', { minHeight: window.innerHeight - document.querySelector('.horizontal').offsetHeight });

    gsap.to(sections, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal",
        pin: '.wrapper',
        scrub: 0.5,
        markers: false,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true
      }
    });



    sections.forEach((sct, i) => {
      ScrollTrigger.create({
        trigger: sct,
        start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
        end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
        toggleClass: { targets: sct, className: "active" }
      });

    });