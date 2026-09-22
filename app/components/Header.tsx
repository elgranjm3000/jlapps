"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { WaIcon, waLink } from "./Wa";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#apps", label: "Apps" },
  { href: "#webs", label: "Webs" },
  { href: "#agentes", label: "Agentes" },
  { href: "#proceso", label: "Cómo trabajamos" },
];

export function Header({ waMsg }: { waMsg: string }) {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="container header-in">
        <a className="brand" href="#" aria-label="JLAPPS inicio">
          <Image src="/jlapps-logo.jpg" alt="Logo JLAPPS" width={42} height={42} />
          <b>
            JL<span>APPS</span>
          </b>
        </a>

        <nav className="nav" aria-label="Secciones">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-wa" href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
            <WaIcon /> <span>Cotiza tu app</span>
          </a>

          <button
            ref={burgerRef}
            className={`burger${open ? " is-open" : ""}`}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="menu-movil" className={`mobile-panel${open ? " is-open" : ""}`}>
        <nav aria-label="Menú móvil">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          className="btn btn-wa"
          href={waLink(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          <WaIcon /> Escríbenos por WhatsApp
        </a>
      </div>
    </header>
  );
}
