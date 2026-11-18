
const wrapper = document.querySelector("#intro-wrapper");
const curtain = document.querySelector("#intro-curtain");

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