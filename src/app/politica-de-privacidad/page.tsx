import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShieldCheck, Mail, Phone, Clock, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-6 pt-36 pb-20 space-y-10 animate-in fade-in duration-700 max-w-4xl">
      {/* Header Banner */}
      <div className="flex flex-col gap-4 text-center md:text-left border-b border-white/10 pb-8">
        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
          <Badge variant="outline" className="w-fit badge-text border-primary/40 text-primary bg-primary/10 px-3.5 py-1">
            Política de Privacidad
          </Badge>
          <Badge variant="secondary" className="w-fit badge-text bg-secondary/80 text-muted-foreground px-3.5 py-1 border border-white/5">
            Versión 1.0
          </Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Política de Privacidad — MONEYBIC
        </h1>
        <p className="text-muted-foreground text-sm font-medium">Última actualización: Marzo 2026</p>
      </div>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        {/* Section 1 */}
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">01</span>
              <span>1. Responsable del Tratamiento</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p>
              MONEYBIC es responsable del tratamiento de los datos personales que usted proporciona a través de la aplicación móvil MONEYBIC, disponible para dispositivos Android, con operación en los Estados Unidos Mexicanos.
            </p>
            <div className="rounded-2xl bg-secondary/50 border border-white/5 p-4 sm:p-5 space-y-2 text-sm">
              <p className="font-bold text-white text-xs uppercase tracking-wider text-primary">Contacto del responsable:</p>
              <ul className="space-y-1.5 text-muted-foreground">
                <li><strong className="text-white">Correo:</strong> <a href="mailto:soporte.moneybic@gmail.com" className="text-primary hover:underline font-medium">soporte.moneybic@gmail.com</a></li>
                <li><strong className="text-white">Teléfono:</strong> <span className="text-white">+524441756903</span></li>
                <li><strong className="text-white">Horario:</strong> Lunes a Domingo, 09:00 – 17:00 hrs</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 */}
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">02</span>
              <span>2. Marco Legal</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p>
              El tratamiento de sus datos personales se rige por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y los Lineamientos del Aviso de Privacidad emitidos por el INAI, vigentes en México.
            </p>
          </CardContent>
        </Card>

        {/* Section 3 */}
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">03</span>
              <span>3. Datos Personales que Recopilamos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6 text-white/90 text-sm sm:text-base">
            <div className="space-y-1.5">
              <h4 className="font-bold text-white">3.1 Identificación y contacto</h4>
              <p className="text-muted-foreground">Nombre completo, fecha de nacimiento, género, número de documento de identidad (INE / pasaporte), número de teléfono celular, correo electrónico, estado civil y nivel de estudios.</p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white">3.2 Domicilio</h4>
              <p className="text-muted-foreground">Dirección completa, estado, municipio o ciudad y tipo de vivienda.</p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white">3.3 Financieros y bancarios</h4>
              <p className="text-muted-foreground">Nombre del banco, número de cuenta o CLABE interbancaria, monto solicitado, plazo, historial de préstamos dentro de la plataforma e información sobre pagos realizados.</p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white">3.4 Referencias personales</h4>
              <p className="text-muted-foreground">Nombre completo, número de teléfono y relación de dos personas de contacto proporcionadas por usted durante la solicitud.</p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white">3.5 Datos biométricos e imágenes</h4>
              <p className="text-muted-foreground">Fotografía de rostro (selfie) capturada con la cámara frontal del dispositivo, fotografía frontal y trasera de identificación oficial, y comprobante de desembolso cuando aplique.</p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white">3.6 Datos del dispositivo</h4>
              <p className="text-muted-foreground">Identificador de dispositivo para el envío de notificaciones push (gestionado por OneSignal) e información de sesión y autenticación.</p>
            </div>
            <div className="space-y-1.5 p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <h4 className="font-bold text-primary">3.7 Datos sensibles</h4>
              <p className="text-white/90">Las fotografías de rostro y de identificación oficial son consideradas datos personales sensibles en términos del artículo 3, fracción VI de la LFPDPPP. Su tratamiento requiere su consentimiento expreso, el cual usted otorga al aceptar esta Política y al cargar dichas imágenes en la App.</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 */}
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">04</span>
              <span>4. Finalidades del Tratamiento</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6 text-white/90 text-sm sm:text-base">
            <div className="space-y-2">
              <h4 className="font-bold text-white">Finalidades primarias (indispensables para el servicio)</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground marker:text-primary">
                <li>Verificar su identidad y prevenir el fraude mediante validación automatizada de rostro y documento oficial</li>
                <li>Evaluar y procesar su solicitud de préstamo</li>
                <li>Gestionar el desembolso vía transferencia SPEI con CLABE generada a través de Conekta</li>
                <li>Administrar el cobro, seguimiento de pagos y cálculo de intereses y mora</li>
                <li>Enviar notificaciones sobre el estado de su solicitud y préstamo activo</li>
                <li>Permitir la renovación de préstamos para usuarios elegibles</li>
              </ul>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">Finalidades secundarias (puede oponerse)</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground marker:text-primary">
                <li>Enviarle comunicaciones sobre nuevos productos o promociones de MONEYBIC</li>
                <li>Realizar análisis estadísticos internos sobre el comportamiento de la cartera</li>
              </ul>
              <p className="mt-2 text-xs text-muted-foreground italic bg-secondary/40 p-3 rounded-xl border border-white/5">
                Para oponerse a las finalidades secundarias, envíe un correo a soporte.moneybic@gmail.com con el asunto: "Oposición a finalidades secundarias".
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 */}
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">05</span>
              <span>5. Transferencia de Datos a Terceros</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Para operar el servicio compartimos datos con los siguientes proveedores:</p>
            <div className="rounded-2xl border border-white/10 overflow-hidden bg-secondary/30">
              <Table>
                <TableHeader className="bg-secondary/70">
                  <TableRow className="border-b border-white/10">
                    <TableHead className="text-primary font-bold">Proveedor</TableHead>
                    <TableHead className="text-primary font-bold">Finalidad</TableHead>
                    <TableHead className="text-primary font-bold text-right">País</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-white/5">
                    <TableCell className="font-semibold text-white">Supabase</TableCell>
                    <TableCell className="text-muted-foreground">Base de datos, almacenamiento de archivos y autenticación OTP</TableCell>
                    <TableCell className="text-right text-muted-foreground">Estados Unidos</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-white/5">
                    <TableCell className="font-semibold text-white">Conekta / STP</TableCell>
                    <TableCell className="text-muted-foreground">Generación de CLABE para pagos SPEI</TableCell>
                    <TableCell className="text-right text-muted-foreground">México</TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell className="font-semibold text-white">OneSignal</TableCell>
                    <TableCell className="text-muted-foreground">Envío de notificaciones push al dispositivo</TableCell>
                    <TableCell className="text-right text-muted-foreground">Estados Unidos</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="mt-4 text-muted-foreground text-sm">
              Estas transferencias son necesarias para la relación jurídica con usted y operan bajo el artículo 37 de la LFPDPPP. No vendemos, arrendamos ni cedemos sus datos a terceros con fines comerciales propios.
            </p>
          </CardContent>
        </Card>

        {/* Section 6 */}
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">06</span>
              <span>6. Seguridad y Almacenamiento</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">
              Sus datos se almacenan en los servidores de Supabase con cifrado en tránsito (TLS) y en reposo. Los archivos e imágenes se guardan en almacenamiento privado con acceso controlado por tokens de sesión. Aplicamos medidas técnicas y organizativas razonables para proteger su información.
            </p>
          </CardContent>
        </Card>

        {/* Section 7 */}
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">07</span>
              <span>7. Conservación de Datos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">
              Sus datos se conservarán durante el tiempo que mantenga una relación activa con MONEYBIC y hasta por 5 años adicionales tras la conclusión del último préstamo, en cumplimiento de obligaciones fiscales, contables y de prevención de lavado de dinero conforme a la legislación mexicana.
            </p>
          </CardContent>
        </Card>

        {/* Section 8 */}
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">08</span>
              <span>8. Permisos del Dispositivo Android</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li><strong className="text-white">Cámara:</strong> Para capturar la selfie y las imágenes de su identificación oficial. Las imágenes se procesan para verificar identidad y se almacenan de forma segura.</li>
              <li><strong className="text-white">Contactos:</strong> Para facilitar el ingreso de referencias personales importando datos de su agenda. No almacenamos su agenda completa.</li>
              <li><strong className="text-white">Notificaciones:</strong> Para enviarle alertas sobre el estado de su préstamo a través de OneSignal.</li>
            </ul>
            <p className="text-xs text-muted-foreground italic">
              Puede revocar estos permisos desde la configuración de su dispositivo. Hacerlo puede limitar el funcionamiento de algunas funciones de la App.
            </p>
          </CardContent>
        </Card>

        {/* Section 9 */}
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">09</span>
              <span>9. Derechos ARCO</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Usted tiene derecho a ejercer en cualquier momento los siguientes derechos:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li><strong className="text-white">Acceso:</strong> Conocer qué datos tenemos sobre usted y cómo los tratamos</li>
              <li><strong className="text-white">Rectificación:</strong> Solicitar corrección de datos inexactos o incompletos</li>
              <li><strong className="text-white">Cancelación:</strong> Pedir la supresión de sus datos cuando ya no sean necesarios</li>
              <li><strong className="text-white">Oposición:</strong> Oponerse al tratamiento para finalidades secundarias o cuando exista causa legítima</li>
            </ul>

            <div className="bg-secondary/50 p-6 rounded-2xl border border-white/5 space-y-3">
              <h4 className="font-bold text-white">Cómo ejercer sus derechos ARCO</h4>
              <p className="text-muted-foreground text-sm">Envíe su solicitud a <a href="mailto:soporte.moneybic@gmail.com" className="text-primary hover:underline font-semibold">soporte.moneybic@gmail.com</a> indicando:</p>
              <ul className="list-decimal pl-6 space-y-1 text-sm text-muted-foreground marker:text-primary">
                <li>Nombre completo y número de teléfono registrado en la App</li>
                <li>Derecho que desea ejercer</li>
                <li>Descripción clara de su solicitud</li>
                <li>Copia de identificación oficial</li>
              </ul>
              <p className="text-xs text-primary font-medium">Responderemos en un plazo máximo de 20 días hábiles.</p>
              <p className="text-xs text-muted-foreground italic pt-1">
                Si considera que sus derechos han sido vulnerados, puede presentar una queja ante el INAI en <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.inai.org.mx</a>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 10 */}
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">10</span>
              <span>10. Eliminación de Cuenta</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Puede solicitar la eliminación de su cuenta desde la sección Perfil de la App. Al confirmar la eliminación:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground marker:text-primary">
              <li>Su sesión se cerrará de forma inmediata</li>
              <li>Sus datos personales serán marcados para supresión</li>
              <li>La eliminación definitiva se realizará dentro de los plazos de conservación legal aplicables</li>
            </ul>
            <p className="font-bold text-destructive/90 text-sm bg-destructive/10 border border-destructive/20 p-3 rounded-xl">
              La eliminación no procederá si usted tiene un préstamo activo o saldo pendiente de pago.
            </p>
          </CardContent>
        </Card>

        {/* Section 11 */}
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">11</span>
              <span>11. Tecnologías de Seguimiento</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">
              La App no utiliza cookies de navegador. Utiliza identificadores de dispositivo a través de OneSignal con el único fin de entregar notificaciones personalizadas relacionadas con su cuenta.
            </p>
          </CardContent>
        </Card>

        {/* Section 12 */}
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">12</span>
              <span>12. Modificaciones</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">
              Nos reservamos el derecho de actualizar esta Política en cualquier momento. Los cambios sustanciales serán notificados a través de la App. El uso continuado del servicio implica la aceptación de la versión vigente.
            </p>
          </CardContent>
        </Card>

        {/* Section 13 */}
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">13</span>
              <span>13. Consentimiento</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">
              Al registrarse en MONEYBIC, marcar la casilla de aceptación y utilizar la App, usted declara haber leído, comprendido y aceptado esta Política de Privacidad, incluyendo el tratamiento de sus datos sensibles.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
