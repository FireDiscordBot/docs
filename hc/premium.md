---
layout: article_fire
title: Fire Premium
description: Support Fire's development by subscribing to Premium!
---

# Premium

## What is Premium?

Premium is an extension to Fire that gives extra features for a small cost. Subscribing to premium helps me pay the bills and keep Fire running with (as of writing) 99.97% uptime.

## Commands

### **Reaction Roles**

Reaction roles allows users to give themselves a role by reacting to a message with a specific emoji. Use the following command to set up a reaction role

![](../.gitbook/assets/reactionrole_cmd.png)

### **Invite Roles**

Invite roles allow you to automatically give users a role depending on what invite they used to join. You can enable/disable it with the following command

![](../.gitbook/assets/inviterole_cmd.png)

(To disable use the command again with the same invite and same role. For invite, use the code itself or discord.gg URL)

### **Ranks**

Ranks are roles that anyone can join by typing a command. The roles users can join are from a list of roles you add.

![](../.gitbook/assets/rank_cmd.png)
![](../.gitbook/assets/addrank_cmd.png)
![](../.gitbook/assets/delrank_cmd.png)

{% hint style="info" %}
Adding & removing ranks requires `Manage Roles` permission, joining a rank does not require any permissions.
{% endhint %}

### **Role Persist**

Role Persist allows you to give a user a role and ~~shove it down their throat~~ make sure they keep it, even if they leave and rejoin!

![](../.gitbook/assets/rolepersist_cmd.png)

### **Voice Channel Roles**

Voice Channel Roles allows you to link a role to a voice channel, meaning members in the voice channel will receive the role when they join and lose it when they leave.

![](../.gitbook/assets/vcrole_cmd.png)

## Other features

### **Used Invite**

See what invite a user used when they joined.

If the user either 1. hasn't joined using an invite or 2. the invite is unknown, it will suggest preview mode/server discovery if applicable (Preview requires a discoverable guild)

![](../.gitbook/assets/join_used_invite.png)

{% hint style="warning" %}
Due to Discord not actually giving this information, it may not always be correct but has shown a high success rate when finding the used invite.
{% endhint %}

### **Vanity URL Stats**

With premium, you will be able to see the statistics of your server's Vanity URL created by Fire (`/vanity view`). Stats are tracked for all servers but you need premium to view them

### **Additional Vanity URLs**

Add extra Vanity URLs to your subscription that you can use across your servers alongside the free vanity included for each server. These can be useful if your server goes by multiple names or if you rename your server and wish to keep your old vanity

These can be added to your subscription via the [billing portal](https://inv.wtf/billing) (login with your Discord email or access it via the [Fire Website](https://etfire.bot/user/premium)) through the `Update Subscription` button

![](../.gitbook/assets/billing-portal-current.png)
![](../.gitbook/assets/update-subscription-addon-vanity.png)


### **Custom Redirects**

Using the same `inv.wtf` domain as Vanity URLs, you can create redirects to other websites, e.g. `https://inv.wtf/premium` redirecting to this page

This also includes stats similar to Vanity URLs. You can create 5 redirects per premium server that you have

### **Unlimited Tags**

By default you are limited to 20 tags but with premium, this limit is removed altogether.

{% hint style="warning" %}
You will only be able to have up to 100 slash command tags. This limit is imposed by Discord and cannot be changed or removed
{% endhint %}

### **Unlimited Permision Roles**

By default you can only sync one role's permissions to all channels. With premium, this limit is removed and you can have up to 100 permission roles!

### **Minecraft Log Scanning**

If you're a Minecraft player or have a server about Minecraft (specifically Java Edition) and hate when you crash or encounter issues, this feature is for you!

With this, Fire will check for Minecraft logs/crash reports in messages and if it finds one it will remove potentially sensitive information and provide possible solutions and recommendations.

This is a very popular feature and it is finally available to the general public with premium and can be enabled with `/minecraft log-scan`

![](../.gitbook/assets/minecraft-log-scanning.png)

{% hint style="warning" %}
This feature collects some data to better understand usage of this feature and to improve it further down the line.

\
If you enable this feature, you must make the members of the server, both existing and new, aware of this! They can learn more (including how to opt out) [here](../notices/mclogs-analytics.md)
{% endhint %}

### **Doubled Limits**

With Premium, limits in various parts of Fire are doubled!
- Quotes (5 links/message -> 10 links/message)
- Iterable Quotes (5 extra messages -> 10 extra messages)
- Embeds (5 custom embeds -> 10 custom embeds)

### **Premium Badge**

Show off to your friends that you are supporting the best bot with the fancy premium badge in the `/user` command. Each server you give premium to will _also_ have a premium badge in the `/guild` command!

![](../.gitbook/assets/premium-user-badge.png)

![](../.gitbook/assets/premium-server-badge.png)

### **Priority Support**

If you're having issues with Fire and ask in the #premium-support channel in [Fire's discord](https://inv.wtf/fire), you will get faster support.

### **Priority Suggestions**

Suggestions made on the GitHub repo will be prioritized for Premium users. Make sure you have your GitHub linked to your Discord account & are in the [Fire Discord](https://inv.wtf/fire) so I can see who owns the GitHub account.

## Where the money goes

The money received from premium supporters goes right back to Fire via paying for the VPS every month. If there's a time when I can afford to pay for the VPS and have left over cash, it will go towards paying for things related to Fire, e.g. error tracking ([Sentry](https://sentry.io)), domains and anything else that will benefit Fire.

## How much is it and where do I purchase it?

Fire Premium has a base price of €5/mo OR €40/yr for one server with additional servers being €1.50/server/mo OR €12/server/yr with up to 199 extra servers being available as an addon for your subscription.

{% hint style="warning" %}
You cannot mix monthly & yearly payments so if you pay for premium yearly, you must also pay for all add-ons yearly! Changes to addons will also take effect immediately and removing an add-on will credit a pro-rated amount to your account 
{% endhint %}

You can purchase premium on the [Fire website](https://getfire.bot/) by logging in, clicking your profile picture in the top right and clicking `Premium`.

Payments are handled by [Stripe](https://stripe.com/) and are subject to our [refund policy](../important/refunds.md).

If you have any questions, feel free to ask in the [Fire Discord](https://inv.wtf/fire)

## Discounts

Discounts are offered to members of the [Fire Discord](https://inv.wtf/fire) and can range from 10% off to 75% off, depending on your roles.

All server members are entitled to 10% off Fire Premium just for being in the server! You can bump that discount up to 35% off by boosting the server

Subscribers to [the developer's Twitch](https://inv.wtf/twitch) can get 50% off if you have your Twitch account linked to your Discord and a combined subscriber & server booster can get a whopping 75% off! If you already pay for Discord Nitro & have Amazon Prime, that's an easy way to get a very cheap Fire Premium subscription 😅

You can claim your special coupon code using the `/discount` command in the `#bot-commands` or `#testing` channels but you'll only see the code once and it will expire 24 hours after you run the command

{% hint style="danger" %}
You must stay in the Fire Discord for the discount to continue. If you leave the server, your special coupon code will be invalidated and your subscription will renew at full price!
\
You must also keep your Twitch account linked to avail of the Twitch subscriber discounts. If your account is unlinked, your discount will be downgraded and you will lose the Twitch Subscriber role.
{% endhint %}