import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CancellationPolicyPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <Badge variant="outline" className="w-fit badge-text border-primary text-primary">
            Información Legal
          </Badge>
          <Badge variant="secondary" className="w-fit badge-text bg-secondary/50">
            Versión 1.0
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Política de Cancelaciones y Reembolsos — MONEYBIC</h1>
        <p className="text-muted-foreground">Última actualización: Marzo 2026</p>
      </div>

      <div className="space-y-6 text-secondary-foreground leading-relaxed">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">1. Cancelación de Solicitud de Préstamo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">1.1 Antes del desembolso</h4>
              <p>Si su solicitud de préstamo ha sido aprobada pero el dinero aún no ha sido transferido a su cuenta bancaria, puede solicitar la cancelación contactando al equipo de atención al cliente dentro del horario de servicio:</p>
              <ul className="list-none pl-4 space-y-1">
                <li><strong>Correo:</strong> miguelclaudia2711@gmail.com</li>
                <li><strong>Teléfono / WhatsApp:</strong> +524441757065</li>
                <li><strong>Horario:</strong> Lunes a Domingo, 09:00 – 17:00 hrs (hora del Centro de México)</li>
              </ul>
              <p>En este supuesto no se generará ningún cargo ni interés a su cargo.</p>
            </div>
            <div className="space-y-2 pt-2">
              <h4 className="font-bold text-foreground">1.2 Después del desembolso</h4>
              <p>Una vez que el dinero ha sido transferido a su cuenta bancaria, el préstamo está activo y no puede cancelarse. Usted deberá liquidarlo conforme a las condiciones acordadas (monto, plazo e intereses).</p>
              <p>Si desea liquidar el préstamo anticipadamente, puede hacerlo en cualquier momento sin penalización. El monto a pagar será el capital más los intereses generados hasta la fecha del pago anticipado, sin cargos adicionales por liquidación temprana.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">2. Solicitudes Rechazadas</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Si su solicitud de préstamo es rechazada, no se realizará ningún cargo. No existe deuda ni obligación de pago de ningún tipo. Podrá presentar una nueva solicitud en el futuro.</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">3. Pagos: Monto Exacto Requerido</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>El sistema de MONEYBIC únicamente puede reconocer y acreditar de forma automática los pagos que coincidan exactamente con el monto indicado en la aplicación al momento de generar la CLABE de pago.</p>
            <p>Usted debe transferir el monto exacto que indique la app. Si su pago es menor o mayor al indicado, el sistema no podrá acreditarlo automáticamente y deberá ponerse en contacto con el equipo de soporte de MONEYBIC para que el área correspondiente gestione su caso de forma manual.</p>
            <p>MONEYBIC cuenta con un módulo interno de gestión de pagos donde el equipo de soporte puede visualizar y verificar todos los pagos recibidos, incluyendo aquellos con montos incorrectos. Ningún pago se perderá, pero su resolución requiere intervención manual y está sujeta a los plazos indicados en la sección 6 de esta política.</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">4. Reembolsos por Pagos Erróneos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">4.1 Pago duplicado</h4>
              <p>Si por error realizó dos transferencias para el mismo préstamo, contacte de inmediato a nuestro equipo de atención al cliente con:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-primary">
                <li>Comprobante(s) de transferencia</li>
                <li>Número de teléfono registrado en la app</li>
                <li>Descripción del error</li>
              </ul>
              <p>El monto en exceso será revisado y, de confirmarse el pago duplicado, se gestionará su devolución dentro de un plazo de 5 a 10 días hábiles, por el mismo medio de pago siempre que sea posible.</p>
            </div>
            <div className="space-y-2 pt-2">
              <h4 className="font-bold text-foreground">4.2 Pago por monto incorrecto</h4>
              <p>Si transfirió un monto distinto al indicado en la app, no intente realizar un segundo pago sin antes comunicarse con soporte.</p>
            </div>
            <div className="space-y-2 pt-2">
              <h4 className="font-bold text-foreground">4.3 Pago a una CLABE incorrecta o no oficial</h4>
              <p>MONEYBIC no se hace responsable por transferencias realizadas a cuentas distintas a la CLABE generada oficialmente dentro de la app en la sección "Reembolso". Le recomendamos siempre copiar la CLABE directamente desde la aplicación y verificarla antes de confirmar su transferencia.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">5. Condonación de Intereses Moratorios</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Si usted acumula días de atraso en su pago, MONEYBIC podrá ofrecer —a su exclusiva discreción— la opción de liquidar el préstamo sin los intereses generados por mora. Esta opción, cuando esté disponible, aparecerá directamente en la pantalla de detalles de su préstamo activo dentro de la app.</p>
            <p>La condonación no es un derecho adquirido y su disponibilidad puede variar caso por caso.</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">6. Cómo Presentar una Solicitud</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Para cualquier gestión relacionada con esta política, contáctenos a través de los siguientes canales:</p>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 space-y-1">
              <p><strong>Correo electrónico:</strong> miguelclaudia2711@gmail.com</p>
              <p><strong>Teléfono / WhatsApp:</strong> +524441757065</p>
              <p><strong>Horario de atención:</strong> Lunes a Domingo, 09:00 – 17:00 hrs (hora del Centro de México)</p>
            </div>
            <p>Al contactarnos, proporcione:</p>
            <ul className="list-disc pl-6 space-y-1 marker:text-primary">
              <li>Su nombre completo y número de teléfono registrado en la app</li>
              <li>Descripción clara de la situación</li>
              <li>Comprobante de transferencia (cuando aplique)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">7. Modificaciones a esta Política</CardTitle>
          </CardHeader>
          <CardContent>
            <p>MONEYBIC se reserva el derecho de actualizar esta política en cualquier momento. Los cambios serán notificados a través de la app. El uso continuado del servicio tras la notificación implica la aceptación de la versión vigente.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
