 document.addEventListener("DOMContentLoaded", () => {
      const btnScrollTop = document.getElementById("btnScrollTop");

      // 1) Al hacer scroll, verificamos la posición
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          btnScrollTop.classList.add("show");
        } else {
          btnScrollTop.classList.remove("show");
        }
      });

      // 2) Al hacer clic en el botón, hacemos scroll suave hacia arriba
      btnScrollTop.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    });