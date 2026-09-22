# JLAPPS — Sistema de diseño (landing)

## Dirección
Estudio de apps móviles. Neón tech sobre negro, derivado del logo: fondo casi negro
con acentos violeta→magenta y teal→cian. Motivo de firmas: **trazas de circuito**
(en SVG, `Circuit` en `app/page.tsx`) y **teléfonos mockup dibujados en CSS** con
mini-UIs vivas por tipo de app (no fotos de stock).

## Paleta (tokens en `app/globals.css`)
- `--bg #07070F` · `--bg-2 #0C0C1A` · `--surface #101020`
- `--violet #8B5CF6` · `--magenta #A855F7` · `--teal #2DD4BF` · `--cyan #22D3EE` · `--sky #38BDF8`
- `--wa #25D366` (CTA WhatsApp, texto `#052E16`)
- Texto en 4 niveles: `--text 92%` / `--text-2 62%` / `--text-3 40%` / bordes `--line 8%`, `--line-strong 14%`
- Gradientes de marca: `--grad` (magenta→violet→teal) y `--grad-cool` (teal→cyan→sky)

## Tipografía
- Display: **Sora** 600–800 (`--font-display`), tracking -0.02em, `text-wrap: balance`
- Body: **Manrope** 400–700 (`--font-body`), line-height 1.55
- Hero: `clamp(40px, 5.6vw, 68px)` · H2 sección: `clamp(30px, 3.8vw, 44px)` · kicker 13.5px teal

## Espaciado y densidad
- Base 8px; secciones `padding: 96px 0`; contenedor `min(1180px, 100% - 48px)`
- Radios: `--r-s 10px` · `--r-m 18px` · `--r-l 28px`; teléfonos 38px (pantalla 30px, concéntrico con padding 10px)

## Profundidad
Estrategia única: **bordes sutiles + glow radial por detrás del foco** (sin sombras duras;
sobre fondo negro las sombras no leen). Glow del hero: `hero-glow` violeta/teal blur 30px.

## Componentes clave
- **Phone** (`app/components/Phone.tsx`) — frame 264×(9/19) en hero, 188–216px en galería/servicios; notch; `.scr` con tipografía 9px
- **Mini-UI de app** (`app/components/screens.tsx`) — una por tipo de app, layout propio cada una; primitivas: `.scr-head`, `.scr-block`, `.scr-bar`, `.scr-bar--fill`, `.chip`/`.chip--v`, `.dot`, `.scr-tabbar`
- **Servicios** (`.services`, 3 col → 1 col <980px) — Apps (Phone), Página web (`.browser` con `.br-bar`/`.br-url`/`.br-hero`), Agente WhatsApp (`.phone.wa-phone`, fondo #0A1410). Tarjeta destacada `.svc--featured` con glow teal. Cada tarjeta → botón WhatsApp con mensaje específico por servicio
- **Chat del agente** (`.wa-msg`, `.wa-in`/`.wa-out`) — auto-escritura: `wa-pop` con delays 0.6/1.5/2.5/3.6s; `prefers-reduced-motion` los muestra estáticos
- **Galería** — grid de 12 col; items span 4; glow alterno teal/violeta por `:nth-child(3n)`; hover `translateY(-6px)` + borde violeta
- **Galería compacta de apps** (`.gallery--apps`) — 4 teléfonos de 168px en una fila (2 col <980px, 1 col <520px); cada uno con `PhotoPhone`: foto real como hero (42% de la pantalla) + UI funcional (búsqueda, chips, card ★, CTA por app, tabbar)
- **Botones** — `.btn` pill, padding 15px 24px; `.btn-wa` verde; `.btn-ghost` borde; active `scale(0.97)`; focus-visible outline cian
- **WhatsApp** (`app/components/Wa.tsx`) — `WA_NUMBER = 584242399671`, `waLink(msg)`; CTA flotante `.wa-float` fijo abajo-derecha

## Copys
Español conversacional, sin tecnicismos. Mensaje WhatsApp pre-llenado: "Hola JLAPPS 👋, quiero una app móvil para mi negocio. ¿Me cuentan más?". Promesa: respuesta el mismo día, presupuesto sin compromiso.

## Accesibilidad / motion
- `prefers-reduced-motion` apaga animaciones; entradas `.rise` + delays 80ms; solo se animan `transform`/`opacity`
- Hit areas ≥44px; focus-visible en todos los CTAs
