import { Box, Button, Container, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { colors, radius } from '../theme/tokens'

export default function Contact() {
  return (
    <Box id="contacto" sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.surface }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography sx={{
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: colors.accent, mb: 2,
        }}>
          Contacto
        </Typography>
        <Typography sx={{
          fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 800,
          color: colors.primary, letterSpacing: '-0.02em', lineHeight: 1.2, mb: 2,
        }}>
          Hablemos
        </Typography>
        <Typography sx={{
          fontSize: '1rem', color: colors.textMuted, lineHeight: 1.75,
          mb: 5, maxWidth: 480, mx: 'auto',
        }}>
          Si tenés preguntas sobre Granito o querés ver cómo puede ayudarte,
          escribinos y te respondemos a la brevedad.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            component="a"
            href="https://wa.me/5492644159466"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon />}
            variant="contained"
            sx={{
              bgcolor: colors.accent, color: 'white', borderRadius: radius.lg,
              textTransform: 'none', fontWeight: 700, fontSize: '0.9rem',
              px: 3, py: 1.4, boxShadow: 'none',
              '&:hover': { bgcolor: colors.accentHover, boxShadow: 'none' },
            }}
          >
            WhatsApp
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
