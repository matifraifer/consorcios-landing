import { Box, Container, Grid, Typography } from '@mui/material'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import ApartmentIcon from '@mui/icons-material/Apartment'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { colors, radius, shadow } from '../theme/tokens'

const SOLUTIONS = [
  {
    Icon: HomeWorkIcon,
    title: 'Nuestra solución para inmobiliarias',
    items: [
      'Gestión de contratos',
      'CRM de leads y prospectos',
      'Página web propia',
      'Integración con WhatsApp',
      'Recomendación automatizada según preferencias',
      'Gestión de alquileres',
      'Recordatorio automático de pago de alquileres',
      'Control automático de alquileres',
    ],
  },
  {
    Icon: ApartmentIcon,
    title: 'Nuestra solución para administradores',
    items: [
      'Portal del vecino',
      'Gestión de reclamos',
      'Control de gastos',
      'Control de pagos automatizado',
      'Integración con Mercado Pago',
      'Automatización de avisos y recordatorios de pagos',
    ],
  },
]

function SolutionCard({ Icon, title, items }) {
  return (
    <Box sx={{
      bgcolor: colors.surface, borderRadius: radius.lg,
      border: `1px solid ${colors.border}`, p: { xs: 3, md: 4 },
      height: '100%',
      transition: 'all 0.2s ease',
      '&:hover': { borderColor: colors.accentSoft, boxShadow: shadow.md },
    }}>
      <Box sx={{
        width: 48, height: 48, borderRadius: radius.md,
        bgcolor: colors.accentSubtle,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        mb: 2.5,
      }}>
        <Icon sx={{ fontSize: 24, color: colors.accent }} />
      </Box>

      <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: colors.primary, mb: 2.5 }}>
        {title}
      </Typography>

      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {items.map((item) => (
          <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
            <CheckCircleRoundedIcon sx={{ fontSize: 18, color: colors.accent, mt: '1px', flexShrink: 0 }} />
            <Typography sx={{ fontSize: '0.88rem', color: colors.text, lineHeight: 1.6 }}>
              {item}
            </Typography>
          </Box>
        ))}
        <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
          <Typography sx={{ fontSize: '0.88rem', color: colors.textMuted, fontStyle: 'italic', ml: '30px' }}>
            Y mucho más
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default function Features() {
  return (
    <Box id="funcionalidades" sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.bg }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography sx={{
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: colors.accent, mb: 1.5,
          }}>
            Funcionalidades
          </Typography>
          <Typography sx={{
            fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 800,
            color: colors.primary, letterSpacing: '-0.02em', lineHeight: 1.2,
          }}>
            ¡Así te ayuda Granito!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {SOLUTIONS.map((solution) => (
            <Grid key={solution.title} size={{ xs: 12, md: 6 }}>
              <SolutionCard {...solution} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
