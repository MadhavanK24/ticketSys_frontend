const filters = document.querySelectorAll(".filter");

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    // Here you can implement filtering logic later
    console.log(`Filtering role: ${btn.textContent}`);
  });
});
