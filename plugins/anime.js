let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  try {
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/random.txt')
    let body = await res.text()
    let list = body.split('\n').filter(v => v)
    let url = list[Math.floor(Math.random() * list.length)]
    await conn.sendFile(m.chat, url, 'anime.jpg', '✨ Anime random ✨', m)
  } catch (e) {
    conn.reply(m.chat, 'Error al obtener el anime', m)
  }
}

handler.help = ['anime']
handler.tags = ['downloader']
handler.command = /^anime$/i
handler.exp = 0
handler.limit = true

module.exports = handler

