module.exports = async (conn, m) => {
  try {
    const msg = m.message
    if (!msg) return

    const from = m.key.remoteJid
    const isGroup = from.endsWith('@g.us')
    const sender = isGroup ? m.key.participant : from

    const body =
      msg.conversation ||
      msg.extendedTextMessage?.text ||
      msg.imageMessage?.caption ||
      msg.videoMessage?.caption ||
      ''

    const prefix = global.prefix || '.'
    if (!body.startsWith(prefix)) return

    const args = body.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()
    const text = args.join(' ')

    // recorrer plugins
    for (let name in global.plugins) {
      const plugin = global.plugins[name]
      if (!plugin || !plugin.command) continue

      const match =
        typeof plugin.command === 'string'
          ? plugin.command === command
          : plugin.command instanceof RegExp
          ? plugin.command.test(command)
          : Array.isArray(plugin.command)
          ? plugin.command.includes(command)
          : false

      if (!match) continue

      await plugin(conn, {
        m,
        from,
        sender,
        isGroup,
        args,
        text,
        command
      })
      break
    }
  } catch (e) {
    console.error(e)
  }
}

