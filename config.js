//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://postimg.cc/MMCxm6dS";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "923106273552";
global.style = process.env.STYLE || "2";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "trur";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://postimg.cc/MMCxm6dS"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/";
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUI2clhMbGYwbFBIUmFiT25LWTZweFh6L3BKT2xweXZyV2Q5aTJRdWFXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU5IUXlhZzhEejVVNkFOR0NMT2dZdDdEc2NZY3FMVUI1NGZ1NVpKVjVYND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjUGNhOGd6bUhxTlB6a2pnc2IzajdJejlIeDFBbWpNalB1djc5UExjajBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUFJTZHlQNmZEMExhcTdEOStWSlhUczUvSkpBdzZxOEwvMTZneHk0VVZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9JYVBHbzlQOWFoejVxcnpRUDA4SEdZb2hGeWp3djducUp4eXh6RGRvMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZWRDNRSnYwa0oyRXdwT2tTM1o3eXM1dFl4YlZOeWY2Zk14ODIzN1RSMkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFB5Y3BoT2VpMlJMSU5PU1RiRy9vUWFMYTk5SFNHcGp4d0hPelU0dmVrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGFyMU9QNzEvcG8rUjVyQkFuSWVrTEttcGNEdXkxOUF5TFpzMHRoNjUzYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdFa0NKS3RVc3NNL3R0VElOSmM4QzNnUkQ1TlprRi84SHdtYjhGanZhTEo3cE1OaHlNUEV1MjlDZ2dhZjBKaGlDYkZXOUVJaWliWHRqRlo0L05Vc0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoiL2JDSGN1a0NzMVZkOEhGVGozMnd4Q0tSZUF2UzVaQ1hEYmpOZDdnZjdmYz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMDYyNzM1NTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMwRjhEQjYyQ0MzRDc3QTM0NTdDQTI1QTE5RTIyNzgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTExOTg3Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTA2MjczNTUyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQTlEREYxRUQyQTk3QzA4NDQzRjc4QTMzREYzMEYzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTkxMTk4NzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEwNjI3MzU1MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzFDRjA0OTA5REE5OTY2REMyQUFEQzNERkVCNEEzNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5MTE5ODgwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFUDVFRVQxMSIsIm1lIjp7ImlkIjoiOTIzMTA2MjczNTUyOjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMDAwNjAwOTY3NTc4NjQ6NkBsaWQiLCJuYW1lIjoiVW5rbm93buKAvO+4j+KAvO+4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmJoMDVJRUVQK1Q2TVlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic2dYK3RSQklQWFRER0MzcE9GcWRWeVpXVFNRWnVpVWJBUTVZTEV2MEkxOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiakFNazhlaGhPZE1QbnBnSjd3WDAxNWRXWXY0dUQrVDh0NzZFaVFTSWJ4MS9mYnZxRWJOdTJzR3JGRUYweUtNSzhSUjF4WHFXM2ZCQ09ZeUVsOVN4REE9PSIsImRldmljZVNpZ25hdHVyZSI6ImZsdFBDS3dLelZ5c2NvL3pqMjRuamsxMGxUYS90cGhPMmVGREJlQmlBUm81elprSm5Xd2g3SGhEWHhwVWN5UkJoQWF1c1IvMk1VSEkvRGgyTzd4OUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTA2MjczNTUyOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYklGL3JVUVNEMTB3eGd0NlRoYW5WY21WazBrR2JvbEd3RU9XQ3hMOUNOZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5MTE5ODc0LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJ2WSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "𝐃𝐑𝐊- 𝙎-𝙏𝞢𝞜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
