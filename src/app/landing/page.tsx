import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Smartphone, 
  Download, 
  ShieldCheck, 
  Users, 
  Zap, 
  ArrowRight, 
  Star,
  Clock,
  Lock,
  Search
} from "lucide-react";

export default function LandingPage() {
  const benefits = [
    { title: "Fácil de operar", description: "Gestión sencilla con INE/IFE y teléfono", icon: Smartphone },
    { title: "Diversas opciones", description: "Plazos semanales adaptados a ti", icon: Clock },
    { title: "Montos altos", description: "Hasta $50,500 sin cargos ocultos", icon: Zap },
    { title: "Alta confianza", description: "+1 millón de usuarios activos", icon: Users },
    { title: "Líder en la industria", description: "Experiencia en servicios financieros", icon: Star },
    { title: "Servicio al cliente", description: "Atención profesional y dedicada", icon: ShieldCheck },
    { title: "Tarifas transparentes", description: "Sin costos ocultos, transacciones seguras", icon: Search },
    { title: "Seguridad de datos", description: "Información cifrada y protegida", icon: Lock },
    { title: "Operación rápida", description: "Proceso completo en minutos", icon: Zap },
    { title: "Cumplimiento legal", description: "Apegado a leyes de protección de datos", icon: ShieldCheck },
  ];

  const testimonials = [
    { name: "Juan López", text: "Increíble la rapidez con la que depositaron el dinero. El proceso con el INE fue muy sencillo.", rating: 5 },
    { name: "María García", text: "Excelente atención al cliente. Me explicaron todo sobre los intereses de forma muy transparente.", rating: 5 },
    { name: "Antonio Delgado", text: "La mejor app de préstamos que he usado. Muy fácil de navegar y segura.", rating: 5 },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20 pt-32 animate-in fade-in duration-700">
      {/* SECCIÓN HERO */}
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <Badge variant="outline" className="badge-text border-primary text-primary px-4 py-1">
              +5 Millones de Mexicanos Atendidos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Solicita en línea <br />
              <span className="text-primary text-3xl md:text-5xl">Sin papeleos, dinero rápido</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Préstamos desde $500 hasta <span className="font-bold text-white">$50,500 MXN</span> con aprobación inmediata.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="pill-button bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg">
              Descargar App
              <Download className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="pill-button h-14 px-8 text-lg">
              Saber más
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
          <Image 
            src="https://picsum.photos/seed/moneybic-app/600/800" 
            alt="App Preview" 
            width={400} 
            height={600} 
            className="relative z-10 rounded-[2.5rem] border-8 border-card shadow-2xl"
            data-ai-hint="smartphone app"
          />
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-card/30 py-24">
        <div className="container mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Beneficios y Diferenciadores</h2>
            <p className="text-muted-foreground">¿Por qué elegir MONEYBIC para tus finanzas?</p>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card border-none hover:translate-y-[-5px] transition-transform">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm leading-tight flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-primary shrink-0" />
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="container mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Cómo Funciona</h2>
          <p className="text-muted-foreground">Tu dinero en 3 simples pasos</p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              step: "1", 
              title: "Solicita tu límite", 
              desc: "Regístrate con INE/IFE, CURP y teléfono desde la aplicación." 
            },
            { 
              step: "2", 
              title: "Solicita un préstamo", 
              desc: "Elige monto y método de pago; intereses siempre visibles y claros." 
            },
            { 
              step: "3", 
              title: "Recibe tu dinero", 
              desc: "Depósito directo en tu cuenta vía SPEI tras la aprobación." 
            }
          ].map((item, index) => (
            <div key={index} className="relative group text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl font-bold mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {item.step}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
              {index < 2 && (
                <ArrowRight className="hidden md:block absolute top-10 -right-6 text-primary/20 h-8 w-8" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <h2 className="text-3xl font-bold">⭐ 4.7/5 en Google Play</h2>
            <p className="text-muted-foreground">95% de reseñas positivas de nuestros usuarios</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, i) => (
              <Card key={i} className="glass-card">
                <CardContent className="p-8 space-y-4 italic text-muted-foreground">
                  <p>"{testi.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5 not-italic">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {testi.name[0]}
                    </div>
                    <span className="font-bold text-foreground">{testi.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ACERCA DE MONEYBIC */}
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Acerca de MONEYBIC</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos la aplicación líder en préstamos personales confiables en México. 
              Nuestra tecnología nos permite ofrecer servicios financieros de forma 
              segura, transparente y sumamente rápida directamente a tu cuenta bancaria.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Tasas competitivas",
              "Plazos de 7 días",
              "Aprobación en minutos",
              "Pago vía SPEI"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 font-medium">
                <CheckCircle2 className="text-primary h-5 w-5" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-8">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <ShieldCheck className="text-primary h-6 w-6" />
                Requisitos de Solicitud
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <p className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Datos requeridos</p>
                <p className="text-sm">
                  Nombre completo, sexo, fecha y país de nacimiento, nacionalidad, profesión, domicilio, teléfono y correo electrónico.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Documentos</p>
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span className="font-bold">INE / IFE Vigente</span>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Identificación oficial mexicana requerida para verificar identidad.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CALL TO ACTION FINAL */}
      <section className="container mx-auto px-6">
        <div className="glass-card bg-primary p-12 rounded-[2rem] text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              ¿Listo para obtener tu crédito?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Descarga la app ahora y recibe tu aprobación en menos de 15 a 30 minutos.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Button className="bg-white text-primary hover:bg-white/90 h-16 px-10 rounded-2xl text-lg font-bold">
              Google Play
            </Button>
            <Button className="bg-black text-white hover:bg-black/90 h-16 px-10 rounded-2xl text-lg font-bold border border-white/10">
              App Store
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
