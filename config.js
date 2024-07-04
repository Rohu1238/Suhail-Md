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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919064763129";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_23_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDYxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYwLFxuICAgICAgICA2MixcbiAgICAgICAgNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxODksXG4gICAgICAgIDc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDksXG4gICAgICAgIDkwLFxuICAgICAgICA3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgxLFxuICAgICAgICA4NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5LFxuICAgICAgICA2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY0LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDgxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgyLFxuICAgICAgICAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgODIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgNTksXG4gICAgICAgIDYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDgyLFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDYwLFxuICAgICAgICAyNixcbiAgICAgICAgMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRTJtdnoreElBMFRjbkZwZW5HSlpCOThWMlN0R1RDdzJPenVJSjR0Z1p0ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc3OTc3MzkyNDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFDNUVCQUNDNUQwMTk4RkYyRUE4QzRCQzNGNTBEQjVDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDExNzQxNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzc5NzczOTI0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzRFQjc3OTgzN0Y0RjdCMTc2QUE5ODQxNThFRTk5NkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTE3NDE0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpGUDFqemFWUW02ejFpMWFET2ZLR2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjlkYjJlNDEtNDk4ZC00NzQyLWJkYzctNDhlYzM3NDliNjE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgNzksXG4gICAgICAxMTEsXG4gICAgICAyMTEsXG4gICAgICAyMzQsXG4gICAgICAyNTAsXG4gICAgICAyNDIsXG4gICAgICAxMjAsXG4gICAgICAyMzEsXG4gICAgICAxMjMsXG4gICAgICAxMzUsXG4gICAgICAxMDEsXG4gICAgICAxMzUsXG4gICAgICA1MCxcbiAgICAgIDE3NixcbiAgICAgIDI0NCxcbiAgICAgIDkwLFxuICAgICAgNzAsXG4gICAgICA4NCxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDQzLFxuICAgICAgMTk3LFxuICAgICAgMTQ0LFxuICAgICAgMTE2LFxuICAgICAgMTE1LFxuICAgICAgMjE4LFxuICAgICAgMTc4LFxuICAgICAgMjEzLFxuICAgICAgNjAsXG4gICAgICA5MixcbiAgICAgIDE5MCxcbiAgICAgIDEyNCxcbiAgICAgIDI1MCxcbiAgICAgIDE2OSxcbiAgICAgIDExNixcbiAgICAgIDM5LFxuICAgICAgOTQsXG4gICAgICAxNCxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQySFk2VkJTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc3OTc3MzkyNDY6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQwNDI0NjUxNjI4NzcwOjE1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJvdCBVc2Vy8J+ZglwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BYcXJvQURFS0RSbTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaUZqOEFrZUJmZGZvaTVOcXZBQXhhUmlTR3RvWG1RMStHQkhwSXBrV0tXST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFcitOSXpMWFNlL3laOVlWNGZidlB1RmMzeFBPUEx1MlFEZk1FTWtoLzJzczdPalZVRnhYUFRJUUd6azNRTTNrK0FRUkRuNnJGS1UvUWZydldBQVJEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrTEVpWTA4L1Y4Tzl6bEJXODNkMlN0UEZQTUdvRE5iNUxFeHpGSUdweWVkQXJWRDlrVlBQdGM4akdTamFwczd1NTBlTjQ1R0U2Z1htU0cyZVJ6SW5Cdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc3OTc3MzkyNDY6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTE3NDExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQURFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBREUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3bFVnUHdRajNiMjEwazNmQkRUbDd4bjB5TW9hUXRxVDVNU2ZTRWluUmYwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgwNjA3MzcxNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMTE3NDE0NDIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Babai",


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
