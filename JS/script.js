document.addEventListener("DOMContentLoaded", function () {
    // Zapis i odczyt checkboxów
    let checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach((checkbox) => {
        let savedState = localStorage.getItem(checkbox.id);
        if (savedState === "true") {
            checkbox.checked = true;
        }

        checkbox.addEventListener("change", function () {
            localStorage.setItem(checkbox.id, this.checked);
        });
    });

    // Przycisk resetujący postęp
    document.getElementById("reset-progress").addEventListener("click", function () {
        if (confirm("Are you sure you want to reset your progress?")) {
            checkboxes.forEach((checkbox) => {
                checkbox.checked = false;
                localStorage.setItem(checkbox.id, false);
            });
        }
    });

    // Płynne przewijanie do sekcji
    document.querySelectorAll(".sidebar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: "smooth"
                });
            }
        });
    });
});
