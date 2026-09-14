export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false })
    return
  }

  const { context, message, answers, userAgent, timestamp } = req.body || {}

  console.error('[survey-error]', JSON.stringify({
    context: context || 'survey',
    message,
    answers,
    userAgent,
    timestamp: timestamp || new Date().toISOString(),
  }))

  res.status(200).json({ ok: true })
}
