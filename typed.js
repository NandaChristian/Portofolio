
var typed = new Typed("#typed", {
    strings: ["Nanda Christian", "Web Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
 
const modal = document.getElementById("myModal");
const modalBody = document.getElementById("modalBody");
const span = document.querySelector(".close");

// tombol Sertif
document.querySelectorAll(".btnSertif").forEach(btn => {
  btn.addEventListener("click", () => {
    const src = btn.getAttribute("src");
    if (src.endsWith(".pdf")) {
      const absoluteUrl = window.location.origin + "/" + src;
      modalBody.innerHTML = `<iframe src="https://docs.google.com/viewer?url=${absoluteUrl}&embedded=true"></iframe>`;
    } else {
      modalBody.innerHTML = `<img src="${src}" alt="Sertifikat">`;
    }
    modal.style.display = "block";
  });
});

// tombol Result
document.querySelectorAll(".btnResult").forEach(btn => {
  btn.addEventListener("click", () => {
    const src = btn.getAttribute("src");
    modalBody.innerHTML = `<img src="${src}" alt="Result">`;
    modal.style.display = "block";
  });
});

// close modal
span.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };


//animasi
document.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll(".animasi");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("muncul");
        } else {
          entry.target.classList.remove("muncul");
        }
      });
    },
    { threshold: 0.2 }
  );

  articles.forEach((article) => observer.observe(article)); 
});
