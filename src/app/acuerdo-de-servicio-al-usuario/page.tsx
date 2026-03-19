import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServiceAgreementPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <Badge variant="outline" className="w-fit badge-text border-primary text-primary">
            Términos de Uso
          </Badge>
          <Badge variant="secondary" className="w-fit badge-text bg-secondary/50">
            Versión 1.0
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Acuerdo de Servicio al Usuario</h1>
        <p className="text-muted-foreground">Última actualización: Marzo 2026</p>
      </div>

      <div className="space-y-6 text-secondary-foreground leading-relaxed">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">1. Partes del Acuerdo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>El presente Acuerdo de Servicio al Usuario (en adelante, "el Acuerdo") regula la relación entre:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li><strong>MONEYBIC</strong> (en adelante, "la Empresa", "nosotros"), titular y operadora de la aplicación móvil homónima, y</li>
              <li><strong>El Usuario</strong> (en adelante, "usted"), persona física mayor de edad que descarga, instala y utiliza la aplicación MONEYBIC en un dispositivo Android.</li>
            </ul>
            <p>Al aceptar este Acuerdo mediante la casilla de consentimiento en la pantalla de inicio de sesión, usted declara haber leído, comprendido y aceptado todos los términos aquí establecidos. Si no está de acuerdo, no utilice la aplicación.</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">2. Descripción del Servicio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>MONEYBIC es una plataforma digital de préstamos personales en línea que opera exclusivamente en los Estados Unidos Mexicanos, disponible únicamente para dispositivos con sistema operativo Android. A través de la aplicación, usted puede:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>Solicitar préstamos personales en pesos mexicanos (MXN)</li>
              <li>Consultar el estado y el historial de sus préstamos</li>
              <li>Recibir notificaciones sobre el estado de la solicitud y préstamo</li>
              <li>Realizar el pago de su préstamo mediante transferencia SPEI a una CLABE única generada para cada operación</li>
              <li>Solicitar la renovación de préstamos (cuando sea elegible)</li>
            </ul>
            <p className="italic text-muted-foreground text-sm">MONEYBIC no es una institución bancaria ni una entidad de crédito regulada por la Comisión Nacional Bancaria y de Valores (CNBV).</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">3. Requisitos para Usar el Servicio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Para registrarse y solicitar préstamos a través de MONEYBIC, usted debe:</p>
            <ul className="list-decimal pl-6 space-y-2 marker:text-primary">
              <li>Ser persona física mexicana mayor de 18 años</li>
              <li>Contar con un número de teléfono celular activo en México (+52)</li>
              <li>Poseer una cuenta bancaria o CLABE interbancaria vigente a su nombre</li>
              <li>Contar con una identificación oficial vigente (INE, pasaporte u equivalente)</li>
              <li>Disponer de un dispositivo Android con acceso a internet y cámara funcional</li>
              <li>Proporcionar información veraz, completa y actualizada</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">4. Proceso de Solicitud de Préstamo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">4.1 Registro y Verificación de Identidad</h4>
              <p>El proceso de solicitud requiere completar un formulario de cinco etapas: Datos personales, Residencia, Referencias personales, Archivos de verificación (selfie y ID) y Configuración del préstamo.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">4.2 Validación de Imágenes</h4>
              <p>Las fotografías son procesadas automáticamente para verificar autenticidad y claridad. Si no superan la validación, el sistema solicitará repetirlas.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">4.3 Revisión y Resolución</h4>
              <p>Nuestro equipo revisará y notificará la decisión en 15-30 minutos dentro del horario de atención (Lunes a Domingo, 09:00 – 17:00 hrs).</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">5. Condiciones del Préstamo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li><strong>Montos:</strong> De $500 MXN hasta $50,500 MXN</li>
              <li><strong>Plazo:</strong> Estándar de 7 días (modalidad semanal)</li>
              <li><strong>Desembolso:</strong> Vía SPEI a la cuenta bancaria registrada</li>
              <li><strong>Intereses:</strong> Consultables en tiempo real en la sección "Préstamos"</li>
              <li><strong>Mora:</strong> Generación de intereses moratorios diarios tras el vencimiento</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">6. Proceso de Pago</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>El pago se realiza exclusivamente mediante transferencia SPEI a una CLABE única generada vía Conekta. No realice pagos a cuentas no proporcionadas oficialmente dentro de la aplicación.</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">7. Renovación de Préstamo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Tras liquidar su préstamo, podrá ser elegible para la opción "Renueva en 1 clic". La elegibilidad es determinada exclusivamente por la Empresa según su historial.</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">8. Obligaciones del Usuario</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>Proporcionar información verdadera</li>
              <li>No compartir su código OTP</li>
              <li>Pagar en la fecha acordada</li>
              <li>No intentar manipular el sistema</li>
              <li>No suplantar identidades</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">9. Obligaciones de MONEYBIC</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>Informar claramente cargos y plazos</li>
              <li>Procesar solicitudes en los tiempos indicados</li>
              <li>Garantizar confidencialidad según la Política de Privacidad</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">10. Limitación de Responsabilidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>MONEYBIC no será responsable por interrupciones de terceros, fallas bancarias o pérdida de acceso por robo de dispositivo. La responsabilidad total no excederá el monto del último préstamo.</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">11-14. Propiedad, Notificaciones y Privacidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Todos los contenidos son propiedad de la Empresa. Al usar la app, acepta recibir notificaciones push de estado. El tratamiento de datos se rige por la Política de Privacidad integral.</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">15-17. Contacto y Jurisdicción</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Para controversias, las partes se someten a la jurisdicción de los tribunales de la Ciudad de México. Cualquier modificación será notificada vía app.</p>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p><strong>Contacto:</strong></p>
              <p>Email: contacto@moneybic.com</p>
              <p>Tel: 098 999 9999</p>
              <p>Horario: Lun - Dom, 09:00 – 17:00 hrs</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center py-8 border-t border-white/5">
        <p className="text-primary font-bold">MONEYBIC — Todos los derechos reservados — México, 2026</p>
      </div>
    </div>
  );
}
