---
layout: article_fire
title: Fire Premium
description: Support Fire's development by subscribing to Premium!
---

# Premium

## What is Premium?

Premium is an extension to Fire that gives extra features for a small cost. Subscribing to premium helps me pay the bills and keep Fire running with \(as of writing\) 99.97% uptime.

## Commands

### **Reaction Roles**

Reaction roles allows users to give themselves a role by reacting to a message with a specific emoji. Use the following command to set up a reaction role

> `$reactrole <role>`

### **Invite Roles**

Invite roles allow you to automatically give users a role depending on what invite they used to join. You can enable/disable it with the following command

> `$invrole <invite> <role>`

\(To disable use the command again with the same invite and same role. For invite, use the code itself or discord.gg URL\)

### **Ranks**

Ranks are roles that anyone can join by typing a command. The roles users can join are from a list of roles you add.

> `$rank [<rank name>]` - List ranks or join a rank if a rank name is provided
>
> `$addrank <role>` - Add a rank that users can join \(Requires `Manage Roles`\)
>
> `$delrank <role>` - Remove a rank \(Requires `Manage Roles`\)

### **Role Persist**

Role Persist allows you to give a user a role and ~~shove it down their throat~~ make sure they keep it, even if they leave and rejoin!

> `$rolepersist <member> <role>` - Give a member a role that is persistent

### **Voice Channel Roles**

Voice Channel Roles allows you to link a role to a voice channel, meaning members in the voice channel will receive the role when they join and lose it when they leave.  


> `$vcrole <channel> <role>` - Link a voice channel & role

## Other features

### **Used Invite**

See what invite a user used when they joined.

![](../.gitbook/assets/image%20%2813%29.png)

If the user either 1. hasn't joined using an invite or 2. the invite is unknown, it will suggest preview mode/server discovery if applicable \(Preview requires a discoverable guild\)

![](../.gitbook/assets/image%20%287%29.png)

**Note: Due to Discord not actually giving this information, it may not always be correct but has shown a high success rate when finding the used invite.**

### **Vanity URL Stats**

With premium, you will be able to see the statistics of your server's Vanity URL created by Fire \(`$vanityurl`\). Stats are tracked for all servers but you need premium to view them

### **Custom Redirects**

Using the same `inv.wtf` domain as Vanity URLs, you can create redirects to other websites, e.g. `https://inv.wtf/premium` redirecting to this page  
  
This also includes stats similar to Vanity URLs. You can create 5 redirects per premium server that you have

### **Unlimited Tags**

By default you are limited to 20 tags but with premium, this limit is removed altogether.

**Note: You will only be able to have up to 100 slash command tags. This limit is imposed by Discord and cannot be changed or removed**

### **Unlimited Permision Roles**

By default you can only sync one role's permissions to all channels. With premium, this limit is removed and you can have up to 100 permission roles!

### **Doubled Auto Quote Limit**

Yet another raised limit and this time it's for auto quoting. Fire will only quote up to 5 message links from a single message but with premium, this gets doubled to 10. Have fun quoting :D

### **Premium Badge**

Show off to your friends that you are supporting the best bot with the fancy premium badge in the `/user` command. Each server you give premium to will *also* have a premium badge in the `/guild` command!

![](../.gitbook/assets/premium-user-badge.png)

![](../.gitbook/assets/premium-server-badge.png)

### **Priority Support**

If you're having issues with Fire and ask in the \#premium-support channel in [Fire's discord](https://inv.wtf/fire), you will get faster support.

### **Priority Suggestions**

Suggestions made on the GitHub repo will be prioritized for Premium users. Make sure you have your GitHub linked to your Discord account & are in the [Fire Discord](https://inv.wtf/fire) so I can see who owns the GitHub account.

## Where the money goes

The money received from premium supporters goes right back to Fire via paying for the VPS every month. If there's a time when I can afford to pay for the VPS and have left over cash, it will go towards paying for things related to Fire, e.g. error tracking \([Sentry](https://sentry.io/)\), domains and anything else that will benefit Fire.

## How much is it and where do I donate?

There's currently 3 different tiers for premium. 1 server, 3 servers and 5 servers. Premium for 1 server costs $5, 3 servers costs $8 and 5 servers costs $12. Premium is currently purchased through my [Patreon](https://patreon.com/FireBot) however it will be moved to a custom solution with Stripe in the future. If you are unable to purchase premium through Patreon, please join my [Discord](https://inv.wtf/fire) and create a ticket with `$new` in the \#bot-commands channel.

This page will be updated regularly so you can be assured the information here is up to date!

