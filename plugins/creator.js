import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Its Me Ferr\nNICKNAME:👑 Owner Leon Botz\nORG:Its Ne Ferr\nTITLE:soft\nitem1.TEL;waid=62823504965328:+62 823-5049-65328\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://www.youtube.com/\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:ferrjb146@gmail.com\nitem3.X-ABLabel:💌 Mail Owner LeonBot\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🐦 15-05-2005\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: global.fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Its My Owner *${conn.user.name}* Bro`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler