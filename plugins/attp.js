let handler = async (m, { conn, text }) => {
  if (!text) throw 'Uhm… ¿y el texto?'

  let url = global.API('xteam', '/attp', { text })
  await conn.sendFile(
    m.chat,
    url,
    'attp.webp',
    '',
    m,
    false,
    { asSticker: true }
  )
}

handler.help = ['attp <texto>']
handler.tags = ['sticker']
handler.command = /^attp$/i
handler.exp = 0
handler.limit = true
handler.fail = null

module.exports = handler


