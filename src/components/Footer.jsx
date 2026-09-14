import { Box, Container, Typography } from '@mui/material'
import { APP_URL } from '../config'
import { colors } from '../theme/tokens'

export default function Footer() {
  return (
    <Box sx={{ py: 4, bgcolor: colors.primary }}>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 2,
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            <Box
              component="img"
              src="/logo.svg"
              alt="Granito"
              sx={{ height: 24, width: 'auto', flexShrink: 0 }}
            />
            <Typography sx={{
              fontSize: '1.1rem', fontWeight: 800, color: colors.textOnDark,
              letterSpacing: '-0.02em',
            }}>
              Granito
            </Typography>
          </Box>

          <Typography sx={{ fontSize: '0.75rem', color: colors.textOnDarkFaint }}>
            © {new Date().getFullYear()} Granito. Todos los derechos reservados.
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box
              component="a" href="/politica-de-privacidad"
              sx={{
                fontSize: '0.82rem', fontWeight: 600, color: colors.textOnDarkMuted,
                textDecoration: 'none',
                '&:hover': { color: colors.accentSoft },
              }}
            >
              Política de Privacidad
            </Box>

            <Box
              component="a" href={APP_URL}
              sx={{
                fontSize: '0.82rem', fontWeight: 600, color: colors.textOnDarkMuted,
                textDecoration: 'none',
                '&:hover': { color: colors.accentSoft },
              }}
            >
              Ingresar
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
