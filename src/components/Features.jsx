import { Box, Container, Grid, Typography } from '@mui/material'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import LanguageIcon from '@mui/icons-material/Language'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import ContactsIcon from '@mui/icons-material/Contacts'

const FEATURES = [
  {
    Icon: HomeWorkIcon,
    title: 'Gestión de propiedades',
    desc: 'Cargá y gestioná tu cartera de propiedades con fotos, precios y estado actualizado en tiempo real.',
  },
  {
    Icon: PeopleAltIcon,
    title: 'CRM de prospectos',
    desc: 'Seguimiento visual por etapas, desde el primer contacto hasta el cierre del negocio.',
  },
  {
    Icon: LanguageIcon,
    title: 'Web pública',
    desc: 'Tu catálogo online listo para compartir con clientes, sin costo adicional.',
  },
  {
    Icon: ReceiptLongIcon,
    title: 'Expensas y consorcios',
    desc: 'Liquidación de expensas, seguimiento de pagos y gestión de reclamos para administradores.',
  },
  {
    Icon: MarkEmailReadIcon,
    title: 'Consultas web',
    desc: 'Recibí las consultas que llegan desde tu sitio y convertílas en clientes desde la misma plataforma.',
  },
  {
    Icon: ContactsIcon,
    title: 'Base de contactos',
    desc: 'Toda tu cartera de clientes organizada con historial completo y vinculación a propiedades.',
  },
]

export default function Features() {
  return (
    <Box id="funcionalidades" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography sx={{
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: '#065F46', mb: 1.5,
          }}>
            Funcionalidades
          </Typography>
          <Typography sx={{
            fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 800,
            color: '#111827', letterSpacing: '-0.02em', lineHeight: 1.2,
          }}>
            Todo lo que necesita tu inmobiliaria
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {FEATURES.map(({ Icon, title, desc }) => (
            <Grid item xs={12} sm={6} md={4} key={title}>
              <Box sx={{
                bgcolor: 'white', borderRadius: '12px',
                border: '1px solid #E5E7EB', p: 3, height: '100%',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#A7F3D0',
                  boxShadow: '0 4px 20px rgba(6,95,70,0.08)',
                  transform: 'translateY(-2px)',
                },
              }}>
                <Box sx={{
                  width: 44, height: 44, borderRadius: '10px',
                  bgcolor: '#ECFDF5',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mb: 2,
                }}>
                  <Icon sx={{ fontSize: 22, color: '#065F46' }} />
                </Box>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827', mb: 1 }}>
                  {title}
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: '#6B7280', lineHeight: 1.65 }}>
                  {desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
