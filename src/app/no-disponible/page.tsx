import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

export default function NotAvailablePage() {
  return (
    <div className="container mx-auto px-6 flex items-center justify-center min-h-[70vh] py-20">
      <Card className="glass-card max-w-md text-center p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <CardHeader className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-full bg-primary/10 text-primary">
            <Globe className="h-12 w-12" />
          </div>
          <div className="space-y-2">
            <Badge variant="outline" className="badge-text border-primary text-primary">
              Restricción Regional
            </Badge>
            <CardTitle className="text-2xl font-bold">Servicio no disponible</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Lo sentimos, los servicios financieros de <strong>MONEYBIC</strong> actualmente solo están disponibles para usuarios ubicados en <strong>México</strong> y <strong>Ecuador</strong>.
          </p>
          <div className="h-px w-full bg-white/5 my-4" />
          <p className="text-sm text-muted-foreground italic">
            Estamos trabajando para expandir nuestra cobertura a más regiones próximamente.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}