import { Box, Button, Container, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { APP_URL } from '../config'
import { colors, radius, shadow } from '../theme/tokens'

const PROPERTIES = [
  { title: 'Casa en Palermo', price: 'USD 185.000', status: 'Disponible', statusColor: colors.success, statusBg: colors.successBg, statusBorder: colors.successBorder },
  { title: 'Dpto. en Belgrano', price: '$420.000/mes', status: 'Reservada', statusColor: colors.warning, statusBg: colors.warningBg, statusBorder: colors.warningBorder },
  { title: 'Local en Microcentro', price: 'USD 95.000', status: 'Disponible', statusColor: colors.success, statusBg: colors.successBg, statusBorder: colors.successBorder },
]

function ProductMockup() {
  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: 460 }}>
      <Box sx={{
        bgcolor: colors.surface, borderRadius: radius.lg,
        border: `1px solid ${colors.border}`,
        boxShadow: shadow.lg,
        p: 3,
      }}>
        {/* Window chrome */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 2.5 }}>
          {['#FECACA', '#FDE68A', '#A7F3D0'].map(c => (
            <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }} />
          ))}
          <Box sx={{ ml: 1, flex: 1, height: 8, bgcolor: colors.bg, borderRadius: '4px' }} />
        </Box>

        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: colors.primary }}>
            Propiedades
          </Typography>
          <Box sx={{ px: 1.5, py: 0.4, bgcolor: colors.accent, borderRadius: radius.sm }}>
            <Typography sx={{ fontSize: '0.62rem', fontWeight: 600, color: 'white' }}>+ Nueva</Typography>
          </Box>
        </Box>

        {/* Property rows */}
        {PROPERTIES.map((p, i) => (
          <Box key={i} sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            py: 1.25, px: 1.5, mb: 1,
            bgcolor: colors.bg, borderRadius: radius.sm, border: `1px solid ${colors.border}`,
          }}>
            <Box>
              <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, color: colors.primary }}>
                {p.title}
              </Typography>
              <Typography sx={{ fontSize: '0.62rem', color: colors.textMuted, mt: 0.25 }}>
                {p.price}
              </Typography>
            </Box>
            <Box sx={{
              px: 1, py: 0.25, borderRadius: radius.full,
              bgcolor: p.statusBg,
              border: `1px solid ${p.statusBorder}`,
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
              px: 1.25, py: 0.4, borderRadius: radius.sm,
              bgcolor: i === 0 ? colors.accentSubtle : 'transparent',
              border: i === 0 ? `1px solid ${colors.accentSoft}` : `1px solid ${colors.border}`,
            }}>
              <Typography sx={{ fontSize: '0.58rem', fontWeight: 600, color: i === 0 ? colors.accent : colors.textMuted }}>
                {t}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Floating stat card */}
      <Box sx={{
        position: 'absolute', bottom: -28, left: -28,
        bgcolor: colors.surface, borderRadius: radius.md,
        border: `1px solid ${colors.border}`,
        boxShadow: shadow.md,
        p: 1.75, minWidth: 165,
      }}>
        <Typography sx={{
          fontSize: '0.58rem', fontWeight: 700, color: colors.textMuted,
          textTransform: 'uppercase', letterSpacing: '0.1em', mb: 0.75,
        }}>
          Prospectos activos
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ fontSize: '1.6rem', fontWeight: 800, color: colors.accent, lineHeight: 1 }}>
            24
          </Typography>
          <Box sx={{ bgcolor: colors.accentSubtle, borderRadius: radius.sm, px: 0.75, py: 0.3 }}>
            <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, color: colors.accent }}>
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
      background: `linear-gradient(135deg, #ffffff 0%, ${colors.bg} 100%)`,
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute', top: -120, right: -80,
        width: 480, height: 480, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(251,60,0,0.10) 0%, transparent 65%)',
        pointerEvents: 'none',
      },
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 8, md: 10 },
          alignItems: 'center',
        }}>
          {/* Copy */}
          <Box>
            

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '2.4rem', md: '3.2rem' },
                fontWeight: 800, color: colors.primary,
                lineHeight: 1.1, letterSpacing: '-0.03em', mb: 2.5,
              }}
            >
              Un sistema pensado para el{' '}
              <Box component="span" sx={{
                background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentSoft} 100%)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                rubro inmobiliario
              </Box>
            </Typography>

            <Typography sx={{
              fontSize: '1rem', color: colors.textMuted, lineHeight: 1.75,
              mb: 4, maxWidth: 460,
            }}>
              Trabajamos para automatizar y optimizar tus procesos del día a día en el
              rubro inmobiliario. Con Granito vas a lograr mayor transparencia, pagos
              automatizados, gestión de avisos, administración de contactos y mucho
              más.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component="a" href={APP_URL}
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  bgcolor: colors.accent, color: 'white', borderRadius: radius.lg,
                  textTransform: 'none', fontWeight: 600, fontSize: '0.9rem',
                  px: 3, py: 1.4,
                  boxShadow: shadow.accent,
                  '&:hover': { bgcolor: colors.accentHover, boxShadow: shadow.accentHover },
                }}
              >
                Ingresar a mi cuenta
              </Button>

              <Button
                component="a" href="#funcionalidades"
                variant="outlined"
                sx={{
                  borderColor: colors.borderStrong, color: colors.text, borderRadius: radius.lg,
                  borderWidth: 1.5,
                  textTransform: 'none', fontWeight: 600, fontSize: '0.9rem',
                  px: 3, py: 1.4,
                  '&:hover': { borderColor: colors.primary, borderWidth: 1.5, color: colors.primary, bgcolor: 'rgba(20,43,33,0.04)' },
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
