import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <Badge variant="outline" className="w-fit badge-text border-primary text-primary">
            Política de Privacidad
          </Badge>
          <Badge variant="secondary" className="w-fit badge-text bg-secondary/50">
            Versión 1.0
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Política de Privacidad — MONEYBIC</h1>
        <p className="text-muted-foreground">Última actualización: Marzo 2026</p>
      </div>

      <div className="space-y-6 text-secondary-foreground leading-relaxed">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">1. Responsable del Tratamiento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              MONEYBIC es responsable del tratamiento de los datos personales que usted proporciona a través de la aplicación móvil MONEYBIC, disponible para dispositivos Android, con operación en los Estados Unidos Mexicanos.
            </p>
            <p>Contacto del responsable:</p>
            <ul className="list-none space-y-2">
              <li><strong>Correo:</strong> <a href="mailto:miguelclaudia2711@gmail.com" className="text-primary hover:underline">miguelclaudia2711@gmail.com</a></li>
              <li><strong>Teléfono:</strong> +524441757065</li>
              <li><strong>Horario:</strong> Lunes a Domingo, 09:00 – 17:00 hrs</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">2. Marco Legal</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              El tratamiento de sus datos personales se rige por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y los Lineamientos del Aviso de Privacidad emitidos por el INAI, vigentes en México.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">3. Datos Personales que Recopilamos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.1 Identificación y contacto</h4>
              <p>Nombre completo, fecha de nacimiento, género, número de documento de identidad (INE / pasaporte), número de teléfono celular, correo electrónico, estado civil y nivel de estudios.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.2 Domicilio</h4>
              <p>Dirección completa, estado, municipio o ciudad y tipo de vivienda.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.3 Financieros y bancarios</h4>
              <p>Nombre del banco, número de cuenta o CLABE interbancaria, monto solicitado, plazo, historial de préstamos dentro de la plataforma e información sobre pagos realizados.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.4 Referencias personales</h4>
              <p>Nombre completo, número de teléfono y relación de dos personas de contacto proporcionadas por usted durante la solicitud.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.5 Datos biométricos e imágenes</h4>
              <p>Fotografía de rostro (selfie) capturada con la cámara frontal del dispositivo, fotografía frontal y trasera de identificación oficial, y comprobante de desembolso cuando aplique.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.6 Datos del dispositivo</h4>
              <p>Identificador de dispositivo para el envío de notificaciones push (gestionado por OneSignal) e información de sesión y autenticación.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.7 Datos sensibles</h4>
              <p>Las fotografías de rostro y de identificación oficial son consideradas datos personales sensibles en términos del artículo 3, fracción VI de la LFPDPPP. Su tratamiento requiere su consentimiento expreso, el cual usted otorga al aceptar esta Política y al cargar dichas imágenes en la App.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">4. Finalidades del Tratamiento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">Finalidades primarias (indispensables para el servicio)</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Verificar su identidad y prevenir el fraude mediante validación automatizada de rostro y documento oficial</li>
                <li>Evaluar y procesar su solicitud de préstamo</li>
                <li>Gestionar el desembolso vía transferencia SPEI con CLABE generada a través de Conekta</li>
                <li>Administrar el cobro, seguimiento de pagos y cálculo de intereses y mora</li>
                <li>Enviar notificaciones sobre el estado de su solicitud y préstamo activo</li>
                <li>Permitir la renovación de préstamos para usuarios elegibles</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">Finalidades secundarias (puede oponerse)</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Enviarle comunicaciones sobre nuevos productos o promociones de MONEYBIC</li>
                <li>Realizar análisis estadísticos internos sobre el comportamiento de la cartera</li>
              </ul>
              <p className="mt-2 italic">
                Para oponerse a las finalidades secundarias, envíe un correo a miguelclaudia2711@gmail.com con el asunto: "Oposición a finalidades secundarias".
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">5. Transferencia de Datos a Terceros</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Para operar el servicio compartimos datos con los siguientes proveedores:</p>
            <div className="rounded-md border border-white/10 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="text-primary font-bold">Proveedor</TableHead>
                    <TableHead className="text-primary font-bold">Finalidad</TableHead>
                    <TableHead className="text-primary font-bold text-right">País</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Supabase</TableCell>
                    <TableCell>Base de datos, almacenamiento de archivos y autenticación OTP</TableCell>
                    <TableCell className="text-right">Estados Unidos</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Conekta / STP</TableCell>
                    <TableCell>Generación de CLABE para pagos SPEI</TableCell>
                    <TableCell className="text-right">México</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">OneSignal</TableCell>
                    <TableCell>Envío de notificaciones push al dispositivo</TableCell>
                    <TableCell className="text-right">Estados Unidos</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="mt-4">
              Estas transferencias son necesarias para la relación jurídica con usted y operan bajo el artículo 37 de la LFPDPPP. No vendemos, arrendamos ni cedemos sus datos a terceros con fines comerciales propios.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">6. Seguridad y Almacenamiento</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Sus datos se almacenan en los servidores de Supabase con cifrado en tránsito (TLS) y en reposo. Los archivos e imágenes se guardan en almacenamiento privado con acceso controlado por tokens de sesión. Aplicamos medidas técnicas y organizativas razonables para proteger su información.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">7. Conservación de Datos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Sus datos se conservarán durante el tiempo que mantenga una relación activa con MONEYBIC y hasta por 5 años adicionales tras la conclusión del último préstamo, en cumplimiento de obligaciones fiscales, contables y de prevención de lavado de dinero conforme a la legislación mexicana.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">8. Permisos del Dispositivo Android</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cámara:</strong> Para capturar la selfie y las imágenes de su identificación oficial. Las imágenes se procesan para verificar identidad y se almacenan de forma segura.</li>
              <li><strong>Contactos:</strong> Para facilitar el ingreso de referencias personales importando datos de su agenda. No almacenamos su agenda completa.</li>
              <li><strong>Notificaciones:</strong> Para enviarle alertas sobre el estado de su préstamo a través de OneSignal.</li>
            </ul>
            <p>Puede revocar estos permisos desde la configuración de su dispositivo. Hacerlo puede limitar el funcionamiento de algunas funciones de la App.</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">9. Derechos ARCO</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>Usted tiene derecho a ejercer en cualquier momento los siguientes derechos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted y cómo los tratamos</li>
              <li><strong>Rectificación:</strong> Solicitar corrección de datos inexactos o incompletos</li>
              <li><strong>Cancelación:</strong> Pedir la supresión de sus datos cuando ya no sean necesarios</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento para finalidades secundarias o cuando exista causa legítima</li>
            </ul>
            
            <div className="bg-muted/30 p-6 rounded-lg border border-white/5 space-y-4">
              <h4 className="font-bold text-foreground underline underline-offset-4">Cómo ejercer sus derechos ARCO</h4>
              <p>Envíe su solicitud a <a href="mailto:miguelclaudia2711@gmail.com" className="text-primary hover:underline">miguelclaudia2711@gmail.com</a> indicando:</p>
              <ul className="list-decimal pl-6 space-y-1">
                <li>Nombre completo y número de teléfono registrado en la App</li>
                <li>Derecho que desea ejercer</li>
                <li>Descripción clara de su solicitud</li>
                <li>Copia de identificación oficial</li>
              </ul>
              <p>Responderemos en un plazo máximo de 20 días hábiles.</p>
              <p className="text-sm italic">
                Si considera que sus derechos han sido vulnerados, puede presentar una queja ante el INAI en <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.inai.org.mx</a>.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">10. Eliminación de Cuenta</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Puede solicitar la eliminación de su cuenta desde la sección Perfil de la App. Al confirmar la eliminación:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Su sesión se cerrará de forma inmediata</li>
              <li>Sus datos personales serán marcados para supresión</li>
              <li>La eliminación definitiva se realizará dentro de los plazos de conservación legal aplicables</li>
            </ul>
            <p className="font-bold text-destructive/80">
              La eliminación no procederá si usted tiene un préstamo activo o saldo pendiente de pago.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">11. Tecnologías de Seguimiento</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              La App no utiliza cookies de navegador. Utiliza identificadores de dispositivo a través de OneSignal con el único fin de entregar notificaciones personalizadas relacionadas con su cuenta.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">12. Modificaciones</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Nos reservamos el derecho de actualizar esta Política en cualquier momento. Los cambios sustanciales serán notificados a través de la App. El uso continuado del servicio implica la aceptación de la versión vigente.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">13. Consentimiento</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Al registrarse en MONEYBIC, marcar la casilla de aceptación y utilizar la App, usted declara haber leído, comprendido y aceptado esta Política de Privacidad, incluyendo el tratamiento de sus datos sensibles.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
