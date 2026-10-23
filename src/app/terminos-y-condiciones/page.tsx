import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-6 pt-36 pb-20 space-y-10 animate-in fade-in duration-700 max-w-4xl">
      <div className="flex flex-col gap-4 text-center md:text-left border-b border-white/10 pb-8">
        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
          <Badge variant="outline" className="w-fit badge-text border-primary/40 text-primary bg-primary/10 px-3.5 py-1">
            Términos y Condiciones
          </Badge>
          <Badge variant="secondary" className="w-fit badge-text bg-secondary/80 text-muted-foreground px-3.5 py-1 border border-white/5">
            Versión 1.0
          </Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Términos y Condiciones — MONEYBIC
        </h1>
        <p className="text-muted-foreground text-sm font-medium">Última actualización: Marzo 2026</p>
      </div>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">01</span>
              <span>1. Aceptación de los Términos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Al descargar, instalar o utilizar la aplicación móvil MONEYBIC (en adelante, "la App"), usted acepta quedar vinculado por los presentes Términos y Condiciones de Uso (en adelante, "los Términos"). Si no está de acuerdo con alguno de ellos, deberá abstenerse de usar la App.</p>
            <p className="text-muted-foreground">Estos Términos constituyen un acuerdo legalmente vinculante entre usted y MONEYBIC (en adelante, "la Empresa"), operadora de la plataforma de préstamos personales en línea del mismo nombre, con operación en los Estados Unidos Mexicanos.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">02</span>
              <span>2. Elegibilidad</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Para utilizar los servicios de MONEYBIC usted debe:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li>Ser persona física mexicana mayor de 18 años de edad</li>
              <li>Contar con número de teléfono celular activo en México (+52)</li>
              <li>Poseer una cuenta bancaria o CLABE interbancaria vigente a su nombre</li>
              <li>Tener una identificación oficial vigente (INE, pasaporte u equivalente)</li>
              <li>Contar con un dispositivo Android con acceso a internet y cámara funcional</li>
            </ul>
            <p className="text-xs text-muted-foreground font-semibold text-destructive/90 bg-destructive/10 border border-destructive/20 p-3 rounded-xl">El uso de la App por parte de menores de edad está estrictamente prohibido.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">03</span>
              <span>3. Registro y Cuenta de Usuario</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6 text-white/90 text-sm sm:text-base">
            <div className="space-y-2">
              <h4 className="font-bold text-white">3.1 Creación de cuenta</h4>
              <p className="text-muted-foreground">El registro se realiza mediante su número de teléfono celular, verificado a través de un código de un solo uso (OTP) enviado por SMS. Al registrarse, usted se convierte en titular único de su cuenta.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">3.2 Veracidad de la información</h4>
              <p className="text-muted-foreground">Usted se compromete a proporcionar información veraz, completa y actualizada durante el registro y en cada solicitud de préstamo. Proporcionar datos falsos o documentos apócrifos constituye causa de cancelación inmediata de la cuenta y puede derivar en responsabilidades legales.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">3.3 Seguridad de la cuenta</h4>
              <p className="text-muted-foreground">Usted es responsable de mantener la confidencialidad de su número de teléfono vinculado y de los códigos OTP que reciba. No debe compartir estos datos con terceros. Cualquier operación realizada desde su cuenta se presumirá autorizada por usted.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">04</span>
              <span>4. Descripción del Servicio</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">MONEYBIC facilita préstamos personales en pesos mexicanos (MXN) exclusivamente a través de su aplicación móvil para Android. El servicio incluye:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground marker:text-primary">
              <li>Evaluación y resolución de solicitudes de préstamo</li>
              <li>Desembolso mediante transferencia SPEI a cuenta bancaria registrada</li>
              <li>Seguimiento en tiempo real del estado y montos del préstamo activo</li>
              <li>Generación de CLABE única para pago mediante transferencia interbancaria</li>
              <li>Notificaciones sobre el estado del préstamo</li>
              <li>Opción de renovación para usuarios con historial de pagos favorable</li>
            </ul>
            <p className="text-xs text-muted-foreground italic bg-secondary/40 p-4 rounded-2xl border border-white/5">
              MONEYBIC no es una institución bancaria ni se encuentra sujeta a supervisión de la CNBV como entidad de crédito regulada.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">05</span>
              <span>5. Solicitud y Aprobación de Préstamos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6 text-white/90 text-sm sm:text-base">
            <div className="space-y-2">
              <h4 className="font-bold text-white">5.1 Proceso de solicitud</h4>
              <p className="text-muted-foreground">La solicitud de préstamo requiere completar un formulario de cinco etapas con información personal, de domicilio, referencias, documentos fotográficos y las condiciones del préstamo deseado.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">5.2 Verificación de identidad</h4>
              <p className="text-muted-foreground">Las fotografías de rostro y de identificación oficial son procesadas de forma automatizada para validar la identidad del solicitante. La Empresa se reserva el derecho de rechazar imágenes que no cumplan los estándares de calidad requeridos.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">5.3 Resolución</h4>
              <p className="text-muted-foreground">La Empresa resolverá las solicitudes en un tiempo promedio de 15 a 30 minutos dentro del horario de atención. La aprobación o rechazo es una decisión discrecional de la Empresa y no genera derecho de recurso por parte del Usuario.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">5.4 Monto aprobado</h4>
              <p className="text-muted-foreground">El monto efectivamente aprobado puede ser diferente al solicitado. Los montos disponibles van de $500 a $50,500 MXN.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">06</span>
              <span>6. Condiciones Financieras</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6 text-white/90 text-sm sm:text-base">
            <div className="space-y-2">
              <h4 className="font-bold text-white">6.1 Plazo</h4>
              <p className="text-muted-foreground">El plazo estándar de los préstamos es de 7 días, bajo modalidad de pago semanal.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">6.2 Intereses</h4>
              <p className="text-muted-foreground">La tasa de interés aplicable será informada al Usuario antes del desembolso. El cálculo de intereses inicia a partir de la fecha de desembolso registrada en el sistema.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">6.3 Intereses moratorios</h4>
              <p className="text-muted-foreground">En caso de no realizar el pago en la fecha de vencimiento, se generarán intereses moratorios calculados por día de retraso. El monto total adeudado, incluyendo mora, puede consultarse en todo momento dentro de la App.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">6.4 Condonación de mora</h4>
              <p className="text-muted-foreground">La Empresa podrá, a su exclusiva discreción y sin que constituya un derecho adquirido del Usuario, ofrecer la opción de liquidar el préstamo sin los intereses moratorios acumulados. Esta opción, cuando esté disponible, se presentará dentro de la pantalla de detalles del préstamo.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">07</span>
              <span>7. Desembolso y Pago</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6 text-white/90 text-sm sm:text-base">
            <div className="space-y-2">
              <h4 className="font-bold text-white">7.1 Desembolso</h4>
              <p className="text-muted-foreground">El dinero aprobado se transfiere mediante SPEI a la cuenta bancaria registrada por el Usuario. Los tiempos de acreditación dependen del sistema bancario mexicano y están fuera del control de la Empresa.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">7.2 Pago del préstamo</h4>
              <p className="text-muted-foreground">El pago debe realizarse mediante transferencia SPEI a la CLABE interbancaria generada exclusivamente para cada operación, disponible en la sección "Reembolso" dentro del detalle del préstamo activo.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">7.3 Exactitud del monto</h4>
              <p className="text-muted-foreground">El Usuario debe transferir el monto exacto indicado en la App. Transferencias por montos distintos podrán no reconocerse de forma automática y requerirán gestión adicional con el equipo de atención al cliente.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">7.4 Responsabilidad del pago</h4>
              <p className="text-muted-foreground">La Empresa no se hace responsable por transferencias realizadas a cuentas distintas a las proporcionadas oficialmente dentro de la App.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">08</span>
              <span>8. Obligaciones del Usuario</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">El Usuario se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li>Usar la App únicamente con fines personales y lícitos</li>
              <li>No intentar vulnerar, alterar o manipular la App o sus sistemas de seguridad</li>
              <li>No suplantar la identidad de terceros durante ninguna etapa del proceso</li>
              <li>Mantener sus datos de contacto y bancarios actualizados dentro de la plataforma</li>
              <li>Cumplir puntualmente con los pagos en las fechas acordadas</li>
              <li>No ceder, vender ni compartir su cuenta con terceros</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">09</span>
              <span>9. Conductas Prohibidas</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Queda expresamente prohibido:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li>Solicitar préstamos con información o documentos falsos</li>
              <li>Utilizar la App para actividades ilegales o fraudulentas</li>
              <li>Realizar ingeniería inversa, descompilar o modificar la App</li>
              <li>Intentar acceder a cuentas de otros usuarios</li>
              <li>Usar medios automatizados para interactuar con la App sin autorización expresa</li>
            </ul>
            <p className="text-xs text-muted-foreground italic">El incumplimiento de estas prohibiciones puede derivar en la cancelación inmediata de la cuenta, sin perjuicio de las acciones legales que correspondan.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">10</span>
              <span>10. Suspensión y Cancelación</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">La Empresa podrá suspender o cancelar la cuenta del Usuario en cualquier momento, con o sin previo aviso, en casos de:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li>Incumplimiento de estos Términos</li>
              <li>Proporcionar información falsa o documentos apócrifos</li>
              <li>Actividad fraudulenta o sospecha fundada de la misma</li>
              <li>Incumplimiento reiterado de pagos</li>
            </ul>
            <p className="text-xs text-muted-foreground font-semibold text-destructive/90 bg-destructive/10 border border-destructive/20 p-3 rounded-xl">La cancelación de la cuenta no extingue las obligaciones de pago vigentes al momento de la cancelación.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">11</span>
              <span>11. Propiedad Intelectual</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Todos los elementos de la App —incluyendo marca, logotipo, diseño de interfaz, código fuente y contenidos— son propiedad exclusiva de MONEYBIC y están protegidos por la Ley Federal del Derecho de Autor y demás legislación aplicable. Se prohíbe su reproducción o uso no autorizado.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">12</span>
              <span>12. Limitación de Responsabilidad</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">La Empresa no será responsable por:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li>Interrupciones del servicio atribuibles a terceros proveedores tecnológicos</li>
              <li>Retrasos en transferencias SPEI imputables al sistema bancario</li>
              <li>Pérdida de acceso por extravío o robo del teléfono registrado</li>
              <li>Daños indirectos, incidentales o consecuentes derivados del uso de la App</li>
            </ul>
            <p className="text-xs text-muted-foreground italic bg-secondary/40 p-3 rounded-xl border border-white/5">
              La responsabilidad máxima de la Empresa frente al Usuario, bajo cualquier concepto, no excederá el monto del último préstamo otorgado.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">13</span>
              <span>13. Modificaciones</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">La Empresa se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones se notificarán a través de la App. El uso continuado del servicio tras la notificación implica la aceptación de los Términos actualizados.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">14</span>
              <span>14. Privacidad</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">El tratamiento de los datos personales del Usuario se rige por la Política de Privacidad de MONEYBIC, disponible en la App y en los canales oficiales de la Empresa. Dicha política es parte integral de estos Términos.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">15</span>
              <span>15. Legislación y Jurisdicción</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Estos Términos se rigen por las leyes vigentes en los Estados Unidos Mexicanos. Para cualquier controversia derivada de su interpretación o cumplimiento, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de México, con renuncia expresa a cualquier otro fuero.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">16</span>
              <span>16. Contacto</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Para dudas, aclaraciones o reportes relacionados con estos Términos:</p>
            <div className="bg-secondary/50 p-6 rounded-2xl border border-white/5 space-y-2 text-sm">
              <p><strong className="text-white">Correo:</strong> <a href="mailto:soporte.moneybic@gmail.com" className="text-primary hover:underline font-semibold">soporte.moneybic@gmail.com</a></p>
              <p><strong className="text-white">Teléfono:</strong> <span className="text-white">+524441756903</span></p>
              <p><strong className="text-white">Horario:</strong> Lunes a Domingo, 09:00 – 17:00 hrs</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
