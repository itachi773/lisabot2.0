require('./config')

const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require('@whiskeysockets/baileys')

const fs = require('fs')
const path = require('path')
const pino = require('pino')

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./session')

  const conn = makeWASocket({
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    auth: state
  })

  conn.ev.on('creds.update', saveCreds)

  conn.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message) return

    require('./handler')(conn, msg)
  })

  conn.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
      const reason = lastDisconnect?.error?.output?.statusCode
      if (reason !== DisconnectReason.loggedOut) {
        startBot()
      }
    }
    if (connection === 'open') {
      console.log('✅ BOT CONECTADO')
    }
  })
}

startBot()

