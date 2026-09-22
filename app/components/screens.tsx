/* Mini-UIs dibujadas en CSS/SVG: una por tipo de app.
   Cada una tiene layout y acento propios — nada de plantillas repetidas. */

const tabs = (
  <div className="scr-tabbar">
    <i className="on" />
    <i />
    <i />
    <i />
  </div>
);

function Head({ t, s }: { t: string; s: string }) {
  return (
    <div className="scr-head">
      <b>{t}</b>
      <span>{s}</span>
    </div>
  );
}

/* 1 · Delivery */
export function Delivery() {
  return (
    <>
      <Head t="Tu pedido" s="25–35 min" />
      <div className="scr-block scr-row" style={{ gap: 8 }}>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: "linear-gradient(135deg,#f59e0b,#ef4444)",
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ color: "var(--text)", fontWeight: 700 }}>Pizza napolitana</div>
          <div style={{ color: "var(--text-3)" }}>Pizzería La Esquina</div>
        </div>
        <span style={{ color: "var(--teal)", fontWeight: 700 }}>$8.50</span>
      </div>
      <div className="scr-block">
        <div className="scr-row" style={{ justifyContent: "space-between" }}>
          <span style={{ color: "var(--text-2)" }}>Repartidor en camino</span>
          <span className="chip">En ruta</span>
        </div>
        <div style={{ margin: "8px 0" }}>
          <div className="scr-bar scr-bar--fill" style={{ width: "62%" }} />
        </div>
        <div className="scr-bar" style={{ width: "80%" }} />
      </div>
      <div className="scr-block scr-row" style={{ gap: 6 }}>
        <span className="dot" style={{ background: "var(--teal)" }} />
        <div className="scr-bar" style={{ width: "55%" }} />
      </div>
      {tabs}
    </>
  );
}

/* 2 · E-commerce */
export function Commerce() {
  return (
    <>
      <Head t="Novedades" s="1.240 artículos" />
      <div className="scr-row" style={{ gap: 6 }}>
        {["Todo", "Zapatos", "Tech"].map((c, i) => (
          <span key={c} className={i === 0 ? "chip" : "chip chip--v"} style={{ opacity: i === 0 ? 1 : 0.6 }}>
            {c}
          </span>
        ))}
      </div>
      <div className="scr-row" style={{ gap: 6 }}>
        {[0, 1].map((i) => (
          <div key={i} className="scr-block" style={{ flex: 1, padding: 0, overflow: "hidden" }}>
            <div style={{ height: 52, background: i ? "linear-gradient(135deg,#8b5cf6,#22d3ee)" : "linear-gradient(135deg,#2dd4bf,#38bdf8)" }} />
            <div style={{ padding: 6 }}>
              <div className="scr-bar" style={{ width: "85%" }} />
              <div style={{ height: 4 }} />
              <div style={{ color: "var(--teal)", fontWeight: 700 }}>$24.99</div>
            </div>
          </div>
        ))}
      </div>
      <div className="scr-block scr-row" style={{ justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}>
          <div className="scr-bar" style={{ width: "70%" }} />
          <div style={{ height: 4 }} />
          <div className="scr-bar" style={{ width: "45%" }} />
        </div>
        <span className="chip chip--v">$59</span>
      </div>
      {tabs}
    </>
  );
}

/* 3 · Citas médicas */
export function Health() {
  return (
    <>
      <Head t="Próxima cita" s="Dr. Martínez" />
      <div className="scr-block scr-row" style={{ gap: 10 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: "linear-gradient(135deg,#2dd4bf,#22d3ee)",
            display: "grid",
            placeItems: "center",
            fontWeight: 800,
            fontSize: 13,
            color: "#05050c",
          }}
        >
          24
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, color: "var(--text)" }}>Cardiología</div>
          <div style={{ color: "var(--text-3)" }}>9:30 am · Consultorio 3</div>
        </div>
        <span className="chip">Confirmada</span>
      </div>
      <div className="scr-block">
        <div style={{ color: "var(--text-2)", marginBottom: 6 }}>Especialidades</div>
        <div className="scr-row" style={{ gap: 5, flexWrap: "wrap" }}>
          <span className="chip">General</span>
          <span className="chip chip--v">Odontología</span>
          <span className="chip" style={{ opacity: 0.55 }}>Pediatría</span>
        </div>
      </div>
      <div className="scr-block scr-row" style={{ gap: 6 }}>
        <span className="dot" style={{ background: "var(--magenta)" }} />
        <div className="scr-bar" style={{ width: "60%" }} />
      </div>
      {tabs}
    </>
  );
}

/* 4 · Finanzas / billetera */
export function Finance() {
  return (
    <>
      <Head t="Mi billetera" s="•••• 4821" />
      <div
        className="scr-block"
        style={{ background: "linear-gradient(120deg,#8b5cf6,#22d3ee)", border: "none", padding: 12 }}
      >
        <div style={{ fontSize: 7.5, opacity: 0.85, color: "#05050c" }}>Saldo disponible</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#05050c" }}>$1,248.60</div>
        <div className="scr-row" style={{ gap: 6, marginTop: 6 }}>
          <span className="chip" style={{ background: "rgba(0,0,0,.25)", color: "#fff" }}>Enviar</span>
          <span className="chip" style={{ background: "rgba(0,0,0,.25)", color: "#fff" }}>Recargar</span>
        </div>
      </div>
      {[
        ["Cafetería central", "-$3.20"],
        ["Sueldo octubre", "+$850.00"],
      ].map(([n, v]) => (
        <div key={n} className="scr-block scr-row" style={{ justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <div className="scr-bar" style={{ width: "60%" }} />
          </div>
          <b style={{ color: v.startsWith("+") ? "var(--teal)" : "var(--text-2)" }}>{v}</b>
        </div>
      ))}
      {tabs}
    </>
  );
}

/* 5 · Fitness */
export function Fitness() {
  return (
    <>
      <Head t="Hoy" s="Semana 6" />
      <div className="scr-block scr-row" style={{ justifyContent: "space-between" }}>
        <span style={{ color: "var(--text-2)" }}>Objetivo diario</span>
        <span className="chip chip--v">78%</span>
      </div>
      <div className="scr-row" style={{ gap: 6 }}>
        {[
          ["8.4k", "pasos", "var(--teal)"],
          ["420", "kcal", "var(--magenta)"],
          ["35'", "entreno", "var(--cyan)"],
        ].map(([v, l, c]) => (
          <div key={l} className="scr-block" style={{ flex: 1, textAlign: "center" }}>
            <b style={{ fontSize: 13, color: c }}>{v}</b>
            <div style={{ color: "var(--text-3)", fontSize: 7 }}>{l}</div>
          </div>
        ))}
      </div>
      <div className="scr-block">
        <div style={{ fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>Rutina de hoy</div>
        {["Calentamiento · 5 min", "Fuerza · 20 min", "Cardio · 10 min"].map((e, i) => (
          <div key={e} className="scr-row" style={{ gap: 6, marginBottom: 4 }}>
            <span className="dot" style={{ background: i === 0 ? "var(--teal)" : "rgba(255,255,255,.2)" }} />
            <div className="scr-bar" style={{ width: `${70 - i * 10}%` }} />
          </div>
        ))}
      </div>
      {tabs}
    </>
  );
}

/* 6 · Educación */
export function Education() {
  return (
    <>
      <Head t="Mis cursos" s="Nivel 4" />
      <div className="scr-block scr-row" style={{ gap: 8 }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg,#a855f7,#38bdf8)" }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, color: "var(--text)" }}>Inglés intermedio</div>
          <div className="scr-bar scr-bar--fill" style={{ width: "70%", marginTop: 5 }} />
        </div>
        <span style={{ color: "var(--teal)", fontWeight: 700 }}>70%</span>
      </div>
      <div className="scr-block scr-row" style={{ gap: 8 }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg,#2dd4bf,#8b5cf6)" }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, color: "var(--text)" }}>Matemáticas</div>
          <div className="scr-bar scr-bar--fill" style={{ width: "40%", marginTop: 5 }} />
        </div>
        <span style={{ color: "var(--text-2)", fontWeight: 700 }}>40%</span>
      </div>
      <div className="scr-block scr-row" style={{ justifyContent: "space-between" }}>
        <span style={{ color: "var(--text-2)" }}>Racha de estudio</span>
        <span className="chip">🔥 12 días</span>
      </div>
      {tabs}
    </>
  );
}

/* 7 · Viajes */
export function Travel() {
  return (
    <>
      <Head t="Tu viaje" s="Maiquetía → Cúcuta" />
      <div className="scr-block" style={{ textAlign: "center", padding: 12 }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: "var(--text)" }}>12:40</div>
        <div style={{ color: "var(--text-3)", fontSize: 7.5 }}>Salida · Puerta 7</div>
        <div
          style={{
            margin: "8px auto",
            width: "80%",
            height: 2,
            background: "var(--grad-cool)",
            borderRadius: 2,
          }}
        />
        <div style={{ fontSize: 18, fontWeight: 800, color: "var(--text)" }}>15:10</div>
      </div>
      <div className="scr-row" style={{ gap: 6 }}>
        <span className="chip">Vuelo JL-204</span>
        <span className="chip chip--v">Abordando</span>
      </div>
      <div className="scr-block scr-row" style={{ justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}>
          <div className="scr-bar" style={{ width: "55%" }} />
        </div>
        <span style={{ color: "var(--teal)", fontWeight: 700 }}>Asiento 14A</span>
      </div>
      {tabs}
    </>
  );
}

/* 8 · Música */
export function Music() {
  return (
    <>
      <Head t="Sonando ahora" s="Playlist Vibe" />
      <div
        style={{
          height: 90,
          borderRadius: 12,
          background: "linear-gradient(135deg,#a855f7,#2dd4bf 60%,#22d3ee)",
        }}
      />
      <div className="scr-row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
        <b style={{ color: "var(--text)", fontSize: 12 }}>Bajo el mismo sol</b>
        <span style={{ color: "var(--text-3)", fontSize: 7.5 }}>3:42</span>
      </div>
      <div className="scr-bar scr-bar--fill" style={{ width: "48%" }} />
      <div className="scr-row" style={{ justifyContent: "center", gap: 14, alignItems: "center" }}>
        <i style={{ width: 12, height: 12, borderRadius: 4, background: "rgba(255,255,255,.2)" }} />
        <i
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: "var(--grad-cool)",
          }}
        />
        <i style={{ width: 12, height: 12, borderRadius: 4, background: "rgba(255,255,255,.2)" }} />
      </div>
      {tabs}
    </>
  );
}

/* 9 · Inmobiliaria */
export function RealEstate() {
  return (
    <>
      <Head t="En venta" s="128 propiedades" />
      <div className="scr-block" style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ height: 58, background: "linear-gradient(135deg,#8b5cf6,#2dd4bf)" }} />
        <div style={{ padding: 8 }}>
          <div className="scr-row" style={{ justifyContent: "space-between" }}>
            <span style={{ fontWeight: 700, color: "var(--text)" }}>Apto. Norte</span>
            <span className="chip">$32.000</span>
          </div>
          <div style={{ color: "var(--text-3)", marginTop: 3 }}>3 hab · 2 baños · 84 m²</div>
        </div>
      </div>
      <div className="scr-row" style={{ gap: 6 }}>
        <span className="chip">Apartamentos</span>
        <span className="chip chip--v">Casas</span>
        <span className="chip" style={{ opacity: 0.55 }}>Oficinas</span>
      </div>
      <div className="scr-block scr-row" style={{ justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}>
          <div className="scr-bar" style={{ width: "65%" }} />
        </div>
        <span style={{ color: "var(--teal)", fontWeight: 700 }}>Agendar visita</span>
      </div>
      {tabs}
    </>
  );
}

/* 10 · Restaurante / fidelización */
export function Restaurant() {
  return (
    <>
      <Head t="Puntos JL" s="Mesa 4" />
      <div
        className="scr-block"
        style={{ background: "linear-gradient(120deg,#2dd4bf,#8b5cf6)", border: "none", textAlign: "center", padding: 14 }}
      >
        <div style={{ fontSize: 24, fontWeight: 800, color: "#05050c" }}>340</div>
        <div style={{ fontSize: 7.5, color: "#05050c", opacity: 0.8 }}>puntos · a 60 del próximo premio</div>
        <div className="scr-bar scr-bar--fill" style={{ width: "85%", margin: "7px auto 0", background: "rgba(0,0,0,.4)" }} />
      </div>
      <div className="scr-block scr-row" style={{ justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}>
          <div className="scr-bar" style={{ width: "70%" }} />
          <div style={{ height: 4 }} />
          <div className="scr-bar" style={{ width: "40%" }} />
        </div>
        <span className="chip">Canjear</span>
      </div>
      <div className="scr-block scr-row" style={{ gap: 6 }}>
        <span className="dot" style={{ background: "var(--magenta)" }} />
        <div className="scr-bar" style={{ width: "50%" }} />
      </div>
      {tabs}
    </>
  );
}

/* App con foto real como pantalla: hero fotográfico + UI funcional debajo */
export function PhotoPhone({
  img,
  name,
  action,
}: {
  img: string;
  name: string;
  action: string;
}) {
  return (
    <>
      <div className="pp-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={`App de ${name}`} loading="lazy" />
        <div className="pp-shade" />
        <div className="pp-title">
          <b>{name}</b>
          <span>9:41 ▮▮▮</span>
        </div>
      </div>
      <div className="pp-body">
        <div className="pp-search">Buscar…</div>
        <div className="scr-row" style={{ gap: 5 }}>
          <span className="chip">Cerca de ti</span>
          <span className="chip chip--v" style={{ opacity: 0.6 }}>Populares</span>
        </div>
        <div className="scr-block scr-row" style={{ gap: 7 }}>
          <div style={{ width: 26, height: 26, borderRadius: 8, background: "linear-gradient(135deg,#8b5cf6,#22d3ee)" }} />
          <div style={{ flex: 1 }}>
            <div className="scr-bar" style={{ width: "80%" }} />
            <div style={{ height: 4 }} />
            <div className="scr-bar" style={{ width: "50%" }} />
          </div>
          <span style={{ color: "var(--teal)", fontWeight: 700, fontSize: 8.5 }}>★ 4.8</span>
        </div>
        <div className="pp-cta">{action}</div>
      </div>
      {tabs}
    </>
  );
}

/* Agente WhatsApp — conversación que se auto-escribe (servicios + demo) */
export function WaAgent() {
  return (
    <>
      <div className="wa-top">
        <span className="wa-avatar">
          <WaMark />
        </span>
        <div>
          <b>Asistente JLAPPS</b>
          <span className="wa-online">en línea</span>
        </div>
      </div>
      <div className="wa-chat">
        <p className="wa-msg wa-in">¡Hola! 👋 ¿En qué te ayudo hoy?</p>
        <p className="wa-msg wa-out">Quiero hacer un pedido</p>
        <p className="wa-msg wa-in">Claro 🙌 Te paso el menú…</p>
        <p className="wa-msg wa-in">
          Pedido registrado ✅ Te aviso cuando salga. ¿Algo más?
        </p>
      </div>
      <div className="wa-input">
        <span>Escribe un mensaje</span>
        <i className="wa-send">
          <WaMark />
        </i>
      </div>
    </>
  );
}

/* Agente WhatsApp — variante genérica para la galería */
export function WaChat({
  contact,
  online = "en línea",
  msgs,
}: {
  contact: string;
  online?: string;
  msgs: { side: "in" | "out"; text: string }[];
}) {
  return (
    <>
      <div className="wa-top">
        <span className="wa-avatar">
          <WaMark />
        </span>
        <div>
          <b>{contact}</b>
          <span className="wa-online">{online}</span>
        </div>
      </div>
      <div className="wa-chat">
        {msgs.map((m, i) => (
          <p key={i} className={`wa-msg wa-${m.side}`} style={{ animationDelay: `${0.6 + i * 0.9}s` }}>
            {m.text}
          </p>
        ))}
      </div>
      <div className="wa-input">
        <span>Escribe un mensaje</span>
        <i className="wa-send">
          <WaMark />
        </i>
      </div>
    </>
  );
}

function WaMark() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.51 14.93L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm4.47 11.96c-.24-.12-1.45-.72-1.67-.8-.23-.08-.39-.12-.55.12-.17.25-.64.81-.79.97-.14.17-.29.19-.53.06a6.64 6.64 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.3-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.6.19 1.13.16 1.56.1.48-.07 1.45-.6 1.65-1.16.2-.57.2-1.05.15-1.16-.07-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

/* Página web — ventana de navegador dibujada en CSS.
   Variante genérica para la galería: cada rubro con su color y contenido. */
export function WebSite({
  name,
  url,
  tagline,
  cta = "Contáctanos",
  accent = ["#8b5cf6", "#22d3ee"],
  nav = ["Servicios", "Nosotros", "Precios"],
  hero,
}: {
  name: string;
  url: string;
  tagline: string;
  cta?: string;
  accent?: [string, string] | string[];
  nav?: string[];
  hero?: string;
}) {
  return (
    <>
      <div className="br-bar">
        <i style={{ background: "#ff5f57" }} />
        <i style={{ background: "#febc2e" }} />
        <i style={{ background: "#28c840" }} />
        <span className="br-url">{url}</span>
      </div>
      <div className="br-body">
        <div
          className="br-hero"
          style={{
            background: `linear-gradient(150deg, ${accent[0]}59, ${accent[1]}33)`,
            borderColor: `${accent[0]}40`,
          }}
        >
          {hero && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={hero} alt="" loading="lazy" />
          )}
          <div style={{ fontSize: 12.5, fontWeight: 800, color: "var(--text)", textShadow: "0 1px 8px rgba(0,0,0,.7)" }}>{name}</div>
          <div style={{ color: "var(--text-3)", fontSize: 7.5, textShadow: "0 1px 6px rgba(0,0,0,.8)" }}>{tagline}</div>
          <span className="br-btn">{cta}</span>
        </div>
        <div className="scr-row" style={{ gap: 6 }}>
          {nav.map((n) => (
            <div key={n} className="scr-block" style={{ flex: 1, textAlign: "center", fontSize: 7 }}>
              {n}
            </div>
          ))}
        </div>
        <div className="scr-block scr-row" style={{ justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <div className="scr-bar" style={{ width: "70%" }} />
            <div style={{ height: 4 }} />
            <div className="scr-bar" style={{ width: "45%" }} />
          </div>
          <span className="chip">Ver más</span>
        </div>
      </div>
    </>
  );
}

/* Página web (tarjeta de servicios) */
export function WebMockup() {
  return (
    <>
      <div className="br-bar">
        <i style={{ background: "#ff5f57" }} />
        <i style={{ background: "#febc2e" }} />
        <i style={{ background: "#28c840" }} />
        <span className="br-url">tunegocio.com</span>
      </div>
      <div className="br-hero">
        <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>
          Tu marca, online
        </div>
        <div style={{ color: "var(--text-3)", fontSize: 7.5 }}>
          Rápida, moderna y que vende
        </div>
        <span className="br-btn">Contáctanos</span>
      </div>
      <div className="scr-row" style={{ gap: 6 }}>
        {["Servicios", "Nosotros", "Precios"].map((n) => (
          <div key={n} className="scr-block" style={{ flex: 1, textAlign: "center", fontSize: 7 }}>
            {n}
          </div>
        ))}
      </div>
      <div className="scr-block scr-row" style={{ justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}>
          <div className="scr-bar" style={{ width: "70%" }} />
          <div style={{ height: 4 }} />
          <div className="scr-bar" style={{ width: "45%" }} />
        </div>
        <span className="chip">Ver más</span>
      </div>
    </>
  );
}

/* 11 · Citas / reservas (negocios locales) */
export function Booking() {
  return (
    <>
      <Head t="Reserva tu hora" s="Barbería JL" />
      <div className="scr-row" style={{ gap: 5, flexWrap: "wrap" }}>
        {["Lun 23", "Mar 24", "Mié 25"].map((d, i) => (
          <span key={d} className={i === 1 ? "chip chip--v" : "chip"} style={{ opacity: i === 1 ? 1 : 0.55 }}>
            {d}
          </span>
        ))}
      </div>
      <div className="scr-row" style={{ gap: 5, flexWrap: "wrap" }}>
        {["09:00", "10:30", "12:00", "15:00"].map((h, i) => (
          <span key={h} className={i === 2 ? "chip" : "chip chip--v"} style={{ opacity: i === 2 ? 1 : 0.5 }}>
            {h}
          </span>
        ))}
      </div>
      <div
        className="scr-block scr-row"
        style={{ justifyContent: "center", background: "linear-gradient(120deg,#8b5cf6,#22d3ee)", border: "none" }}
      >
        <b style={{ color: "#05050c" }}>Confirmar reserva</b>
      </div>
      <div className="scr-block scr-row" style={{ justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}>
          <div className="scr-bar" style={{ width: "60%" }} />
        </div>
        <span className="chip">2 disponibles</span>
      </div>
      {tabs}
    </>
  );
}
