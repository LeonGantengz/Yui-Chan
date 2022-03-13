let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085608625102]
│ • Dana [085608625102]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285608625102
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
