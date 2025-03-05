document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const resetButton = document.getElementById("reset-button");

    // Load saved checklist progress from localStorage
    checkboxes.forEach(checkbox => {
        const savedValue = localStorage.getItem(checkbox.id);
        if (savedValue === "true") {
            checkbox.checked = true;
        }

        checkbox.addEventListener("change", function () {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    // Reset all checkboxes and clear localStorage
    resetButton.addEventListener("click", function () {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            localStorage.setItem(checkbox.id, false);
        });
    });
});