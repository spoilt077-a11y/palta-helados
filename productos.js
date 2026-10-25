// Editá este archivo para cambiar productos, cifras y datos de contacto.
// "color" es el color de fondo de la tarjeta; "icono" es el emoji que se muestra.

const NEGOCIO = {
  nombre: "Palta Helados",
  lema: "Helado artesanal hecho con paciencia, como una buena palta: en su punto justo.",
  direccion: "Av. Siempreviva 742, Ciudad",
  telefono: "11 1234-5678",
  email: "hola@paltahelados.com.ar",
  whatsapp: "5491112345678", // con código de país, sin + ni espacios
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
};

const CATEGORIAS = [
  { id: "sabores", nombre: "Sabores artesanales", descripcion: "Más de 40 sabores para servir en cucurucho o vaso.", icono: "🍨", color: "#e4efc0" },
  { id: "potes", nombre: "Potes y familiares", descripcion: "1/4, 1/2 y 1 kg para llevar a casa.", icono: "🍦", color: "#f6e3c4" },
  { id: "palitos", nombre: "Palitos y bombones", descripcion: "Bañados en chocolate, frutales y de crema.", icono: "🍫", color: "#ecd5c6" },
  { id: "postres", nombre: "Postres helados", descripcion: "Almendrados, cassatas y copas listas.", icono: "🍰", color: "#f3d9de" },
  { id: "tortas", nombre: "Tortas heladas", descripcion: "Para cumpleaños y fechas especiales.", icono: "🎂", color: "#dbe9e1" },
  { id: "sin-tacc", nombre: "Sin TACC y veganos", descripcion: "Opciones aptas celíacos y a base de agua.", icono: "🌱", color: "#d4ecc9" },
];

// Productos que aparecen en el carrusel "Los más elegidos"
const DESTACADOS = [
  { nombre: "Helado de palta y lima", detalle: "Nuestro sabor insignia", icono: "🥑", color: "#cfe3a1" },
  { nombre: "Dulce de leche granizado", detalle: "El clásico de siempre", icono: "🍨", color: "#e9c9a0" },
  { nombre: "Palito bombón", detalle: "Crema bañada en chocolate", icono: "🍫", color: "#d9bba6" },
  { nombre: "Pote de 1 kg", detalle: "Hasta 4 sabores", icono: "🍦", color: "#f3e3c6" },
  { nombre: "Torta helada", detalle: "Para 12 porciones", icono: "🎂", color: "#f1d3da" },
  { nombre: "Frutilla al agua", detalle: "Sin lácteos ni TACC", icono: "🍓", color: "#f5c4c8" },
];

const CIFRAS = [
  { valor: 40, prefijo: "+", sufijo: "", texto: "sabores artesanales" },
  { valor: 3, prefijo: "", sufijo: "", texto: "locales propios" },
  { valor: 10, prefijo: "+", sufijo: "", texto: "años haciendo helado" },
  { valor: 5000, prefijo: "+", sufijo: "", texto: "clientes felices por mes" },
];
