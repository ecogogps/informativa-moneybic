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
      {/* HERO SECTION — Estilo tarjeta con imagen desfasada (Baubap style) */}
      <section className="relative w-full pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <div className="relative">
            {/* Contenedor base claro */}
            <div className="w-full bg-[#EEF2F6] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative shadow-xl overflow-visible">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Lado izquierdo: Título, Descripción, Botón de descarga */}
                <div className="lg:col-span-7 space-y-6 text-left z-10">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                    Dinero rápido cuando <br />
                    <span className="text-primary">más lo necesitas</span>
                  </h1>

                  <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-lg">
                    MONEYBIC te conecta con préstamos personales desde $500 hasta $50,500 pesos mexicanos, con aprobación en minutos y depósito directo a tu cuenta. Sin filas, sin papeleo, desde tu celular.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href="https://drive.google.com/drive/folders/1BBfKHajYvCM9bDhsBSJ5dBWE7LtvZVDu?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3.5 bg-slate-950 hover:bg-slate-800 text-white px-7 py-3.5 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      <div className="p-1.5 rounded-xl bg-white/10 group-hover:bg-primary/20 transition-colors">
                        <Download className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Disponible para Android
                        </span>
                        <span className="block text-sm font-extrabold text-white">
                          Descargar App
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Espacio reservado para la columna derecha en desktop */}
                <div className="hidden lg:block lg:col-span-5" />
              </div>

              {/* Contenedor de la imagen desfasada (sobresale por abajo en desktop) */}
              <div className="mt-8 lg:mt-0 relative h-[320px] sm:h-[380px] lg:h-auto lg:absolute lg:top-8 lg:bottom-[-48px] lg:right-8 lg:w-[44%] rounded-[2.5rem] overflow-hidden shadow-2xl z-20">
                <Image
                  src="/assets/phone_mockup2.png"
                  alt="App MONEYBIC en pantalla de celular"
                  fill
                  className="object-cover object-center"
                  priority
                  referrerPolicy="no-referrer"
                />

                {/* Burbuja: 'Tu préstamo fue aprobado' */}
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-2xl flex items-center gap-2.5 border border-slate-100 z-30">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-sm shadow-primary/40">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                    Tu préstamo fue aprobado
                  </span>
                </div>
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
                      className="text-sm sm:text-base lg:text-lg font-bold text-white hover:text-primary transition-colors whitespace-nowrap block"
                      title="soporte.moneybic@gmail.com"
                    >
                      soporte.moneybic@gmail.com
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
          <div className="w-full bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative shadow-xl overflow-visible">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Lado izquierdo: Título, Descripción, Botón de descarga como en el hero */}
              <div className="lg:col-span-7 space-y-6 text-left z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                  Una app en la que <br className="hidden sm:inline" />
                  <span className="text-primary">puedes confiar</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                  MONEYBIC no solo es práctica y simple, también es accesible y responsable. Solicitudes 100% digitales, respuestas inmediatas y total transparencia en cada paso.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="https://drive.google.com/drive/folders/1BBfKHajYvCM9bDhsBSJ5dBWE7LtvZVDu?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3.5 bg-slate-950 hover:bg-slate-800 text-white px-7 py-3.5 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] group"
                  >
                    <div className="p-1.5 rounded-xl bg-white/10 group-hover:bg-primary/20 transition-colors">
                      <Download className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Disponible para Android
                      </span>
                      <span className="block text-sm font-extrabold text-white">
                        Descargar App
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Lado derecho: Imagen redondeada de una persona feliz y contenedor con logo */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[380px] sm:max-w-[420px]">

                  {/* Imagen redondeada de la persona feliz */}
                  <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl z-10 bg-slate-100">
                    <Image
                      src="/assets/happy_person.jpg"
                      alt="Persona feliz con MONEYBIC"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 420px"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Contenedor un poco más arriba de la esquina inferior izquierda con el logo de MONEYBIC */}
                  <div className="absolute -left-3 sm:-left-6 bottom-8 sm:bottom-12 z-20 bg-slate-950/95 backdrop-blur-md w-16 h-16 sm:w-20 sm:h-20 aspect-square p-2.5 sm:p-3 rounded-xl shadow-2xl border border-slate-800 flex items-center justify-center">
                    <Image
                      src="https://i.postimg.cc/Jzd6XVzQ/MONEYBIC-LOGO.png"
                      alt="Logo MONEYBIC"
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                      priority
                      referrerPolicy="no-referrer"
                    />
                  </div>
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