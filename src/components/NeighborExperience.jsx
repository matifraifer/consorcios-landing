import { Box, Container, Typography } from '@mui/material'
import { colors, radius, gradients, grainOverlay } from '../theme/tokens'

export default function NeighborExperience() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: gradients.greenOrange, position: 'relative', overflow: 'hidden' }}>
      <Box sx={grainOverlay} />
      <Container maxWidth="md" sx={{ position: 'relative' }}>
        <Box sx={{
          textAlign: 'center',
          bgcolor: colors.surface,
          borderRadius: radius.xl,
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
          px: { xs: 3, md: 7 },
          py: { xs: 5, md: 7 },
        }}>
          <Typography component="h2" sx={{
            fontSize: { xs: '2rem', md: '2.8rem' }, fontWeight: 800,
            color: colors.primary, letterSpacing: '-0.02em', lineHeight: 1.25, mb: 3,
          }}>
            Construido 100% para{' '}
            <Box component="span" sx={{
              background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentSoft} 100%)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              mejorar la experiencia de los vecinos
            </Box>
          </Typography>
          <Typography sx={{
            fontSize: { xs: '1rem', md: '1.1rem' }, color: colors.textMuted,
            lineHeight: 1.8, maxWidth: 560, mx: 'auto',
          }}>
            Sabemos que la tecnología puede generar resistencia. Nuestro sistema está
            pensado para personas de todas las edades, sin necesidad de descargas
            engorrosas.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
