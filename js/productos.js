// js/productos.js

// Esperamos a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // 1) Define aquí tu array de productos. Cada objeto puede tener:
  //    id: identificador único
  //    nombre: título del producto
  //    descripcion: texto breve que aparecerá debajo del nombre
  //    precio: precio (puede ir con formato de cadena o número)
  //    imagen: ruta de la imagen (relative o URL absoluta)
  //    detalles: texto amplio para el modal (lista de características, ingredientes, etc.)
// Array de productos para selección tipo "catálogo"
const productos = [
    {
        id: "PreWorkout",
        nombre: "Performance Pre-Workout",
        descripcion: "Aumenta el flujo sanguíneo, sin estimulantes, enfoque claro.",
        precio: "39.99",
        imagen: "https://cdn.shopify.com/s/files/1/0932/3141/5614/files/essential_performance_-_strawberry_kiwi_-_front_5ed48aa6-f1a4-45bc-8446-770ccf906b3d.webp?v=1745950745&width=485",
        detalles: `
            <ul class="list-unstyled mb-2">
                <li>✅ Potencia tu bombeo muscular</li>
                <li>✅ 0 estimulantes</li>
                <li>✅ Claridad mental y enfoque</li>
            </ul>
            <p class="mb-1"><strong>Sabores disponibles:</strong></p>
            <div class="d-flex gap-2 flex-wrap">
                <span class="badge bg-primary">Strawberry Kiwi</span>
                <span class="badge bg-success">Blue Raspberry</span>
                <span class="badge bg-danger">Watermelon</span>
                <span class="badge bg-warning text-dark">Green Apple</span>
            </div>
        `
    },
    {
        id: "whey1",
        nombre: "Whey Protein Blend",
        descripcion: "1kg de proteína concentrada sabor chocolate.",
        precio: "34.99",
        imagen: "https://cdn.shopify.com/s/files/1/0932/3141/5614/files/GLAZED_DONUT.webp?v=1746469904&width=757",
        detalles: `
            <ul class="list-unstyled mb-2">
                <li>💪 25g Whey Protein Blend</li>
                <li>🍫 Digestión rápida y fácil </li>
                <li>🥄 Promueve el crecimiento muscular magro</li>
            </ul>
            <p class="mb-1"><strong>Sabores disponibles:</strong></p>
            <div class="d-flex gap-2 flex-wrap">
                <span class="badge bg-primary">Glazed Donut </span>
                <span class="badge bg-success">Chocolate Milk</span>
                
            </div>
        `
        
            
    },
    {
        id: "bar1",
        nombre: "Protein Isolate RTD",
        descripcion: "Paquete de 12 barras con sabor a frutos rojos.",
        precio: "12",
        imagen: "https://cdn.shopify.com/s/files/1/0932/3141/5614/files/RTD_BOTTLE_BOX_CHOC_53a5b006-3124-4e57-b516-5a7409d0c6a7.webp?v=1746041581&width=757",
        detalles: `
           <ul class="list-unstyled mb-2">
                <li>💪 30g Whey Protein Blend</li>
                <li>✅ Digestión rápida y fácil </li>
                <li>🥄 Pack de 12 Unidades</li>
            </ul>
            <p class="mb-1"><strong>Sabores disponibles:</strong></p>
            <div class="d-flex gap-2 flex-wrap">
                <span class="badge bg-primary">Batido de Chocolate </span>
                <span class="badge bg-success">Batido de Fresa</span>
                <span class="badge bg-warning text-dark">Batido de Vainilla</span>
                <span class="badge bg-danger">Moca Late </span>
                
            </div>
        `
    },
    {
        id: "creatina2",
        nombre: "Creatine Monohydrate",
        descripcion: "Paquete de 12 barras con sabor a frutos rojos.",
        precio: "12",        
        imagen: "https://cdn.shopify.com/s/files/1/0932/3141/5614/files/Creatine_30_serv_render.webp?v=1745957991&width=757",
        detalles: `
           <ul class="list-unstyled mb-2">
                <li>💪 Mejora la resistencia muscular</li>
                <li>✅ Mejora la plenitud muscular </li>
                <li>🥄 5g por Scoop </li>
            </ul>
            <p class="mb-1"><strong>Sabores disponibles:</strong></p>
            <div class="d-flex gap-2 flex-wrap">
                <span class="badge bg-primary">30 Servicios</span>
                <span class="badge bg-success">30 Cout Box </span>
                <span class="badge bg-warning text-dark">100 Servicios</span>
                
                
            </div>
        `
    }
    // Puedes agregar más productos aquí...
];

  // 2) Obtenemos el contenedor donde inyectaremos las tarjetas
  const contenedor = document.getElementById("productos-container");

  // 3) Recorremos el array y vamos construyendo el HTML
  productos.forEach(prod => {
    // 3.1) Card de Bootstrap
    const cardHTML = `
      <div class="col-md-4 mb-4 ">
        <div class="card h-100 shadow">
          <img src="${prod.imagen}" class="card-img-top " alt="${prod.nombre}">
          <div class="card-body text-center">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">${prod.descripcion}</p>
            <p class="fw-bold">$${prod.precio}</p>
            <button 
              class="btn  btn-sm BtnCardSuplemento " 
              data-bs-toggle="modal" 
              data-bs-target="#modal-${prod.id}"
            >
              Más info
            </button>
          </div>
        </div>
      </div>
    `;

    // 3.2) Modal de Bootstrap
    const modalHTML = `
      <div class="modal fade" id="modal-${prod.id}" tabindex="-1" aria-labelledby="${prod.id}-label" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${prod.id}-label">${prod.nombre}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body">
                <img src="${prod.imagen}" class="img-fluid mb-3 imgModal" alt="${prod.nombre}">
              ${prod.detalles}
                ${prod.Sabores ? `<h6>Sabores disponibles:</h6>${prod.Sabores}` : ""}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary BtnComprarModal" data-bs-dismiss="modal">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // 3.3) Insertamos la card y el modal en el contenedor
    //    Para que los modales queden al nivel de <body>, podemos:
    //    - Inyectarlos justo después de la card, ya que Bootstrap los posiciona correctamente.
    contenedor.insertAdjacentHTML("beforeend", cardHTML + modalHTML);
  });
});
