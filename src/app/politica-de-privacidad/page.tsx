import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <Badge variant="outline" className="w-fit badge-text border-primary text-primary mx-auto md:mx-0">
          Información Legal
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Política de Privacidad</h1>
        <p className="text-muted-foreground">Última actualización: 19 de marzo de 2026</p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">1. Recolección de Datos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-secondary-foreground leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          </p>
          <p>
            Curabitur a felis in nunc fringilla tristique. Morbi sed nulla ac est cursus suscipit eu ac lectus. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
          </p>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">2. Uso de la Información</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-secondary-foreground leading-relaxed">
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-primary">
            <li>Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</li>
            <li>Quisque sit amet est et sapien ullamcorper pharetra. </li>
            <li>Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">3. Protección de Datos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-secondary-foreground leading-relaxed">
          <p>
            Curabitur a felis in nunc fringilla tristique. Morbi sed nulla ac est cursus suscipit eu ac lectus. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
