import { Box, Container, Grid, Typography } from '@mui/material'

const STATS = [
  { value: '100%', label: 'pensado para el mercado argentino' },
  { value: '1', label: 'plataforma, todo integrado' },
  { value: '0', label: 'configuraciones innecesarias' },
]

export default function About() {
  return (
    <Box id="nosotros" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography sx={{
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#065F46', mb: 1.5,
            }}>
              Quiénes somos
            </Typography>
            <Typography sx={{
              fontSize: { xs: '1.8rem', md: '2.2rem' }, fontWeight: 800,
              color: '#111827', letterSpacing: '-0.02em', lineHeight: 1.2, mb: 3,
            }}>
              Construido para el sector inmobiliario argentino
            </Typography>
            <Typography sx={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.8, mb: 2 }}>
              Entendemos los problemas reales de quienes administran propiedades y consorcios
              en Argentina. Granito nace de esa experiencia: una herramienta sin complejidad
              innecesaria, sin funciones que no se usan.
            </Typography>
            <Typography sx={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.8 }}>
              Solo lo que necesitás para operar mejor cada día.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {STATS.map(({ value, label }) => (
                <Box key={label} sx={{
                  display: 'flex', alignItems: 'center', gap: 3,
                  bgcolor: '#F8FAFC', borderRadius: '12px',
                  border: '1px solid #E5E7EB', p: 3,
                }}>
                  <Typography sx={{
                    fontSize: '2rem', fontWeight: 800, color: '#065F46',
                    lineHeight: 1, minWidth: 68, letterSpacing: '-0.03em',
                  }}>
                    {value}
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', color: '#374151', fontWeight: 500 }}>
                    {label}
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
