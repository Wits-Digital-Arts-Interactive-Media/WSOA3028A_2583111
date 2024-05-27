document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("button[data-target]").forEach(function(button) {
        button.addEventListener("click", function() {
            window.location.href = button.getAttribute("data-target");
        });
    });
});