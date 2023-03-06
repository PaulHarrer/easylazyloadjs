const lazyLoad = {
  loadImage: (image) => {
    const src = image.getAttribute("data-img");
    if (!src) return;
    image.setAttribute("src", src);
    image.removeAttribute("data-img");
  },

  init: () => {
    const images = document.querySelectorAll("img[data-img]");
    const options = {
      rootMargin: "0px 0px 500px 0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lazyLoad.loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    images.forEach((image) => {
      observer.observe(image);
    });

    function handleScroll() {
      window.requestAnimationFrame(() => {
        observer.observe(images);
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
  },
};

export default lazyLoad;
