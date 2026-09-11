/* =========================================================
   CyM Muebles — script.js
   TODA la configuración editable del negocio y los productos
   vive en este archivo, en las dos secciones marcadas abajo.
   ========================================================= */

/* =========================================================
   1) CONFIGURACIÓN DEL NEGOCIO (editar acá)
   ========================================================= */
const BUSINESS = {
  name: "CyM Muebles",
  // Número de WhatsApp con código de país y área, SIN espacios ni signos.
  // Ejemplo Argentina: 54 9 11 2345-6789  ->  "5491123456789"
  whatsapp: "5492323640218",
  instagram: "https://www.instagram.com/cym_muebles_lujan?stkn=Ym94d2F2aG1hNWt1",
  facebook: "https://www.facebook.com/share/1DoEEBbXSM/",
  location: "La plata 3365, Luján, Buenos Aires",
  hours: "Lunes a sábados de 9 a 19 hs",
};

/* =========================================================
   2) PRODUCTOS (editar, agregar o eliminar acá)
   Cada producto es un objeto con estas propiedades:
   - name: nombre del producto
   - price: precio (texto, ej. "$120.000")
   - image: ruta de la imagen dentro de /images
   - description: descripción corta
   - measurements: medidas (opcional, dejar "" si no aplica)
   - category: debe coincidir exactamente con una de CATEGORIES
   ========================================================= */
const CATEGORIES = [
  "Electrodomesticos",
  "Placares",
  "Cómodas",
  "Mesas",
  "Sillas",
  "Racks",
  "Muebles de cocina",
  "Living",
  "Escritorios",
  "Otros",
];

const products = [
  {
    name: "Cama de Dormitorio",
    price: "$XXX.XXX",
    image: "images/cama-dormitorio.svg",
    description: "Cama de plaza y media con respaldo tapizado. Estructura reforzada.",
    measurements: "140 x 190 cm",
    category: "Dormitorios",
  },
  {
    name: "Placar Corredizo 2 Puertas",
    price: "$XXX.XXX",
    image: "images/placar-corredizo.svg",
    description: "Placar con puertas corredizas, ideal para dormitorios de todo tamaño.",
    measurements: "180 x 200 x 60 cm",
    category: "Placares",
  },
  {
    name: "Cómoda 5 Cajones",
    price: "$XXX.XXX",
    image: "images/comoda-5-cajones.svg",
    description: "Cómoda de cinco cajones con guías metálicas y tiradores de bronce.",
    measurements: "90 x 110 x 45 cm",
    category: "Cómodas",
  },
  {
    name: "Mesa de Comedor",
    price: "$XXX.XXX",
    image: "images/mesa-comedor.svg",
    description: "Mesa de comedor para 6 personas, terminación en madera natural.",
    measurements: "160 x 90 cm",
    category: "Mesas",
  },
  {
    name: "Silla de Madera",
    price: "$XXX.XXX",
    image: "images/silla-madera.svg",
    description: "Silla de madera maciza con asiento reforzado. Se vende por unidad.",
    measurements: "45 x 45 x 88 cm",
    category: "Sillas",
  },
  {
    name: "Rack para TV",
    price: "$XXX.XXX",
    image: "images/rack-tv.svg",
    description: "Rack bajo con puertas y espacio para equipos, ideal para living.",
    measurements: "160 x 45 x 40 cm",
    category: "Racks",
  },
  {
    name: "Alacena de Cocina",
    price: "$XXX.XXX",
    image: "images/alacena-cocina.svg",
    description: "Alacena colgante con estantes internos, terminación laqueada.",
    measurements: "100 x 70 x 32 cm",
    category: "Muebles de cocina",
  },
  {
    name: "Sillón de Living",
    price: "$XXX.XXX",
    image: "images/sillon-living.svg",
    description: "Sillón individual tapizado, cómodo y resistente para el living.",
    measurements: "80 x 85 x 90 cm",
    category: "Living",
  },
  {
    name: "Escritorio",
    price: "$XXX.XXX",
    image: "images/escritorio.svg",
    description: "Escritorio con cajonera lateral, ideal para home office.",
    measurements: "120 x 60 x 75 cm",
    category: "Escritorios",
  },
  {
    name: "Perchero de Entrada",
    price: "$XXX.XXX",
    image: "images/perchero-entrada.svg",
    description: "Perchero de pie con base estable, para recibidor o dormitorio.",
    measurements: "45 x 45 x 175 cm",
    category: "Otros",
  },
];

/* =========================================================
   A partir de acá: lógica del sitio.
   No hace falta tocar nada debajo de esta línea.
   ========================================================= */

function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.whatsapp}?text=${text}`;
}

function defaultWhatsAppMessage() {
  return `Hola ${BUSINESS.name}, quisiera hacer una consulta.`;
}

function productWhatsAppMessage(product) {
  return `Hola ${BUSINESS.name}, quisiera consultar por el ${product.name} que vi en la página. Precio: ${product.price}`;
}

function applyBusinessInfo() {
  document.title = `${BUSINESS.name} | Muebles en Luján`;

  document.querySelectorAll(".js-whatsapp-link, #header-whatsapp-link, #mobile-whatsapp-link, #floating-whatsapp")
    .forEach((el) => {
      el.href = buildWhatsAppLink(defaultWhatsAppMessage());
    });

  const location = document.getElementById("contact-location");
  const footerLocation = document.getElementById("footer-location");
  const hours = document.getElementById("contact-hours");
  const instagram = document.getElementById("footer-instagram");
  const facebook = document.getElementById("footer-facebook");

  if (location) location.textContent = BUSINESS.location;
  if (footerLocation) footerLocation.textContent = BUSINESS.location;
  if (hours) hours.textContent = BUSINESS.hours;
  if (instagram) instagram.href = BUSINESS.instagram;
  if (facebook) facebook.href = BUSINESS.facebook;

  const year = document.getElementById("footer-year");
  if (year) year.textContent = new Date().getFullYear();

  // Íconos sociales en la tarjeta de contacto
  const socialRow = document.getElementById("social-row");
  if (socialRow) {
    socialRow.innerHTML = `
      <a class="social-link" href="${BUSINESS.instagram}" target="_blank" rel="noopener" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>
      </a>
      <a class="social-link" href="${BUSINESS.facebook}" target="_blank" rel="noopener" aria-label="Facebook">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V12H8v3h2.5v6H14v-6h2.5l.5-3H14V9.8c0-.4.3-.8.8-.8H14z"/></svg>
      </a>
    `;
  }
}

function renderCategories() {
  const scroller = document.getElementById("category-scroller");
  if (!scroller) return;

  const all = ["Todos", ...CATEGORIES];
  scroller.innerHTML = all
    .map((cat, i) => `
      <button class="category-chip ${i === 0 ? "is-active" : ""}" data-category="${cat}">
        ${cat}
      </button>
    `)
    .join("");

  scroller.addEventListener("click", (e) => {
    const chip = e.target.closest(".category-chip");
    if (!chip) return;
    scroller.querySelectorAll(".category-chip").forEach((c) => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    renderProducts(chip.dataset.category);
  });
}

function productCardHTML(product) {
  const waLink = buildWhatsAppLink(productWhatsAppMessage(product));
  const measurements = product.measurements
    ? `<p class="product-meta">Medidas: ${product.measurements}</p>`
    : "";

  return `
    <article class="product-card">
      <div class="product-photo">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        ${measurements}
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <a class="btn btn-whatsapp" href="${waLink}" target="_blank" rel="noopener">Consultar</a>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(category) {
  const grid = document.getElementById("product-grid");
  const emptyState = document.getElementById("empty-state");
  if (!grid) return;

  const filtered = !category || category === "Todos"
    ? products
    : products.filter((p) => p.category === category);

  grid.innerHTML = filtered.map(productCardHTML).join("");
  emptyState.classList.toggle("is-visible", filtered.length === 0);
}

function setupMobileMenu() {
  const btn = document.getElementById("hamburger-btn");
  const nav = document.getElementById("nav-mobile");
  if (!btn || !nav) return;

  function closeMenu() {
    btn.classList.remove("is-open");
    nav.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    btn.classList.toggle("is-open", isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
}

document.addEventListener("DOMContentLoaded", () => {
  applyBusinessInfo();
  renderCategories();
  renderProducts("Todos");
  setupMobileMenu();
});
