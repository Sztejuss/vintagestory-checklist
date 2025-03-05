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
        let label = checkbox.parentElement; // Pobiera <li>, w którym jest checkbox

        // Przy załadowaniu sprawdzamy stan checkboxów w localStorage
        if (localStorage.getItem(checkbox.id) === "true") {
            checkbox.checked = true;
            label.classList.add("checked"); // Dodaje przekreślenie
        }

        // Obsługa kliknięcia checkboxa
        checkbox.addEventListener("change", function () {
            localStorage.setItem(checkbox.id, checkbox.checked);
            
            if (checkbox.checked) {
                label.classList.add("checked");
            } else {
                label.classList.remove("checked");
            }
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
                checkbox.parentElement.classList.remove("checked"); // Usuwa przekreślenie
            });

            // Opcjonalnie: Odśwież stronę, jeśli chcesz
            // location.reload();
        });
    }
});
