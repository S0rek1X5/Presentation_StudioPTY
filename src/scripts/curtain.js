
const wrapper = document.querySelector("#intro-wrapper");
const curtain = document.querySelector("#intro-curtain");
const header = document.querySelector("#main-header");

if (wrapper && curtain) {
    let ticking = false;

    function updateCurtain() {
        const rect = wrapper.getBoundingClientRect();
        const scrollDistance = window.innerHeight;

        const progress = Math.min(
            1,
            Math.max(0, -rect.top / scrollDistance)
        );

        curtain.style.transform = `translate3d(0, ${-progress * 100}%, 0)`;

        if (header) {
            const showHeader = progress >= 0.65;

            header.classList.toggle("opacity-100", showHeader);
            header.classList.toggle("opacity-0", !showHeader);
            header.classList.toggle("pointer-events-auto", showHeader);
            header.classList.toggle("pointer-events-none", !showHeader);
        }

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateCurtain);
            ticking = true;
        }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateCurtain);

    updateCurtain();
}
