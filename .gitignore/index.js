const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
const prefix = "p!";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

bot.login("NTYwNTA3Njc4MDExNDI0NzY5.D31BKQ.uwxaKOiQf1kmiOQmCcLMtWsZP-I");
