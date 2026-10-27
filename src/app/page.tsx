"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Wallet,
  CreditCard,
  Clock,
  Shield,
  ShieldCheck,
  Zap,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Download,
  Check,
  Sparkles,
  Lock,
  ArrowUpRight,
  Copy,
} from "lucide-react";

import Image from "next/image";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  const handleCopy = (text: string, type: "email" | "phone") => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    }
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* HERO SECTION — Dividido en 2 contenedores con fondo #080808 */}
      <section className="relative w-full bg-[#080808] py-8 sm:py-12 lg:py-16 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* Contenedor 1 (Izquierdo): Fondo E4F0D8, esquinas redondeadas, puntitos, burbuja, título, descripción, botón y badges */}
            <div className="relative bg-[#E4F0D8] rounded-[2.5rem] sm:rounded-[3rem] p-7 sm:p-10 lg:p-12 overflow-hidden shadow-2xl flex flex-col justify-between min-h-[500px]">
              {/* Efecto de varios puntitos color verde de la marca en la esquina superior izquierda */}
              <div className="absolute top-3.5 left-3.5 sm:top-6 sm:left-6 grid grid-cols-5 gap-1 sm:gap-1.5 pointer-events-none z-0">
                {Array.from({ length: 35 }).map((_, i) => (
                  <span
                    key={i}
                    className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#0d7d36]/60 sm:bg-[#0d7d36]/70 ${
                      i >= 20 ? "hidden sm:inline-block" : "inline-block"
                    }`}
                  />
                ))}
              </div>

              {/* Cuadritos color verde de la marca trasparentes en la esquina inferior derecha */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#0d7d36]/20 pointer-events-none z-0" />
              <div className="absolute bottom-6 right-8 sm:bottom-8 sm:right-10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#0d7d36]/15 pointer-events-none z-0" />

              {/* Cabecera interior: Burbuja '100% en línea' cercana a la esquina superior derecha */}
              <div className="relative z-10 flex justify-end">
                <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl bg-[#c5e4ad]/75 text-[#0d7d36] text-xs sm:text-sm font-bold shadow-xs">
                  <Check className="h-4 w-4 stroke-[3]" />
                  <span>100% en línea</span>
                </div>
              </div>

              {/* Contenido principal: Título, Descripción y Botón */}
              <div className="relative z-10 space-y-5 sm:space-y-6 pt-3 sm:pt-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] xl:text-[3.5rem] font-black text-black tracking-tight leading-[1.05]">
                  Préstamos al<br />
                  instante,<br />
                  <span className="text-[#0d7d36]">sin buró</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl font-bold text-slate-800 leading-snug max-w-md">
                  De $500 a $50,500 MXN directo a tu cuenta
                </p>

                <div className="pt-2">
                  <a
                    href="https://testmoneybic.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[#0d7d36] hover:bg-[#0b6a2e] text-white px-8 sm:px-10 py-4 sm:py-4.5 rounded-full text-base sm:text-lg font-black tracking-wider uppercase shadow-xl shadow-[#0d7d36]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Solicitar Préstamo</span>
                    <Download className="h-5 w-5 stroke-[2.5]" />
                  </a>
                </div>
              </div>

              {/* 3 Contenedores blancos abajo del botón */}
              <div className="relative z-10 pt-6 sm:pt-8 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-lg">
                {/* 1. Regulado por CONDUSEF */}
                <div className="bg-white rounded-2xl px-3 py-2.5 sm:py-3 flex items-center justify-center sm:justify-start gap-2 shadow-xs border border-black/5 h-full min-h-[54px]">
                  <Shield className="h-4 w-4 text-[#0d7d36] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                    Regulado por <span className="font-extrabold text-black">CONDUSEF</span>
                  </span>
                </div>

                {/* 2. Sin aval */}
                <div className="bg-white rounded-2xl px-3 py-2.5 sm:py-3 flex items-center justify-center sm:justify-start gap-2 shadow-xs border border-black/5 h-full min-h-[54px]">
                  <CheckCircle2 className="h-4 w-4 text-[#0d7d36] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                    Sin aval
                  </span>
                </div>

                {/* 3. Aprobación en minutos */}
                <div className="bg-white rounded-2xl px-3 py-2.5 sm:py-3 flex items-center justify-center sm:justify-start gap-2 shadow-xs border border-black/5 h-full min-h-[54px]">
                  <Clock className="h-4 w-4 text-[#0d7d36] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                    Aprobación en minutos
                  </span>
                </div>
              </div>
            </div>

            {/* Contenedor 2 (Derecho): Imagen bannerprincipal.png */}
            <div className="relative w-full flex items-center justify-center">
              <div className="relative w-full max-w-[560px] aspect-square rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/assets/bannerprincipal.png"
                  alt="Préstamos al instante MONEYBIC"
                  fill
                  className="object-contain object-center"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <div className="container mx-auto max-w-6xl px-6 py-20 space-y-32">
        {/* SECCIÓN — ¿QUÉ PUEDES HACER CON MONEYBIC? */}
        <section id="servicios" className="space-y-12 scroll-mt-28">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Todo lo que puedes hacer con MONEYBIC
            </h2>
          </div>

          <div className="max-w-4xl mx-auto divide-y divide-white/10">
            {/* Item 1 */}
            <div className="py-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image
                  src="/assets/icon_servicios_1.jpg"
                  alt="Solicitar un préstamo personal"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-5/12">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Solicitar un préstamo personal
                </h3>
              </div>
              <div className="md:w-7/12">
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Elige el monto que necesitas, completa tu información en minutos y recibe el dinero directamente en tu cuenta bancaria. Sin garantías, sin aval y sin complicaciones.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="py-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image
                  src="/assets/icon_servicios_2.jpg"
                  alt="Consultar y gestionar tus préstamos"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-5/12">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Consultar y gestionar tus préstamos
                </h3>
              </div>
              <div className="md:w-7/12">
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Revisa en tiempo real el estado de tu préstamo activo, el monto total a pagar, los intereses generados y la fecha de vencimiento. Toda tu información financiera en un solo lugar.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="py-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <Image
                  src="/assets/icon_servicios_3.jpg"
                  alt="Pagar de forma rápida y segura"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-5/12">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Pagar de forma rápida y segura
                </h3>
              </div>
              <div className="md:w-7/12">
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Liquida tu préstamo desde cualquier banca móvil mediante transferencia SPEI con una CLABE única generada para ti. Tu pago queda registrado automáticamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN — ¿CÓMO OBTENER UN PRÉSTAMO? */}
        <section id="como-obtenerlo" className="space-y-12 scroll-mt-28">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Obtén tu préstamo en 3 pasos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paso 1 */}
            <div className="glass-card glass-card-hover p-8 flex flex-col items-center text-center space-y-6">
              <div className="w-full h-44 rounded-2xl bg-secondary/50 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                <div className="w-20 h-24 rounded-xl bg-card border border-white/10 flex flex-col items-center justify-between p-3 shadow-lg group-hover:scale-105 transition-transform">
                  <div className="w-6 h-1 rounded-full bg-white/20" />
                  <div className="p-2.5 rounded-xl bg-primary/20 text-primary">
                    <Download className="h-6 w-6" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 p-1.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                  <Check className="h-3.5 w-3.5" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md shadow-primary/30">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">Regístrate y completa tu perfil</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Descarga la app, ingresa tu número de celular y verifica tu identidad con un código SMS. Luego llena tu información personal, datos de domicilio, referencias y sube una foto de tu rostro y tu identificación oficial. Todo desde tu teléfono, en menos de 10 minutos.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="glass-card glass-card-hover p-8 flex flex-col items-center text-center space-y-6">
              <div className="w-full h-44 rounded-2xl bg-secondary/50 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                <div className="w-56 rounded-xl bg-card border border-white/10 p-3 shadow-lg space-y-2.5 group-hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-secondary/60 border border-white/5">
                    <span className="text-xs font-semibold text-white">Mariana Lope...</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="w-full py-1.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider text-center">
                    Listo
                  </div>
                </div>
                <div className="absolute top-4 right-4 p-1.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                  <Check className="h-3.5 w-3.5" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md shadow-primary/30">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Elige tu monto y envía tu solicitud</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Selecciona cuánto dinero necesitas (desde $500 hasta $50,500 MXN) y envía tu solicitud. Nuestro equipo la revisará en un tiempo promedio de 15 a 30 minutos dentro del horario de atención.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="glass-card glass-card-hover p-8 flex flex-col items-center text-center space-y-6">
              <div className="w-full h-44 rounded-2xl bg-secondary/50 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                <div className="w-24 h-28 rounded-xl bg-card border border-white/10 flex flex-col items-center justify-between p-3.5 shadow-lg group-hover:scale-105 transition-transform relative">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                    <Zap className="h-4 w-4 fill-current" />
                  </div>
                  <div className="w-full space-y-1">
                    <div className="h-1.5 w-full rounded bg-white/20" />
                    <div className="h-1.5 w-3/4 rounded bg-white/10" />
                  </div>
                  <div className="w-full py-1 rounded bg-primary/20 text-primary text-[9px] font-bold text-center">
                    SPEI OK
                  </div>
                </div>
                <div className="absolute top-4 right-4 p-1.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                  <Check className="h-3.5 w-3.5" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md shadow-primary/30">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">Recibe tu dinero</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Si tu solicitud es aprobada, te notificamos al instante y realizamos la transferencia directa a tu cuenta bancaria. El dinero llega vía SPEI sin demoras.
                </p>
              </div>
            </div>
          </div>

          {/* Horario */}
          <div className="rounded-2xl bg-card/60 border border-primary/30 p-5 backdrop-blur-md shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
              <div className="p-2.5 rounded-full bg-primary/20 text-primary shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <p className="text-sm md:text-base font-semibold text-white">
                Horario de atención:{" "}
                <span className="text-primary">
                  Lunes a Domingo de 9:00 a 17:00 hrs (hora del Centro de México).
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN — CONTACTO */}
        <section id="contacto" className="space-y-12 scroll-mt-28">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Contacto
            </h2>
          </div>

          <div className="glass-card max-w-4xl mx-auto p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Email */}
          <div className="rounded-2xl bg-secondary/40 border border-white/5 p-6 flex flex-col justify-between space-y-4 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-4 min-w-0">
              <div className="p-3.5 rounded-xl bg-primary/15 text-primary border border-primary/20 shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                  Correo electrónico
                </span>
                <a
                  href="mailto:soporte.moneybic@gmail.com"
                  className="text-sm sm:text-base lg:text-lg font-bold text-white hover:text-primary transition-colors block leading-tight sm:whitespace-nowrap"
                  title="soporte.moneybic@gmail.com"
                >
                  soporte.moneybic<br className="sm:hidden" />@gmail.com
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy("soporte.moneybic@gmail.com", "email")}
              className="w-full py-2 px-4 rounded-xl border border-white/10 hover:border-primary/40 bg-card/60 text-xs font-semibold text-muted-foreground hover:text-white flex items-center justify-center gap-2 transition-all"
            >
              <Copy className="h-3.5 w-3.5" />
              <span>{copiedEmail ? "Copiado al portapapeles" : "Copiar correo"}</span>
            </button>
          </div>

              {/* Teléfono */}
              <div className="rounded-2xl bg-secondary/40 border border-white/5 p-6 flex flex-col justify-between space-y-4 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-primary/15 text-primary border border-primary/20">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                      Teléfono
                    </span>
                    <a
                      href="tel:+524441756903"
                      className="text-base sm:text-lg font-bold text-white hover:text-primary transition-colors"
                    >
                      +524441756903
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy("+524441756903", "phone")}
                  className="w-full py-2 px-4 rounded-xl border border-white/10 hover:border-primary/40 bg-card/60 text-xs font-semibold text-muted-foreground hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span>{copiedPhone ? "Copiado al portapapeles" : "Copiar teléfono"}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN — SOBRE MONEYBIC / CONFIANZA */}
        <section className="scroll-mt-28">
          <div className="w-full bg-[#080808] rounded-[2.5rem] sm:rounded-[3rem] p-7 sm:p-10 lg:p-14 relative shadow-2xl overflow-hidden border border-white/10 eth-grid-bg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 items-center">
              {/* Contenedor 1 (Izquierdo): Logo, Títulos, Descripción, Beneficios y Botón */}
              <div className="space-y-6 sm:space-y-7 z-10 text-left">
                {/* Logo MONEYBIC */}
                <div className="flex items-center">
                  <Image
                    src="/assets/moneybichorizontal.png"
                    alt="Logo MONEYBIC"
                    width={200}
                    height={60}
                    className="h-[60px] w-[200px] object-contain"
                    priority
                  />
                </div>

                {/* Título 1 */}
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-black text-white tracking-tight leading-[1.1]">
                  Una app en la que <br />
                  <span className="text-[#52c16c]">puedes confiar</span>
                </h2>

                {/* Descripción */}
                <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed max-w-lg">
                  MONEYBIC no solo es práctica y simple, también es accesible y responsable. Solicitudes 100% digitales, respuestas inmediatas y total transparencia en cada paso.
                </p>

                {/* Título 2 */}
                <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-white tracking-tight leading-tight pt-2">
                  Solicita hoy y{" "}
                  <span className="text-[#52c16c]">obtén beneficios exclusivos</span>
                </h3>

                {/* Lista de 3 beneficios con icono circular verde y visto blanco */}
                <div className="space-y-3.5 pt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#34c759] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                    </div>
                    <span className="text-white text-base sm:text-lg font-bold">
                      Aprobación inmediata
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#34c759] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                    </div>
                    <span className="text-white text-base sm:text-lg font-bold">
                      Sin comisiones ocultas
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#34c759] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                    </div>
                    <span className="text-white text-base sm:text-lg font-bold">
                      100% digital
                    </span>
                  </div>
                </div>

                {/* Botón color E5F4DF */}
                <div className="pt-3">
                  <a
                    href="https://testmoneybic.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[#E5F4DF] hover:bg-[#d8eed1] text-[#0d7d36] px-6 sm:px-9 py-3 sm:py-4 rounded-full text-base sm:text-lg font-extrabold tracking-wide shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                  >
                    <span className="leading-tight">
                      Solicita hoy y
                      <br className="sm:hidden" />
                      {' '}obtén beneficios
                    </span>
                    <ArrowRight className="h-5 w-5 stroke-[2.5] shrink-0" />
                  </a>
                </div>
              </div>

              {/* Contenedor 2 (Derecho): Imagen bannernewseccion.png */}
              <div className="relative w-full flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                  <Image
                    src="/assets/bannernewseccion.png"
                    alt="Una app en la que puedes confiar - MONEYBIC"
                    fill
                    className="object-contain object-center"
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN — PREGUNTAS FRECUENTES (FAQ) */}
        <section id="faq" className="space-y-12 pb-12 scroll-mt-28">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Preguntas frecuentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
            <AccordionItem value="item-1" className="glass-card border border-white/10 px-6 sm:px-8 rounded-3xl data-[state=open]:border-primary/40 transition-all">
              <AccordionTrigger className="hover:no-underline font-bold text-base sm:text-lg py-6 text-white text-left">
                ¿Quién puede solicitar un préstamo en MONEYBIC?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-6 leading-relaxed">
                Cualquier persona física mexicana mayor de 18 años con número de celular activo en México, cuenta bancaria a su nombre e identificación oficial vigente (INE o pasaporte).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="glass-card border border-white/10 px-6 sm:px-8 rounded-3xl data-[state=open]:border-primary/40 transition-all">
              <AccordionTrigger className="hover:no-underline font-bold text-base sm:text-lg py-6 text-white text-left">
                ¿Cuánto dinero puedo solicitar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-6 leading-relaxed">
                Puedes solicitar desde $500 hasta $50,500 pesos mexicanos. El monto aprobado dependerá de tu perfil y tu historial dentro de la plataforma.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="glass-card border border-white/10 px-6 sm:px-8 rounded-3xl data-[state=open]:border-primary/40 transition-all">
              <AccordionTrigger className="hover:no-underline font-bold text-base sm:text-lg py-6 text-white text-left">
                ¿En cuánto tiempo aprueban mi solicitud?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-6 leading-relaxed">
                El tiempo promedio de revisión es de 15 a 30 minutos durante nuestro horario de atención (Lunes a Domingo, 9:00 – 17:00 hrs). Recibirás una notificación en la app con la resolución.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="glass-card border border-white/10 px-6 sm:px-8 rounded-3xl data-[state=open]:border-primary/40 transition-all">
              <AccordionTrigger className="hover:no-underline font-bold text-base sm:text-lg py-6 text-white text-left">
                ¿Cómo y cuándo recibo el dinero?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-6 leading-relaxed">
                Una vez aprobado tu préstamo, realizamos la transferencia vía SPEI directamente a la cuenta bancaria que registraste. El depósito se acredita en los tiempos normales del sistema bancario mexicano.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="glass-card border border-white/10 px-6 sm:px-8 rounded-3xl data-[state=open]:border-primary/40 transition-all">
              <AccordionTrigger className="hover:no-underline font-bold text-base sm:text-lg py-6 text-white text-left">
                ¿Cómo realizo el pago de mi préstamo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-6 leading-relaxed">
                Desde la app, en la sección "Préstamos", selecciona tu préstamo activo y toca "Reembolso". Se generará una CLABE interbancaria única. Realiza la transferencia desde tu banco por el monto exacto indicado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="glass-card border border-white/10 px-6 sm:px-8 rounded-3xl data-[state=open]:border-primary/40 transition-all">
              <AccordionTrigger className="hover:no-underline font-bold text-base sm:text-lg py-6 text-white text-left">
                ¿Qué pasa si no pago en la fecha acordada?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-6 leading-relaxed">
                Se generarán intereses moratorios por cada día de retraso. Puedes consultar el monto actualizado con mora en cualquier momento dentro de la app. En algunos casos, podemos ofrecerte la opción de pagar sin los intereses acumulados por mora.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="glass-card border border-white/10 px-6 sm:px-8 rounded-3xl data-[state=open]:border-primary/40 transition-all">
              <AccordionTrigger className="hover:no-underline font-bold text-base sm:text-lg py-6 text-white text-left">
                ¿Es segura mi información personal?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-6 leading-relaxed">
                <div className="flex gap-4 items-start">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <p>
                    Sí. Tu información se almacena con cifrado en tránsito y en reposo. Las imágenes de tu identificación y rostro se utilizan exclusivamente para verificar tu identidad y no son compartidas con terceros, salvo lo indicado en nuestra Política de Privacidad.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="glass-card border border-white/10 px-6 sm:px-8 rounded-3xl data-[state=open]:border-primary/40 transition-all">
              <AccordionTrigger className="hover:no-underline font-bold text-base sm:text-lg py-6 text-white text-left">
                ¿Qué documentos necesito para solicitar un préstamo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-6 leading-relaxed">
                Solo necesitas: identificación oficial vigente (INE o pasaporte), número de celular activo en México, cuenta bancaria a tu nombre y acceso a la cámara de tu teléfono para la verificación de identidad.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="glass-card border border-white/10 px-6 sm:px-8 rounded-3xl data-[state=open]:border-primary/40 transition-all">
              <AccordionTrigger className="hover:no-underline font-bold text-base sm:text-lg py-6 text-white text-left">
                ¿Cómo cancelo mi cuenta?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-6 leading-relaxed">
                Puedes eliminar tu cuenta desde la sección "Perfil" de la app. Ten en cuenta que no es posible eliminar la cuenta si tienes un préstamo activo o saldo pendiente de pago.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}