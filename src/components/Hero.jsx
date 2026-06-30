import { Box, Button, Container, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const APP_URL = 'https://consorcios-app.vercel.app/login'

const PROPERTIES = [
  { title: 'Casa en Palermo', price: 'USD 185.000', status: 'Disponible', statusColor: '#065F46', statusBg: '#ECFDF5' },
  { title: 'Dpto. en Belgrano', price: '$420.000/mes', status: 'Reservada', statusColor: '#92400E', statusBg: '#FFFBEB' },
  { title: 'Local en Microcentro', price: 'USD 95.000', status: 'Disponible', statusColor: '#065F46', statusBg: '#ECFDF5' },
]

function ProductMockup() {
  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: 460 }}>
      <Box sx={{
        bgcolor: 'white', borderRadius: '16px',
        border: '1px solid #E5E7EB',
        boxShadow: '0 20px 60px rgba(6,95,70,0.12)',
        p: 3,
      }}>
        {/* Window chrome */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 2.5 }}>
          {['#FECACA', '#FDE68A', '#A7F3D0'].map(c => (
            <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }} />
          ))}
          <Box sx={{ ml: 1, flex: 1, height: 8, bgcolor: '#F3F4F6', borderRadius: '4px' }} />
        </Box>

        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#111827' }}>
            Propiedades
          </Typography>
          <Box sx={{ px: 1.5, py: 0.4, bgcolor: '#065F46', borderRadius: '6px' }}>
            <Typography sx={{ fontSize: '0.62rem', fontWeight: 600, color: 'white' }}>+ Nueva</Typography>
          </Box>
        </Box>

        {/* Property rows */}
        {PROPERTIES.map((p, i) => (
          <Box key={i} sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            py: 1.25, px: 1.5, mb: 1,
            bgcolor: '#F9FAFB', borderRadius: '8px', border: '1px solid #F3F4F6',
          }}>
            <Box>
              <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, color: '#111827' }}>
                {p.title}
              </Typography>
              <Typography sx={{ fontSize: '0.62rem', color: '#9CA3AF', mt: 0.25 }}>
                {p.price}
              </Typography>
            </Box>
            <Box sx={{
              px: 1, py: 0.25, borderRadius: '20px',
              bgcolor: p.statusBg,
              border: `1px solid ${p.statusColor}40`,
            }}>
              <Typography sx={{ fontSize: '0.58rem', fontWeight: 700, color: p.statusColor }}>
                {p.status}
              </Typography>
            </Box>
          </Box>
        ))}

        {/* Filter tabs */}
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          {['Todos', 'Venta', 'Alquiler'].map((t, i) => (
            <Box key={t} sx={{
              px: 1.25, py: 0.4, borderRadius: '6px',
              bgcolor: i === 0 ? '#ECFDF5' : 'transparent',
              border: i === 0 ? '1px solid #A7F3D0' : '1px solid #E5E7EB',
            }}>
              <Typography sx={{ fontSize: '0.58rem', fontWeight: 600, color: i === 0 ? '#065F46' : '#9CA3AF' }}>
                {t}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Floating stat card */}
      <Box sx={{
        position: 'absolute', bottom: -28, left: -28,
        bgcolor: 'white', borderRadius: '12px',
        border: '1px solid #E5E7EB',
        boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
        p: 1.75, minWidth: 165,
      }}>
        <Typography sx={{
          fontSize: '0.58rem', fontWeight: 700, color: '#9CA3AF',
          textTransform: 'uppercase', letterSpacing: '0.1em', mb: 0.75,
        }}>
          Prospectos activos
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ fontSize: '1.6rem', fontWeight: 800, color: '#065F46', lineHeight: 1 }}>
            24
          </Typography>
          <Box sx={{ bgcolor: '#ECFDF5', borderRadius: '6px', px: 0.75, py: 0.3 }}>
            <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, color: '#065F46' }}>
              +12% este mes
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default function Hero() {
  return (
    <Box sx={{
      pt: { xs: 8, md: 12 }, pb: { xs: 12, md: 18 },
      background: 'linear-gradient(135deg, #ffffff 0%, #F0FDF8 100%)',
      overflow: 'hidden',
    }}>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 8, md: 10 },
          alignItems: 'center',
        }}>
          {/* Copy */}
          <Box>
            <Box sx={{
              display: 'inline-flex', alignItems: 'center',
              bgcolor: '#ECFDF5', border: '1px solid #A7F3D0',
              borderRadius: '20px', px: 1.5, py: 0.5, mb: 3,
            }}>
              <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, color: '#065F46' }}>
                Plataforma para inmobiliarias
              </Typography>
            </Box>

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '2.4rem', md: '3.2rem' },
                fontWeight: 800, color: '#111827',
                lineHeight: 1.1, letterSpacing: '-0.03em', mb: 2.5,
              }}
            >
              Tu inmobiliaria,{' '}
              <Box component="span" sx={{ color: '#065F46' }}>
                todo en uno.
              </Box>
            </Typography>

            <Typography sx={{
              fontSize: '1rem', color: '#6B7280', lineHeight: 1.75,
              mb: 4, maxWidth: 460,
            }}>
              Gestioná propiedades, contactos y consorcios desde una sola plataforma
              diseñada para el mercado argentino.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component="a" href={APP_URL}
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  bgcolor: '#065F46', color: 'white', borderRadius: '10px',
                  textTransform: 'none', fontWeight: 600, fontSize: '0.9rem',
                  px: 3, py: 1.4,
                  boxShadow: '0 4px 16px rgba(6,95,70,0.25)',
                  '&:hover': { bgcolor: '#047857', boxShadow: '0 6px 20px rgba(6,95,70,0.35)' },
                }}
              >
                Ingresar a mi cuenta
              </Button>

              <Button
                component="a" href="#funcionalidades"
                variant="outlined"
                sx={{
                  borderColor: '#E5E7EB', color: '#374151', borderRadius: '10px',
                  textTransform: 'none', fontWeight: 600, fontSize: '0.9rem',
                  px: 3, py: 1.4,
                  '&:hover': { borderColor: '#065F46', color: '#065F46', bgcolor: '#ECFDF5' },
                }}
              >
                Ver funcionalidades
              </Button>
            </Box>
          </Box>

          {/* Mockup */}
          <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            pt: { xs: 2, md: 4 },
          }}>
            <ProductMockup />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
