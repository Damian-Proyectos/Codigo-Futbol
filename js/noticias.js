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
{
  "status": "ok",
  "feed": {
    "url": "https://e00-marca.uecdn.es/rss/futbol/segunda-division.xml",
    "title": "LALIGA Hypermotion - Segunda División // marca",
    "link": "https://www.marca.com/",
    "author": "",
    "description": "LALIGA Hypermotion - Segunda División // marca",
    "image": "https://objetos.estaticos-marca.com/imagen/canalima144.gif"
  },
  "items": [
    {
      "title": "El médico de Las Palmas le salva la vida a un pasajero en el aeropuerto de Gran Canaria",
      "pubDate": "2026-09-27 14:07:52",
      "link": "https://www.marca.com/futbol/las-palmas/2026/09/27/medico-palmas-le-salva-vida-pasajero-aeropuerto-gran-canaria.html",
      "guid": "https://www.marca.com/futbol/las-palmas/2026/09/27/medico-palmas-le-salva-vida-pasajero-aeropuerto-gran-canaria.html",
      "author": "JESÚS IZQUIERDO",
      "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/27/17905180649403_150x0.jpg",
      "description": "Diosdado Bolaños auxilió al hombre tras desplomarse repentinamente <a href=\"https://www.marca.com/futbol/las-palmas/2026/09/27/medico-palmas-le-salva-vida-pasajero-aeropuerto-gran-canaria.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "content": "Diosdado Bolaños auxilió al hombre tras desplomarse repentinamente <a href=\"https://www.marca.com/futbol/las-palmas/2026/09/27/medico-palmas-le-salva-vida-pasajero-aeropuerto-gran-canaria.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "enclosure": {
        "link": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/27/17905180649403.jpg",
        "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/27/17905180649403_150x0.jpg"
      },
      "categories": [
        "Segunda División",
        "UD Las Palmas"
      ]
    },
    {
      "title": "Un derbi asturiano para despegar",
      "pubDate": "2026-09-27 05:31:52",
      "link": "https://www.marca.com/futbol/segunda-division/2026/09/27/derbi-asturiano-despegar.html",
      "guid": "https://www.marca.com/futbol/segunda-division/2026/09/27/derbi-asturiano-despegar.html",
      "author": "JUAN MORENO / IGNACIO FELGUEROSO",
      "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/27/17904871051475_150x0.jpg",
      "description": "Irregular inicio liguero de ambos •&amp;nbsp;Calero llega con el ataque bajo mínimos • Larcamón quiere estrenarse con un triunfo gijonés que no llega desde 2001 <a href=\"https://www.marca.com/futbol/segunda-division/2026/09/27/derbi-asturiano-despegar.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "content": "Irregular inicio liguero de ambos •&amp;nbsp;Calero llega con el ataque bajo mínimos • Larcamón quiere estrenarse con un triunfo gijonés que no llega desde 2001 <a href=\"https://www.marca.com/futbol/segunda-division/2026/09/27/derbi-asturiano-despegar.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "enclosure": {
        "link": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/27/17904871051475.jpg",
        "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/27/17904871051475_150x0.jpg"
      },
      "categories": [
        "Segunda División",
        "Real Oviedo",
        "Sporting de Gijón"
      ]
    },
    {
      "title": "Chris Ramos recupera el '9' para el derbi asturiano",
      "pubDate": "2026-09-26 19:21:00",
      "link": "https://www.marca.com/futbol/oviedo/2026/09/26/chris-ramos-recupera-9-derbi-asturiano.html",
      "guid": "https://www.marca.com/futbol/oviedo/2026/09/26/chris-ramos-recupera-9-derbi-asturiano.html",
      "author": "JUAN MORENO",
      "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/26/17904504539918_150x0.jpg",
      "description": "El delantero apunta a regresar al once del Oviedo ante el Sporting tras superar sus problemas físicos y con el recuerdo de haber marcado ya a los rojiblancos <a href=\"https://www.marca.com/futbol/oviedo/2026/09/26/chris-ramos-recupera-9-derbi-asturiano.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "content": "El delantero apunta a regresar al once del Oviedo ante el Sporting tras superar sus problemas físicos y con el recuerdo de haber marcado ya a los rojiblancos <a href=\"https://www.marca.com/futbol/oviedo/2026/09/26/chris-ramos-recupera-9-derbi-asturiano.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "enclosure": {
        "link": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/26/17904504539918.jpg",
        "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/26/17904504539918_150x0.jpg"
      },
      "categories": [
        "Segunda División",
        "Real Oviedo",
        "Sporting de Gijón"
      ]
    },
    {
      "title": "\"El Ceuta sí puede jugar aquí y la sub 20 no? La broma se cuenta sola\"",
      "pubDate": "2026-09-26 18:12:41",
      "link": "https://www.marca.com/futbol/seleccion/2026/09/26/ceuta-jugar-aqui-sub-20-broma-cuenta-sola.html",
      "guid": "https://www.marca.com/futbol/seleccion/2026/09/26/ceuta-jugar-aqui-sub-20-broma-cuenta-sola.html",
      "author": "PABLO M. OTERO",
      "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/26/17904463511842_150x0.jpg",
      "description": "José Juan Romero, técnico del equipo caballa, vuelve a criticar las decisiones de los que mandan por todo lo que está pasando en la ciudad autónoma <a href=\"https://www.marca.com/futbol/seleccion/2026/09/26/ceuta-jugar-aqui-sub-20-broma-cuenta-sola.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "content": "José Juan Romero, técnico del equipo caballa, vuelve a criticar las decisiones de los que mandan por todo lo que está pasando en la ciudad autónoma <a href=\"https://www.marca.com/futbol/seleccion/2026/09/26/ceuta-jugar-aqui-sub-20-broma-cuenta-sola.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "enclosure": {
        "link": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/26/17904463511842.jpg",
        "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/26/17904463511842_150x0.jpg"
      },
      "categories": [
        "Selección de Fútbol de España",
        "Segunda División",
        "AD Ceuta FC"
      ]
    },
    {
      "title": "Aperribay viaja con el Sanse a Ceuta y regala una camiseta de Oyarzabal al club local",
      "pubDate": "2026-09-26 16:14:27",
      "link": "https://www.marca.com/futbol/real-sociedad-b/2026/09/26/aperribay-viaja-sanse-ceuta-regala-camiseta-oyarzabal-club-local.html",
      "guid": "https://www.marca.com/futbol/real-sociedad-b/2026/09/26/aperribay-viaja-sanse-ceuta-regala-camiseta-oyarzabal-club-local.html",
      "author": "ÓSCAR BADALLO",
      "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/26/17904392521052_150x0.jpg",
      "description": "El presidente de la Real no suele viajar con el segundo equipo, pero esta vez sí lo ha hecho y ha entregado a su colega del club ceutí varios obsequios <a href=\"https://www.marca.com/futbol/real-sociedad-b/2026/09/26/aperribay-viaja-sanse-ceuta-regala-camiseta-oyarzabal-club-local.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "content": "El presidente de la Real no suele viajar con el segundo equipo, pero esta vez sí lo ha hecho y ha entregado a su colega del club ceutí varios obsequios <a href=\"https://www.marca.com/futbol/real-sociedad-b/2026/09/26/aperribay-viaja-sanse-ceuta-regala-camiseta-oyarzabal-club-local.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "enclosure": {
        "link": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/26/17904392521052.jpg",
        "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/26/17904392521052_150x0.jpg"
      },
      "categories": [
        "Segunda División",
        "Real Sociedad",
        "Real Sociedad B",
        "AD Ceuta FC"
      ]
    },
    {
      "title": "De la Barrera recupera efectivos, pero Loiodice jugará de la lateral",
      "pubDate": "2026-09-26 09:59:16",
      "link": "https://www.marca.com/futbol/las-palmas/2026/09/26/barrera-recupera-efectivos-loiodice-jugara-lateral.html",
      "guid": "https://www.marca.com/futbol/las-palmas/2026/09/26/barrera-recupera-efectivos-loiodice-jugara-lateral.html",
      "author": "JESÚS IZQUIERDO",
      "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/07/17887767676382_150x0.jpg",
      "description": "Opoku y Álex Suárez entran en la lista, aunque no se espera que sean titulares <a href=\"https://www.marca.com/futbol/las-palmas/2026/09/26/barrera-recupera-efectivos-loiodice-jugara-lateral.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "content": "Opoku y Álex Suárez entran en la lista, aunque no se espera que sean titulares <a href=\"https://www.marca.com/futbol/las-palmas/2026/09/26/barrera-recupera-efectivos-loiodice-jugara-lateral.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "enclosure": {
        "link": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/07/17887767676382.jpg",
        "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/07/17887767676382_150x0.jpg"
      },
      "categories": [
        "Segunda División",
        "UD Las Palmas"
      ]
    },
    {
      "title": "Calleja desvela que el Eldense cuenta ya... con un nuevo presidente",
      "pubDate": "2026-09-25 15:44:18",
      "link": "https://www.marca.com/futbol/cd-eldense/2026/09/25/calleja-desvela-eldense-cuenta-nuevo-presidente.html",
      "guid": "https://www.marca.com/futbol/cd-eldense/2026/09/25/calleja-desvela-eldense-cuenta-nuevo-presidente.html",
      "author": "EFE",
      "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/25/17903510567866_150x0.jpg",
      "description": "El entrenador del club propiedad de Messi lo ha asegurado ante los medios&amp;nbsp; <a href=\"https://www.marca.com/futbol/cd-eldense/2026/09/25/calleja-desvela-eldense-cuenta-nuevo-presidente.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "content": "El entrenador del club propiedad de Messi lo ha asegurado ante los medios&amp;nbsp; <a href=\"https://www.marca.com/futbol/cd-eldense/2026/09/25/calleja-desvela-eldense-cuenta-nuevo-presidente.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "enclosure": {
        "link": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/25/17903510567866.jpg",
        "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/25/17903510567866_150x0.jpg"
      },
      "categories": [
        "Segunda División",
        "Burgos CF",
        "Javier Calleja"
      ]
    },
    {
      "title": "El Tartiere, territorio prohibido para el Sporting",
      "pubDate": "2026-09-25 14:42:48",
      "link": "https://www.marca.com/futbol/oviedo/2026/09/25/tartiere-territorio-prohibido-sporting.html",
      "guid": "https://www.marca.com/futbol/oviedo/2026/09/25/tartiere-territorio-prohibido-sporting.html",
      "author": "JUAN MORENO",
      "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/25/17903473674184_150x0.jpg",
      "description": "El conjunto rojiblanco no gana un derbi en el estadio del Real Oviedo desde octubre de 2001 y acumula nueve visitas consecutivas sin conseguir la victoria <a href=\"https://www.marca.com/futbol/oviedo/2026/09/25/tartiere-territorio-prohibido-sporting.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "content": "El conjunto rojiblanco no gana un derbi en el estadio del Real Oviedo desde octubre de 2001 y acumula nueve visitas consecutivas sin conseguir la victoria <a href=\"https://www.marca.com/futbol/oviedo/2026/09/25/tartiere-territorio-prohibido-sporting.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "enclosure": {
        "link": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/25/17903473674184.jpg",
        "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/25/17903473674184_150x0.jpg"
      },
      "categories": [
        "Segunda División",
        "Real Oviedo",
        "Sporting de Gijón"
      ]
    },
    {
      "title": "Aranbarri: \"Ipurua es especial y nos hace ser mejores\"",
      "pubDate": "2026-09-25 13:41:08",
      "link": "https://www.marca.com/futbol/eibar/2026/09/25/aranbarri-ipurua-especial-mejores.html",
      "guid": "https://www.marca.com/futbol/eibar/2026/09/25/aranbarri-ipurua-especial-mejores.html",
      "author": "ANDER BARROSO",
      "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/25/17903436671244_150x0.jpg",
      "description": "El Eibar afronta su regreso a casa tras dos jornadas consecutivas a domicilio <a href=\"https://www.marca.com/futbol/eibar/2026/09/25/aranbarri-ipurua-especial-mejores.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "content": "El Eibar afronta su regreso a casa tras dos jornadas consecutivas a domicilio <a href=\"https://www.marca.com/futbol/eibar/2026/09/25/aranbarri-ipurua-especial-mejores.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "enclosure": {
        "link": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/25/17903436671244.jpg",
        "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/25/17903436671244_150x0.jpg"
      },
      "categories": [
        "Segunda División",
        "SD Eibar"
      ]
    },
    {
      "title": "Larcamón elogia al derbi asturiano: “Es de los más pasionales de España”",
      "pubDate": "2026-09-25 13:29:02",
      "link": "https://www.marca.com/futbol/sporting/2026/09/25/larcamon-elogia-derbi-asturiano-pasionales-espana.html",
      "guid": "https://www.marca.com/futbol/sporting/2026/09/25/larcamon-elogia-derbi-asturiano-pasionales-espana.html",
      "author": "IGNACIO FELGUEROSO",
      "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/25/17903429398400_150x0.jpg",
      "description": "El técnico del Sporting de Gijón analizó en Mareo su primer enfrentamiento contra el Oviedo <a href=\"https://www.marca.com/futbol/sporting/2026/09/25/larcamon-elogia-derbi-asturiano-pasionales-espana.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "content": "El técnico del Sporting de Gijón analizó en Mareo su primer enfrentamiento contra el Oviedo <a href=\"https://www.marca.com/futbol/sporting/2026/09/25/larcamon-elogia-derbi-asturiano-pasionales-espana.html\"> Leer </a><img src=\"http://secure-uk.imrworldwide.com/cgi-bin/m?cid=es-widgetueditorial&amp;cg=rss-marca&amp;ci=es-widgetueditorial&amp;si=https://objetos.estaticos-marca.com/rss/futbol/segunda-division.xml\" alt=\"\">\n",
      "enclosure": {
        "link": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/25/17903429398400.jpg",
        "thumbnail": "https://objetos.estaticos-marca.com/assets/multimedia/imagenes/2026/09/25/17903429398400_150x0.jpg"
      },
      "categories": [
        "Segunda División",
        "Real Oviedo",
        "Sporting de Gijón"
      ]
    }
  ]
}