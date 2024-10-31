---
description: >-
  Here you'll find an explanation of everything you may find in your data
  package.
---

# Your Data Package

{% hint style="warning" %}
You may not find everything listed here in your data package! If there's something you can't see in your data package, that means there's no data stored in that category linked to your user.
{% endhint %}

## Miscellaneous Files

Files not belonging to any folder

### README.txt

A small text file welcoming you to your data package and linking to this very article

## User Folder

The user folder has data about you as a user, e.g. user config, premium data etc.

### config.json

This is your user config. It is an object with key-value for option name & value

```json
{ "utils.language": "en-GB" }
```

### aliases.json

Some special users may have aliases that can be used to refer to them in commands instead of their username, nickname or id and work globally. If you are one of the special few that have aliases, you'll find the full list in this file as an array

```json
["list", "of", "aliases"]
```

### essential.json

This is statistically unlikely to be present in your data package. It is for anyone who has claimed the server booster cosmetic in the [ESSENTIAL MOD Discord server](https://inv.wtf/essential) and will contain the UUID of the Minecraft account that has the cosmetic

```json
{ "uuid": "4686e7b58815485d8bc4a45445abb984" }
```

### redirects/:slug.json

If you're a premium subscriber, you can create 5 custom redirects per premium server you have. This redirects folder will contain a file for each redirect, named after the "slug"

```json
{
  "code": "based",
  "url": "https://youtu.be/LrNu-SuFF_o",
  "clicks": 57,
  "links": 64,
  "referrals": [{ "url": "discord.com", "count": 4 }]
}
```

### premium/current.json

This contain your premium data for the currently active subscription, if applicable. This is the data checked to determine whether you have premium and whether the guild has premium. It includes your subscription id, customer id, premium servers \(guilds\), period end \(when your premium expires if you do not renew it\) and subscription status, e.g.

```json
{
  "subscription": "a cool id",
  "customer": "another cool id",
  "guilds": ["list", "of", "premium", "servers"],
  "periodEnd": 1615982400,
  "status": "active"
}
```

### premium/customer.json

This contains your customer data. It is used when accessing the billing portal or checkout page to link your Discord user with your customer on Stripe, e.g.

```javascript
{"id":"a cool id","email":"atotallyrealemail@coolmail.com","status":"active","paid":true,"active":true,"cantrial":false}
```

### premium/subscriptions/:id.json

In the subscriptions folder, you'll find data about any subscriptions you have had or currently have, e.g.

```json
{
  "id": "a cool id",
  "customer": "another cool id",
  "product": "prod_I5aMyVtpF71EXL",
  "price": "price_1HVPBgAIj8KliTBvqsHfGvaG",
  "status": "canceled",
  "cancelOnEnd": false,
  "cancelAt": null,
  "periodStart": 1612707804,
  "periodEnd": 1615127004,
  "created": 1612707804,
  "ended": 1612709586,
  "trialStart": null
}
```

## Servers Folder

The servers folder contains any data about you that is linked to a specific guild, such as tags, modlogs or persisted roles. Below will explain the files you may find in each subfolder, which are named using the guild id.

{% hint style="info" %}
Some files will only be present for the server owner!
{% endhint %}

### server.json

Depending on ownership, this file may include a full guild object \(if you own the guild\) or just the guild id and name. This file may not be present if the server no longer has Fire, as it cannot retrieve the data about a guild it is not in.

### tags.json

This file will include any tags you have made or all tags for servers you own

```json
[
  { "name": "bestbot", "content": "fire ofc", "aliases": null, "uses": 15 },
  {
    "name": "premium",
    "content": "https://inv.wtf/premium",
    "aliases": null,
    "uses": 5
  },
  { "name": "test", "content": "@everyone", "aliases": null, "uses": 7 }
]
```

### modlogs.json

Here you'll find all of your mod log entries, e.g. warns/mutes/kicks

If you own the server, ALL entries for that server will be included

```json
[
  {
    "type": "warn",
    "reason": "hi geek",
    "date": "18/11/2020 @ 04:51:07 PM",
    "caseid": "HQVFxoqgiZ9lW0P3e34w7"
  }
]
```

### bans.json

Here you'll find all tempbans

```json
[{ "uid": "287698408855044097", "until": "1638714070000" }]
```

### mutes.json

Here you'll find all mutes

```json
[{ "uid": "287698408855044097", "until": "1638714070000" }]
```

### discovery_referrals.json

This file will only be present for servers on Fire's public server page \(which you can enable for your server with the `/public` command\) and will contain data similar to the redirect referrals from the user folder. You will likely only have one entry if any and it will be from `getfire.bot` or the old domain, `fire.gaminggeek.dev` and tell you how many times someone clicked on your server.

```json
[{ "url": "getfire.bot", "count": 28 }]
```

### voice_channel_roles.json

This contains any voice channel roles created with the `/vcrole` command

```json
[{ "role": "810217617200644106", "channel": "888448093543075862" }]
```

### config.json

Like the `config.json` file from the user folder, this contains the server's config

```json
{
  "log.moderation": "730432768479068176",
  "log.action": "730432768479068177",
  "mod.linkfilter": [
    "discord",
    "youtube",
    "twitch",
    "twitter",
    "paypal",
    "malware"
  ],
  "mod.autodehoist": true,
  "commands.modonly": [
    "730432768118620245",
    "730432768118620246",
    "730432768479068170"
  ],
  "utils.badname": "no hoist pls",
  "utils.public": true,
  "mod.nospam": 80,
  "premium.trialeligible": false,
  "log.members": "730432768479068176",
  "mod.antizws": true,
  "auditlog.member_role_update.latestid": "864386134199762956",
  "mod.autobotrole": "730432767657246801"
}
```

### permission_roles.json

This contains any permission roles created with the `/permroles` command

```json
[{ "role": "713553032276869181", "allow": "0", "deny": "49152" }]
```

### starboard_reactions.json

This file contains the reaction counts for any messages that have received a valid star

```json
[{ "messageId": "917054824065945620", "count": 5 }]
```

### starboard_posts.json

This contains the IDs for messages that have been sent to the starboard

```json
[
  {
    "messageId": "917054824065945620",
    "starboardMessageId": "917055544097923072"
  }
]
```

### persisted_roles.json

This will contain any of your persisted roles

If you own the server, ALL persisted roles will be included

```json
[{ "user": "287698408855044097", "roles": ["807772326052888637"] }]
```

### invite_roles.json

This will contain any invite roles for the server

```json
[{ "role": "564061443448766464", "invite": "Nnttd7EZV4" }]
```

### vanity_urls.json

This will contain any vanity URLs you created

If you own the server, ALL vanity URLs will be included

```json
[
  {
    "code": "statuspages",
    "invite": "Nnttd7EZV4",
    "clicks": 41,
    "links": 66,
    "user": "287698408855044097",
    "description": "Here you can find a collection of announcement channels you can follow for many different status pages so you can be one of the first to know when one of your favorite services has issues.\n\nYou can also subscribe to updates in the roles channel of each category.",
    "referrals": [
      { "url": "l.facebook.com", "count": 3 },
      { "url": "discord.com", "count": 9 },
      { "url": "t.co", "count": 7 },
      { "url": "www.facebook.com", "count": 1 },
      { "url": "discordresources.com", "count": 1 },
      { "url": "mail.google.com", "count": 2 },
      { "url": "github.com", "count": 12 }
    ]
  }
]
```

## Analytics Folder

This folder contains any data from Fire's InfluxDB database, used for debugging and insight into Fire's usage. This data is not shared with anyone unless otherwise specified.

### websocket_closures.json

When using the [Fire website](https://getfire.bot/), your browser connects to Fire via a websocket connection. This file will contain information from when this connection was closed such as your session id, the close code & reason, time of closure and the page you were viewing.

This is used purely for debugging potential issues with the websocket.

### discord_oauth.json

Any time you authorize with Fire via OAuth, a bit of information about it will be logged by Fire via the [Application Authorized](https://discord.com/developers/docs/events/webhook-events#application-authorized) event

Currently, information logged includes the time, your username & user id, scopes you authorized, the server (if applicable), Fire's permissions (if applicable) and the type of integration (if applicable)

### commands.json

This contains a log of the commands you have ran including the time, command name, errors, server, message/interaction id, permissions and more.

### interactions.json

Similar to the commands log, this is a log of all your interactions with Fire (slash commands, context menus, buttons etc.)

### minecraft_logs.json

This contains the data collected via the Minecraft Log Scanning feature. You can learn more about this [here](../notices/mclogs-analytics.md).

This data is shared with some users who were given access to the log scanning feature before it was available as a premium perk to help learn about its usage and to improve the feature.
