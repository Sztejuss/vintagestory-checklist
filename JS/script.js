document.addEventListener("DOMContentLoaded", function () {
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
});
