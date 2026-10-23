import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CancellationPolicyPage() {
  return (
    <div className="container mx-auto px-6 pt-36 pb-20 space-y-10 animate-in fade-in duration-700 max-w-4xl">
      <div className="flex flex-col gap-4 text-center md:text-left border-b border-white/10 pb-8">
        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
          <Badge variant="outline" className="w-fit badge-text border-primary/40 text-primary bg-primary/10 px-3.5 py-1">
            Información Legal
          </Badge>
          <Badge variant="secondary" className="w-fit badge-text bg-secondary/80 text-muted-foreground px-3.5 py-1 border border-white/5">
            Versión 1.0
          </Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Política de Cancelaciones y Reembolsos — MONEYBIC
        </h1>
        <p className="text-muted-foreground text-sm font-medium">Última actualización: Marzo 2026</p>
      </div>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">01</span>
              <span>1. Cancelación de Solicitud de Préstamo</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <div className="space-y-2">
              <h4 className="font-bold text-white">1.1 Antes del desembolso</h4>
              <p className="text-muted-foreground">Si su solicitud de préstamo ha sido aprobada pero el dinero aún no ha sido transferido a su cuenta bancaria, puede solicitar la cancelación contactando al equipo de atención al cliente dentro del horario de servicio:</p>
              <div className="bg-secondary/50 p-4 rounded-2xl border border-white/5 space-y-1 text-sm text-muted-foreground">
                <p><strong className="text-white">Correo:</strong> <a href="mailto:soporte.moneybic@gmail.com" className="text-primary hover:underline font-medium">soporte.moneybic@gmail.com</a></p>
                <p><strong className="text-white">Teléfono / WhatsApp:</strong> <span className="text-white">+524441756903</span></p>
                <p><strong className="text-white">Horario:</strong> Lunes a Domingo, 09:00 – 17:00 hrs (hora del Centro de México)</p>
              </div>
              <p className="text-xs text-primary font-semibold">En este supuesto no se generará ningún cargo ni interés a su cargo.</p>
            </div>
            <div className="space-y-2 pt-3 border-t border-white/5">
              <h4 className="font-bold text-white">1.2 Después del desembolso</h4>
              <p className="text-muted-foreground">Una vez que el dinero ha sido transferido a su cuenta bancaria, el préstamo está activo y no puede cancelarse. Usted deberá liquidarlo conforme a las condiciones acordadas (monto, plazo e intereses).</p>
              <p className="text-muted-foreground">Si desea liquidar el préstamo anticipadamente, puede hacerlo en cualquier momento sin penalización. El monto a pagar será el capital más los intereses generados hasta la fecha del pago anticipado, sin cargos adicionales por liquidación temprana.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">02</span>
              <span>2. Solicitudes Rechazadas</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Si su solicitud de préstamo es rechazada, no se realizará ningún cargo. No existe deuda ni obligación de pago de ningún tipo. Podrá presentar una nueva solicitud en el futuro.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">03</span>
              <span>3. Pagos: Monto Exacto Requerido</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">El sistema de MONEYBIC únicamente puede reconocer y acreditar de forma automática los pagos que coincidan exactamente con el monto indicado en la aplicación al momento de generar la CLABE de pago.</p>
            <p className="text-muted-foreground">Usted debe transferir el monto exacto que indique la app. Si su pago es menor o mayor al indicado, el sistema no podrá acreditarlo automáticamente y deberá ponerse en contacto con el equipo de soporte de MONEYBIC para que el área correspondiente gestione su caso de forma manual.</p>
            <p className="text-muted-foreground text-xs italic bg-secondary/40 p-4 rounded-2xl border border-white/5">
              MONEYBIC cuenta con un módulo interno de gestión de pagos donde el equipo de soporte puede visualizar y verificar todos los pagos recibidos, incluyendo aquellos con montos incorrectos. Ningún pago se perderá, pero su resolución requiere intervención manual y está sujeta a los plazos indicados en la sección 6 de esta política.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">04</span>
              <span>4. Reembolsos por Pagos Erróneos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <div className="space-y-2">
              <h4 className="font-bold text-white">4.1 Pago duplicado</h4>
              <p className="text-muted-foreground">Si por error realizó dos transferencias para el mismo préstamo, contacte de inmediato a nuestro equipo de atención al cliente con:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground marker:text-primary">
                <li>Comprobante(s) de transferencia</li>
                <li>Número de teléfono registrado en la app</li>
                <li>Descripción del error</li>
              </ul>
              <p className="text-muted-foreground">El monto en exceso será revisado y, de confirmarse el pago duplicado, se gestionará su devolución dentro de un plazo de 5 a 10 días hábiles, por el mismo medio de pago siempre que sea posible.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">4.2 Pago por monto incorrecto</h4>
              <p className="text-muted-foreground">Si transfirió un monto distinto al indicado en la app, no intente realizar un segundo pago sin antes comunicarse con soporte.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">4.3 Pago a una CLABE incorrecta o no oficial</h4>
              <p className="text-muted-foreground">MONEYBIC no se hace responsable por transferencias realizadas a cuentas distintas a la CLABE generada oficialmente dentro de la app en la sección "Reembolso". Le recomendamos siempre copiar la CLABE directamente desde la aplicación y verificarla antes de confirmar su transferencia.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">05</span>
              <span>5. Condonación de Intereses Moratorios</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Si usted acumula días de atraso en su pago, MONEYBIC podrá ofrecer —a su exclusiva discreción— la opción de liquidar el préstamo sin los intereses generados por mora. Esta opción, cuando esté disponible, aparecerá directamente en la pantalla de detalles de su préstamo activo dentro de la app.</p>
            <p className="text-xs text-muted-foreground italic pt-2">La condonación no es un derecho adquirido y su disponibilidad puede variar caso por caso.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">06</span>
              <span>6. Cómo Presentar una Solicitud</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Para cualquier gestión relacionada con esta política, contáctenos a través de los siguientes canales:</p>
            <div className="bg-secondary/50 p-6 rounded-2xl border border-white/5 space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-white">Correo electrónico:</strong> <a href="mailto:soporte.moneybic@gmail.com" className="text-primary hover:underline font-semibold">soporte.moneybic@gmail.com</a></p>
              <p><strong className="text-white">Teléfono / WhatsApp:</strong> <span className="text-white">+524441756903</span></p>
              <p><strong className="text-white">Horario de atención:</strong> Lunes a Domingo, 09:00 – 17:00 hrs (hora del Centro de México)</p>
            </div>
            <p className="text-muted-foreground">Al contactarnos, proporcione:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground marker:text-primary">
              <li>Su nombre completo y número de teléfono registrado en la app</li>
              <li>Descripción clara de la situación</li>
              <li>Comprobante de transferencia (cuando aplique)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">07</span>
              <span>7. Modificaciones a esta Política</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">MONEYBIC se reserva el derecho de actualizar esta política en cualquier momento. Los cambios serán notificados a través de la app. El uso continuado del servicio tras la notificación implica la aceptación de la versión vigente.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
