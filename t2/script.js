document.querySelectorAll(".btn-64").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Starting 64-bit download...");
    });
});

document.querySelectorAll(".btn-32").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Starting 32-bit download...");
    });
});
