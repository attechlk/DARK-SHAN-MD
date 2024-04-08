const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/kushansewmina1234/DARK-SHAN-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '94783570188'
global.devs = '94772108460';
global.website = 'https://github.com/kushansewmina1234/DARK-SHAN-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/ee0f303f5da6d86d024e0.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'DARK-SHAN-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'REX' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? DARKSHAN;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU5xU2NFSDVhbVpZMjVkVGEvbk1ncEpoUXJsZjZsNUVrTlpYSm8yY28wST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2I1TGZjRXZxVmtLRW1oNzNacGVqRmxndU9NanVHd2JwdUlpQjhRUEluYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTEpPN0pwaDJzbVplaWE0NVdVWWpXLzY2Z1JzMjBmbHJFQWlUN0x0SFVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhNmV1YVIvT0dEK25PRTdSZ3Brd1Q1UUFncHJza1EzVjAwTERKTm5URHpBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVIOEUyQkhWYXo0SFQzK1BCdFl6M1VYVkR0YXl3bDIrWDB2ZEpIUkNxWEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxldUZWN0tnbzhxK3J5em1UaVkrTnB5czJaYm5lNEk3NVcwblpUWHRJejA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZnNGp3QVNQRjlkRkpGcmhPU3RicjVLSUt5ZWFRYmJtZFh0WkxTZzlGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmdleEFuSmU0VENtNDd5c3krajBBcUxHUEdIeUc2Z0VWeGF1VGRYNi9Wbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhoSWZUdTlyZTFoNWx0QnBaVTZyRUNZS3BkQThSSkxuN2Z1Q1F0bmxLT2syQ1lEZGZGNjNLMDdUL3RUS3RTeDJaNm93RGhrVjJ6SUx0YkpBSWtaSWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUwLCJhZHZTZWNyZXRLZXkiOiJPK0ZNVmQzazFRbDZ6V3l0ZWE2dm4ydVBMZExrM2xZaUFpN2s3eUY4MDJZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgzNTcwMTg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVBQkNGRjEyM0NFRjcxODBCM0EyMkE0RTJFQzI4RTMxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTI1Nzc4MzB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgzNTcwMTg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBODA1N0UyMkQ4QUI0MDU3MzAwNUU5QjJGNjY5OTU4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTI1Nzc4MzJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBObmpTRHZZUUFPY3drMkpBN0wza3ciLCJwaG9uZUlkIjoiNWM3NTQwYTQtYTI2Ny00ZTgyLTg4M2ItZGY5YjI3YzgyNmJlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndXUDJ1NmN5TkFWakN2MkVyTkhUT0JMbkdMND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2ZHgxditSSzgyQmJ4Z0hjOHhHaWcyNW9UazA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOEhRVFFNUk4iLCJtZSI6eyJpZCI6Ijk0NzgzNTcwMTg4OjIxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC3g+C3lOC2r+C3j+C2uOC3iuC2uOC3kiIsImxpZCI6IjE2MTk5Mzc2ODA1ODk1ODoyMUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05IbHZNRUNFSmE2ejdBR0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImdlSDlhY2JobGg2emNDSmNzVURZc3V4akREQ2ZrTFJkVG1KWHhYeEl0UkU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imw4RDdsdFVuc3g3WUt4RXdycmxOLzhiditOV0Z6aHg0T0JNM09nQ2VWdDVYSFlJbzNKV2wwaGZmVC9ZRGVWMnIxNjAzS2hmaS9RYTJsZ2FkUTJQWkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzZCtabEVrTmJCRDRDUVhGT1owQzRKbU1ydnQ2akpiQ21LK1JPT2hmVjRDRE5UdEEvVU5ZL00rQTZpc25RTDM4Y2pPM2dGenVkek53ZElKOWRtNlhqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgzNTcwMTg4OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllIaC9Xbkc0WlllczNBaVhMRkEyTExzWXd3d241QzBYVTVpVjhWOFNMVVIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTI1Nzc4MjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS2tBIn0= : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'DARKSHAN' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'DARK-SHAN-MD' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuck' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-0.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'DARKSHAN',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
