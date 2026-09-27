/* ==========================================================================
   NOTICIAS.JS - MÓDULO DE NOTICIAS Y ACTUALIDAD (Codigo-Futbol)
   ========================================================================== */

// Base de datos simulada de noticias de LaLiga Hypermotion
const NOTICIAS_DATA = [
    {
        id: 1,
        titulo: "El Real Zaragoza refuerza su medular de cara a la segunda vuelta",
        resumen: "El conjunto maño cierra una incorporación clave para mantener sus opciones de playoff en la recta final del campeonato.",
        categoria: "Fichajes",
        fecha: "Hace 2 horas",
        imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&auto=format&fit=crop&q=80",
        destacada: true
    },
    {
        id: 2,
        titulo: "El RCD Espanyol firma una goleada de mérito en casa",
        resumen: "Con una actuación estelar de su delantero estrella, los pericos consolidan el liderato tras un recital ofensivo.",
        categoria: "Crónica",
        fecha: "Hace 5 horas",
        imagen: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&auto=format&fit=crop&q=80",
        destacada: false
    },
    {
        id: 3,
        titulo: "Análisis Táctico: Elche CF y la presión alta que asfixia a sus rivales",
        resumen: "Desglosamos las claves del sistema utilizado esta jornada para dominar la posesión y neutralizar las contras.",
        categoria: "Táctica",
        fecha: "Hace 1 día",
        imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&auto=format&fit=crop&q=80",
        destacada: false
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const contenedorNoticias = document.getElementById('contenedor-noticias');
    if (contenedorNoticias) {
        renderizarNoticias(NOTICIAS_DATA, contenedorNoticias);
    }
});

/**
 * Renderiza el listado de noticias en el contenedor indicado
 * @param {Array} listaNoticias 
 * @param {HTMLElement} contenedor 
 */
function renderizarNoticias(listaNoticias, contenedor) {
    contenedor.innerHTML = '';

    listaNoticias.forEach(noticia => {
        const card = document.createElement('article');
        card.className = 'bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700 transition-all group flex flex-col justify-between';

        card.innerHTML = `
            <div>
                <div class="relative overflow-hidden h-48">
                    <img src="${noticia.imagen}" alt="${noticia.titulo}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    <span class="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-lg border border-emerald-500/20">
                        ${noticia.categoria}
                    </span>
                </div>
                <div class="p-5">
                    <span class="text-xs text-slate-400 block mb-2">${noticia.fecha}</span>
                    <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                        ${noticia.titulo}
                    </h3>
                    <p class="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                        ${noticia.resumen}
                    </p>
                </div>
            </div>
            <div class="px-5 pb-5 pt-0">
                <a href="partido-detalle.html" class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300">
                    <span>Leer noticia completa</span>
                    <span>→</span>
                </a>
            </div>
        `;

        contenedor.appendChild(card);
    });
}