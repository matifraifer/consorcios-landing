import { Box, Button, Container, Typography } from '@mui/material'
import { APP_URL } from '../config'
import { colors, radius, shadow } from '../theme/tokens'

export default function Navbar() {
  return (
    <Box
      component="nav"
      sx={{
        position: 'sticky', top: 0, zIndex: 100,
        bgcolor: 'rgba(247,250,249,0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            <Box
              component="img"
              src="/logo.svg"
              alt="Granito"
              sx={{ height: 30, width: 'auto', flexShrink: 0 }}
            />
            <Typography sx={{
              fontSize: '1.2rem', fontWeight: 800, color: colors.primary,
              letterSpacing: '-0.03em', fontFamily: 'Poppins, sans-serif',
            }}>
              Granito
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 4 } }}>
            {[
              { label: 'Funcionalidades', href: '#funcionalidades' },
              { label: 'Nosotros', href: '#nosotros' },
              { label: 'Contacto', href: '#contacto' },
            ].map(({ label, href }) => (
              <Box
                key={label}
                component="a" href={href}
                sx={{
                  display: { xs: 'none', md: 'block' },
                  fontSize: '0.82rem', fontWeight: 500, color: colors.textMuted,
                  textDecoration: 'none',
                  '&:hover': { color: colors.primary },
                }}
              >
                {label}
              </Box>
            ))}

            <Button
              component="a" href={APP_URL}
              variant="contained"
              sx={{
                bgcolor: colors.accent, color: 'white', borderRadius: radius.md,
                textTransform: 'none', fontWeight: 600, fontSize: '0.82rem',
                boxShadow: shadow.accent, px: 2.5, py: 1,
                '&:hover': { bgcolor: colors.accentHover, boxShadow: shadow.accentHover },
              }}
            >
              Ingresar
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
