"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Wallet, CreditCard, Clock, ShieldCheck, Zap, Mail, Phone } from "lucide-react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="animate-in fade-in duration-1000">
      {/* SECCIÓN HERO FULL WIDTH QUE CUBRE EL HEADER */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 py-20">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source 
            src="https://build.themovation.com/wp-content/uploads/2023/08/mixkit-long-hallway-in-data-center-23219-medium.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Dark Overlay para legibilidad */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Contenido Hero */}
        <div className="relative z-20 space-y-8 max-w-4xl mt-16 md:mt-24">
          <div className="space-y-4 md:space-y-6">
            <Badge variant="outline" className="badge-text border-primary text-primary px-4 py-1 bg-primary/10 backdrop-blur-md">
              Préstamos en Minutos
            </Badge>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-2xl">
              Dinero rápido cuando <br /><span className="text-primary">más lo necesitas</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-medium max-w-3xl mx-auto drop-shadow-md">
              MONEYBIC te conecta con préstamos personales desde $500 hasta $50,500 pesos mexicanos, 
              con aprobación en minutos y depósito directo a tu cuenta. Sin filas, sin papeleo, desde tu celular.
            </p>
          </div>
          <Button asChild className="pill-button bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-xs md:px-8 md:py-4 md:text-sm h-auto group mx-auto">
            <a href="https://drive.google.com/drive/folders/1BBfKHajYvCM9bDhsBSJ5dBWE7LtvZVDu?usp=sharing" target="_blank" rel="noopener noreferrer">
              Descargar App
              <Zap className="ml-2 h-4 w-4 fill-current" />
            </a>
          </Button>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL EN CONTENEDOR */}
      <div className="container mx-auto px-6 py-24 space-y-32">
        {/* SECCIÓN — ¿QUÉ PUEDES HACER CON MONEYBIC? */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Todo lo que puedes hacer con MONEYBIC</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card text-center hover:translate-y-[-8px] transition-transform duration-300">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <Wallet className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">1. Solicitar un préstamo personal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Elige el monto que necesitas, completa tu información en minutos y recibe el dinero directamente en tu cuenta bancaria. Sin garantías, sin aval y sin complicaciones.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover:translate-y-[-8px] transition-transform duration-300">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <Smartphone className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">2. Consultar y gestionar tus préstamos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Revisa en tiempo real el estado de tu préstamo activo, el monto total a pagar, los intereses generados y la fecha de vencimiento. Toda tu información financiera en un solo lugar.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover:translate-y-[-8px] transition-transform duration-300">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <CreditCard className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">3. Pagar de forma rápida y segura</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Liquida tu préstamo desde cualquier banca móvil mediante transferencia SPEI con una CLABE única generada para ti. Tu pago queda registrado automáticamente.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECCIÓN — ¿CÓMO OBTENER UN PRÉSTAMO? */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Obtén tu préstamo en 3 pasos</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="space-y-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/20">
                1
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Regístrate y completa tu perfil</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Descarga la app, ingresa tu número de celular y verifica tu identidad con un código SMS. Luego llena tu información personal, datos de domicilio, referencias y sube una foto de tu rostro y tu identificación oficial. Todo desde tu teléfono, en menos de 10 minutos.
                </p>
              </div>
            </div>

            <div className="space-y-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/20">
                2
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Elige tu monto y envía tu solicitud</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Selecciona cuánto dinero necesitas (desde $500 hasta $50,500 MXN) y envía tu solicitud. Nuestro equipo la revisará en un tiempo promedio de 15 a 30 minutos dentro del horario de atención.
                </p>
              </div>
            </div>

            <div className="space-y-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/20">
                3
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">Recibe tu dinero</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Si tu solicitud es aprobada, te notificamos al instante y realizamos la transferencia directa a tu cuenta bancaria. El dinero llega vía SPEI sin demoras.
                </p>
              </div>
            </div>
          </div>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="flex items-center justify-center gap-3 p-4 text-primary font-medium">
              <Clock className="h-5 w-5" />
              <span>Horario de atención: Lunes a Domingo de 9:00 a 17:00 hrs (hora del Centro de México).</span>
            </CardContent>
          </Card>
        </section>

        {/* SECCIÓN — CONTACTO */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Contacto</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8 flex flex-col md:flex-row justify-around items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex flex-col text-center md:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Correo electrónico</span>
                  <a href="mailto:soporte.moneybic@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">
                    soporte.moneybic@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="flex flex-col text-center md:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Teléfono</span>
                  <a href="tel:+524441756903" className="text-lg font-semibold hover:text-primary transition-colors">
                    +524441756903
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SECCIÓN — PREGUNTAS FRECUENTES (FAQ) */}
        <section className="space-y-12 pb-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Preguntas frecuentes</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="glass-card border-none px-6 rounded-2xl">
              <AccordionTrigger className="hover:no-underline font-semibold text-lg py-6">
                ¿Quién puede solicitar un préstamo en MONEYBIC?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                Cualquier persona física mexicana mayor de 18 años con número de celular activo en México, cuenta bancaria a su nombre e identificación oficial vigente (INE o pasaporte).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="glass-card border-none px-6 rounded-2xl">
              <AccordionTrigger className="hover:no-underline font-semibold text-lg py-6">
                ¿Cuánto dinero puedo solicitar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                Puedes solicitar desde $500 hasta $50,500 pesos mexicanos. El monto aprobado dependerá de tu perfil y tu historial dentro de la plataforma.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="glass-card border-none px-6 rounded-2xl">
              <AccordionTrigger className="hover:no-underline font-semibold text-lg py-6">
                ¿En cuánto tiempo aprueban mi solicitud?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                El tiempo promedio de revisión es de 15 a 30 minutos durante nuestro horario de atención (Lunes a Domingo, 9:00 – 17:00 hrs). Recibirás una notificación en la app con la resolución.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="glass-card border-none px-6 rounded-2xl">
              <AccordionTrigger className="hover:no-underline font-semibold text-lg py-6">
                ¿Cómo y cuándo recibo el dinero?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                Una vez aprobado tu préstamo, realizamos la transferencia vía SPEI directamente a la cuenta bancaria que registraste. El depósito se acredita en los tiempos normales del sistema bancario mexicano.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="glass-card border-none px-6 rounded-2xl">
              <AccordionTrigger className="hover:no-underline font-semibold text-lg py-6">
                ¿Cómo realizo el pago de mi préstamo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                Desde la app, en la sección "Préstamos", selecciona tu préstamo activo y toca "Reembolso". Se generará una CLABE interbancaria única. Realiza la transferencia desde tu banco por el monto exacto indicado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="glass-card border-none px-6 rounded-2xl">
              <AccordionTrigger className="hover:no-underline font-semibold text-lg py-6">
                ¿Qué pasa si no pago en la fecha acordada?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                Se generarán intereses moratorios por cada día de retraso. Puedes consultar el monto actualizado con mora en cualquier momento dentro de la app. En algunos casos, podemos ofrecerte la opción de pagar sin los intereses acumulados por mora.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="glass-card border-none px-6 rounded-2xl">
              <AccordionTrigger className="hover:no-underline font-semibold text-lg py-6">
                ¿Es segura mi información personal?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                <div className="flex gap-4 items-start">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <p>Sí. Tu información se almacena con cifrado en tránsito y en reposo. Las imágenes de tu identificación y rostro se utilizan exclusivamente para verificar tu identidad y no son compartidas con terceros, salvo lo indicado en nuestra Política de Privacidad.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="glass-card border-none px-6 rounded-2xl">
              <AccordionTrigger className="hover:no-underline font-semibold text-lg py-6">
                ¿Qué documentos necesito para solicitar un préstamo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                Solo necesitas: identificación oficial vigente (INE o pasaporte), número de celular activo en México, cuenta bancaria a tu nombre y acceso a la cámara de tu teléfono para la verificación de identidad.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="glass-card border-none px-6 rounded-2xl">
              <AccordionTrigger className="hover:no-underline font-semibold text-lg py-6">
                ¿Cómo cancelo mi cuenta?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                Puedes eliminar tu cuenta desde la sección "Perfil" de la app. Ten en cuenta que no es posible eliminar la cuenta si tienes un préstamo activo o saldo pendiente de pago.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
