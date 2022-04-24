const Discord=require("discord.js");

const client=new Discord.Client();

client.on("message", message=>{
  console.log("Gelen Mesaj"+message.content)

  if(message.content==="selam")
  message.channel.send("merhaba")

  if(message.content==='avatar')
  message.channel.send(message.author.displayAvatarURL())

  if(message.content==='miyav')
  message.channel.send("merhaba mırnav :black_cat: ")
})

client.on("message", async message=>{
  if(message.content===('rickroll')) {
  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
    const ytdl = require('ytdl-core')
    connection.play(ytdl(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`, {filter: 'audioonly'}))
    if(message.content===('dur lan')) {
      voice.channel.leave
    }

  }
}

})

client.login("OTY0NTc5NTM0MDcyNTkwMzQ3.YlmssQ.O4YrJ6sDC1Y2UPIcog62mOGS4nY")
