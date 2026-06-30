import { Box, Container, Typography } from '@mui/material'

const APP_URL = 'https://consorcios-app.vercel.app/login'

export default function Footer() {
  return (
    <Box sx={{ py: 4, bgcolor: '#111827' }}>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 2,
        }}>
          <Typography sx={{
            fontSize: '1.1rem', fontWeight: 800, color: '#10B981',
            letterSpacing: '-0.02em',
          }}>
            Granito
          </Typography>

          <Typography sx={{ fontSize: '0.75rem', color: '#6B7280' }}>
            © {new Date().getFullYear()} Granito. Todos los derechos reservados.
          </Typography>

          <Box
            component="a" href={APP_URL}
            sx={{
              fontSize: '0.82rem', fontWeight: 600, color: '#9CA3AF',
              textDecoration: 'none',
              '&:hover': { color: '#10B981' },
            }}
          >
            Ingresar
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
