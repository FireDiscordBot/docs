---
description: >-
  Here is where I attempt to log changes to Fire but then end up forgetting this
  exists and having to go back and add older updates.
---

# Changelog

## Wednesday, February 10 2021

This may be updated as the day goes on since it's currently 09:35 UTC as I'm writing this. Got all this work done before the end of my first class of school \(which is P.E. so I didn't have any class because online learning go brrrrr\) 😎

### Ticket Alert Role

You can now set a role that will be "alerted" \(pinged\) when a new ticket is opened, allowing you to f.ex. notify the staff team of a new ticket so they can have super fast response times.  
  
You can set this the same way you set the rest of the ticket config options, `$ticket alert <role>`

### Close Pointless Tickets

Another ticket related addition, any ticket where the author leaves after not saying anything at all in the ticket will now be closed automatically so people who open a ticket for no reason then leave won't waste your time.

### Ignore Bots

Bots will now be ignored for join/leave messages \(logs are unaffected\) as they do not deserve to be welcomed smh

### Ignore Channels From Logging

You can now ignore channels from logging with the `$logignore` command so message edits/deletes, purges, link filter triggers etc. will not be logged from the channels you specify.  
  
No more accidental leaks from your secret channel where you post only the spiciest of memes when you accidentally edited that one message

### Bam

I'll let you figure this one out yourself. Long awaited suggestion from Noctember\#6660 ;\)

## Tuesday, February 9 2021

### DM Slash Commands

Discord has recently released the ability to use slash commands in a bot's DMs and Fire now fully supports them. I _tried_ to prepare for this when it was announced but it still broke when it was released.  
  
If you spot any bugs with slash commands in DMs, feel free to open an issue on Fire's GitHub repo, [https://inv.wtf/github](https://inv.wtf/github)

### Per-Server Blacklist

You can now "plonk" users from the bot in your guild! Just run `$plonk @User#1337` to prevent a user from running Fire commands. Run `$unplonk @User#1337` to allow them to use commands again.

### Reaction Roles

Only took over a year but I have finally rewritten Fire's reaction roles and it is better than ever!  
You can check out the demo video I recorded during development [here](https://static.inv.wtf/reactrolesdemo.mp4) which basically showcases the feature as a whole in a short 30 second clip.  
  
This feature is **premium only**! You can learn more about premium [here](hc/premium.md). 



## Thursday, February 4 2021

### Carbon Command

That's right, you can now use your favorite bot to generate beautiful images of your code using [carbon.now.sh](https://carbon.now.sh)!  
  
This feature was inspired by [Ravy](https://ravy.pink/)'s bot [Aero](https://aero.bot/) but is better because it has transparency and the ability to switch theme & font with flags  
  
e.g. `$carbon console.log("Hello, World") --theme nord --font firacode` 

Due to limitations with Akairo, the command framework Fire uses, you can't have spaces in the flag values \(but it fuzzy matches so it's fine\)  


## Tuesday, February 2 2021

### Ticket Descriptions

You can now set ticket descriptions! These will be shown in the embed sent in new ticket channels, allowing you to give a message to a user \(e.g. telling them what info they should provide\)  
  
Use `$ticket description <description>` to set the description or `$ticket description` to reset it

### Embed Command

You can now use Fire to send embeds since users cannot. This command works by taking an embed object from a haste service \([hastebin.com](https://hastebin.com/), [hasteb.in](https://hasteb.in/) or [hst.sh](https://hst.sh/)\) and send it to the current channel or any other channel!  
  
e.g. `$embed https://hst.sh/kaxesebivo.json #testing`   
  
You must have **Embed Links** permission to run the command and **Manage Messages** in a channel to send to it from a different channel.

## Wednesday, January 27 2021

### Colo\(u\)r Command

That's right, it only took a year since it was suggested but Fire now has a color command!  
Don't worry, if your language is set to en-GB it will say colour.  
  
Simply run `$color [<color>]` to quickly convert colors to different types \(hex, rgb, hsl or hsv\) and get a preview of that color!  
If you don't provide a color, a random one will be chosen.

## Tuesday, January 19 2021

### Fire Has Turned Blue!

Okay, not literally, but Fire has been fully rewritten in TypeScript \(the TypeScript logo is blue haha get it\)  
  
This is a MAJOR change for Fire as every aspect has been rewritten and improved. I unfortunately can't go over every single change or improvement but I'll list a few highlights below

#### Replies Support

Fire will now use replies when sending error message, the ping command and also when using tags \(if you reply to a message with a tag, Fire will reply to that message with the tag content, mentioning the user. Works best with the `dtag` alias\)

#### Better Tags

You can now edit tags and give them aliases! This is long overdue 😂

#### Better "Decancering"

With autodecancer enabled, Fire will now attempt to normalise a users name if it is "cancerous" \(man I hate this terminology\) which means no more `John Doe 1337` for `𝖙𝖍𝖚𝖌 𝖑𝖎𝖋𝖊#1337` over there, instead they will be nicknamed `thug life`   
  
Members will also be checked for hoisted/cancerous names on message and member update meaning less hoisted/cancerous users.

#### Slash Commands

Discord's long promised slash commands have finally released and Fire Beta supported them within 48 hours of release for 50 commands \(which is sadly the limit\) and since the rewrite has been deployed, normal Fire supports them too!  
  
You will need to grant Fire the `applications.commands` scope to access slash commands, which you can do by heading to [inv.wtf/bot](https://inv.wtf/bot) and reinviting Fire with the scope.

#### Autorole For All

Autorole is no longer a premium feature and is available to all servers with Fire! I've also added a bit of spice to the command in the rewrite, allowing you to set a bot autorole as well as normal autorole.  
  
This also supports Discord's membership screening feature meaning users will not get the role before passing screening.

#### Moderation Overhaul

Moderation has been overhauled in the rewrite due to the flexibility of discord.js allowing me to have custom guild, member & user classes. This allows for cleaner code and easily allows me to add more moderation features.  
  
Moderator IDs are now stored so you can see who gave Billy that warning for posting a meme in general. Speaking of warnings, they will also display warning count in the success message,   
e.g. **Geek\#8405** was warned for the 69th time

#### Member Join/Leave Logging Has Been Moved

Member join/leave logging is no longer included in moderation logs. You can set a dedicated channel for member related logging with `$log member #channel`

#### Improved Reminders

Reminders have been improved with better time parsing and the ability to repeat reminders with a "step".  
  
It should no longer say you set a reminder for "59 minutes, 59.294 seconds from now" when you set a reminder for an hour and the same has been done for DMs \(although DMs are a bit more finicky\)  
  
Repeating reminders with a step allows you to make multiple reminders with additional reminders on an interval.

![This feature is somewhat hard to explain/understand so it gets an image example.](.gitbook/assets/image%20%2824%29.png)

#### Improved Google Command

Lots of improvements, including the `google` command!

These improvements include

* Re-use browser & context
* Moving Playwright code to Aether, allowing clusters to share the same browser & context instances
* Add zlib compression to the Aether websocket, since the HTML data that Fire sends to Aether from the Google Assistant API is massive

#### Scalability

Fire is now much more scalable through the magic of [Aether](https://git.farfrom.earth/aero/aether)! Aether was originally designed by [Ravy](https://ravy.pink/) to handle [Aero](https://aero.bot/)'s shards but I've gone ahead and made my own fork of it, rewritten it in TypeScript, added a Rest API, statistics tracking with Grafana & Influx, realtime statistics for the [Fire website](https://fire.gaminggeek.dev/stats), Playwright \(as mentioned above\), reminders and more.  
  
Aether allows Fire to have multiple independent instances that link together through it via a websocket, allowing me to quickly scale Fire up if needs be. This allows each cluster to communicate with Aether and each other, powering features such as the Google command, reminders, user settings, premium, command, module, listener & inhibitor syncing and more.

### System Metrics

Fire's [status page](https://inv.wtf/status) now shows system metrics! These include both average rest & gateway latency across all clusters. 

### Miscellaneous Website Changes

Fire's website has gotten a few updates to accommodate changes in the rewrite, such as cluster support on the stats page, realtime stats updates, and better routing meaning the page no longer refreshes when navigating to a different page and now has a seamless transition.

## Wednesday, December 2 2020

### Major Caching Changes

Somewhat major update, concerning those who use logging, autodecancer & autodehoist,

I have deployed an update that affects how members are cached, causing other features to be affected too, some in a positive way and others negatively.

Due to these changes, I have had to remove role update logging & nickname update logging. These relied on members being cached due to Discord not providing the previous state. They may return in the rewrite but it is unclear at the moment.

A positive side affect to this change is that I've made autodecancer/autodehoist function similarly to the rewrite where members don't need to be cached for them to be decancered/dehoisted. It will also attempt to run the checks on each message too.

If you encounter issues related to autodecancer or autodehoist, please let me know. I have done some testing but my one-user test may not account for all scenarios.

## Tuesday, November 10 2020

### Vanity URL Changes

Rather than using JavaScript/meta tags to power redirects for Vanity URLs, it will now return status code 302 in most cases \(which should also make them faster as there's no body to load\)

The only time the old HTML response will be returned is if a request is coming from Discord/Twitter/Slack so they can embed the link with the custom embed. If there's a site that embeds links using OGP tags that isn't one of the 3 listed and you would like inv.wtf URLs to embed there, let me know what the site is in the [Fire Discord](https://inv.wtf/fire) \(and if you know the user agent they use to send requests that'll help get it changed quickly\)

Sites that aren't one of the 3 listed above will still show an embed if they follow redirects but it'll be Discord's own embed. If you encounter any issues with inv.wtf please let me know in the [Fire Discord](https://inv.wtf/fire) too as I also changed a bit of error handling because the old error handling code looked like I was drunk while writing it o\_O

## Friday, September 25 2020

### Changes To Case IDs

Moderation Case IDs are no longer numbers and now use [https://github.com/puyuan/py-nanoid](https://github.com/puyuan/py-nanoid) since the numbers have started showing letters and symbols \(oops\)

## Wednesday, July 1 2020

### Website Updates

There's now a search bar on Fire's commands page :D  
  
No more endlessly clicking through categories to find what you want, just type a command name and you'll be greeted with matching commands, their description, usage and aliases.

## Tuesday, June 16 2020

### Small Bug Fix

If you've encountered an issue with Vanity URLs stating an error similar to `'bool' object has no attribute 'copy'` it has now been fixed, sorry for any inconvenience

## Monday, June 15 2020

### Extra Debug Info For $mute

The debug command can now show extra information for the `$mute` command. You can see an example below. Any users/roles listed for bypassing mutes means they have been explicitly granted `Send Messages` in the current channel.

Due to how Discord's permissions work, even if many roles have a permission denied, as long as one role has it allowed then they will always have that permission, meaning allowing a role Send Messages will cause that role to bypass mutes.

![](.gitbook/assets/image%20%2817%29.png)

## Sunday, June 14 2020

### Edits With Paginators

When editing a command message where both the old and new commands used paginators, Fire will now forget the old paginator instead of switching between the two upon reacting. 

### Guild Command Redesign

The `$info guild` command has gotten a redesign! It now looks nicer and has many more aliases \(`guild, infoguild, info guild, guildinfo, infoserver, serverinfo`\)

## Tuesday, May 19 2020

### Delete Flag For Ban

 You can now choose how many days worth of messages to delete when banning a user with the `--delete` flag \(`-d` works too\)  
Example: `$ban Aktimoose using deprecated regions --delete 1` to delete messages from the past day \(max is 7 due to discord limits\)  
  
If the flag is omitted then no messages will be deleted.

## Sunday, May 17 2020

### New Link Filter

 `shorteners`, enable with `$linkfilter shorteners`,  deletes common short links, e.g. bit.ly

### Changes to moderation commands

 Moderation commands no longer respond if `--silent` is used

## Wednesday, May 13 2020

### New Commands

`$tips` - Toggle a 10% chance of seeing a useful tip when running a command \(enabled by default, see screenshot for an example\)

![](.gitbook/assets/image%20%284%29.png)

## Tuesday, May 12 2020

### New Commands

`$badname` - Change the name used for auto dehoist/decancer. This will **not** change existing nicknames! `$autodecancer` - Toggle renaming those with "cancerous" \(non-ascii\) names. This will **not** rename existing users!   
`$autodehoist` - Toggle renaming those with hoisted names. This will **not** rename existing users!

### Changes you probably won't notice

 Fire _should_ no longer log role removals for deleted roles. It may still log a few before the role is actually deleted but this should prevent logs being spammed in large guilds from removing a role that everyone has

## Monday, May 11 2020

### New Commands

`$reminders`- You can now see your reminders. This really should've been a thing from the start `$delremind` - You can now delete your reminders. This really should've been a thing from the start \(see screenshot for more info on how to delete a reminder\)

### Changes you probably won't notice

The mute command will now delete mutes before attempting to removing the role, meaning tons of mutes don't build up in my database and people don't get muted if/when they rejoin \(don't you just love people who leave after getting muted\) even though their mute expired

![](.gitbook/assets/image%20%2821%29.png)

## Sunday, May 10 2020

### Changed Commands

 The `$info user` command has gotten a redesign! It now looks nicer and has many more aliases \(`user, infouser, info user, userinfo, whois, u`\)

### New Commands

 `$antispam <chance of spam>` 

Toggles ChatWatch spam prevention. If messages have a chance of spam greater than or equal to the chance provided in this command, they will be deleted.

**THIS HAS BEEN ENABLED BY DEFAULT WITH AN 80% CHANCE OF SPAM FOR GUILDS WITH AT LEAST 1000 MEMBERS!**

## Saturday, May 9 2020

### New Commands

`$slowmode <delay> [<channel/category>]` - Set slowmode in the current channel, another channel or a category  
`$ghstatus` - Check GitHub's status   
`$cfstatus` - Check Cloudflare's status

### Removed Commands

 `$hyperium`, `$fetchchannel`, `$fetchactivity`

### General Updates

 Fire will now automatically set it's status on [https://status.gaminggeek.dev/](https://status.gaminggeek.dev/) depending on it's ping.



## Friday, April 3 2020

### New Debug Command

If you do `$debug <command>` Fire will go through some common things that may prevent a command from running \(global checks, permissions, whether the command is enabled or not\) and give a list of issues if any are found. This should help with figuring out small issues so if some command stops working, use the debug command and if the debug command stops working, seek immediate help [here](https://inv.wtf/fire)

## Thursday, April 2 2020

### Changes to public servers

To ensure that people cannot scrape the invites from the page, you will now have to solve a captcha to get redirected to the invite. This is to prevent abuse of the page and to ensure your server is protected from potential spam bots joining.

## Wednesday, April 1 2020 \(I promise it's not a prank\)

### **Changes to Vanity URLs for better consistency**

For the past few months, Vanity URLs have been accessible through many domains, with the 2 main ones being `oh-my-god.wtf` and `inv.wtf`. The latter however was only available to premium guilds and also had support for custom redirects. Starting from today, **inv.wtf is the only main domain for Vanity URLs and will eventually be the only domain they're accessible from**

This change means that even non-premium guilds will be able to use this domain for their Vanity URLs \(redirects are still premium\) and the other 5 domains will eventually be phased out and no longer function.

This is for better consistency with Vanity URLs, less hassle for other bots to be keeping up with what domains Fire vanity URLs are accessible from to filter them if they choose to do so and finally as a cost saving measure. I don't have a job and the only way for me to keep Fire up and running pretty much 24/7 is the wonderful people who have supported Fire by purchasing premium &lt;3

### **New website & public servers page**

Fire's new website has been up for quite a while but I don't recall ever making an actual announcement about it. If you've went to [https://fire.gaminggeek.dev](https://fire.gaminggeek.dev) or clicked the `Commands` link in Fire's help command, you'd see Fire's wonderful "new" website which was made by \(in my opinion the _best_ web dev\) [Nystrex](https://nystrex.com/).

This website also includes a public servers page, accessible from [https://fire.gaminggeek.dev/discover](https://fire.gaminggeek.dev/discover). Currently there's only a small handful of servers here and if you'd like your server to be shown here, use the `$public` command \(This requires you to have a Vanity URL set as that's where it gets the invite link from\).

I'd like to thank you all for using Fire and hope you enjoy these new updates :D

## Wednesday, March 18, 2020

### Bug fixes and changes to command handling

First we have bug fixes, my favorite. `--remind` now actually works which is nice and \(not that it matters to any of you\) my logs are no longer spammed with errors when starting Fire :D

Anyways, actual cool things now. Fire has been able to run commands when you edit your message for a long time now, but as of about an hour ago during the maintenance, Fire will now edit the response from the old command too! **This won't work for any commands that use files due to a Discord limitation**

If you have suggestions for Fire, feel free to use the `$suggest` command to let me know about 'em. I will start working on suggestions in the next few days as I've sorta been neglecting them

## Thursday, March 12, 2020

### Configurable muted role

 You can now set the muted role Fire uses when muting users! Just use the command `$muterole [<role>]` to set it.   
  
If you don't provide a role, Fire will reset it and just use a role called "Muted" and if it's not found, it will create one.

## Friday, March 6, 2020

### Removal of music

 Important update for those who make use of Fire's music feature!   
  
Due to many reasons \(Lavalink being a piece of trash, YouTube blocking Fire's IP many times, Lavalink being a piece of trash\), I ave removed Fire's music feature completely. This will free up a lot of resources on Fire's vps as Lavalink is quite resource intensive, with ram usage in excess of 1.5GB at times, which will allow for more expansion.   
  
Fire was never made to be a music oriented bot and music was always a low priority. I have not changed anything related to music since January 10th as Fire's music has been considered "deprecated" since then.   
  
If you used Fire's music feature, I'd recommend switching to Groovy \([https://groovy.bot/](https://groovy.bot/)\) for all your music needs \(and keep Fire for it's other features of course\). As Groovy is a bot specifically for music playback, you will have a better experience with it.   
  
Thank you for using Fire and I apologize for any inconvenience caused by this removal.

## Wednesday, February 26, 2020

### Update to snipes

hi i did the same as quotes but for snipe and esnipe and you can only snipe a message once now. once it's sniped, it get's yoinked from fire's memory ok thanks bye  
  
_such a professional update changelog thing_

## Sunday, February 23, 2020

### Quotes

oh hey a new fea- wait a minute, this isn't new!

That's right, I have rewritten an existing feature and made it cooler :D Fire's quote command \(and auto quoting, `$quote auto` to enable\) now has it's own file and a new addition.

If in a channel where Fire has `Manage Webhooks` permission, it will make use of this to make quotes cooler. It will show kinda like the user themselves repeated their message, except there's a **BOT** tag because it's a webhook. It will use an existing webhook or create one if none exist in that channel. **Tip:** If you want to go back to the old quotes, just remove `Manage Webhooks` from Fire \(and `Administrator` if applicable\) and it will be like nothing changed!

I hope you enjoy this new addition to quoting because I personally love it. If you encounter any issues, please let me know in [\#help](https://inv.wtf/geek) or if you have a suggestion, use the `$suggest` command

## Friday, February 21, 2020

### Tickets

Today I am releasing Fire's newest feature, tickets! With this new feature, members of your Discord can create tickets for whatever reason they would need it. For tickets to be created, they must be enabled which can be done by setting a category using `$tickets category`. You can see all the configuration commands for tickets by using `$tickets`.

The main commands for tickets are;

`$new` - Opens a ticket   
`$add <user>` - Adds a user to the current ticket   
`$remove <user>` - Removes a user from the current ticket   
`$close` - Closes the current ticket

### Feature removal

Along with this new feature, we say goodbye to an old one. Fire's muted chat is now removed and Fire will no longer add users to it or set permissions for read messages to false in other channels. To reconfigure Fire's permissions for the Muted role, just delete it and mute someone to recreate it. This was a feature that quite a few people did not like and many did not even use so I made the decision to remove it. I don't see it ever coming back so if you liked it then I apologize for the inconvenience.

## Wednesday, February 19, 2020

### Command removal

The `tempmention` command has been removed. This is due to a recent Discord update that makes it kinda pointless. If you are unaware about the new update, anyone with `Mention Everyone` permission can now mention all roles without needing to change the mention toggle. If you don't see this, make sure to update your client.

## Wednesday, January 22, 2020

### Quoting changes

Fire will now find any image link in the message you are quoting, remove it from the message content and set it as the embed's image so that you don't need to click the link to see it

## Wednesday, January 15, 2020

### Rewrite merge

* Merged parts of the rewrite into [master](https://github.com/GamingGeek/Fire)

{% hint style="info" %}
This isn't too big of an update for your average Joe, but in terms of the code base, the "core" is much cleaner an allows for more modularity with commands, events and core modules such as Chatwatch
{% endhint %}

## Saturday, January 11, 2020

### The reminders update

Fire now has reminders!

Fire can give you a reminder for anything and everything right in your DMs. There's two ways to set a reminder with Fire, a command or a flag.

With the command, you just do `$remind <your reminder here> <time>` e.g.`$remind fix logging in 1 hour`

The flag is an easy way to set a reminder by just adding `--remind` to your message. For example, I can do `I need to clean my room --remind 1 hour` and Fire will remind me to clean my room in an hour.

My favorite part of reminders is the support for message URLs. Place a message URL in your reminder and when it's time to be reminded, Fire will quote these messages along with your reminder.

Hope you all enjoy this feature as I had a lot of fun making it :\)

{% hint style="info" %}
Fire uses regex to find the time and replace it when giving you your reminder. It will attempt to catch phrases like `in 1 hour` or `that <reminder>` but sometimes it will do an oopsie and not get your time right. It's best to stick to using `1 day 2 hours 3 minutes 4 seconds` as the format.
{% endhint %}



