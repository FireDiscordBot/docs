---
description: >-
  Here we'll go through various configuration commands to personalise Fire for
  your server.
---

# Configuring Fire

{% hint style="info" %}
If you do not set moderators, only those with **Manage Server** will be able to use moderation commands as they are considered admins
{% endhint %}

## Setting Moderators

To use moderation commands _without_ the manage server permission, you must set moderators using the `addmod` command

![](<../.gitbook/assets/image (6).png>)

This command can be used to add either a user or role as a moderator and can be used multiple times to add multiple users or roles.

## Enabling Logging

![](<../.gitbook/assets/image (20).png>)

### Moderation Logs

Setting up logging with Fire is easy. Just run the command `$logging mod #channel` with `#channel` being the channel you want logs in.\
\
Actions such as mutes, kicks, warns, bans etc. will be logged here.

### Action Logs

Setting up action logs is basically the same as moderation logs except instead of `mod` you use `action`\
\
e.g. `$log action #channel`\
\
Actions such as message edits/deletes, channel creates/updates/deletes, ticket transcripts, link filter logs, purge logs and more will be logged here.

### Member Logs

Once again, setting member logs is basically the same as before but with `member`\
\
e.g. `$log member #channel`\
\
Member joins & leaves will be logged here as shown below.

![](<../.gitbook/assets/image (11).png>)

![Member leave logs can sometimes contain extra info as shown above](<../.gitbook/assets/image (15).png>)

{% hint style="info" %}
The "Invite Used" field is only available to premium servers. Learn more [here](https://inv.wtf/premium)
{% endhint %}

## Command Restrictions

### Disabling Commands

![](<../.gitbook/assets/image (18).png>)

Sometimes you'll find a command you don't want users in your server to use. No worries, you can easily disable the command with the `command` command (great name, I know)\
\
Disabling a command restricts it's usage to moderators so even if a command is disabled, it can still be used by them. You must be a moderator\
\
Want to disable the `meme` command to prevent users seeing memes that are too spicy for your liking?\
Disable it with `$command meme`

### Moderator Only Channels

![](<../.gitbook/assets/image (19).png>)

Moderator only channels are perfect for preventing users from running commands in your `general` channel, preventing them from disrupting conversations.\
\
Just use `$modonly #channel #another-channel`

**Manage Server** permission is required to set moderator only channels

### Administrator Only Channels

![](<../.gitbook/assets/image (2).png>)

Similar to above, administrator only channels are channels where only administrators (users with **Manage Server** permission) can run commands.\
\
Same as above, use `$adminonly #channel #another-channel` to set administrator only channels.\
\
**Administrator** permission is required to set administrator only channels

## Languages

Unlike the old Python version of Fire, the TypeScript rewrite allows you to change the language Fire uses!\
\
This can be changed either for just you or the whole server.

{% hint style="info" %}
If you have the **Manage Server** permission, the `language` command will set the language for the whole server. To set it for yourself, run the command in DMs\
\
If a user has set their own language, they will see that language rather than the server language
{% endhint %}

To set the language, use `$language <language>` \
e.g. `$language en-GB`\
\
Currently there's only 3 languages, `en-US` (default), `en-GB` (en-US with slight changes) & `owo` (changes everything to owo-ified en-US)

## Link Filters

![](<../.gitbook/assets/image (3).png>)

Link filters in Fire allow you to prevent users from posting certain links, such as youtube videos or discord invites. I may be a bit biased but Fire's link filters are probably the best out there for catching & deleting links :)

### Enabling Filters

To enable a filter, use the `linkfilter` command, e.g. `$linkfilter discord` to block discord invite links (with support for external custom invite services such as invite.gg and Fire's own inv.wtf)\
\
Run the command without an argument, e.g. `$linkfilter` to see all the available filters.\
At the time of writing, they are `discord, paypal, youtube, twitch, twitter, shorteners`

### Adding Exclusions

There may be some users, roles or channels you would like to exclude from the filter. With the `filterexcl` command, you can easily exclude any of the three!\
\
e.g. `$filterexcl #promo` to exclude the imaginary `promo` channel from link filtering or `$filterexcl @Systemless#0001` to exclude the user \`Systemless#0001\` from link filtering.

### Filter Logging

When a link filter is triggered, it will be logged in your action logs channel, if enabled. For most filters it'll just say which filter was triggered and who triggered it but some are special and include additional information about what was posted, such as the `youtube` & `discord` filters.

![](<../.gitbook/assets/image (5).png>)

![](<../.gitbook/assets/image (12).png>)

## Vanity URL

With Fire, you can create a custom Vanity URL through inv.wtf, e.g. [inv.wtf/fire](https://inv.wtf/fire)\
\
This is perfect for sharing on social media or giving to friends as it gives a personal touch to the server and is shorter than any discord.gg link you could create.\
\
To create a vanity, use the `$vanityurl` command\
e.g. `$vanityurl coolpeople` to create inv.wtf/coolpeople

{% hint style="info" %}
If you'd prefer to provide an invite for Fire to use, you can do `$vanityurl coolpeople b9wG6Z5RBC`
{% endhint %}

## Public Server

Fire's website has a public servers page which you can shove your server into. Servers are shown to users in a random order and a captcha must be completed to access the invite to prevent scraping.\
\
The public servers page uses the same invite as your Vanity URL (since it's the same code pretty much) so you'll need to have one before going public.\
\
To make your server public, just run the `$public` command.\
This requires the **Manage Server** permission.

![](<../.gitbook/assets/image (22).png>)

![](<../.gitbook/assets/image (9).png>)

## Auto Quotes

Fire's `quote` command allows you to quote a message using a message link. This can be handy to refer to old messages or even ones from a different server (provided the server has Fire)\
\
With auto quotes, you can make Fire find message links in any message and quote them.

![](<../.gitbook/assets/image (23).png>)

Just run the `$autoquote` command to toggle auto quoting.

{% hint style="info" %}
The image above uses Fire's webhook quoting, which requires Fire to have the **Manage Webhooks** permission in the channel.\
\
Auto quoting follows all command restrictions, e.g. users can't quote in moderator only channels without being a moderator & also follows permissions meaning they cannot quote a message they don't have access to.
{% endhint %}
