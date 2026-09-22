import { Header } from "./components/Header";
import { Phone } from "./components/Phone";
import { WaIcon, waLink } from "./components/Wa";
import {
  Delivery,
  Commerce,
  Health,
  Finance,
  Fitness,
  Education,
  Travel,
  Music,
  RealEstate,
  Restaurant,
  Booking,
  WaAgent,
  WebMockup,
  WebSite,
  WaChat,
  PhotoPhone,
} from "./components/screens";

const U = (id: string, w = 640) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const WEBS = [
  { name: "Pizzería Napoli", url: "napoli.com", tagline: "Pide online, recoge en tienda", cta: "Ver menú", accent: ["#ef4444", "#f59e0b"], nav: ["Menú", "Promos", "Local"], hero: U("1513104890138-7c749659a591", 480) },
  { name: "Clínica Vital", url: "clinicavital.com", tagline: "Agenda tu cita en 1 minuto", cta: "Reservar cita", accent: ["#2dd4bf", "#22d3ee"], nav: ["Especialidades", "Doctores", "Citas"], hero: U("1559839734-2b71ea197ec2", 480) },
  { name: "Inmobiliaria Andes", url: "andes.com", tagline: "Encuentra tu próxima casa", cta: "Ver propiedades", accent: ["#8b5cf6", "#a855f7"], nav: ["Venta", "Alquiler", "Contacto"], hero: U("1568605114967-8130f3a36994", 480) },
  { name: "Gimnasio Fuerza", url: "fuerza.fit", tagline: "Planes y rutinas para ti", cta: "Empieza hoy", accent: ["#f59e0b", "#ef4444"], nav: ["Planes", "Horarios", "Coach"], hero: U("1571019613454-1cb2f99b2d8b", 480) },
  { name: "Vet Amigos", url: "vetamigos.com", tagline: "Cuidamos a tu mejor amigo", cta: "Agendar", accent: ["#22d3ee", "#38bdf8"], nav: ["Servicios", "Tienda", "Citas"], hero: U("1517248135467-4c7edcad34c4", 480) },
  { name: "Boutique Luna", url: "luna.store", tagline: "Nueva colección cada mes", cta: "Comprar", accent: ["#a855f7", "#f472b6"], nav: ["Mujer", "Hombre", "Sale"], hero: U("1441986300917-64674bd600d8", 480) },
];

const AGENTES = [
  {
    contact: "Pizzería Napoli",
    msgs: [
      { side: "in" as const, text: "¡Hola! 🍕 ¿Quieres ver el menú o repetir tu último pedido?" },
      { side: "out" as const, text: "Lo mismo de siempre, porfa" },
      { side: "in" as const, text: "Listo ✅ 1 napolitana grande, $8.50. Llega en 30 min." },
    ],
  },
  {
    contact: "Barbería JL",
    msgs: [
      { side: "in" as const, text: "Hola 👋 Horarios libres hoy: 2:00 y 4:30 pm" },
      { side: "out" as const, text: "A las 4:30" },
      { side: "in" as const, text: "Reservado ✂️ Te espero el jueves a las 4:30 pm." },
    ],
  },
  {
    contact: "Tienda Luna",
    msgs: [
      { side: "in" as const, text: "¡Hola! ¿Buscas algo en especial? Tengo el catálogo aquí 👗" },
      { side: "out" as const, text: "¿Tienes talla M en el vestido azul?" },
      { side: "in" as const, text: "¡Sí! Última pieza 🙌 ¿Te la aparto?" },
    ],
  },
  {
    contact: "Clínica Vital",
    msgs: [
      { side: "in" as const, text: "Hola, soy el asistente de la clínica 🩺 ¿Confirmas tu cita del viernes?" },
      { side: "out" as const, text: "Sí, pero quiero cambiarla" },
      { side: "in" as const, text: "Sin problema. Tengo el lunes 10:00 am, ¿te sirve?" },
    ],
  },
];

const WA_MSG =
  "Hola JLAPPS 👋, me interesa un proyecto (app, página web o agente de WhatsApp). ¿Me cuentan más?";

/* Trazas de circuito inspiradas en el logo */
function Circuit({ id }: { id: string }) {
  return (
    <svg className={`circuit circuit--${id}`} width="260" height="180" viewBox="0 0 260 180" fill="none" aria-hidden>
      <path d="M4 40h70l24 24h60" stroke="url(#cg)" strokeWidth="2" />
      <path d="M4 90h44l30 30h90" stroke="url(#cg2)" strokeWidth="2" />
      <path d="M4 140h90l20 -20h50" stroke="url(#cg)" strokeWidth="2" />
      <circle cx="162" cy="64" r="5" fill="#2dd4bf" />
      <circle cx="172" cy="120" r="5" fill="#a855f7" />
      <rect x="0" y="36" width="8" height="8" rx="2" fill="#8b5cf6" />
      <rect x="0" y="136" width="8" height="8" rx="2" fill="#22d3ee" />
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="260" y2="180">
          <stop stopColor="#a855f7" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="cg2" x1="0" y1="0" x2="260" y2="0">
          <stop stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const APPS: { name: string; desc: string; img: string; action: string }[] = [
  { name: "Delivery", desc: "Pedidos en vivo con seguimiento del repartidor", img: U("1513104890138-7c749659a591"), action: "Pedir ahora" },
  { name: "Tienda online", desc: "Catálogo, carrito y pagos desde el bolsillo", img: U("1441986300917-64674bd600d8"), action: "Comprar" },
  { name: "Salud y citas", desc: "Reserva de consultas e historial del paciente", img: U("1559839734-2b71ea197ec2"), action: "Reservar cita" },
  { name: "Reservas", desc: "Agenda de citas para negocios locales", img: U("1585747860715-2ba37e788b70"), action: "Reservar hora" },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "JLAPPS",
    description:
      "Diseño y desarrollo de apps móviles, páginas web y agentes de WhatsApp con IA para negocios: delivery, tiendas online, citas, reservas y pagos.",
    image: "https://jlapps.example.com/jlapps-logo.jpg",
    telephone: "+584242399671",
    url: "https://jlapps.example.com",
    areaServed: "Latinoamérica",
    availableLanguage: "Spanish",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+584242399671",
      url: `https://wa.me/584242399671`,
      availableLanguage: "Spanish",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header waMsg={WA_MSG} />

      <main>
        {/* ---- hero ---- */}
        <section className="hero">
          <Circuit id="tl" />
          <Circuit id="br" />
          <div className="container hero-in">
            <div>
              <span className="kicker rise">Apps · Webs · Agentes de WhatsApp</span>
              <h1 className="rise rise-1">
                Tu negocio, en la <em>pantalla</em> de tus clientes.
              </h1>
              <p className="sub rise rise-2">
                Apps móviles, páginas web y agentes de WhatsApp que atienden y
                venden por ti. Todo lo que tu negocio necesita para crecer, en
                un solo equipo.
              </p>
              <div className="hero-cta rise rise-3">
                <a className="btn btn-wa" href={waLink(WA_MSG)} target="_blank" rel="noopener noreferrer">
                  <WaIcon /> Habla con nosotros
                </a>
                <a className="btn btn-ghost" href="#apps">
                  Ver qué construimos
                </a>
              </div>
              <p className="hero-note">
                Respuesta el mismo día · Presupuesto sin compromiso
              </p>
            </div>
            <div className="hero-phone">
              <div className="hero-glow" />
              <Phone>
                <Delivery />
              </Phone>
            </div>
          </div>
        </section>

        {/* ---- servicios ---- */}
        <section className="section" id="servicios">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Lo que hacemos</span>
              <h2>Tres formas de llevar tu negocio al digital</h2>
              <p>
                Por donde entren tus clientes — una app, Google o WhatsApp —
                ahí estás tú.
              </p>
            </div>
            <div className="services">
              <article className="svc">
                <Phone>
                  <Delivery />
                </Phone>
                <div className="svc-caption">
                  <b>Apps móviles</b>
                  <p>
                    Tu propia app para Android: pedidos, reservas, pagos y
                    fidelización.
                  </p>
                  <a className="btn btn-ghost" href={waLink("Hola JLAPPS 👋, quiero una app móvil. ¿Me cuentan precios y plazos?")} target="_blank" rel="noopener noreferrer">
                    Quiero una app
                  </a>
                </div>
              </article>

              <article className="svc">
                <div className="browser">
                  <div className="br-bar">
                    <i style={{ background: "#ff5f57" }} />
                    <i style={{ background: "#febc2e" }} />
                    <i style={{ background: "#28c840" }} />
                    <span className="br-url">tunegocio.com</span>
                  </div>
                  <div className="br-body">
                    <WebMockup />
                  </div>
                </div>
                <div className="svc-caption">
                  <b>Páginas web</b>
                  <p>
                    Webs modernas y rápidas que posicionan tu marca y convierten
                    visitas en clientes.
                  </p>
                  <a className="btn btn-ghost" href={waLink("Hola JLAPPS 👋, quiero una página web. ¿Me cuentan precios y plazos?")} target="_blank" rel="noopener noreferrer">
                    Quiero mi web
                  </a>
                </div>
              </article>

              <article className="svc svc--featured">
                <div className="phone wa-phone">
                  <div className="phone-screen">
                    <div className="notch" />
                    <div className="scr">
                      <WaAgent />
                    </div>
                  </div>
                </div>
                <div className="svc-caption">
                  <b>Agentes de WhatsApp</b>
                  <p>
                    Un asistente con IA que responde, toma pedidos y agenda
                    citas 24/7 — nunca pierdes un cliente.
                  </p>
                  <a className="btn btn-wa" href={waLink("Hola JLAPPS 👋, quiero un agente de WhatsApp para mi negocio. ¿Cómo funciona?")} target="_blank" rel="noopener noreferrer">
                    <WaIcon /> Quiero mi agente
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ---- galería de tipos de app ---- */}
        <section className="section" id="apps">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Un vistazo a lo que hacemos</span>
              <h2>Cuatro ideas de app. La tuya puede ser la siguiente.</h2>
              <p>
                Delivery, tiendas, citas y reservas: cada pantalla que ves aquí
                la diseñamos y programamos nosotros. Dinos cuál se parece a tu
                idea y la adaptamos a tu negocio.
              </p>
            </div>
            <div className="gallery gallery--apps">
              {APPS.map(({ name, desc, img, action }) => (
                <article className="g-item" key={name}>
                  <div className="phone">
                    <div className="phone-screen">
                      <div className="notch" />
                      <div className="scr" style={{ padding: 0, gap: 0 }}>
                        <PhotoPhone img={img} name={name} action={action} />
                      </div>
                    </div>
                  </div>
                  <div className="g-caption">
                    <b>{name}</b>
                    <span>{desc}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- galería de páginas web ---- */}
        <section className="section" id="webs" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <span className="kicker">Páginas web</span>
              <h2>Webs que convierten visitas en clientes</h2>
              <p>
                Seis ejemplos de lo que construimos: cada web con la cara de tu
                marca, rápida y lista para vender.
              </p>
            </div>
            <div className="gallery">
              {WEBS.map((w) => (
                <article className="g-item" key={w.url}>
                  <div className="browser g-browser">
                    <WebSite {...w} />
                  </div>
                  <div className="g-caption">
                    <b>{w.name}</b>
                    <span>{w.tagline}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- galería de agentes WhatsApp ---- */}
        <section className="section" id="agentes" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head">
              <span className="kicker">Agentes de WhatsApp</span>
              <h2>Un vendedor que nunca duerme</h2>
              <p>
                Así atiende un agente nuestro: responde al instante, toma
                pedidos y agenda citas, a cualquier hora.
              </p>
            </div>
            <div className="gallery">
              {AGENTES.map((a) => (
                <article className="g-item" key={a.contact}>
                  <div className="phone wa-phone">
                    <div className="phone-screen">
                      <div className="notch" />
                      <div className="scr" style={{ padding: "34px 0 0" }}>
                        <WaChat {...a} />
                      </div>
                    </div>
                  </div>
                  <div className="g-caption">
                    <b>{a.contact}</b>
                    <span>Agente a la medida de tu negocio</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- proceso ---- */}
        <section className="section process" id="proceso">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Sin enredos</span>
              <h2>De la idea a tu app, en tres pasos</h2>
            </div>
            <div className="steps">
              <div className="step">
                <span className="step-tag">1</span>
                <h3>Escríbenos</h3>
                <p>
                  Cuéntanos por WhatsApp qué hace tu negocio y qué necesitas.
                  Te respondemos el mismo día.
                </p>
              </div>
              <div className="step">
                <span className="step-tag">2</span>
                <h3>Diseñamos tu app</h3>
                <p>
                  Te mostramos cómo se verá antes de programarla. Ajustamos
                  hasta que digas "esa es".
                </p>
              </div>
              <div className="step">
                <span className="step-tag">3</span>
                <h3>La lanzamos</h3>
                <p>
                  Publicamos tu app y te acompañamos con soporte y mejoras
                  después del lanzamiento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---- cta final ---- */}
        <section className="final">
          <div className="final-glow" />
          <div className="container">
            <h2>¿Listo para tener tu propia app?</h2>
            <p>
              Manda un mensaje hoy y mañana estamos hablando de tu proyecto.
              Sin compromiso.
            </p>
            <a className="btn btn-wa" href={waLink(WA_MSG)} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Escribir por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-in">
          <span>© {new Date().getFullYear()} JLAPPS · Apps móviles a la medida</span>
          <span>WhatsApp +58 424-239-9671</span>
        </div>
      </footer>

      <a className="wa-float" href={waLink(WA_MSG)} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp">
        <WaIcon />
        <span>¿Hablamos?</span>
      </a>
    </>
  );
}
