let handler = async (m, { conn }) => {
  await conn.sendFile(
    m.chat,
    './media/Buenos días.mp3',
    'Buenos_dias.mp3',
    null,
    m
  )
}

handler.command = /^(bd)$/i
handler.fail = null
handler.exp = 0

module.exports = handler

