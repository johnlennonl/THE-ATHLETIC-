// js/main.js

// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPreinscripcion");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Recoger valores
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const objetivo = document.getElementById("objetivo").value.trim();

    // Validar que no estén vacíos
    if (!nombre || !email || !telefono || !objetivo) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios.",
      });
      return;
    }

    // Estructurar objeto de preinscripción
    const preinscripcion = {
      nombre,
      email,
      telefono,
      objetivo,
      fecha: new Date().toISOString(),
    };

    // Obtener array existente en localStorage (o crear uno nuevo)
    const lista = JSON.parse(localStorage.getItem("preinscripciones")) || [];
    lista.push(preinscripcion);

    // Guardar de vuelta en localStorage
    localStorage.setItem("preinscripciones", JSON.stringify(lista));

    // Mostrar alerta de éxito
    Swal.fire({
      icon: "success",
      title: "¡Enviado!",
      text: "Pronto te contactaremos para más detalles.",
      confirmButtonText: "Genial",
    });

    // Resetear formulario
    form.reset();
  });
});
