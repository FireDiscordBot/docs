---
description: >-
  Here you'll find an explanation of everything you may find in your data
  package.
---

# Your Data Package

{% hint style="warning" %}
You may not find everything listed here in your data package! If there's something you can't see in your data package, that means there's no data stored in that category linked to your user.
{% endhint %}

## User Folder

The user folder has data about you as a user, e.g. user config, premium data etc.

### config.json

This is your user config. It is an object with key-value for option name & value, e.g.

```javascript
{"utils.language":"en-GB","utils.superuser":true,"badges.badlydrawn":true}
```

### aliases.json

Some special users may have aliases that can be used to refer to them in commands instead of their username, nickname or id and work globally. If you are one of the special few that have aliases, you'll find the full list in this file as an array, such as the one below \(yes, those are my aliases\)

```javascript
["gek","gaminggeek","database daddy","domain addict","synergy allows you to share your mouse and keyboard between multiple computers at once. check it out at the link in the video description","fire man","sudo"]
```

### premium/:id.json

This file, named with your user id, will contain your premium data, if applicable. This is the data checked to determine whether you have premium and whether the guild has premium. It includes your subscription id, customer id, premium guilds, period end \(when your premium expires if you do not renew it\) and subscription status, e.g.

```javascript
{"subscription":"[redacted]","customer":"[redacted]","guilds":["564052798044504084"],"periodEnd":1615982400,"status":"active"}
```

### premium/customer.json

This contains your customer data. It is used when accessing the billing portal or checkout page to link your Discord user with your customer on Stripe, e.g.

```javascript
{"id":"[redacted]","email":"[redacted]","status":"active","paid":true,"active":true,"cantrial":false}
```

### premium/subscriptions/:id.json

In the subscriptions folder, you'll find data about any subscriptions you have had or currently have, e.g.

```javascript
{"id":"[redacted]","customer":"[redacted]","product":"prod_I5aMyVtpF71EXL","price":"price_1HVPBgAIj8KliTBvqsHfGvaG","status":"canceled","cancelOnEnd":false,"cancelAt":null,"periodStart":1612707804,"periodEnd":1615127004,"created":1612707804,"ended":1612709586,"trialStart":null}
```

## Servers Folder

The servers folder contains any data about you that is linked to a specific guild, such as tags, modlogs or persisted roles. Below will explain the files you may find in each subfolder, which are named using the guild id.

### server.json

Depending on ownership, this file may include a full guild object \(if you own the guild\) or just the guild id and name. This file may not be present if the server no longer has Fire, as it cannot retrieve the data about a guild it is not in.

### tags.json

This file will include any tags you have made \(since the rewrite release, as the creator was not previously tracked\) and will even tell you the uses, which is currently not exposed through the bot.

```javascript
[{"name":"bad","content":"bad","aliases":null,"uses":43}]
```

### modlogs.json

Here you'll find all of your mod log entries, e.g. warns/mutes/kicks

```javascript
[{"type":"warn","reason":"dumbass","date":"18/11/2020 @ 04:29:05 PM","caseid":"_STs_XHKm_th3WpbGDJJC"},{"type":"warn","reason":"hi geek","date":"18/11/2020 @ 04:51:07 PM","caseid":"HQVFxoqgiZ9lW0P3e34w7"}]
```

## Modcore Folder

This folder will \(likely always\) contain a single JSON file named with your user id with contents similar to below. This will only be present if you have claimed the Nitro Booster cape for ModCore in [Sk1er's Discord](https://discord.gg/sk1er).

```javascript
{"uuid":"069a79f444e94726a5befca90e38aaf5"}
```



