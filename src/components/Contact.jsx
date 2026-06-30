import { Box, Button, Container, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function Contact() {
  return (
    <Box id="contacto" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#065F46' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography sx={{
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: '#6EE7B7', mb: 2,
        }}>
          Contacto
        </Typography>
        <Typography sx={{
          fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 800,
          color: 'white', letterSpacing: '-0.02em', lineHeight: 1.2, mb: 2,
        }}>
          Hablemos
        </Typography>
        <Typography sx={{
          fontSize: '1rem', color: '#A7F3D0', lineHeight: 1.75,
          mb: 5, maxWidth: 480, mx: 'auto',
        }}>
          Si tenés preguntas sobre Granito o querés ver cómo puede ayudarte,
          escribinos y te respondemos a la brevedad.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            component="a"
            href="mailto:contacto@granito.com.ar"
            startIcon={<EmailIcon />}
            variant="contained"
            sx={{
              bgcolor: 'white', color: '#065F46', borderRadius: '10px',
              textTransform: 'none', fontWeight: 700, fontSize: '0.9rem',
              px: 3, py: 1.4, boxShadow: 'none',
              '&:hover': { bgcolor: '#ECFDF5', boxShadow: 'none' },
            }}
          >
            Escribinos por email
          </Button>
          <Button
            component="a"
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon />}
            variant="outlined"
            sx={{
              borderColor: 'rgba(255,255,255,0.35)', color: 'white', borderRadius: '10px',
              textTransform: 'none', fontWeight: 700, fontSize: '0.9rem',
              px: 3, py: 1.4,
              '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.08)' },
            }}
          >
            WhatsApp
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
