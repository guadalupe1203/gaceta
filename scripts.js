/* ================================================
   GACETA iUDY — scripts.js  FINAL
   ================================================ */

/* ── VIDEO INTRO ── */
(function () {
  var videoScreen = document.getElementById('video-intro-screen');
  var video       = document.getElementById('intro-video');
  var fill        = document.getElementById('video-progress-fill');

  if (!video || !videoScreen) return;

  // Actualiza barra de progreso
  video.addEventListener('timeupdate', function () {
    if (video.duration) {
      fill.style.width = ((video.currentTime / video.duration) * 100) + '%';
    }
  });

  // Cuando termina el video, pasa al welcome screen
  video.addEventListener('ended', function () {
    transitionToWelcome();
  });

  // Si el video no carga, salta al welcome screen automáticamente
  video.addEventListener('error', function () {
    transitionToWelcome();
  });

  function transitionToWelcome() {
    videoScreen.classList.add('fade-out');
    setTimeout(function () {
      videoScreen.classList.add('hidden');
    }, 850);
  }

  window.skipIntro = function () {
    transitionToWelcome();
  };
})();

/* ── DATOS ARTÍCULOS ── */
var ART = {
  talentos:{cat:'Cultura',color:'linear-gradient(135deg,#0d2b56,#1a5fa0)',titulo:'Poemas ganadores de Talentos Universitarios 2025',texto:['\"La poesía es una bellísima doncella, casta, honesta, discreta, aguda, retirada, y que se contiene en los límites de la medida.\" Con esta cita de Cervantes inicia el poema ganador del primer lugar en la categoría de verso libre del concurso Talentos Universitarios 2025 del iUDY.','El certamen literario, realizado anualmente desde hace doce ediciones, convocó en este ciclo a más de 90 participantes de todas las licenciaturas. El jurado, integrado por tres docentes del área de Humanidades y un poeta invitado, evaluó las obras bajo criterios de originalidad, dominio del lenguaje y profundidad temática.','Los ganadores de cada categoría —verso libre, soneto y haiku— recibirán publicación en esta edición de la Gaceta, reconocimiento en ceremonia oficial y apoyo para participar en la Feria del Libro Regional.','El iUDY felicita a todos los participantes y reafirma su compromiso con la promoción de las artes y la expresión creativa.']},
  certificados:{cat:'Logros',color:'linear-gradient(135deg,#0d3b5e,#1a6091)',titulo:'¡Felicitaciones a nuestros bachilleres!',texto:['Del 8 al 11 de septiembre de 2025, el Instituto Universitario de Yucatán llevó a cabo la ceremonia de entrega de certificados de bachillerato a los alumnos de la generación 2023–2025.','En total, 214 jóvenes culminaron satisfactoriamente el nivel medio superior y recibieron su certificado oficial, documento indispensable para continuar estudios de licenciatura o integrarse al mercado laboral.','La ceremonia contó con la presencia del Rector, directivos y docentes del plantel, quienes felicitaron a los egresados y los invitaron a continuar su formación en las licenciaturas del iUDY.','¡El iUDY está orgulloso de cada uno de sus egresados y les desea mucho éxito en sus proyectos futuros!']},
  mercadito:{cat:'Comunidad',color:'linear-gradient(135deg,#5d0e0e,#a93226)',titulo:'Mercadito Universitario para apoyar a los estudiantes',texto:['La Federación de Estudiantes del iUDY lanzó el proyecto Mercadito Universitario, un espacio de comercio solidario dentro del campus que busca generar ingresos complementarios para los propios alumnos.','El Mercadito opera cada miércoles en el patio central del edificio principal, de 10:00 a 14:00 horas. Cualquier alumno inscrito puede solicitar un módulo de forma gratuita.','La iniciativa ya suma más de 35 emprendedores y ha generado ingresos reales para las familias participantes.','Para registrarte escribe a federacion@iudysureste.com.']},
  bienvenida:{cat:'Institucional',color:'linear-gradient(135deg,#1a2a5e,#2a4a9e)',titulo:'¡Bienvenido, Gaucho! Ya eres parte del iUDY',texto:['¡Bienvenido, Gaucho! A partir de hoy formas parte de la gran familia del Instituto Universitario de Yucatán, una institución con más de 25 años de trayectoria formando profesionistas comprometidos con la sociedad.','El iUDY te ofrece docentes altamente calificados, infraestructura moderna y una red de más de 8,000 egresados.','Conoce todos los servicios: biblioteca, laboratorios, canchas, servicio médico, orientación psicológica, bolsa de trabajo y movilidad estudiantil.','Recuerda: el iUDY es tu casa. ¡Mucho éxito, Gaucho!']},
  emprendimiento:{cat:'Negocios',color:'linear-gradient(135deg,#1a3a5c,#2471a3)',titulo:'Tips para emprender en la nueva normalidad',texto:['El entorno económico actual, marcado por la digitalización, ha generado grandes oportunidades para los emprendedores.','Un egresado del iUDY en Diseño Gráfico comparte sus aprendizajes como fundador de su propia agencia en Mérida.','Sus recomendaciones: valida tu idea antes de invertir, construye marca personal en redes y aprovecha la red de egresados iUDY.','El Centro de Emprendimiento del iUDY ofrece asesoría gratuita. Escríbenos a emprendimiento@iudysureste.com.']},
  investigacion:{cat:'Ciencia',color:'linear-gradient(135deg,#0d3b3b,#148f77)',titulo:'Investigadores iUDY en congreso nacional de ciencias sociales',texto:['Cuatro proyectos del iUDY fueron seleccionados para el XIX Congreso Nacional de Ciencias Sociales.','Los trabajos abordan: inclusión educativa en comunidades mayas, tecnología y aprendizaje rural, género y mercado laboral, y gobernanza local en Yucatán.','La participación del iUDY abre la puerta a colaboraciones con universidades nacionales e internacionales.','Resúmenes completos disponibles en el portal institucional.']},
  pod1:{cat:'Podcast',color:'linear-gradient(135deg,#2d1654,#6c3483)',titulo:'EP. 01 — Educación y tecnología: el futuro del aula universitaria',texto:['En este primer episodio conversamos con docentes del iUDY sobre cómo la IA y las aulas híbridas transforman la enseñanza en Yucatán.','El piloto de aulas híbridas 2025-A logró que el 92% de estudiantes reportara mayor satisfacción con la modalidad combinada.','Se abordan los retos: brecha digital, resistencia al cambio y actualización de planes de estudio.','Duración: 28 minutos. Disponible en Spotify, Apple Podcasts y en el portal iUDY.']},
  pod2:{cat:'Podcast',color:'linear-gradient(135deg,#1a3d1a,#27ae60)',titulo:'EP. 02 — Emprender desde la universidad: historias reales de egresados iUDY',texto:['Tres egresados comparten sus historias: los aciertos, los fracasos y las lecciones que ningún aula les enseñó.','Un fundador de startup logística, una directora de agencia digital y un creador de plataforma EdTech para escuelas rurales.','Coinciden: el iUDY les dio las bases técnicas; la red de egresados les dio las habilidades blandas para el éxito.','Duración: 35 minutos. En todas las plataformas de streaming.']},
  pod3:{cat:'Podcast',color:'linear-gradient(135deg,#5d3a00,#c8780a)',titulo:'EP. 03 — Salud mental universitaria: cómo sobrevivir y prosperar en la carrera',texto:['La psicóloga del iUDY y dos estudiantes hablan abiertamente sobre estrés académico, ansiedad y equilibrio emocional.','Estrategias: manejo del tiempo, mindfulness, importancia del sueño y actividad física.','Pedir ayuda es una señal de fortaleza, no de debilidad.','El iUDY ofrece sesiones de psicología gratuitas. Agenda en psicologia@iudysureste.com. Duración: 42 min.']},
  ent1:{cat:'Entrevista',color:'linear-gradient(135deg,#2c1654,#8e44ad)',titulo:'"El iUDY está más fuerte que nunca": entrevista con el Rector',texto:['El Rector repasa los logros del ciclo 2024–2025: acreditación FIMPES renovada, dos nuevos posgrados y el laboratorio de IA inaugurado.','El campus Tabasco abrirá un segundo edificio en enero 2026.','\"El iUDY existe para ser la mejor opción en calidad educativa, no solo la más accesible.\"','Entrevista completa en YouTube del iUDY. Duración: 12 minutos.']},
  ent2:{cat:'Entrevista',color:'linear-gradient(135deg,#1a3d4a,#2980b9)',titulo:'De las aulas del iUDY al mundo laboral: historia de una egresada exitosa',texto:['Egresada de Administración que hoy dirige su consultora en Mérida con diez colaboradores y clientes en tres estados.','Tres claves: formación práctica del iUDY, networking de la red de egresados y cultura del esfuerzo.','Aprendizajes: importancia del flujo de caja, saber delegar y construir propuesta de valor diferenciada.','Audio disponible en el podcast de la Gaceta iUDY. Duración: 18 minutos.']},
  ent3:{cat:'Entrevista',color:'linear-gradient(135deg,#3d1a0d,#c0392b)',titulo:'Investigación aplicada en el iUDY: proyectos que cambian la comunidad',texto:['Docente investigador comparte tres años de trabajo de campo sobre inclusión educativa en comunidades indígenas de Yucatán, financiado por CONACYT.','Documentó barreras lingüísticas, económicas y tecnológicas de estudiantes de pueblos originarios al ingresar a la educación superior.','La investigación fue presentada en el XIX Congreso Nacional y generó interés de la UADY y el CIESAS.','\"La investigación en el iUDY es un medio para transformar realidades concretas.\"']},
  ot1:{cat:'Galería',color:'linear-gradient(135deg,#1a2a1a,#2e7d32)',titulo:'Galería fotográfica: Semana Cultural iUDY 2025',texto:['La Semana Cultural 2025 reunió del 15 al 20 de septiembre a toda la comunidad en un despliegue de talento y diversidad.','Eventos: arte visual, danza folclórica y contemporánea, gastronomía regional, maratón de lectura, debate, feria de emprendimiento y concierto de cierre.','La galería reúne más de 80 imágenes del equipo de Comunicación y de los propios estudiantes.','Galería completa en iudysureste.com / Vida Universitaria.']},
  ot2:{cat:'Convocatoria',color:'linear-gradient(135deg,#2a1a00,#f39c12)',titulo:'Convocatoria: becas iUDY 2025-B — Requisitos y fechas límite',texto:['El iUDY abre solicitudes de becas para agosto–diciembre 2025: académica (promedio 9.0+), económica y de excelencia.','Requisitos: inscripción vigente, sin adeudos, solicitud firmada e historial académico actualizado.','Entrevistas del 1 al 10 de octubre. Resultados el 20 de octubre en el portal estudiantil.','Fecha límite: 30 de septiembre. Informes: becas@iudysureste.com.']},
  ot3:{cat:'Video',color:'linear-gradient(135deg,#0a2a3d,#1abc9c)',titulo:'Recorrido virtual por las instalaciones del nuevo campus iUDY Tabasco',texto:['El campus iUDY Tabasco abre con un recorrido virtual de 5 minutos en YouTube y en iudysureste.com.','18 aulas tecnológicas, laboratorio de cómputo (60 estaciones), biblioteca con 8,000+ títulos, cafetería y área deportiva.','Iniciará operaciones en enero 2026 con 5 licenciaturas.','Informes: 993-139-9042 o iudysureste.com.']}
};

/* ── FECHA TOPBAR ── */
(function(){
  var el = document.getElementById('topbar-date');
  if(el) el.textContent = new Date().toLocaleDateString('es-MX',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
})();


/* ── MODAL ── */
function abrirModal(id){
  var d = ART[id]; if(!d) return;
  var ov=document.getElementById('modal'), mt=document.getElementById('modal-top'), mb=document.getElementById('modal-body');
  if(!ov) return;
  mt.style.background = d.color;
  mt.innerHTML = '<span class="mt-cat">'+d.cat+'</span>';
  mb.innerHTML = '<h2>'+d.titulo+'</h2>'+
    d.texto.map(function(p){ return '<p>'+p+'</p>'; }).join('')+
    '<button class="modal-dl-btn" onclick="descargarPDF(\''+id+'\')">📥 Descargar como PDF</button>';
  // Si es artículo subido con archivo
  if(d.fileData){
    var extra = '';
    if((d.fileType==='application/pdf')||(d.fileName&&d.fileName.toLowerCase().endsWith('.pdf'))){
      extra = '<button class="modal-dl-btn" style="background:#27ae60;margin-left:.5rem" onclick="window.open(\''+d.fileData+'\',\'_blank\')">📄 Abrir PDF</button>';
    } else if(d.fileType==='text/plain'&&typeof d.fileData==='string'&&!d.fileData.startsWith('data:')){
      mb.innerHTML += '<div style="background:#f8f9fa;border-radius:6px;padding:.9rem;margin-top:.8rem;font-size:.78rem;white-space:pre-wrap;max-height:240px;overflow-y:auto;border:1px solid #dde2ed;font-family:monospace">'+d.fileData.replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</div>';
    } else {
      extra = '<button class="modal-dl-btn" style="background:#27ae60;margin-left:.5rem" onclick="dlArchivo(\''+id+'\')">📎 Descargar archivo</button>';
    }
    if(extra) mb.innerHTML += extra;
  }
  ov.classList.add('open'); ov.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}

function cerrarModal(){
  var ov=document.getElementById('modal'); if(!ov) return;
  ov.classList.remove('open'); ov.setAttribute('aria-hidden','true'); document.body.style.overflow='';
}

var mc = document.getElementById('modal-close');
if(mc) mc.addEventListener('click', cerrarModal);
var mo = document.getElementById('modal');
if(mo) mo.addEventListener('click', function(e){ if(e.target===this) cerrarModal(); });
document.addEventListener('keydown', function(e){ if(e.key==='Escape') cerrarModal(); });

// Delegación: todos los .btn-leer con data-id
document.body.addEventListener('click', function(e){
  var btn = e.target.closest('.btn-leer[data-id]');
  if(btn) abrirModal(btn.getAttribute('data-id'));
});

/* ── DESCARGA PDF ── */
function descargarPDF(id){
  var d=ART[id]; if(!d) return;
  var css='body{font-family:Georgia,serif;margin:55px 70px;color:#1c2230;line-height:1.75}header{text-align:center;border-bottom:3px solid #C8A034;padding-bottom:1rem;margin-bottom:2rem}header h1{color:#1a2a5e;font-size:1.5rem;margin:0}header p{font-size:.75rem;color:#888;margin-top:.3rem}.cat{display:inline-block;background:#C8A034;color:#1a2a5e;font-size:.62rem;font-weight:700;padding:.2rem .7rem;border-radius:3px;text-transform:uppercase;letter-spacing:.1em;margin-bottom:1.2rem}h2{font-size:1.2rem;color:#1a2a5e;margin-bottom:.9rem}p{font-size:.88rem;margin-bottom:.85rem;text-align:justify}footer{margin-top:3rem;padding-top:.9rem;border-top:1px solid #ddd;text-align:center;font-size:.65rem;color:#aaa}@media print{@page{margin:2cm}button{display:none}}';
  var w=window.open('','_blank'); if(!w){ alert('Permite ventanas emergentes para descargar.'); return; }
  w.document.write('<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>'+d.titulo+'</title><style>'+css+'</style></head><body>');
  w.document.write('<header><h1>Gaceta Universitaria iUDY — No. 142</h1><p>Agosto – Septiembre 2025 · Instituto Universitario de Yucatán · iudysureste.com</p></header>');
  w.document.write('<span class="cat">'+d.cat+'</span><h2>'+d.titulo+'</h2>');
  d.texto.forEach(function(p){ w.document.write('<p>'+p+'</p>'); });
  w.document.write('<footer>Gaceta Universitaria iUDY · No. 142 · gaceta@iudysureste.com · 993-139-9042 · iudysureste.com</footer>');
  w.document.write('</body></html>'); w.document.close(); w.focus();
  setTimeout(function(){ w.print(); }, 550);
}
window.descargarPDF = descargarPDF;

function dlArchivo(id){
  var d=ART[id]; if(!d||!d.fileData) return;
  var a=document.createElement('a'); a.href=d.fileData; a.download=d.fileName||'articulo';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}
window.dlArchivo = dlArchivo;

/* ── TABS ── */
document.querySelectorAll('.tab-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    document.querySelectorAll('.tab-btn').forEach(function(b){ b.classList.remove('active'); });
    document.querySelectorAll('.tab-panel').forEach(function(p){ p.classList.remove('active'); });
    btn.classList.add('active');
    var panel = document.getElementById('tab-'+btn.dataset.tab);
    if(panel) panel.classList.add('active');
  });
});

/* ── HAMBURGUESA ── */
(function(){
  var ham=document.getElementById('hamburger'), nav=document.getElementById('main-nav');
  if(!ham||!nav) return;
  ham.addEventListener('click',function(){ nav.classList.toggle('open'); ham.classList.toggle('open'); });
  document.addEventListener('click',function(e){ if(!ham.contains(e.target)&&!nav.contains(e.target)){ nav.classList.remove('open'); ham.classList.remove('open'); } });
})();

/* ── SCROLL + HEADER ── */
(function(){
  var header=document.getElementById('header'), btn=document.getElementById('scroll-top');
  window.addEventListener('scroll',function(){
    var d=window.scrollY>60;
    if(header) header.classList.toggle('scrolled',d);
    if(btn) btn.classList.toggle('visible',d);
  },{passive:true});
  if(btn) btn.addEventListener('click',function(){ window.scrollTo({top:0,behavior:'smooth'}); });
})();

/* ── DESCARGA PORTADA COMPLETA ── */
(function(){
  var btn=document.getElementById('btn-leer-gaceta'); if(!btn) return;
  btn.addEventListener('click',function(){
    var css='body{font-family:Georgia,serif;margin:60px;color:#1c2230;text-align:center}h1{color:#1a2a5e;font-size:2rem}p{color:#555;font-size:.9rem;line-height:1.7}ul{text-align:left;max-width:420px;margin:1rem auto}li{font-size:.87rem;margin:.4rem 0}footer{margin-top:3rem;font-size:.68rem;color:#aaa;border-top:1px solid #ddd;padding-top:.9rem}@media print{@page{margin:2cm}}';
    var w=window.open('','_blank'); if(!w){ alert('Permite ventanas emergentes.'); return; }
    w.document.write('<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>Gaceta iUDY No.142</title><style>'+css+'</style></head><body>');
    w.document.write('<h1>GACETA UNIVERSITARIA iUDY</h1><p>No. 142 &nbsp;·&nbsp; Agosto – Septiembre 2025 &nbsp;·&nbsp; Año 25, Época 3<br>ISSN 2709-4521 · Instituto Universitario de Yucatán</p>');
    w.document.write('<h3 style="color:#C8A034;margin-top:2rem">Contenidos de esta edición</h3><ul>');
    ['Poemas ganadores — Talentos Universitarios 2025','¡Felicitaciones a nuestros 214 bachilleres!','Mercadito Universitario — Emprendimiento estudiantil','¡Bienvenido Gaucho! — Nuevos estudiantes iUDY','Tips para emprender en la nueva normalidad','Investigadores iUDY en congreso nacional','Podcast EP.01 — Educación y tecnología','Podcast EP.02 — Emprender desde la universidad','Podcast EP.03 — Salud mental universitaria','Entrevista al Rector del iUDY','Galería: Semana Cultural iUDY 2025','Convocatoria Becas 2025-B','Recorrido virtual campus Tabasco'].forEach(function(i){ w.document.write('<li>'+i+'</li>'); });
    w.document.write('</ul><footer>Gaceta Universitaria iUDY · gaceta@iudysureste.com · 993-139-9042 · iudysureste.com</footer></body></html>');
    w.document.close(); w.focus(); setTimeout(function(){ w.print(); },500);
  });
})();



/* =====================================================
   WELCOME SCREEN — Pantalla de bienvenida
   ===================================================== */
(function () {
  /* Generar puntos decorativos */
  var container = document.getElementById('ws-dots-container');
  if (container) {
    for (var i = 0; i < 28; i++) {
      var d = document.createElement('div');
      d.className = 'ws-dot';
      var sz = Math.random() * 3 + 1;
      d.style.cssText =
        'width:' + sz + 'px;height:' + sz + 'px;' +
        'left:' + Math.random() * 100 + '%;' +
        'top:' + Math.random() * 100 + '%;' +
        'animation-delay:' + Math.random() * 3 + 's;' +
        'animation-duration:' + (Math.random() * 2 + 2) + 's;';
      container.appendChild(d);
    }
  }
  /* Auto-entrar después de 12 segundos */
  window._wsAutoTimer = setTimeout(enterSite, 12000);
})();

function enterSite() {
  clearTimeout(window._wsAutoTimer);
  var ws = document.getElementById('welcome-screen');
  if (!ws) return;
  ws.classList.add('fade-out');
  setTimeout(function () { ws.style.display = 'none'; }, 850);
}

/* =====================================================
   ARTICLE CARD SLIDER — Slider automático de artículos
   ===================================================== */
(function () {
  var track = document.getElementById('art-slider-track');
  if (!track) return;

  var cards   = track.querySelectorAll('.art-slide-card');
  var prev    = document.getElementById('art-slider-prev');
  var next    = document.getElementById('art-slider-next');
  var dotsWrap = document.getElementById('art-slider-dots');

  if (!cards.length) return;

  var cur = 0, timer = null;

  /* Cuántas tarjetas se ven según el ancho de pantalla */
  function getVisible() {
    var w = window.innerWidth;
    if (w >= 1080) return 4;
    if (w >= 820)  return 3;
    if (w >= 560)  return 2;
    return 1;
  }

  function totalSlides() {
    return Math.max(1, Math.ceil(cards.length / getVisible()));
  }

  /* Ir a un slide concreto */
  function goTo(idx) {
    var visible = getVisible();
    var total   = totalSlides();
    cur = ((idx % total) + total) % total;

    /* Calcular desplazamiento */
    var cardW   = cards[0].offsetWidth;
    var gap     = 20; /* 1.25rem ≈ 20px */
    var padLeft = 24; /* 1.5rem  ≈ 24px */
    track.style.transform =
      'translateX(' + (-(cur * visible * (cardW + gap))) + 'px)';

    /* Actualizar dots */
    document.querySelectorAll('.asd-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === cur);
    });
  }

  /* Iniciar auto-play */
  function auto() {
    clearInterval(timer);
    timer = setInterval(function () { goTo(cur + 1); }, 3500);
  }

  /* Construir / reconstruir dots */
  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    var ts = totalSlides();
    for (var i = 0; i < ts; i++) {
      var d = document.createElement('button');
      d.className = 'asd-dot' + (i === 0 ? ' active' : '');
      d.dataset.idx = i;
      d.addEventListener('click', (function (idx) {
        return function () { goTo(idx); auto(); };
      })(i));
      dotsWrap.appendChild(d);
    }
  }

  /* Init */
  buildDots();
  goTo(0);
  auto();

  /* Botones prev / next */
  if (prev) prev.addEventListener('click', function () { goTo(cur - 1); auto(); });
  if (next) next.addEventListener('click', function () { goTo(cur + 1); auto(); });

  /* Pausa al pasar el cursor */
  var vp = document.getElementById('art-slider-viewport');
  if (vp) {
    vp.addEventListener('mouseenter', function () { clearInterval(timer); });
    vp.addEventListener('mouseleave', auto);
  }

  /* Touch / swipe */
  var tx = 0;
  track.addEventListener('touchstart', function (e) {
    tx = e.touches[0].clientX;
  }, { passive: true });
  track.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 44) { goTo(dx < 0 ? cur + 1 : cur - 1); auto(); }
  }, { passive: true });

  /* Reconstruir dots al cambiar tamaño de ventana */
  window.addEventListener('resize', function () {
    buildDots();
    goTo(cur);
  });
})();

/* ═══════════════════════════════════════════════════
   BANNER HERO SLIDER — iUDY (like the reference image)
   ═══════════════════════════════════════════════════ */
(function () {
  var slides     = document.querySelectorAll('.ibs-slide');
  var dotBtns    = document.querySelectorAll('.ibs-d');
  var prevBtn    = document.getElementById('ibs-prev');
  var nextBtn    = document.getElementById('ibs-next');
  var progressBar= document.getElementById('ibs-progress-bar');
  var sliderEl   = document.getElementById('iudy-banner-slider');

  if (!slides.length) return;

  var cur     = 0;
  var total   = slides.length;
  var timer   = null;
  var progT   = null;
  var DELAY   = 5500; /* ms per slide */

  /* Floating particles builder */
  function buildParticles(containerId, count) {
    var c = document.getElementById(containerId);
    if (!c) return;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('div');
      p.className = 'ibs-particle';
      var size = Math.random() * 10 + 4;
      p.style.cssText = [
        'width:'  + size + 'px',
        'height:' + size + 'px',
        'left:'   + (Math.random() * 100) + '%',
        'top:'    + (40 + Math.random() * 60) + '%',
        'animation-duration:' + (4 + Math.random() * 6) + 's',
        'animation-delay:'    + (Math.random() * 4) + 's'
      ].join(';');
      c.appendChild(p);
    }
  }
  buildParticles('ibs-particles-1', 14);
  buildParticles('ibs-particles-2', 14);
  buildParticles('ibs-particles-3', 14);

  function goTo(n) {
    slides[cur].classList.remove('active');
    if (dotBtns[cur]) dotBtns[cur].classList.remove('active');
    cur = (n + total) % total;
    slides[cur].classList.add('active');
    if (dotBtns[cur]) dotBtns[cur].classList.add('active');
    startProgress();
  }

  function startProgress() {
    if (!progressBar) return;
    clearInterval(progT);
    progressBar.style.transition = 'none';
    progressBar.style.width      = '0%';
    /* Tiny delay to allow reflow */
    setTimeout(function () {
      progressBar.style.transition = 'width ' + DELAY + 'ms linear';
      progressBar.style.width      = '100%';
    }, 30);
  }

  function auto() {
    clearInterval(timer);
    timer = setInterval(function () { goTo(cur + 1); }, DELAY);
  }

  /* Init */
  goTo(0);
  auto();

  /* Arrow buttons */
  if (prevBtn) prevBtn.addEventListener('click', function () { goTo(cur - 1); auto(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { goTo(cur + 1); auto(); });

  /* Dot buttons */
  dotBtns.forEach(function (d, i) {
    d.addEventListener('click', function () { goTo(i); auto(); });
  });

  /* Pause on hover */
  if (sliderEl) {
    sliderEl.addEventListener('mouseenter', function () {
      clearInterval(timer);
      clearInterval(progT);
    });
    sliderEl.addEventListener('mouseleave', auto);
  }

  /* Swipe */
  var tx0 = 0;
  if (sliderEl) {
    sliderEl.addEventListener('touchstart', function (e) { tx0 = e.touches[0].clientX; }, { passive: true });
    sliderEl.addEventListener('touchend',   function (e) {
      var dx = e.changedTouches[0].clientX - tx0;
      if (Math.abs(dx) > 44) { goTo(dx < 0 ? cur + 1 : cur - 1); auto(); }
    }, { passive: true });
  }
})();

/* ═══════════════════════════════════════════════════
   COUNTER ANIMATION — iUDY Transparent Section
   ═══════════════════════════════════════════════════ */
(function () {
  var nums = document.querySelectorAll('.its-stat-num[data-target]');
  if (!nums.length) return;

  var observed = false;

  function animateCount(el) {
    var target   = parseInt(el.getAttribute('data-target'), 10);
    var duration = 1800;
    var steps    = 60;
    var step     = 0;
    var timer    = setInterval(function () {
      step++;
      var progress = step / steps;
      /* Ease-out quad */
      var eased = 1 - Math.pow(1 - progress, 2);
      var val   = Math.round(eased * target);
      /* Format with comma for large numbers */
      el.textContent = val >= 1000 ? val.toLocaleString('es-MX') : val;
      if (step >= steps) {
        clearInterval(timer);
        el.textContent = target >= 1000 ? target.toLocaleString('es-MX') : target;
      }
    }, duration / steps);
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !observed) {
          observed = true;
          nums.forEach(animateCount);
        }
      });
    }, { threshold: 0.4 });
    var section = document.querySelector('.iudy-transparent-section');
    if (section) io.observe(section);
  } else {
    nums.forEach(animateCount);
  }
})();

/* ══════════════════════════════════════════════════════════════
   FORO EN LÍNEA
   ──────────────────────────────────────────────────────────────
   • Los comentarios se guardan en localStorage bajo la clave
     "foro_comentarios" para que persistan entre recargas.
   • El editor puede borrar comentarios ingresando una contraseña.
   • CAMBIA LA CONTRASEÑA en la constante EDITOR_PASSWORD abajo.
   ══════════════════════════════════════════════════════════════ */
(function () {

  /* ── CONFIGURACIÓN ──────────────────────────────────────────
     Cambia EDITOR_PASSWORD por la contraseña que prefieras.    */
  var EDITOR_PASSWORD = 'IUDY2026';   // <-- CAMBIA ESTO
  var STORAGE_KEY     = 'foro_iudy_comentarios';

  /* ── ESTADO ────────────────────────────────────────────────── */
  var modoEditor = false;   // true cuando el editor está autenticado

  /* ── REFERENCIAS AL DOM ─────────────────────────────────────── */
  var inputNombre     = document.getElementById('foro-nombre');
  var inputAvatar     = document.getElementById('foro-avatar');
  var avatarPreview   = document.getElementById('foro-avatar-preview');
  var avatarPlaceholder = document.getElementById('foro-avatar-placeholder');
  var avatarBorrar    = document.getElementById('foro-avatar-borrar');
  var avatarBase64    = '';   /* almacena la imagen seleccionada en base64 */

  /* Leer imagen de galería y mostrar preview */
  if (inputAvatar) {
    inputAvatar.addEventListener('change', function () {
      var file = inputAvatar.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (e) {
        avatarBase64 = e.target.result;
        avatarPreview.src = avatarBase64;
        avatarPreview.style.display = 'block';
        avatarPlaceholder.style.display = 'none';
        if (avatarBorrar) avatarBorrar.style.display = 'inline-flex';
      };
      reader.readAsDataURL(file);
    });
  }

  /* Botón quitar foto */
  if (avatarBorrar) {
    avatarBorrar.addEventListener('click', function () {
      avatarBase64 = '';
      inputAvatar.value = '';
      avatarPreview.style.display = 'none';
      avatarPlaceholder.style.display = 'flex';
      avatarBorrar.style.display = 'none';
    });
  }
  var inputTexto      = document.getElementById('foro-texto');
  var btnEnviar       = document.getElementById('foro-btn-enviar');
  var contadorEl      = document.getElementById('foro-contador');
  var MAX_CHARS       = 1200;
  var msgEl           = document.getElementById('foro-msg');
  var listaEl         = document.getElementById('foro-lista');
  var vacioEl         = document.getElementById('foro-vacio');
  var modoActivoEl    = document.getElementById('foro-modo-activo');
  var btnEditor       = document.getElementById('foro-btn-editor');
  var modal           = document.getElementById('foro-modal-editor');
  var passInput       = document.getElementById('foro-pass-input');
  var btnConfirmar    = document.getElementById('foro-btn-confirmar-pass');
  var btnCancelar     = document.getElementById('foro-btn-cancelar-pass');
  var passError       = document.getElementById('foro-pass-error');
  var btnSalirEditor  = document.getElementById('foro-btn-salir-editor');

  /* Si algún elemento no existe (la página aún no tiene el foro), salimos */
  if (!inputNombre || !listaEl) return;

  /* ── FUNCIONES DE ALMACENAMIENTO ────────────────────────────── */

  /* Lee los comentarios guardados en localStorage */
  function cargarComentarios() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  /* Guarda el array de comentarios en localStorage */
  function guardarComentarios(arr) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    } catch (e) {
      console.warn('No se pudo guardar en localStorage:', e);
    }
  }

  /* ── RENDERIZADO ─────────────────────────────────────────────── */

  /* Muestra todos los comentarios en el DOM */
  function renderizarComentarios() {
    var comentarios = cargarComentarios();
    listaEl.innerHTML = '';   // limpia la lista antes de redibujar

    if (comentarios.length === 0) {
      // No hay comentarios: mostrar mensaje de foro vacío
      vacioEl.style.display = 'block';
      return;
    }

    vacioEl.style.display = 'none';

    /* Mostramos del más reciente al más antiguo (orden inverso) */
    var copia = comentarios.slice().reverse();

    copia.forEach(function (com) {
      var tarjeta = document.createElement('div');
      tarjeta.className = 'foro-comentario';
      tarjeta.setAttribute('data-id', com.id);

      /* Generar iniciales y color del avatar */
      var palabras = com.nombre.trim().split(/\s+/);
      var iniciales = palabras.length >= 2
        ? (palabras[0][0] + palabras[palabras.length - 1][0]).toUpperCase()
        : com.nombre.substring(0, 2).toUpperCase();
      var coloresAvatar = ['#0d2b56','#1a6fa8','#2196a6','#6b3fa0','#b5451b','#1e7e34','#b8860b','#c0392b'];
      var colorIdx = 0;
      for (var ci = 0; ci < com.nombre.length; ci++) colorIdx += com.nombre.charCodeAt(ci);
      var colorAvatar = coloresAvatar[colorIdx % coloresAvatar.length];

      /* Avatar: imagen si hay URL, si no iniciales */
      var avatarHTML = com.avatarUrl
        ? '<img src="' + escaparHTML(com.avatarUrl) + '" alt="avatar" class="foro-avatar foro-avatar-img" onerror="this.style.display=\'none\';this.nextSibling.style.display=\'flex\'">' +
          '<div class="foro-avatar" style="background:' + colorAvatar + ';display:none">' + iniciales + '</div>'
        : '<div class="foro-avatar" style="background:' + colorAvatar + '">' + iniciales + '</div>';

      tarjeta.innerHTML =
        '<div class="foro-comentario-header">' +
          '<div class="foro-avatar-wrap">' +
            avatarHTML +
            '<div class="foro-avatar-info">' +
              '<span class="foro-comentario-nombre">' + escaparHTML(com.nombre) + ' <span class="foro-comento">comentó</span></span>' +
              '<span class="foro-comentario-fecha">&#128197; ' + com.fecha + '</span>' +
            '</div>' +
          '</div>' +
          '<div style="display:flex;align-items:center;gap:.5rem">' +
            '<button class="foro-btn-borrar" data-id="' + com.id + '">&#128465; Borrar</button>' +
          '</div>' +
        '</div>' +
        '<p class="foro-comentario-texto">' + escaparHTML(com.texto) + '</p>';

      listaEl.appendChild(tarjeta);
    });

    /* Si el modo editor está activo, mostrar los botones de borrar */
    actualizarBotonesBorrar();
  }

  /* Muestra u oculta los botones de borrar según el modo editor */
  function actualizarBotonesBorrar() {
    var botones = document.querySelectorAll('.foro-btn-borrar');
    botones.forEach(function (btn) {
      btn.style.display = modoEditor ? 'inline-flex' : 'none';
    });

    /* Banner de modo editor */
    if (modoActivoEl) {
      modoActivoEl.style.display = modoEditor ? 'block' : 'none';
    }
  }

  /* Convierte caracteres especiales a entidades HTML (previene XSS) */
  function escaparHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* Formato de fecha legible: "19 abr 2026, 14:32" */
  function formatearFecha() {
    var meses = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    var ahora = new Date();
    return ahora.getDate() + ' ' + meses[ahora.getMonth()] + ' ' + ahora.getFullYear() +
           ', ' + String(ahora.getHours()).padStart(2,'0') + ':' + String(ahora.getMinutes()).padStart(2,'0');
  }

  /* ID único simple basado en timestamp + random */
  function generarId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }

  /* ── CONTADOR DE CARACTERES ──────────────────────────────────── */
  if (inputTexto && contadorEl) {
    inputTexto.addEventListener('input', function () {
      contadorEl.textContent = inputTexto.value.length + ' / ' + MAX_CHARS;
    });
  }

  /* ── PUBLICAR COMENTARIO ─────────────────────────────────────── */
  if (btnEnviar) {
    btnEnviar.addEventListener('click', function () {
      var nombre = (inputNombre.value || '').trim();
      var texto  = (inputTexto.value  || '').trim();

      /* Validaciones básicas */
      if (!nombre) {
        mostrarMsg('Por favor escribe tu nombre.', 'error');
        inputNombre.focus();
        return;
      }
      if (!texto) {
        mostrarMsg('El comentario no puede estar vacío.', 'error');
        inputTexto.focus();
        return;
      }

      /* Crear objeto del comentario */
      var nuevoComentario = {
        id:        generarId(),
        nombre:    nombre,
        avatarUrl: avatarBase64,
        texto:     texto,
        fecha:     formatearFecha()
      };

      /* Guardar en localStorage */
      var comentarios = cargarComentarios();
      comentarios.push(nuevoComentario);
      guardarComentarios(comentarios);

      /* Limpiar formulario y actualizar vista */
      inputNombre.value = '';
      if (inputAvatar) inputAvatar.value = '';
      avatarBase64 = '';
      if (avatarPreview) { avatarPreview.style.display = 'none'; avatarPreview.src = ''; }
      if (avatarPlaceholder) avatarPlaceholder.style.display = 'flex';
      if (avatarBorrar) avatarBorrar.style.display = 'none';
      inputTexto.value  = '';
      contadorEl.textContent = '0 / ' + MAX_CHARS;
      mostrarMsg('¡Comentario publicado!', 'exito');
      renderizarComentarios();
    });
  }

  /* Muestra un mensaje de éxito o error bajo el formulario */
  function mostrarMsg(texto, tipo) {
    if (!msgEl) return;
    msgEl.textContent = texto;
    msgEl.className = 'foro-msg ' + (tipo === 'exito' ? 'foro-exito' : 'foro-error');
    msgEl.style.display = 'block';
    // Ocultar automáticamente después de 3 segundos
    setTimeout(function () { msgEl.style.display = 'none'; }, 3000);
  }

  /* ── BORRAR COMENTARIO (solo modo editor) ────────────────────── */
  /* Usamos delegación de eventos para capturar clics en botones dinámicos */
  listaEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('foro-btn-borrar')) return;
    if (!modoEditor) return;

    var idBorrar = e.target.getAttribute('data-id');
    if (!idBorrar) return;

    /* Confirmación antes de borrar */
    if (!confirm('¿Seguro que deseas eliminar este comentario?')) return;

    /* Filtrar y guardar sin ese comentario */
    var comentarios = cargarComentarios();
    var nuevos = comentarios.filter(function (c) { return c.id !== idBorrar; });
    guardarComentarios(nuevos);
    renderizarComentarios();
  });

  /* ── MODAL DE AUTENTICACIÓN DEL EDITOR ───────────────────────── */

  /* Abre el modal al hacer clic en "Acceso editor" */
  if (btnEditor) {
    btnEditor.addEventListener('click', function () {
      if (modoEditor) {
        /* Si ya está en modo editor, hacer logout directamente */
        salirModoEditor();
        return;
      }
      passInput.value = '';
      passError.style.display = 'none';
      modal.style.display = 'flex';
      passInput.focus();
    });
  }

  /* Verificar contraseña al confirmar */
  if (btnConfirmar) {
    btnConfirmar.addEventListener('click', function () {
      verificarPassword();
    });
  }

  /* También verificar al presionar Enter en el campo de contraseña */
  if (passInput) {
    passInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') verificarPassword();
    });
  }

  function verificarPassword() {
    if (passInput.value === EDITOR_PASSWORD) {
      /* Contraseña correcta: activar modo editor */
      modoEditor = true;
      modal.style.display = 'none';
      btnEditor.querySelector('svg') && (btnEditor.querySelector('svg').style.color = '#C8A034');
      btnEditor.lastChild.textContent = ' editor ✓';
      actualizarBotonesBorrar();
    } else {
      /* Contraseña incorrecta */
      passError.style.display = 'block';
      passInput.value = '';
      passInput.focus();
    }
  }

  /* Cancelar modal sin autenticar */
  if (btnCancelar) {
    btnCancelar.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  }

  /* Cerrar modal haciendo clic en el fondo oscuro */
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) modal.style.display = 'none';
    });
  }

  /* Salir del modo editor */
  if (btnSalirEditor) {
    btnSalirEditor.addEventListener('click', function () {
      salirModoEditor();
    });
  }

  function salirModoEditor() {
    modoEditor = false;
    btnEditor.lastChild.textContent = ' editor';
    actualizarBotonesBorrar();
  }

  /* ── INICIALIZACIÓN ──────────────────────────────────────────── */
  /* Renderizar comentarios al cargar la página */
  renderizarComentarios();

})(); /* Fin del IIFE del foro */
