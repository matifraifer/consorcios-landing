import { Box, Container, Grid, Typography } from '@mui/material'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { colors } from '../theme/tokens'

const BENEFITS = [
  'Más transparencia sobre gastos',
  'Facilidades de pago de expensas',
  'Recordatorios automáticos para no entrar en mora',
  'Avisos automáticos sobre obras e incidentes',
  'Interfaz amigable para todos',
  'Y mucho más',
]

const gradientText = {
  background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentSoft} 100%)`,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

export default function About() {
  return (
    <Box id="nosotros" sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.surface }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={{
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: colors.accent, mb: 1.5,
            }}>
              
            </Typography>
            <Typography component="h2" sx={{
              fontSize: { xs: '1.8rem', md: '2.2rem' }, fontWeight: 800,
              color: colors.primary, letterSpacing: '-0.02em', lineHeight: 1.2, mb: 3,
            }}>
              Beneficios para el{' '}
              <Box component="span" sx={gradientText}>vecino</Box>
            </Typography>
            <Typography sx={{ fontSize: '0.95rem', color: colors.textMuted, lineHeight: 1.8 }}>
              Relevamos los puntos de dolor de distintos barrios y consorcios, conocemos{' '}
              <Box component="span" sx={{ color: colors.accent }}>qué</Box>
              {' '}se debe mejorar y nos enfocamos en{' '}
              <Box component="span" sx={{ color: colors.accent }}>cómo</Box>
              {' '}mejorarlo.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {BENEFITS.map((benefit) => (
                <Box key={benefit} sx={{
                  display: 'flex', alignItems: 'center', gap: 1.5,
                  bgcolor: colors.bg, borderRadius: '12px',
                  border: `1px solid ${colors.border}`, px: 2.5, py: 1.75,
                }}>
                  <CheckCircleRoundedIcon sx={{ fontSize: 20, color: colors.accent, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.95rem', color: colors.text, fontWeight: 500 }}>
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
