// js/consultar.js

// 1) Simulamos un array de usuarios (o inscripciones) con ID y monto a pagar
//    Cada objeto puede tener: { id: "12345678", nombre: "Juan Pérez", monto: 50 }
const usuariosSimulados = [
  { id: "12345678", nombre: "Juan Pérez", monto: 50 },
  { id: "87654321", nombre: "María Gómez", monto: 50 },
  { id: "11223344", nombre: "Pedro Rodríguez", monto: 50 },
  // … agrega tantos objetos como necesites
];

// 2) Esperamos a que el DOM cargue para atar el evento
document.addEventListener("DOMContentLoaded", () => {
  const inputDoc = document.getElementById("docInput");
  const btnConsultar = document.getElementById("consultarBtn");

  btnConsultar.addEventListener("click", () => {
    const valorIngresado = inputDoc.value.trim();

    // Validar que el usuario haya escrito algo
    if (!valorIngresado) {
      Swal.fire({
        icon: "warning",
        title: "Campo vacío",
        text: "Por favor ingresa tu ID o número de documento.",
      });
      return;
    }

    // Buscamos en el array si existe un objeto con ese ID
    const usuarioEncontrado = usuariosSimulados.find(
      (u) => u.id === valorIngresado
    );

    if (usuarioEncontrado) {
      // Si lo encontramos, mostramos un SweetAlert con el monto y opción de pagar
      Swal.fire({
        icon: "success",
        title: `¡Hola, ${usuarioEncontrado.nombre}!`,
        html: `
          <p>Tu inscripción básica tiene un monto de <strong>$${usuarioEncontrado.monto.toFixed(
            2
          )}</strong>.</p>
          <p>¿Deseas proceder al pago?</p>
        `,
        showCancelButton: true,
        confirmButtonText: "Pagar ahora",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          // Redireccionamos a WhatsApp con un mensaje predefinido
          // Cambia el texto del mensaje si quieres personalizarlo
          const numeroWhatsApp = "+584126581304";
          const mensajePredefinido = encodeURIComponent(
            `Hola, quiero pagar mi inscripción básica. Mi ID es ${usuarioEncontrado.id} y el monto a cancelar es $${usuarioEncontrado.monto.toFixed(
              2
            )}.`
          );
          window.open(
            `https://wa.me/${numeroWhatsApp.replace(
              /[^0-9]/g,
              ""
            )}?text=${mensajePredefinido}`,
            "_blank"
          );
        }
      });
    } else {
      // Si NO lo encontramos en el array
      Swal.fire({
        icon: "error",
        title: "ID no encontrado",
        html: `
          <p>Lo siento, no hemos encontrado tu ID o documento en nuestro sistema.</p>
          <p>
            Si tienes dudas, contáctanos por WhatsApp al 
            <a href="https://wa.me/584126581304" target="_blank">+58 412 658 1304</a>.
          </p>
          <p>
            Si aún no te has registrado, te invitamos a 
            <a href="#preinscripcion">preinscribirte</a> para recibir la información requerida.
          </p>
        `,
        confirmButtonText: "Cerrar",
      });
    }
  });
});
