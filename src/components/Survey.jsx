import { useEffect, useState } from 'react'
import { Box, Button, CircularProgress, Fade, TextField, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded'
import LinkRoundedIcon from '@mui/icons-material/LinkRounded'
import { colors, radius, shadow, gradients } from '../theme/tokens'
import { SURVEY_ENDPOINT } from '../config'

const OTHER_OPTION = 'Otros'
const NO_EXPENSAS_OPTION = 'No se pagan expensas'

const QUESTIONS = [
  {
    id: 'vivienda',
    type: 'single',
    question: 'Actualmente vivís en:',
    options: ['Departamento', 'Casa - Barrio privado', 'Casa'],
  },
  {
    id: 'cobro_expensas',
    type: 'single',
    question: '¿Quién se encarga de cobrar las expensas en tu barrio/consorcio?',
    options: ['Un administrador del consorcio', 'Un vecino', 'La inmobiliaria con la que alquilo', NO_EXPENSAS_OPTION],
  },
  {
    id: 'metodo_pago',
    type: 'single',
    question: '¿De qué manera pagás tus expensas?',
    options: ['Transferencia o Mercado Pago', 'Efectivo', 'Tarjetas'],
  },
  {
    id: 'atrasos',
    type: 'single',
    question: '¿Con qué frecuencia te atrasás en tus pagos?',
    options: ['Siempre pago al día', 'Entre 1 a 7 días', 'Más de 7 días'],
  },
  {
    id: 'valor_expensas',
    type: 'single',
    question: '¿Cuál es el valor aproximado de tus expensas?',
    options: ['Menos de $30.000', 'Entre $30.000 y 50.000', 'Entre 50.000 y 90.000', 'Más de 90.000'],
  },
  {
    id: 'falta_gestion',
    type: 'multi',
    question: 'En cuanto a la gestión y administración de tu consorcio, ¿qué sentís que falta?',
    options: [
      'Transparencia en los gastos del consorcio',
      'Facilidad de medios de pago',
      'Avisos sobre obras y refacciones',
      'Comunicación con el/la administrador/a',
      OTHER_OPTION,
    ],
  },
]

const ADVANCE_DELAY = 380

function useCopyLink() {
  const [copied, setCopied] = useState(false)
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard no disponible, no hacemos nada
    }
  }
  return [copied, copyLink]
}

function ProgressBar({ answered, total }) {
  const pct = total > 0 ? Math.round((answered / total) * 100) : 0
  return (
    <Box sx={{ mb: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 1 }}>
        <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.textMuted }}>
          Tu progreso
        </Typography>
        <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: colors.accent }}>
          {answered} de {total} respondidas
        </Typography>
      </Box>
      <Box sx={{ height: 6, borderRadius: radius.full, bgcolor: colors.border, overflow: 'hidden' }}>
        <Box sx={{
          height: '100%', width: `${pct}%`, borderRadius: radius.full,
          background: `linear-gradient(90deg, ${colors.accentSoft}, ${colors.accent})`,
          transition: 'width 0.3s ease',
        }} />
      </Box>
    </Box>
  )
}

function OptionRow({ label, selected, disabled, onClick, shape = 'circle' }) {
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      disabled={disabled}
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        width: '100%', textAlign: 'left',
        px: 2.5, py: 1.75, mb: 1.25,
        borderRadius: radius.md,
        border: `1.5px solid ${selected ? colors.accent : colors.borderStrong}`,
        bgcolor: selected ? colors.accentSubtle : colors.surface,
        cursor: disabled ? 'default' : 'pointer',
        fontFamily: 'inherit',
        transition: 'all 0.15s ease',
        '@media (hover: hover)': {
          '&:hover': disabled || selected ? {} : { borderColor: colors.accentSoft },
        },
      }}
    >
      <Typography sx={{ fontSize: '0.92rem', fontWeight: 600, color: selected ? colors.accent : colors.text }}>
        {label}
      </Typography>
      <Box sx={{
        width: 20, height: 20, flexShrink: 0,
        borderRadius: shape === 'circle' ? '50%' : radius.xs,
        border: `1.5px solid ${selected ? colors.accent : colors.borderStrong}`,
        bgcolor: selected ? colors.accent : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.15s ease',
      }}>
        {selected && shape === 'circle' && <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'white' }} />}
        {selected && shape === 'square' && <CheckRoundedIcon sx={{ fontSize: 14, color: 'white' }} />}
      </Box>
    </Box>
  )
}

function SingleQuestion({ options, value, disabled, onSelect }) {
  return (
    <Box>
      {options.map((option) => (
        <OptionRow
          key={option}
          label={option}
          shape="circle"
          selected={value === option}
          disabled={disabled}
          onClick={() => onSelect(option)}
        />
      ))}
    </Box>
  )
}

function MultiQuestion({ options, initialSelected, initialOther, onContinue }) {
  const [selected, setSelected] = useState(initialSelected || [])
  const [otherText, setOtherText] = useState(initialOther || '')

  function toggle(option) {
    setSelected((prev) => (prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]))
  }

  const hasOther = selected.includes(OTHER_OPTION)
  const canContinue = selected.length > 0 && (!hasOther || otherText.trim().length > 0)

  return (
    <Box>
      {options.map((option) => (
        <OptionRow
          key={option}
          label={option}
          shape="square"
          selected={selected.includes(option)}
          onClick={() => toggle(option)}
        />
      ))}

      {hasOther && (
        <TextField
          autoFocus
          placeholder="Contanos qué te gustaría..."
          value={otherText}
          onChange={(e) => setOtherText(e.target.value)}
          fullWidth
          size="small"
          sx={{
            mb: 1.25,
            '& .MuiOutlinedInput-root': {
              borderRadius: radius.md, fontSize: '0.88rem', fontFamily: 'inherit',
              '& fieldset': { borderColor: colors.borderStrong },
              '&:hover fieldset': { borderColor: colors.accent },
              '&.Mui-focused fieldset': { borderColor: colors.accent },
            },
          }}
        />
      )}

      <Button
        onClick={() => onContinue(selected, otherText)}
        disabled={!canContinue}
        variant="contained"
        fullWidth
        sx={{
          mt: 1, bgcolor: colors.accent, color: 'white', borderRadius: radius.lg,
          textTransform: 'none', fontWeight: 700, fontSize: '0.9rem',
          py: 1.3, boxShadow: 'none',
          '&:hover': { bgcolor: colors.accentHover },
          '&.Mui-disabled': { bgcolor: colors.border, color: colors.textMuted },
        }}
      >
        Continuar
      </Button>
    </Box>
  )
}

const textFieldSx = {
  mb: 2,
  '& .MuiOutlinedInput-root': {
    borderRadius: radius.md, fontSize: '0.92rem', fontFamily: 'inherit',
    '& fieldset': { borderColor: colors.borderStrong },
    '&:hover fieldset': { borderColor: colors.accent },
    '&.Mui-focused fieldset': { borderColor: colors.accent },
  },
}

function ContactStep({ onSubmit, onSkip }) {
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')

  return (
    <Box>
      <Typography sx={{
        fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: colors.accent, mb: 1.5,
      }}>
        Opcional
      </Typography>
      <Typography sx={{
        fontSize: { xs: '1.2rem', md: '1.35rem' }, fontWeight: 800,
        color: colors.primary, lineHeight: 1.3, mb: 1.5,
      }}>
        Tenemos la solución para la gestión de tu consorcio
      </Typography>
      <Typography sx={{ fontSize: '0.88rem', color: colors.textMuted, lineHeight: 1.65, mb: 3 }}>
        Si querés, dejanos el número de la empresa o persona que administra tu consorcio y nos contactamos.
      </Typography>

      <TextField
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        fullWidth
        size="small"
        sx={textFieldSx}
      />
      <TextField
        label="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        fullWidth
        size="small"
        sx={{ ...textFieldSx, mb: 3 }}
      />

      <Button
        onClick={() => onSubmit({ nombre, telefono })}
        disabled={!(nombre.trim() || telefono.trim())}
        variant="contained"
        fullWidth
        sx={{
          bgcolor: colors.accent, color: 'white', borderRadius: radius.lg,
          textTransform: 'none', fontWeight: 700, fontSize: '0.9rem',
          py: 1.3, mb: 1.5, boxShadow: shadow.accent,
          '&:hover': { bgcolor: colors.accentHover, boxShadow: shadow.accentHover },
          '&.Mui-disabled': { bgcolor: colors.border, color: colors.textMuted, boxShadow: 'none' },
        }}
      >
        Enviar
      </Button>
      <Button
        onClick={onSkip}
        fullWidth
        sx={{
          color: colors.textMuted, textTransform: 'none', fontWeight: 600, fontSize: '0.88rem',
          '&:hover': { bgcolor: 'transparent', color: colors.primary },
        }}
      >
        Por ahora no
      </Button>
    </Box>
  )
}

function IntroScreen({ onStart }) {
  const [copied, copyLink] = useCopyLink()

  return (
    <Fade in>
      <Box sx={{
        bgcolor: colors.surface, borderRadius: radius.xl, boxShadow: shadow.lg,
        p: { xs: 3.5, md: 5 }, textAlign: 'center',
      }}>
        <Typography sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 800, color: colors.primary, mb: 1.5, lineHeight: 1.25 }}>
          ¡Hola! Gracias por ayudarnos completando esta encuesta
        </Typography>
        <Typography sx={{ fontSize: '0.92rem', color: colors.textMuted, lineHeight: 1.75, mb: 4 }}>
          Antes de avanzar es importante que sepas algunas cosas:
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{
              width: 32, height: 32, borderRadius: radius.sm, flexShrink: 0,
              bgcolor: colors.accentSubtle,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <LockRoundedIcon sx={{ fontSize: 17, color: colors.accent }} />
            </Box>
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: colors.text, textAlign: 'left' }}>
              No guardamos ningún dato personal
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{
              width: 32, height: 32, borderRadius: radius.sm, flexShrink: 0,
              bgcolor: colors.accentSubtle,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <ChecklistRoundedIcon sx={{ fontSize: 17, color: colors.accent }} />
            </Box>
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: colors.text, textAlign: 'left' }}>
              Todas las preguntas son de opción múltiple
            </Typography>
          </Box>
        </Box>

        <Button
          onClick={onStart}
          variant="contained"
          fullWidth
          sx={{
            bgcolor: colors.accent, color: 'white', borderRadius: radius.lg,
            textTransform: 'none', fontWeight: 700, fontSize: '0.95rem',
            py: 1.5, mb: 4, boxShadow: shadow.accent,
            '&:hover': { bgcolor: colors.accentHover, boxShadow: shadow.accentHover },
          }}
        >
          Comenzar encuesta
        </Button>

        <Box sx={{ borderTop: `1px solid ${colors.border}`, pt: 3 }}>
          <Typography sx={{ fontSize: '0.85rem', color: colors.text, fontWeight: 600, mb: 1.5 }}>
            Nos ayuda mucho que compartas esta encuesta con tus conocidos
          </Typography>
          <Box sx={{ display: 'flex', gap: 1.25, justifyContent: 'center' }}>
            <Button
              onClick={copyLink}
              startIcon={<LinkRoundedIcon sx={{ fontSize: 18 }} />}
              sx={{
                borderRadius: radius.md, textTransform: 'none', fontWeight: 600, fontSize: '0.82rem',
                color: copied ? colors.success : colors.text,
                border: `1.5px solid ${copied ? colors.successBorder : colors.borderStrong}`,
                bgcolor: copied ? colors.successBg : 'transparent',
                px: 2, py: 0.9,
                '&:hover': { borderColor: colors.primary, bgcolor: 'rgba(20,43,33,0.04)' },
              }}
            >
              {copied ? '¡Copiado!' : 'Copiar link'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Fade>
  )
}

function DoneScreen() {
  const [copied, copyLink] = useCopyLink()
  return (
    <Fade in>
      <Box sx={{
        bgcolor: colors.surface, borderRadius: radius.xl, boxShadow: shadow.lg,
        p: { xs: 4, md: 6 }, textAlign: 'center',
      }}>
        <Box sx={{
          width: 64, height: 64, borderRadius: '50%', mx: 'auto', mb: 3,
          background: gradients.greenOrange,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <CheckCircleRoundedIcon sx={{ fontSize: 34, color: 'white' }} />
        </Box>
        <Typography sx={{ fontSize: '1.4rem', fontWeight: 800, color: colors.primary, mb: 1.5 }}>
          ¡Gracias por responder esta encuesta!
        </Typography>
        <Typography sx={{ fontSize: '0.92rem', color: colors.textMuted, lineHeight: 1.7, mb: 4 }}>
          Podés compartirla con tus vecinos para que conozcamos su experiencia.
        </Typography>
        <Button
          onClick={copyLink}
          startIcon={<LinkRoundedIcon sx={{ fontSize: 18 }} />}
          variant="contained"
          fullWidth
          sx={{
            bgcolor: copied ? colors.success : colors.accent, color: 'white', borderRadius: radius.lg,
            textTransform: 'none', fontWeight: 700, fontSize: '0.9rem',
            py: 1.3, mb: 1.5, boxShadow: copied ? 'none' : shadow.accent,
            '&:hover': { bgcolor: copied ? colors.success : colors.accentHover, boxShadow: copied ? 'none' : shadow.accentHover },
          }}
        >
          {copied ? '¡Link copiado!' : 'Compartir link'}
        </Button>
        <Button
          component="a" href="/"
          fullWidth
          sx={{
            color: colors.textMuted, textTransform: 'none', fontWeight: 600, fontSize: '0.85rem',
            '&:hover': { bgcolor: 'transparent', color: colors.primary },
          }}
        >
          Volver al inicio
        </Button>
      </Box>
    </Fade>
  )
}

export default function Survey() {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [transitioning, setTransitioning] = useState(false)
  const [status, setStatus] = useState('intro') // intro | answering | contact | submitting | done | error

  const total = QUESTIONS.length
  const answeredCount = Object.keys(answers).length
  const currentQuestion = QUESTIONS[index]

  function reportError(context, message, extraAnswers) {
    fetch('/api/log-error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        context,
        message,
        answers: extraAnswers,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {
      // si tampoco se puede loguear, no hay mucho más para hacer
    })
  }

  useEffect(() => {
    if (!SURVEY_ENDPOINT) return
    let pending
    try {
      pending = JSON.parse(localStorage.getItem('granito_survey_failed') || 'null')
    } catch {
      pending = null
    }
    if (pending?.answers) {
      fetch(SURVEY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ timestamp: pending.timestamp, answers: pending.answers }),
      }).then((res) => {
        if (res.ok) {
          try {
            localStorage.removeItem('granito_survey_failed')
          } catch {
            // localStorage no disponible, no hacemos nada
          }
        } else {
          reportError('retry-on-load', `Respuesta no OK (status ${res.status})`, pending.answers)
        }
      }).catch((err) => {
        reportError('retry-on-load', err?.message || String(err), pending.answers)
      })
    }
  }, [])

  async function submitAnswers(finalAnswers) {
    setStatus('submitting')
    if (!SURVEY_ENDPOINT) {
      console.warn('SURVEY_ENDPOINT no configurado: la respuesta no se guardó en Sheets.')
      setStatus('done')
      return
    }
    try {
      const res = await fetch(SURVEY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ timestamp: new Date().toISOString(), answers: finalAnswers }),
      })
      if (!res.ok) throw new Error(`Respuesta no OK (status ${res.status})`)
      try {
        localStorage.removeItem('granito_survey_failed')
      } catch {
        // localStorage no disponible, no hacemos nada
      }
      setStatus('done')
    } catch (err) {
      const message = err?.message || String(err)
      console.error('Error al guardar la encuesta:', message)
      try {
        localStorage.setItem('granito_survey_failed', JSON.stringify({
          message, timestamp: new Date().toISOString(), answers: finalAnswers,
        }))
      } catch {
        // localStorage no disponible, no hacemos nada
      }
      reportError('submit', message, finalAnswers)
      setStatus('error')
    }
  }

  function goToNextOrContact(nextAnswers) {
    if (index < total - 1) {
      setIndex((i) => i + 1)
      setTransitioning(false)
    } else {
      setAnswers(nextAnswers)
      setStatus('contact')
    }
  }

  function handleSelect(value) {
    if (transitioning) return
    const nextAnswers = { ...answers, [currentQuestion.id]: value }
    setAnswers(nextAnswers)
    setTransitioning(true)
    if (currentQuestion.id === 'cobro_expensas' && value === NO_EXPENSAS_OPTION) {
      setTimeout(() => {
        setAnswers(nextAnswers)
        submitAnswers({ ...nextAnswers, contacto_nombre: '', contacto_telefono: '' })
      }, ADVANCE_DELAY)
      return
    }
    setTimeout(() => goToNextOrContact(nextAnswers), ADVANCE_DELAY)
  }

  function handleMultiContinue(selected, otherText) {
    const combined = selected.filter((s) => s !== OTHER_OPTION)
    if (selected.includes(OTHER_OPTION) && otherText.trim()) {
      combined.push(`${OTHER_OPTION}: ${otherText.trim()}`)
    }
    const nextAnswers = { ...answers, [currentQuestion.id]: combined.join(', ') }
    setAnswers(nextAnswers)
    goToNextOrContact(nextAnswers)
  }

  function handleBack() {
    if (transitioning) return
    if (status === 'contact') {
      setStatus('answering')
      return
    }
    if (index === 0) return
    setIndex((i) => i - 1)
  }

  function handleContactSubmit({ nombre, telefono }) {
    submitAnswers({ ...answers, contacto_nombre: nombre || '', contacto_telefono: telefono || '' })
  }

  function handleContactSkip() {
    submitAnswers({ ...answers, contacto_nombre: '', contacto_telefono: '' })
  }

  function handleRetry() {
    submitAnswers(answers)
  }

  const showBack = status === 'contact' || (status === 'answering' && index > 0)

  return (
    <Box sx={{
      minHeight: '100vh', bgcolor: colors.bg,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      px: 3, py: { xs: 6, md: 10 },
    }}>
      {/* Header mínimo */}
      <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, textDecoration: 'none', mb: { xs: 5, md: 7 } }}>
        <Box component="img" src="/logo.svg" alt="Granito" sx={{ height: 30, width: 'auto' }} />
        <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, color: colors.primary, letterSpacing: '-0.03em' }}>
          Granito
        </Typography>
      </Box>

      <Box sx={{ width: '100%', maxWidth: 480 }}>
        {status === 'intro' && (
          <IntroScreen onStart={() => setStatus('answering')} />
        )}

        {status === 'done' && <DoneScreen />}

        {status === 'submitting' && (
          <Fade in>
            <Box sx={{
              bgcolor: colors.surface, borderRadius: radius.xl, boxShadow: shadow.lg,
              p: { xs: 4, md: 6 }, textAlign: 'center',
            }}>
              <CircularProgress size={32} thickness={4} sx={{ color: colors.accent, mb: 2.5 }} />
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: colors.text }}>
                Enviando tus respuestas...
              </Typography>
            </Box>
          </Fade>
        )}

        {status === 'error' && (
          <Fade in>
            <Box sx={{
              bgcolor: colors.surface, borderRadius: radius.xl, boxShadow: shadow.lg,
              p: { xs: 4, md: 6 }, textAlign: 'center',
            }}>
              <ErrorOutlineRoundedIcon sx={{ fontSize: 44, color: colors.warning, mb: 2 }} />
              <Typography sx={{ fontSize: '1.15rem', fontWeight: 800, color: colors.primary, mb: 1.5 }}>
                No pudimos guardar tu respuesta
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: colors.textMuted, lineHeight: 1.7, mb: 4 }}>
                Puede haber sido un problema de conexión. Probá de nuevo en un momento.
              </Typography>
              <Button
                onClick={handleRetry}
                variant="contained"
                sx={{
                  bgcolor: colors.accent, color: 'white', borderRadius: radius.lg,
                  textTransform: 'none', fontWeight: 600, fontSize: '0.9rem',
                  px: 3, py: 1.2, boxShadow: 'none',
                  '&:hover': { bgcolor: colors.accentHover },
                }}
              >
                Reintentar
              </Button>
            </Box>
          </Fade>
        )}

        {(status === 'answering' || status === 'contact') && (
          <>
            {status !== 'contact' && <ProgressBar answered={answeredCount} total={total} />}

            <Fade in key={status === 'contact' ? 'contact' : index}>
              <Box sx={{
                bgcolor: colors.surface, borderRadius: radius.xl, boxShadow: shadow.lg,
                p: { xs: 3.5, md: 5 },
              }}>
                {status === 'contact' ? (
                  <ContactStep
                    onSubmit={handleContactSubmit}
                    onSkip={handleContactSkip}
                  />
                ) : (
                  <>
                    <Typography sx={{
                      fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: colors.accent, mb: 1.5,
                    }}>
                      Pregunta {index + 1} de {total}
                    </Typography>

                    <Typography sx={{
                      fontSize: { xs: '1.2rem', md: '1.35rem' }, fontWeight: 800,
                      color: colors.primary, lineHeight: 1.3, mb: 3.5,
                    }}>
                      {currentQuestion.question}
                    </Typography>

                    {currentQuestion.type === 'multi' ? (
                      <MultiQuestion
                        key={currentQuestion.id}
                        options={currentQuestion.options}
                        onContinue={handleMultiContinue}
                      />
                    ) : (
                      <SingleQuestion
                        options={currentQuestion.options}
                        value={answers[currentQuestion.id]}
                        disabled={transitioning}
                        onSelect={handleSelect}
                      />
                    )}
                  </>
                )}

                {showBack && (
                  <Button
                    onClick={handleBack}
                    disabled={transitioning}
                    startIcon={<ArrowBackIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      mt: 2, color: colors.textMuted, textTransform: 'none',
                      fontWeight: 600, fontSize: '0.82rem',
                      '&:hover': { bgcolor: 'transparent', color: colors.primary },
                    }}
                  >
                    Volver
                  </Button>
                )}
              </Box>
            </Fade>
          </>
        )}
      </Box>
    </Box>
  )
}
