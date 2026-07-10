import { Box, Container, Typography } from '@mui/material'

const sections = [
  {
    title: '1. Información que recopilamos',
    body: `Podemos recopilar datos que nos proporcionás voluntariamente al usar este sitio o contactarnos, como nombre, correo electrónico, teléfono y cualquier otra información que incluyas en formularios de contacto. También podemos recopilar información técnica de forma automática (tipo de navegador, dispositivo, dirección IP y páginas visitadas) a través de cookies y herramientas de analítica.`,
  },
  {
    title: '2. Uso de la información',
    body: `Utilizamos la información recopilada para responder consultas, brindar y mejorar nuestros servicios, personalizar la experiencia de navegación, enviar comunicaciones relacionadas con el servicio (cuando corresponda) y cumplir con obligaciones legales.`,
  },
  {
    title: '3. Cookies y tecnologías similares',
    body: `Este sitio puede utilizar cookies propias y de terceros para mejorar la experiencia del usuario, analizar el tráfico y recordar preferencias. Podés configurar tu navegador para rechazar las cookies, aunque esto podría afectar algunas funcionalidades del sitio.`,
  },
  {
    title: '4. Compartición de datos con terceros',
    body: `No vendemos ni alquilamos tu información personal. Podemos compartir datos con proveedores de servicios que nos ayudan a operar el sitio (por ejemplo, hosting o analítica), quienes están obligados a resguardar la confidencialidad de la información, o cuando sea requerido por ley.`,
  },
  {
    title: '5. Seguridad de la información',
    body: `Adoptamos medidas técnicas y organizativas razonables para proteger tus datos personales contra accesos no autorizados, pérdida o alteración. Sin embargo, ningún sistema de transmisión o almacenamiento es completamente seguro.`,
  },
  {
    title: '6. Derechos del usuario',
    body: `De acuerdo con la Ley N° 25.326 de Protección de Datos Personales de la República Argentina, tenés derecho a acceder, rectificar, actualizar o solicitar la supresión de tus datos personales. Para ejercer estos derechos, podés contactarnos a través de los medios indicados al final de esta política. La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan por incumplimiento de las normas sobre protección de datos personales.`,
  },
  {
    title: '7. Conservación de los datos',
    body: `Conservamos tus datos personales únicamente durante el tiempo necesario para cumplir con las finalidades descritas en esta política, o según lo exija la normativa vigente.`,
  },
  {
    title: '8. Cambios en esta política',
    body: `Podemos actualizar esta política de privacidad ocasionalmente. Cualquier cambio será publicado en esta misma página, indicando la fecha de la última actualización.`,
  },
  {
    title: '9. Contacto',
    body: `Si tenés preguntas o consultas sobre esta política de privacidad o sobre el tratamiento de tus datos personales, podés escribirnos a contacto@granito.com.ar.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'white' }}>
      <Container maxWidth="md">
        <Typography sx={{
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: '#065F46', mb: 2,
        }}>
          Legal
        </Typography>
        <Typography sx={{
          fontSize: { xs: '1.8rem', md: '2.2rem' }, fontWeight: 800,
          color: '#111827', letterSpacing: '-0.02em', lineHeight: 1.2, mb: 1,
        }}>
          Política de Privacidad
        </Typography>
        <Typography sx={{ fontSize: '0.82rem', color: '#9CA3AF', mb: 5 }}>
          Última actualización: 10 de julio de 2026
        </Typography>

        <Typography sx={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.75, mb: 5 }}>
          En Granito valoramos tu privacidad. Esta política describe qué información recopilamos
          a través de este sitio web, cómo la utilizamos y qué derechos tenés sobre tus datos personales.
        </Typography>

        {sections.map(({ title, body }) => (
          <Box key={title} sx={{ mb: 4 }}>
            <Typography sx={{
              fontSize: '1.05rem', fontWeight: 700, color: '#111827', mb: 1,
            }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.75 }}>
              {body}
            </Typography>
          </Box>
        ))}
      </Container>
    </Box>
  )
}
