const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23437975359";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_54_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MixcbiAgICAgICAgODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc0LFxuICAgICAgICA4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDY0LFxuICAgICAgICA5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDkwLFxuICAgICAgICA4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgODgsXG4gICAgICAgIDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyNyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM1LFxuICAgICAgICA3MixcbiAgICAgICAgMTgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQxLFxuICAgICAgICA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDU5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxODQsXG4gICAgICAgIDczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMwLFxuICAgICAgICA0NSxcbiAgICAgICAgOCxcbiAgICAgICAgODUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MixcbiAgICAgICAgODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1uK25FSFJiY2Q2ZHU0dVpaOTYvWVRRUEpqd21ncGV1ZEgzM0ozWXVMZU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAzNzk3NTM1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkExNTAxQUUxMUE5ODlFN0Y4MDc4QzMxOUZDNTY4QThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2OTMzMjc0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhWbWJxT01UU1lDbzNWVVFxX1FCeUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGUwYmIxZGMtZDljNS00ZjZhLTk1YTItMmVkZGI0MGIyN2U4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDI4LFxuICAgICAgMjQwLFxuICAgICAgODMsXG4gICAgICAyMzEsXG4gICAgICAxOTMsXG4gICAgICAyMDYsXG4gICAgICAxMjAsXG4gICAgICAyMzEsXG4gICAgICAzMyxcbiAgICAgIDIxNCxcbiAgICAgIDUsXG4gICAgICAzLFxuICAgICAgNTcsXG4gICAgICAxMzUsXG4gICAgICA5NyxcbiAgICAgIDI0NyxcbiAgICAgIDUyLFxuICAgICAgNjIsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICA4MSxcbiAgICAgIDEwNyxcbiAgICAgIDI0MSxcbiAgICAgIDEzMCxcbiAgICAgIDIzMixcbiAgICAgIDEwMixcbiAgICAgIDE0OSxcbiAgICAgIDIzLFxuICAgICAgOCxcbiAgICAgIDEyNyxcbiAgICAgIDEyMCxcbiAgICAgIDI0OSxcbiAgICAgIDIyOCxcbiAgICAgIDIsXG4gICAgICAxMjUsXG4gICAgICAyMTksXG4gICAgICA2LFxuICAgICAgMTA0LFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQjk5NktGR1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzc5NzUzNTk6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQaW5uYWNsZSBCZWF1dHkgU3RvcmVcIixcbiAgICBcImxpZFwiOiBcIjI3NzYzMTA2NDg5NTU5MDoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJaWMwczBGRUk2bDJiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklCMzVadGVyVHFRS21wdHR0ZDdoM0hNRzFscHVCd1hCTUdXWGl6cDAzbjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibHJjdFNYQ0dFNXJnNU0ydmtlR2lTZUhVK3ZyZE9pRG1yemtxOGNGSTlLV3RyTDFvcU5uL2xrWmRnTzZxTkxITHdxbFczaFdVTi82VG9XRi8rbmRvQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSDF0TVRYWTZSSWdGMDRmelBBdVpVK2E2eXJNaHI3NFBXTldGMlpHclpLb1pjNjlrWUNCVXc3K2dNK0R5WldPUy8wY1pKNFZ4bysreW41dU4yZjljQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzNzk3NTM1OToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTMzMjY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXFoXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNcWguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjNm54eWhvMGlaOWlDSW51YzlnM1dXVGhZN3hzRVB3a2Q3QzQ1dVlRQ05BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MDUwMDUwNjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjkzMzI3MjE0NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
