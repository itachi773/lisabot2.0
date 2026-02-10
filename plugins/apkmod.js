let readMore = String.fromCharCode(8206).repeat(4001)

let handler = async m => m.reply(`
〘 APK LIST 𝗠𝗢𝗗 〙
❃❃❃❃❃❃❃❃❃❃❃❃❃❃❃
      :) *01*
❃❃❃❃❃❃❃❃❃❃❃❃❃❃❃
${readMore}
➨ 𝗔𝗹𝗶𝗴𝗵𝘁 𝗠𝗼𝘁𝗶𝗼𝗻 mod
➢ https://apkdone.com/alight-motion/
${readMore}
➨ 𝗞𝗶𝗻𝗲𝗺𝗮𝘀𝘁𝗲𝗿
➢ https://apkdone.com/kinemaster-apk-mods/
${readMore}
➨ 𝗜𝗻𝘀𝗵𝗼𝘁
➢ https://apkdone.com/inshot/
${readMore}
➨ 𝗙𝗶𝗹𝗺𝗼𝗿𝗮𝗚𝗼
➢ https://apkdone.com/filmorago/
${readMore}
➨ 𝗟𝗶𝗴𝗵𝘁𝗿𝗼𝗼𝗺
➢ https://apkdone.com/adobe-lightroom/
${readMore}
➨ 𝗣𝗶𝗰𝘀𝗮𝗿𝘁
➢ https://apkdone.com/picsart-apk-mods/
`.trim())

handler.help = ['apkmod']
handler.tags = ['tools']
handler.command = /^(apkmod|aplikasimod)$/i

module.exports = handler
