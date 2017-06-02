process.stdout.write('\033c');
process.stdout.write('Logging in..')
try{
var Discordie = require('discordie');
}catch(err){
	console.log('You are not Installed the Discordie module! \nI'm help you Installing Discordie...')
	   const exec = require('child_process').exec;
	exec('npm install --save discordie', function(err, stdin, stdout){})
}

// This is the token part, put the bot token, NOT THE CLIENT SECRET
const Token = "Your bot token"
const Events = Discordie.Events;
const client = new Discordie();
const prefix = "october."

client.Dispatcher.on('GATEWAY_READY', () => {
	client.User.setStatus('online', {
		type: 1,
		name: "🎉 Type "+prefix+"help for commands!\nand, i very thanks TemTemmie`s orignal commands! ",
		url: "https:/github.com/TemTemmie/OctoBot/"
	})
	process.stdout.write('\033c');
	console.log('API State => Connected')
	console.log('Name => '  + client.User.username)
	console.log('Discrim => '+client.User.discriminator)
	console.log('Guilds => '+client.Guilds.length)
	console.log('Users => '+client.Users.length)
console.log('Version => '+[+[]]+(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]+[!+[]+!+[]+!+[]+!+[]])

});
	client.connect({
	token: Token,
	autoReconnect: true
});
	client.Dispatcher.on('MESSAGE_CREATE', e => {
		if (e.message.content == prefix+'Bing') {
		e.message.channel.sendMessage('Bong');
		}else{
		if (e.message.content == prefix+'dogs'){
		e.message.channel.sendMessage('https://static.wamiz.fr/images/animaux/chiens/medium/carlin-980.jpg');
		}else{
		if (e.message.content == prefix+'way'){
		e.message.channel.sendMessage('No way.');
		}else{
		if (e.message.content == prefix+'crisis'){
		e.message.channel.sendMessage('no crisis');
		}else{
		if (e.message.content == prefix+'randomsong'){
		e.message.channel.sendMessage('Here is your random song. https://www.youtube.com/watch?v=i6Mg4WSK_v8');
		}else{
		if (e.message.content == prefix+'mystery'){
		e.message.channel.sendMessage('no mystery');
		}else{
		if (e.message.content == prefix+'no'){
		e.message.channel.sendMessage('oh');
		}else{
		if (e.message.content == prefix+'about'){
		e.message.channel.sendMessage('You wont know it and you wont see it');
		}else{
		if (e.message.content == prefix+'oh'){
		e.message.channel.sendMessage('Oh !');
		}else{
		if (e.message.content == prefix+'hello'){
		e.message.channel.sendMessage('Hello');
		}else{
    if (e.message.content == prefix+hi){
    e.message.channel.sendMessage('welcome')
    }else{
    if (e.message.content == prefix+hOi){
    e.message.channel.sendMessage('ah i reached a tem')
    }else{
		if (e.message.content == prefix+'noprog'){
		e.message.channel.sendMessage('I wasnt been programmed for that.');
		}else{
			if(e.message.content == prefix+"help"){
				e.message.channel.sendMessage(`
\`\`\`http
${client.User.username}  -  Commands
${prefix}hello
${prefix}oh
${prefix}noprog
${prefix}about
${prefix}no
${prefix}mystery
${prefix}randomsong
${prefix}crisis
${prefix}way
${prefix}dogs
${prefix}Bing
${prefix)hi
${prefix}hOi
\`\`\`
*\`More commands comming soon\`*
					`)
			}
		}
		
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		})

