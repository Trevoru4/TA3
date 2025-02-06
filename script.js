function toggleDetails(juegoId) {
    const detalles = document.getElementById(juegoId);
    if (detalles.style.display === "none") {
        detalles.style.display = "block";
    } else {
        detalles.style.display = "none";
    }
}