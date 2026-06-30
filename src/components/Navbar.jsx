import { Box, Button, Container, Typography } from '@mui/material'
import { APP_URL } from '../config'

export default function Navbar() {
  return (
    <Box
      component="nav"
      sx={{
        position: 'sticky', top: 0, zIndex: 100,
        bgcolor: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #E5E7EB',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
          <Typography sx={{
            fontSize: '1.2rem', fontWeight: 800, color: '#065F46',
            letterSpacing: '-0.03em', fontFamily: 'Poppins, sans-serif',
          }}>
            Granito
          </Typography>

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
                  fontSize: '0.82rem', fontWeight: 500, color: '#374151',
                  textDecoration: 'none',
                  '&:hover': { color: '#065F46' },
                }}
              >
                {label}
              </Box>
            ))}

            <Button
              component="a" href={APP_URL}
              variant="contained"
              sx={{
                bgcolor: '#065F46', color: 'white', borderRadius: '8px',
                textTransform: 'none', fontWeight: 600, fontSize: '0.82rem',
                boxShadow: 'none', px: 2.5, py: 1,
                '&:hover': { bgcolor: '#047857', boxShadow: 'none' },
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
