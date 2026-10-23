import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServiceAgreementPage() {
  return (
    <div className="container mx-auto px-6 pt-36 pb-20 space-y-10 animate-in fade-in duration-700 max-w-4xl">
      <div className="flex flex-col gap-4 text-center md:text-left border-b border-white/10 pb-8">
        <Badge variant="outline" className="w-fit badge-text border-primary/40 text-primary bg-primary/10 px-3.5 py-1 mx-auto md:mx-0">
          Términos de Uso
        </Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Acuerdo de Servicio al Usuario
        </h1>
        <p className="text-muted-foreground text-sm font-medium">Última actualización: 19 de marzo de 2026</p>
      </div>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">01</span>
              <span>1. Aceptación del Acuerdo</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">
              Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Faucibus scelerisque eleifend donec pretium vulputate sapien. Id aliquet lectus proin nibh nisl condimentum.
            </p>
            <p className="text-muted-foreground">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">02</span>
              <span>2. Responsabilidades del Usuario</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">
              Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Egestas sed tempus urna et pharetra pharetra massa. Nunc scelerisque viverra mauris in aliquam sem fringilla ut.
            </p>
            <ul className="list-decimal pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</li>
              <li>Aut odit aut fugit, sed quia consequuntur magni dolores eos.</li>
              <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">03</span>
              <span>3. Terminación de Cuenta</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">
              Amet dictum sit amet justo donec enim diam vulputate ut. Nunc sed augue lacus viverra vitae congue eu consequat ac. Massa tincidunt dui ut ornare lectus sit amet est placerat.
            </p>
            <p className="text-muted-foreground">
              Ullamcorper eget nulla facilisi etiam dignissim diam quis. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Cras pulvinar mattis nunc sed blandit libero volutpat sed.
            </p>
          </CardContent>
        </Card>

        <div className="flex justify-center pt-8">
          <button className="pill-button bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-sm font-bold uppercase tracking-wider">
            Acepto los Términos
          </button>
        </div>
      </div>
    </div>
  );
}
