document.addEventListener("DOMContentLoaded", function () {
    // ===== PRZEŁĄCZANIE SEKCJI BEZ PRZEŁADOWANIA STRONY =====
    function showPageFromHash() {
        let pages = document.querySelectorAll(".page");
        let hash = window.location.hash.substring(1); // Usuwa "#"
        
        if (!hash) {
            hash = "home"; // Domyślna strona
        }

        pages.forEach(page => {
            if (page.id === hash) {
                page.classList.add("active");
            } else {
                page.classList.remove("active");
            }
        });
    }

    // Uruchom na starcie
    showPageFromHash();

    // Obsługa zmiany URL bez przeładowania
    window.addEventListener("hashchange", showPageFromHash);

    // ===== AUTOMATYCZNE ZAPISYWANIE STANU CHECKBOXÓW =====
    let checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(checkbox => {
        // Przy załadowaniu sprawdzamy stan checkboxów w localStorage
        if (localStorage.getItem(checkbox.id) === "true") {
            checkbox.checked = true;
        }

        // Zapisujemy zmiany w localStorage
        checkbox.addEventListener("change", function () {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    // ===== PRZYCISK RESET PROGRESS =====
    const resetButton = document.getElementById("reset-progress");

    if (resetButton) {
        resetButton.addEventListener("click", function () {
            // Znajdź wszystkie checkboxy
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
                localStorage.removeItem(checkbox.id);
            });

            // Opcjonalnie: Odśwież stronę, jeśli chcesz
            // location.reload();
        });
    }
});
