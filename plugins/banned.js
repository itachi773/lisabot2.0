let handler = async (m, { conn, text }) => {
  let user

  if (m.quoted) {
    user = m.quoted.sender
  } else if (m.mentionedJid && m.mentionedJid[0]) {
    user = m.mentionedJid[0]
  } else if (text) {
    let number = text.replace(/\D/g, '')
    if (!number) throw '*Formato inválido.*'
    if (number.length > 15) throw '*Formato inválido.*'
    user = number + '@s.whatsapp.net'
  } else {
    throw '*Give a number, tag a user, or reply a message.*'
  }

  let users = global.DATABASE._data.users
  if (!users[user]) users[user] = {}

  if (users[user].banned) {
    return conn.reply(m.chat, '*Target is already banned.*', m)
  }

  users[user].banned = true
  conn.reply(m.chat, '*BANNED!*', m)
}

handler.help = ['ban @user', 'ban reply', 'ban 62xxx']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.owner = true
handler.fail = null

module.exports = handler
