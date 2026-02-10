module.exports = async (conn, { m, isOwner }) => {
    if (!isOwner)
      return conn.sendMessage(
        m.key.remoteJid,
        { text: global.mess.owner },
        { quoted: m }
      )
  
    conn.sendMessage(
      m.key.remoteJid,
      { text: '👑 Comando ejecutado por el owner' },
      { quoted: m }
    )
  }
  
  module.exports.command = ['owner']
  