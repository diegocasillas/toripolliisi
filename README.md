<div>
  <h1 align="center">This is <b>Trackpoth</b></h2>
  <p align="center">
    <img align="center" width="150" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Robot-clip-art-book-covers-feJCV3-clipart.png">
  </p>
  <h2 align="center">Reticueva's Discord bot</h2>
</div>

**Trackpoth** is a lovely bot that lives in Reticueva's Discord. He plays music, greets you, answers your questions and he's learning to do more cool and funny things! Sadly, he only speaks Spanish for now...

## Requirements

* Node.js >= 8.6.0
* A Discord application

## Installation

### Create a Discord application and get your token and ID

[Follow this guide to create the application and get your token.](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)

To get your ID, type `\@[your-username]` in a Discord Chat. You will get a message like this: `<@1234567890>`.

*Example: Your user name is `johndoe`, so you type `\@johndoe` and get the following message `<@1234567890>`. Therefore, your ID is `1234567890`.*

**REMEMBER TO KEEP THE TOKEN SECRET!**

### Set up the configuration file

Copy `.env.example.json` to `.env.json` and add your token and owner ID.

```json
{
    "owner": "1234567890",
    "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

### Install and run

`npm install && npm start`

## Have fun with Trackpoth!

To see a list of commands simply type `!help` or `@Trackpoth help` in the server text channel.

*Example: `!greeting` or `@Trackpoth greeting`*
