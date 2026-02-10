let handler = m => m

let linkRegex = /chat\.whatsapp\.com\/([0-9A-Za-z]{20,24})/i

handler.before = function (m, { conn, user }) {
  if (!m.isGroup) return true
  if (m.isBaileys && m.fromMe) return true

  let chat = global.DATABASE.data.chats[m.chat]
  if (!chat || !chat.antiLink) return true

  let isGroupLink = linkRegex.exec(m.text)
  if (!isGroupLink) return true

  if (user.isAdmin) return true
  if (!global.opts['restrict']) return true

  m.reply('Adios zorra:D ojala nunca vuelvas')
  conn.groupRemove(m.chat, [m.sender])

  return true
}

module.exports = handler

