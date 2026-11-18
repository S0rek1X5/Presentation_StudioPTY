
const buttons = document.querySelectorAll("[data-language]");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const language = button.dataset.language;

        // Traducir contenido
        document.querySelectorAll("[data-es]").forEach((element) => {
            element.textContent = element.dataset[language];
        });

        // Actualizar estilos de los botones
        buttons.forEach((btn) => {
            const active = btn.dataset.language === language;

            btn.classList.toggle("font-bold", active);
            btn.classList.toggle("text-gray-400", !active);
        });

    });
});
