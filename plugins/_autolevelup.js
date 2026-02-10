let handler = m => m

let levelling = require('../lib/levelling')

handler.before = function (m) {
  if (!m.sender) return true

  let user = global.DATABASE.data.users[m.sender]
  if (!user) return true
  if (!user.autolevelup) return true

  let before = user.level * 1
  while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    user.level++
  }

  if (before !== user.level) {
    m.reply(`
Felicitaciones, has subido de nivel!
*${before}* -> *${user.level}*
Usa *.profile* para verificar
`.trim())
  }

  return true
}

module.exports = handler

