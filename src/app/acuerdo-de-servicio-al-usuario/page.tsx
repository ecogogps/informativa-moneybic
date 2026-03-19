import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServiceAgreementPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <Badge variant="outline" className="w-fit badge-text border-primary text-primary mx-auto md:mx-0">
          Términos de Uso
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Acuerdo de Servicio al Usuario</h1>
        <p className="text-muted-foreground">Última actualización: 19 de marzo de 2026</p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">1. Aceptación del Acuerdo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-secondary-foreground leading-relaxed">
          <p>
            Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Faucibus scelerisque eleifend donec pretium vulputate sapien. Id aliquet lectus proin nibh nisl condimentum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">2. Responsabilidades del Usuario</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-secondary-foreground leading-relaxed">
          <p>
            Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Egestas sed tempus urna et pharetra pharetra massa. Nunc scelerisque viverra mauris in aliquam sem fringilla ut.
          </p>
          <ul className="list-decimal pl-6 space-y-2 marker:text-primary">
            <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</li>
            <li>Aut odit aut fugit, sed quia consequuntur magni dolores eos.</li>
            <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">3. Terminación de Cuenta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-secondary-foreground leading-relaxed">
          <p>
            Amet dictum sit amet justo donec enim diam vulputate ut. Nunc sed augue lacus viverra vitae congue eu consequat ac. Massa tincidunt dui ut ornare lectus sit amet est placerat.
          </p>
          <p>
            Ullamcorper eget nulla facilisi etiam dignissim diam quis. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Cras pulvinar mattis nunc sed blandit libero volutpat sed.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
