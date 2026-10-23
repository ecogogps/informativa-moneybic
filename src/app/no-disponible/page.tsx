import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, MapPin } from "lucide-react";

export default function NotAvailablePage() {
  return (
    <div className="container mx-auto px-6 flex items-center justify-center min-h-[75vh] pt-36 pb-20">
      <Card className="glass-card max-w-lg text-center p-8 sm:p-10 border border-white/10 relative overflow-hidden animate-in fade-in duration-700 shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <CardHeader className="flex flex-col items-center gap-4 p-0 pb-6 relative z-10">
          <div className="p-5 rounded-3xl bg-primary/10 text-primary border border-primary/20 shadow-lg">
            <Globe className="h-10 w-10 sm:h-12 sm:w-12" />
          </div>
          <div className="space-y-2">
            <Badge variant="outline" className="badge-text border-primary/40 text-primary bg-primary/10 px-3 py-1">
              Restricción Regional
            </Badge>
            <CardTitle className="text-2xl sm:text-3xl font-extrabold text-white">Servicio no disponible</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 p-0 relative z-10">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Lo sentimos, los servicios financieros de <strong className="text-white">MONEYBIC</strong> actualmente solo están disponibles para usuarios ubicados en <strong className="text-primary">México</strong> y <strong className="text-primary">Ecuador</strong>.
          </p>

          <div className="rounded-2xl bg-secondary/40 border border-white/5 p-4 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span>Cobertura exclusiva autorizada para México y Ecuador</span>
          </div>

          <div className="h-px w-full bg-white/5" />

          <p className="text-xs text-muted-foreground italic">
            Estamos trabajando para expandir nuestra cobertura a más regiones próximamente.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}