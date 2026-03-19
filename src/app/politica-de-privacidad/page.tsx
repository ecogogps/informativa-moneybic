import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <Badge variant="outline" className="w-fit badge-text border-primary text-primary">
            Política de Privacidad
          </Badge>
          <Badge variant="secondary" className="w-fit badge-text bg-secondary/50">
            Versión 1.0
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Política de Privacidad de MONEYBIC</h1>
        <p className="text-muted-foreground">Última actualización: Marzo 2026</p>
      </div>

      <div className="space-y-6 text-secondary-foreground leading-relaxed">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">1. Identificación del Responsable</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              MONEYBIC (en adelante, "la Empresa", "nosotros" o "nuestro") es el responsable del tratamiento de los datos personales que usted proporciona a través de la aplicación móvil MONEYBIC, disponible exclusivamente para dispositivos con sistema operativo Android.
            </p>
            <p>Para cualquier consulta relacionada con esta Política de Privacidad, puede contactarnos a través de:</p>
            <ul className="list-none space-y-2">
              <li><strong>Correo electrónico:</strong> <a href="mailto:contacto@moneybic.com" className="text-primary hover:underline">contacto@moneybic.com</a></li>
              <li><strong>Teléfono:</strong> 098 999 9999</li>
              <li><strong>Horario de atención:</strong> Lunes a Domingo, 09:00 – 17:00 hrs (hora del Centro de México)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">2. Marco Legal Aplicable</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              El tratamiento de sus datos personales se rige por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento, así como por los Lineamientos del Aviso de Privacidad emitidos por el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI), vigentes en los Estados Unidos Mexicanos.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">3. Datos Personales que Recopilamos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>Para prestar nuestros servicios de préstamos en línea, recopilamos las siguientes categorías de datos personales:</p>
            
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.1 Datos de Identificación y Contacto</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nombre completo (nombre y apellidos)</li>
                <li>Fecha de nacimiento</li>
                <li>Género</li>
                <li>Número de documento de identidad (INE / pasaporte)</li>
                <li>Número de teléfono celular (utilizado para autenticación mediante OTP vía SMS)</li>
                <li>Correo electrónico</li>
                <li>Estado civil</li>
                <li>Nivel de estudios</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.2 Datos de Domicilio</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Dirección completa</li>
                <li>Estado y municipio/ciudad</li>
                <li>Tipo de vivienda</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.3 Datos Financieros y Bancarios</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nombre del banco</li>
                <li>Número de cuenta</li>
                <li>Monto solicitado y plazo del préstamo</li>
                <li>Historial de préstamos dentro de la plataforma</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.4 Datos de Referencias Personales</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nombre completo, teléfono y relación de dos referencias personales</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.5 Datos Biométricos e Imágenes</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fotografía de rostro (selfie) capturada mediante la cámara frontal del dispositivo</li>
                <li>Fotografía frontal y trasera de identificación oficial (INE u otro documento)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.6 Datos del Dispositivo y Técnicos</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Identificador de dispositivo para el envío de notificaciones push (a través de OneSignal)</li>
                <li>Información de sesión y autenticación</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-foreground">3.7 Datos Sensibles</h4>
              <p>
                Las fotografías de rostro y de identificación oficial constituyen datos personales sensibles en términos del artículo 3, fracción VI de la LFPDPPP. Su tratamiento requiere su consentimiento expreso, el cual usted otorga al aceptar el presente aviso de privacidad y al cargar dichos archivos en la aplicación.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">4. Finalidades del Tratamiento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">4.1 Finalidades Primarias (necesarias para el servicio)</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Verificar su identidad y prevenir el fraude mediante la validación de rostro y documentos oficiales</li>
                <li>Procesar y evaluar su solicitud de préstamo</li>
                <li>Gestionar el desembolso de fondos mediante transferencia SPEI a través de CLABE generada con Conekta</li>
                <li>Administrar el cobro y seguimiento de pagos</li>
                <li>Enviar notificaciones sobre el estado de su solicitud y préstamo activo</li>
                <li>Calcular intereses, fechas de vencimiento y montos de mora</li>
                <li>Permitirle acceder a renovaciones de préstamo</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-foreground">4.2 Finalidades Secundarias (puede oponerse)</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Enviarle información sobre nuevos productos, promociones o servicios de MONEYBIC</li>
                <li>Realizar análisis estadísticos internos sobre el comportamiento de la cartera de clientes</li>
              </ul>
              <p className="mt-2">
                Si no desea que sus datos sean utilizados para las finalidades secundarias, puede manifestarlo enviando un correo a <a href="mailto:contacto@moneybic.com" className="text-primary hover:underline">contacto@moneybic.com</a> con el asunto "Oposición a finalidades secundarias".
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">5. Transferencia de Datos a Terceros</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Para poder operar, compartimos sus datos con los siguientes terceros:</p>
            <div className="rounded-md border border-white/10 overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="text-primary font-bold">Tercero</TableHead>
                    <TableHead className="text-primary font-bold">Finalidad</TableHead>
                    <TableHead className="text-primary font-bold text-right">País</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Supabase</TableCell>
                    <TableCell>Almacenamiento de base de datos, archivos (fotos, documentos) y autenticación por OTP</TableCell>
                    <TableCell className="text-right">Estados Unidos</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Conekta</TableCell>
                    <TableCell>Generación de CLABE interbancaria para recepción de pagos vía SPEI</TableCell>
                    <TableCell className="text-right">México</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">OneSignal</TableCell>
                    <TableCell>Envío de notificaciones push al dispositivo móvil</TableCell>
                    <TableCell className="text-right">Estados Unidos</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="mt-4">
              Estas transferencias son necesarias para la relación jurídica entre usted y MONEYBIC y no requieren su consentimiento adicional en términos del artículo 37 de la LFPDPPP. Sin embargo, exigimos a nuestros proveedores el cumplimiento de estándares de seguridad equivalentes a los aplicados por la Empresa.
            </p>
            <p>No vendemos, arrendamos ni cedemos sus datos personales a terceros con fines comerciales propios.</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">6. Almacenamiento y Seguridad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Sus datos se almacenan en los servidores de Supabase bajo protocolos de cifrado en tránsito (TLS) y en reposo. Las imágenes y archivos se guardan en almacenamiento privado con acceso controlado mediante tokens de sesión.
            </p>
            <p>
              Aplicamos medidas técnicas y organizativas razonables para proteger su información contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún sistema de transmisión por internet es 100% seguro.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">7. Conservación de Datos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Sus datos personales serán conservados durante el tiempo que mantenga una relación activa con MONEYBIC y hasta por 5 años adicionales tras la conclusión del último préstamo, en cumplimiento de obligaciones fiscales, contables y de prevención de lavado de dinero conforme a la legislación mexicana aplicable.
            </p>
            <p>
              Los datos asociados a cuentas eliminadas serán suprimidos conforme a lo descrito en la sección 9 de este documento.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">8. Uso de la Cámara y Permisos del Dispositivo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>La aplicación MONEYBIC solicita los siguientes permisos en su dispositivo Android:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cámara:</strong> Para capturar la fotografía de rostro (selfie) y las imágenes de su identificación oficial. Las imágenes se procesan para verificar que correspondan a una persona real y a un documento válido, y se almacenan en nuestros servidores.</li>
              <li><strong>Contactos:</strong> Para facilitar el llenado de las referencias personales, importando datos desde su agenda. No accedemos ni almacenamos su libreta de contactos completa.</li>
              <li><strong>Notificaciones:</strong> Para enviarle alertas sobre el estado de su préstamo a través de OneSignal.</li>
            </ul>
            <p>Puede revocar estos permisos en cualquier momento desde la configuración de su dispositivo, lo que puede limitar el uso de ciertas funcionalidades de la aplicación.</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">9. Derechos ARCO</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>En términos de la LFPDPPP, usted tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted y cómo los tratamos.</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong>Cancelación:</strong> Pedir la supresión de sus datos cuando ya no sean necesarios para las finalidades del tratamiento o cuando retire su consentimiento.</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para finalidades secundarias o cuando exista causa legítima para ello.</li>
            </ul>
            
            <div className="bg-muted/30 p-6 rounded-lg border border-white/5 space-y-4">
              <h4 className="font-bold text-foreground underline underline-offset-4">Cómo ejercer sus derechos ARCO</h4>
              <p>Envíe su solicitud a <a href="mailto:contacto@moneybic.com" className="text-primary hover:underline">contacto@moneybic.com</a> indicando:</p>
              <ul className="list-decimal pl-6 space-y-1">
                <li>Nombre completo y número de teléfono registrado en la app</li>
                <li>Derecho que desea ejercer (Acceso, Rectificación, Cancelación u Oposición)</li>
                <li>Descripción clara de los datos o tratamientos sobre los que versa la solicitud</li>
                <li>Copia de identificación oficial</li>
              </ul>
              <p>Daremos respuesta en un plazo máximo de 20 días hábiles a partir de la recepción de su solicitud.</p>
              <p className="text-sm italic">
                También puede presentar una queja ante el INAI (Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales) en <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.inai.org.mx</a> si considera que sus derechos han sido vulnerados.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">10. Eliminación de Cuenta</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Puede solicitar la eliminación de su cuenta directamente desde la aplicación, en la sección Perfil, mediante el ícono de eliminación. Al confirmar:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Su sesión será cerrada de forma inmediata</li>
              <li>Sus datos personales serán marcados para eliminación</li>
              <li>La supresión definitiva se realizará dentro de los plazos de conservación legal aplicables</li>
            </ul>
            <p className="font-bold text-destructive/80">
              La eliminación no procederá si usted tiene un préstamo activo o saldo pendiente de pago.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">11. Cookies y Tecnologías de Seguimiento</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              La aplicación móvil MONEYBIC no utiliza cookies de navegador. Sin embargo, hace uso de identificadores de dispositivo a través de OneSignal con el único fin de entregar notificaciones personalizadas sobre su cuenta.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">12. Cambios a esta Política</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cuando realicemos cambios sustanciales, se lo notificaremos a través de Canales oficiales o mediante una notificación push. El uso continuado de la aplicación tras la notificación implica su aceptación de la política actualizada.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-bold">13. Consentimiento</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Al registrarse en MONEYBIC, marcar la casilla de aceptación en la pantalla de inicio de sesión y utilizar la aplicación, usted declara haber leído, comprendido y aceptado esta Política de Privacidad, incluyendo el tratamiento de sus datos sensibles (fotografías e identificación oficial).
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}