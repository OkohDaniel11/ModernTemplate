const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


document.querySelectorAll('.dropheader').forEach((header) => {
    header.addEventListener('click', () => {
        const group = header.closest('.linearBorder');

        // Close others
        document.querySelectorAll('.linearBorder').forEach(drop => {
            if (drop !== group) drop.classList.remove('expanded');
        });

        // Toggle this one
        group.classList.toggle('expanded');
    });
});

document.querySelector('.backTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})