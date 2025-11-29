const Cromado = ["/Imgs/Img_Crom/Cro_Cil.jpg","/Imgs/Img_Crom/Cro_Cil1.jpg","/Imgs/Img_Crom/Cro_Cil2.jpg","/Imgs/Img_Crom/Cro_Cil3.jpg"];
const Fabricacion = ["/Imgs/Img_Fab/Fab_Cil.jpeg","/Imgs/Img_Fab/Fab_Cil2.jpg","/Imgs/Img_Fab/Fab_Cil3.jpg","/Imgs/Img_Fab/Fab_Cil4.jpg",];
const Mantenimiento = ["/Imgs/Img_Man/Man_Cil.jpg","/Imgs/Img_Man/Man_Cil1.jpg","/Imgs/Img_Man/Man_Cil2.jpg","/Imgs/Img_Man/Man_Cil4.jpg",];
const Rectificado = ["/Imgs/Img_Rec/Rec_Cil.jpeg","/Imgs/Img_Rec/Rec_Cil1.jpg","/Imgs/Img_Rec/Rec_Cil2.jpg","/Imgs/Img_Rec/Rec_Cil3.jpg",];
/*
let iCromado = 0;
let iFabricacion = 0;
let iMantenimiento = 0;
let iRectificado = 0;

function cambiarCromado() {
    const img = document.getElementById("imagenCromado");
    iCromado = (iCromado + 1) % Cromado.length;
    img.src = Cromado[iCromado];
}

function cambiarFabricacion() {
    const img = document.getElementById("imagenFabricacion");
    iFabricacion = (iFabricacion + 1) % Fabricacion.length;
    img.src = Fabricacion[iFabricacion];
}

function cambiarMantenimiento() {
    const img = document.getElementById("imagenMantenimiento");
    iMantenimiento = (iMantenimiento + 1) % Mantenimiento.length;
    img.src = Mantenimiento[iMantenimiento];
}

function cambiarRectificado() {
    const img = document.getElementById("imagenRectificado");
    iRectificado = (iRectificado + 1) % Rectificado.length;
    img.src = Rectificado[iRectificado];
}
setInterval(cambiarCromado, 3000);
setInterval(cambiarFabricacion, 3000); 
setInterval(cambiarMantenimiento, 3000);
setInterval(cambiarRectificado, 3000);*/
const indices = {
  Cromado: 0,
  Fabricacion: 0,
  Mantenimiento: 0,
  Rectificado: 0
};

/**
 * Función genérica para cambiar imagen con efecto flash
 * @param {string} contId - ID del contenedor .IMG_CONT
 * @param {string} imgId - ID de la imagen
 * @param {Array} imagenes - Lista de rutas de imágenes
 * @param {string} nombre - Nombre del grupo (para manejar su índice)
 */
function cambiarImagen(contId, imgId, imagenes, nombre) {
    const cont = document.getElementById(contId);
    const img = document.getElementById(imgId);

  if (!cont || !img) return; // seguridad

  // Añadir clase flash
cont.classList.add("flash");

  // Cambiar imagen a mitad del flash
setTimeout(() => {
    indices[nombre] = (indices[nombre] + 1) % imagenes.length;
    img.src = imagenes[indices[nombre]];
}, 200);

  // Quitar flash
setTimeout(() => {
    cont.classList.remove("flash");
}, 400);
}

// Intervalos de cambio (cada 3 segundos)
setInterval(() => cambiarImagen("Car_Cro", "imagenCromado", Cromado, "Cromado"), 3000);
setInterval(() => cambiarImagen("Car_Fab", "imagenFabricacion", Fabricacion, "Fabricacion"), 3000);
setInterval(() => cambiarImagen("Car_Man", "imagenMantenimiento", Mantenimiento, "Mantenimiento"), 3000);
setInterval(() => cambiarImagen("Car_Rec", "imagenRectificado", Rectificado, "Rectificado"), 3000);
