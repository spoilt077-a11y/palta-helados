// Número de WhatsApp: con código de país, sin + ni espacios.
const WHATSAPP = "5491112345678";

// Menú en celular
const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  const abierto = menu.classList.toggle("abierto");
  menuBtn.setAttribute("aria-expanded", abierto);
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("abierto");
    menuBtn.setAttribute("aria-expanded", false);
  })
);

// Enlaces de WhatsApp: data-whatsapp puede traer un mensaje propio
document.querySelectorAll("[data-whatsapp]").forEach((a) => {
  const mensaje = a.dataset.whatsapp || "Hola! Quiero hacer una consulta a Palta Helados 🥑";
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
});

// Carrusel
const carrusel = document.getElementById("carrusel");

function moverCarrusel(direccion) {
  const paso = carrusel.querySelector(".slide").offsetWidth + 20;
  const alFinal = carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth - 5;
  if (direccion > 0 && alFinal) carrusel.scrollTo({ left: 0, behavior: "smooth" });
  else carrusel.scrollBy({ left: paso * direccion, behavior: "smooth" });
}
document.getElementById("prev").addEventListener("click", () => moverCarrusel(-1));
document.getElementById("next").addEventListener("click", () => moverCarrusel(1));

let auto = setInterval(() => moverCarrusel(1), 4000);
carrusel.addEventListener("mouseenter", () => clearInterval(auto));
carrusel.addEventListener("mouseleave", () => (auto = setInterval(() => moverCarrusel(1), 4000)));

// Cifras con contador animado (el número final ya está en el HTML para Google)
const cifras = document.getElementById("cifras");
const formato = new Intl.NumberFormat("es-AR");
function animarCifras() {
  cifras.querySelectorAll("strong").forEach((el) => {
    const final = Number(el.dataset.valor);
    const prefijo = el.dataset.prefijo || "";
    const inicio = performance.now();
    const duracion = 1500;
    function paso(ahora) {
      const t = Math.min((ahora - inicio) / duracion, 1);
      const valor = Math.round(final * (1 - Math.pow(1 - t, 3)));
      el.textContent = prefijo + formato.format(valor);
      if (t < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  });
}
new IntersectionObserver((entradas, obs) => {
  if (entradas[0].isIntersecting) {
    animarCifras();
    obs.disconnect();
  }
}, { threshold: 0.4 }).observe(cifras);

document.getElementById("anio").textContent = new Date().getFullYear();
