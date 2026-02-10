let handler = async (m, { conn, args }) => {
  let users = global.DATABASE._data.users
  let lim = args && args[0] ? parseInt(args[0]) : 10
  if (isNaN(lim)) lim = 10

  for (let user in users) {
    users[user].warning = lim
  }

  conn.reply(m.chat, `*Advertencias restablecidas correctamente (${lim} por usuario)*`, m)
}

handler.command = /^(reset)$/i
handler.rowner = true
handler.exp = 0
handler.fail = null

module.exports = handler

