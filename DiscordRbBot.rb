require 'discordrb'

bot = Discordrb::Bot.new token: '<token here>', client_id: 168123456789123456

bot.message(with_text: '!ping!') do |event|
  event.respond 'Pong!
bot.message(with_text: '!beep') do |event|
  event.respond "Boop ! :D'
end

bot.run
