import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServiceAgreementPage() {
  return (
    <div className="container mx-auto px-6 pt-36 pb-20 space-y-10 animate-in fade-in duration-700 max-w-4xl">
      <div className="flex flex-col gap-4 text-center md:text-left border-b border-white/10 pb-8">
        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
          <Badge variant="outline" className="w-fit badge-text border-primary/40 text-primary bg-primary/10 px-3.5 py-1">
            Términos de Uso
          </Badge>
          <Badge variant="secondary" className="w-fit badge-text bg-secondary/80 text-muted-foreground px-3.5 py-1 border border-white/5">
            Versión 1.0
          </Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Acuerdo de Servicio al Usuario — MONEYBIC
        </h1>
        <p className="text-muted-foreground text-sm font-medium">Última actualización: Marzo 2026</p>
      </div>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">01</span>
              <span>1. Partes del Acuerdo</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p>El presente Acuerdo de Servicio al Usuario (en adelante, "el Acuerdo") regula la relación entre:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li><strong className="text-white">MONEYBIC</strong> (en adelante, "la Empresa", "nosotros"), titular y operadora de la aplicación móvil homónima, y</li>
              <li><strong className="text-white">El Usuario</strong> (en adelante, "usted"), persona física mayor de edad que descarga, instala y utiliza la aplicación MONEYBIC en un dispositivo Android.</li>
            </ul>
            <p className="text-muted-foreground">Al aceptar este Acuerdo mediante la casilla de consentimiento en la pantalla de inicio de sesión, usted declara haber leído, comprendido y aceptado todos los términos aquí establecidos. Si no está de acuerdo, no utilice la aplicación.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">02</span>
              <span>2. Descripción del Servicio</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">MONEYBIC es una plataforma digital de préstamos personales en línea que opera exclusivamente en los Estados Unidos Mexicanos, disponible únicamente para dispositivos con sistema operativo Android. A través de la aplicación, usted puede:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li>Solicitar préstamos personales en pesos mexicanos (MXN)</li>
              <li>Consultar el estado y el historial de sus préstamos</li>
              <li>Recibir notificaciones sobre el estado de la solicitud y préstamo</li>
              <li>Realizar el pago de su préstamo mediante transferencia SPEI a una CLABE única generada para cada operación</li>
              <li>Solicitar la renovación de préstamos (cuando sea elegible)</li>
            </ul>
            <p className="text-xs text-muted-foreground italic bg-secondary/40 p-4 rounded-2xl border border-white/5">
              MONEYBIC no es una institución bancaria ni una entidad de crédito regulada por la Comisión Nacional Bancaria y de Valores (CNBV). Los préstamos son otorgados directamente por la Empresa bajo sus propias políticas de crédito.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">03</span>
              <span>3. Requisitos para Usar el Servicio</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Para registrarse y solicitar préstamos a través de MONEYBIC, usted debe:</p>
            <ul className="list-decimal pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li>Ser persona física mexicana mayor de 18 años</li>
              <li>Contar con un número de teléfono celular activo en México (+52) para recibir el código OTP de autenticación</li>
              <li>Poseer una cuenta bancaria o CLABE interbancaria vigente a su nombre en una institución financiera mexicana</li>
              <li>Contar con una identificación oficial vigente (INE, pasaporte u equivalente)</li>
              <li>Disponer de un dispositivo Android con acceso a internet y cámara funcional</li>
              <li>Proporcionar información veraz, completa y actualizada</li>
            </ul>
            <p className="text-xs text-muted-foreground">La Empresa se reserva el derecho de rechazar cualquier solicitud de registro o préstamo sin necesidad de justificar su decisión.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">04</span>
              <span>4. Proceso de Solicitud de Préstamo</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6 text-white/90 text-sm sm:text-base">
            <div className="space-y-2">
              <h4 className="font-bold text-white">4.1 Registro y Verificación de Identidad</h4>
              <p className="text-muted-foreground">El proceso de solicitud requiere que usted complete un formulario de cinco etapas:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground marker:text-primary">
                <li>Datos personales: nombre, fecha de nacimiento, género, CURP/INE, banco, cuenta, correo y domicilio</li>
                <li>Datos de residencia: tipo de vivienda, estado, ciudad, estado civil y nivel de estudios</li>
                <li>Referencias personales: dos contactos con nombre, teléfono y relación</li>
                <li>Archivos de verificación: fotografía de rostro (selfie), fotografía frontal y trasera de identificación oficial</li>
                <li>Configuración del préstamo: monto, plazo y forma de pago</li>
              </ul>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">4.2 Validación de Imágenes</h4>
              <p className="text-muted-foreground">Las fotografías son procesadas automáticamente para verificar que:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground marker:text-primary">
                <li>La selfie corresponde a una persona real (no impresiones ni pantallas)</li>
                <li>El documento de identidad es claro, completo y correctamente iluminado</li>
              </ul>
              <p className="text-muted-foreground">Si las imágenes no superan la validación, el sistema le solicitará que las repita.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">4.3 Revisión y Resolución</h4>
              <p className="text-muted-foreground">Una vez enviada la solicitud, nuestro equipo la revisará y le notificará la decisión (aprobación o rechazo) a través de la aplicación. El tiempo de respuesta habitual es de 15 a 30 minutos dentro del horario de atención (Lunes a Domingo, 09:00 – 17:00 hrs).</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">05</span>
              <span>5. Condiciones del Préstamo</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6 text-white/90 text-sm sm:text-base">
            <div className="space-y-2">
              <h4 className="font-bold text-white">5.1 Monto y Plazo</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground marker:text-primary">
                <li>Los montos de préstamo disponibles van desde $500 MXN hasta $50,500 MXN</li>
                <li>El plazo estándar de pago es de 7 días bajo la modalidad semanal</li>
                <li>El monto exacto aprobado puede diferir del monto solicitado, a criterio de la Empresa</li>
              </ul>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">5.2 Desembolso</h4>
              <p className="text-muted-foreground">Una vez aprobado el préstamo, el monto será transferido mediante SPEI a la cuenta bancaria registrada por usted. La fecha de desembolso queda registrada en el sistema y es el punto de inicio para el cálculo del plazo y los intereses.</p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">5.3 Intereses y Cargos</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground marker:text-primary">
                <li>La Empresa aplicará una tasa de interés</li>
                <li>En caso de mora (pago posterior a la fecha de vencimiento), se generarán intereses moratorios adicionales calculados por día de retraso</li>
                <li>El monto exacto a pagar (incluyendo intereses y mora, si aplica) puede consultarse en todo momento en la sección "Préstamos" de la aplicación, mediante el detalle financiero calculado en tiempo real</li>
              </ul>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="font-bold text-white">5.4 Condonación de Intereses Moratorios</h4>
              <p className="text-muted-foreground">La Empresa podrá, a su discreción, ofrecer al Usuario la opción de pagar el préstamo sin los intereses generados por mora. Esta opción, cuando esté disponible, se mostrará en la pantalla de detalles del préstamo.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">06</span>
              <span>6. Proceso de Pago</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">El pago de su préstamo se realiza exclusivamente mediante transferencia SPEI a una CLABE interbancaria única generada para cada operación a través de Conekta.</p>
            <div className="bg-secondary/50 p-5 rounded-2xl border border-white/5 space-y-2 text-sm">
              <h4 className="font-bold text-white">Instrucciones importantes:</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground marker:text-primary">
                <li>Copie la CLABE desde la sección "Reembolso" dentro del detalle de su préstamo activo</li>
                <li>Realice la transferencia desde cualquier banca móvil por el monto exacto indicado en la app</li>
                <li>Transferencias por montos distintos al indicado podrán no ser reconocidas automáticamente</li>
                <li>La CLABE generada es única por operación; no realice pagos a CLABEs anteriores</li>
              </ul>
            </div>
            <p className="text-xs text-muted-foreground italic">La Empresa no se hace responsable por pagos realizados a cuentas distintas a las proporcionadas oficialmente dentro de la aplicación.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">07</span>
              <span>7. Renovación de Préstamo</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Una vez liquidado su préstamo, podrá ser elegible para solicitar una renovación con un monto ajustado según su historial de pagos. Cuando sea elegible, la opción "Renueva en 1 clic" aparecerá en la pantalla de inicio, permitiéndole enviar una nueva solicitud con sus datos previamente registrados.</p>
            <p className="text-muted-foreground">La elegibilidad para renovación es determinada exclusivamente por la Empresa.</p>
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
            <p className="text-muted-foreground">Usted se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li>Proporcionar únicamente información verdadera y actualizada</li>
              <li>No compartir su número de teléfono o código OTP con terceros</li>
              <li>Utilizar el servicio exclusivamente para fines personales y lícitos</li>
              <li>Pagar el préstamo en la fecha acordada para evitar cargos por mora</li>
              <li>Notificar a la Empresa cualquier cambio en sus datos bancarios o de contacto</li>
              <li>No intentar manipular, alterar o vulnerar el funcionamiento de la aplicación o sus sistemas</li>
              <li>No suplantar la identidad de otra persona durante el proceso de verificación</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">09</span>
              <span>9. Obligaciones de MONEYBIC</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">La Empresa se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li>Informarle claramente el monto, plazo y cargos antes del desembolso</li>
              <li>Procesar las solicitudes dentro de los tiempos de respuesta indicados</li>
              <li>Calcular y mostrar en tiempo real el monto adeudado, incluyendo intereses y mora</li>
              <li>Mantener la confidencialidad de su información conforme a la Política de Privacidad</li>
              <li>Proporcionar canales de atención al cliente accesibles durante el horario de servicio</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">10</span>
              <span>10. Limitación de Responsabilidad</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">MONEYBIC no será responsable por:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground marker:text-primary">
              <li>Interrupciones del servicio ocasionadas por fallas en proveedores terceros (Supabase, Conekta, operadoras de telecomunicaciones)</li>
              <li>Retrasos en las transferencias SPEI atribuibles al sistema bancario mexicano</li>
              <li>Pérdida de acceso a la cuenta por pérdida o robo del número de teléfono registrado</li>
              <li>Decisiones financieras que el Usuario tome a partir del uso de la aplicación</li>
              <li>Daños indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso del servicio</li>
            </ul>
            <p className="text-xs text-muted-foreground italic bg-secondary/40 p-3 rounded-xl border border-white/5">
              La responsabilidad total de la Empresa frente al Usuario, bajo cualquier concepto, no excederá el monto del último préstamo otorgado.
            </p>
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
            <p className="text-muted-foreground">Todos los contenidos de la aplicación MONEYBIC, incluyendo pero no limitado a: marca, logotipo, diseño, código fuente, textos e interfaz gráfica, son propiedad exclusiva de la Empresa y están protegidos por las leyes mexicanas e internacionales de propiedad intelectual. Queda prohibida su reproducción, distribución o uso no autorizado.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">12</span>
              <span>12. Cancelación de Cuenta</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">La cancelación de cuenta no extingue las obligaciones de pago pendientes.</p>
            <p className="text-muted-foreground">El Usuario puede solicitar la eliminación voluntaria de su cuenta desde la sección Perfil de la aplicación, siempre que no tenga préstamos activos o saldos pendientes.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">13</span>
              <span>13. Notificaciones</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Al registrarse en MONEYBIC y conceder el permiso correspondiente en su dispositivo Android, usted acepta recibir notificaciones push relacionadas con:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground marker:text-primary">
              <li>Estado de su solicitud de préstamo</li>
              <li>Estado de su préstamo activo</li>
            </ul>
            <p className="text-xs text-muted-foreground italic">Puede deshabilitar las notificaciones desde la configuración de su dispositivo, aunque esto podría afectar su experiencia con el servicio.</p>
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
            <p className="text-muted-foreground">El tratamiento de sus datos personales se rige por la Política de Privacidad de MONEYBIC, disponible dentro de la aplicación y en nuestros canales oficiales. Dicha política forma parte integral de este Acuerdo.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">15</span>
              <span>15. Modificaciones al Acuerdo</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">MONEYBIC se reserva el derecho de modificar este Acuerdo en cualquier momento. Las modificaciones serán notificadas a través de la aplicación. El uso continuado del servicio tras la notificación constituye la aceptación de los nuevos términos.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">16</span>
              <span>16. Legislación Aplicable y Jurisdicción</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">El presente Acuerdo se rige por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia derivada de su interpretación o cumplimiento, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro.</p>
          </CardContent>
        </Card>

        <Card className="glass-card border border-white/10 p-6 sm:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-primary font-bold flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-bold">17</span>
              <span>17. Contacto</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 text-white/90 text-sm sm:text-base">
            <p className="text-muted-foreground">Para cualquier duda, aclaración o reclamación relacionada con este Acuerdo:</p>
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
