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
  a.href = `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
});

// Categorías
document.getElementById("categorias").innerHTML = CATEGORIAS.map(
  (c) => `
  <a class="categoria" id="${c.id}" data-whatsapp="Hola! Quiero info sobre ${c.nombre}" target="_blank" rel="noopener">
    <div class="categoria-art" style="--c:${c.color}">${c.icono}</div>
    <div class="categoria-body">
      <h3>${c.nombre}</h3>
      <p>${c.descripcion}</p>
      <span class="ver">Consultar →</span>
    </div>
  </a>`
).join("");
document.querySelectorAll(".categoria").forEach((a) => {
  a.href = `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(a.dataset.whatsapp)}`;
});

// Carrusel
const carrusel = document.getElementById("carrusel");
carrusel.innerHTML = DESTACADOS.map(
  (d) => `
  <article class="slide">
    <div class="slide-art" style="--c:${d.color}">${d.icono}</div>
    <h3>${d.nombre}</h3>
    <p>${d.detalle}</p>
  </article>`
).join("");

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

// Cifras con contador animado
const cifras = document.getElementById("cifras");
cifras.innerHTML = CIFRAS.map(
  (c) => `
  <div class="cifra">
    <strong data-valor="${c.valor}" data-prefijo="${c.prefijo}" data-sufijo="${c.sufijo}">${c.prefijo}0${c.sufijo}</strong>
    <span>${c.texto}</span>
  </div>`
).join("");

const formato = new Intl.NumberFormat("es-AR");
function animarCifras() {
  cifras.querySelectorAll("strong").forEach((el) => {
    const final = Number(el.dataset.valor);
    const inicio = performance.now();
    const duracion = 1500;
    function paso(ahora) {
      const t = Math.min((ahora - inicio) / duracion, 1);
      const valor = Math.round(final * (1 - Math.pow(1 - t, 3)));
      el.textContent = el.dataset.prefijo + formato.format(valor) + el.dataset.sufijo;
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

// Datos de contacto
document.getElementById("c-tel").textContent = NEGOCIO.telefono;
document.getElementById("c-mail").textContent = NEGOCIO.email;
document.getElementById("c-mail-link").href = `mailto:${NEGOCIO.email}`;
document.getElementById("c-dir").textContent = NEGOCIO.direccion;
document.getElementById("f-lema").textContent = NEGOCIO.lema;
document.getElementById("f-ig").href = NEGOCIO.instagram;
document.getElementById("f-fb").href = NEGOCIO.facebook;
document.getElementById("anio").textContent = new Date().getFullYear();
