let handler = async (m, { conn, args, usedPrefix, command }) => {
  let chat = global.DATABASE._data.chats[m.chat]
  if (!args[0]) {
    return conn.reply(
      m.chat,
      `*¡Formato incorrecto!*\n\n*${usedPrefix + command} on*\n*${usedPrefix + command} off*`,
      m
    )
  }

  if (args[0].toLowerCase() === 'on') {
    if (chat.novirtex) return conn.reply(m.chat, '*Anti Virtex ya está activado en este grupo.*', m)
    chat.novirtex = true
    return conn.reply(m.chat, '*Anti Virtex activado con éxito.*', m)
  }

  if (args[0].toLowerCase() === 'off') {
    if (!chat.novirtex) return conn.reply(m.chat, '*Anti Virtex ya está desactivado en este grupo.*', m)
    chat.novirtex = false
    return conn.reply(m.chat, '*Anti Virtex desactivado con éxito.*', m)
  }

  return conn.reply(
    m.chat,
    `*¡Formato incorrecto!*\n\n*${usedPrefix + command} on*\n*${usedPrefix + command} off*`,
    m
  )
}

handler.help = ['antivirtex on/off']
handler.tags = ['group']
handler.command = /^antivirtex$/i
handler.admin = true
handler.botAdmin = true
handler.exp = 0
handler.limit = false

module.exports = handler
