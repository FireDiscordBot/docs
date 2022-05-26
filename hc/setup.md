---
description: >-
  Here we'll go through various configuration commands to personalise Fire for
  your server.
---

# Configuring Fire

{% hint style="warning" %}
If you do not set moderators, only those with **Manage Server** will be able to use moderation commands as they are considered admins
{% endhint %}

## Setting Moderators

To use moderation commands _without_ the manage server permission, you must set moderators using the `/moderators add` command

![](../.gitbook/assets/moderators_add_cmd.png)

This command can be used to add either a user or role as a moderator and can be used multiple times to add multiple users or roles.

Removing moderators can be done with the `/moderators remove` command and you can list current moderators using the `/moderators list` command

## Enabling Logging

Fire provides 3 different types of logging: Moderation, Action & Members

All 3 can be toggled using the `/logging toggle` command.

![](../.gitbook/assets/logging_toggle_cmd.png)

You can configure what exactly gets logged by using the `/logging configure` command.

![](../.gitbook/assets/logging_configure_cmd.png)
![](../.gitbook/assets/logging_configure.png)

## Command Restrictions

### Disabling Commands

Sometimes you'll find a command you don't want users in your server to use. No worries, you can easily disable the command with the `command` command (great name, I know)

![](../.gitbook/assets/command_cmd.png)

For example, do you want to disable the `meme` command to prevent users seeing memes that are too spicy for your liking?
Disable it with `/command meme`

{% hint style="info" %}
Disabling a command restricts it's usage to moderators so even if a command is disabled, it can still be used by anyone added as a moderator or those with the `Manage Server` permission.
{% endhint %}

### Moderator Only Channels

![](../.gitbook/assets/modonly_cmd.png)

Moderator only channels are perfect for preventing users from, for example, running commands in your `general` channel and disrupting conversations.

Slash command usage can be configured via the `Integrations` tab in Server Settings, however, this only prevents slash commands from being used and not quotes from message links, the `--remind` flag and message commands if applicable.

{% hint style="danger" %}
**Manage Server** permission is required to set moderator only channels
{% endhint %}

### Administrator Only Channels

![](../.gitbook/assets/adminonly_cmd.png)

Similar to above, administrator only channels are channels where only administrators (users with **Manage Server** permission) can run commands, quote messages via links and set reminders using the `--remind` flag.

{% hint style="danger" %}
**Administrator** permission is required to set administrator only channels
{% endhint %}

## Languages

Unlike the old Python version of Fire, the TypeScript rewrite allows you to change the language Fire uses!

This can be changed either for just you or the whole server.

{% hint style="info" %}
If you have the **Manage Server** permission, the `language` command will set the language for the whole server. To set it for yourself, run the command in DMs

If a user has set their own language, they will see that language rather than the server language
{% endhint %}

To set the language, use `$language <language>`
e.g. `$language en-GB`

Currently there's only 2 languages, `en-US` (default) and `en-GB` (en-US with slight changes)

{% hint style="info" %}
You can help contribute to the translation of Fire by joining the [Fire Crowdin](https://inv.wtf/i18n) project
{% endhint %}

## Link Filters

Link filters in Fire allow you to prevent users from posting certain links, such as youtube videos or discord invites.

### Enabling Filters

To toggle filters, use the `/linkfilter toggle` command

![](../.gitbook/assets/linkfilter_toggle_cmd.png)
![](../.gitbook/assets/linkfilter_toggle.png)

### Adding Exclusions

There may be some users, roles or channels you would like to exclude from the filter. With the `/linkfilter exclude` command, you can easily exclude any of the three!

![](../.gitbook/assets/linkfilter_exclude_cmd.png)

### Filter Logging

When a link filter is triggered, it will be logged in your action logs channel, if enabled. For most filters it'll just say which filter was triggered and who triggered it but some are special and include additional information about what was posted, such as the `youtube` & `discord` filters.

![](../.gitbook/assets/linkfilter_logging_discord.png)

![](../.gitbook/assets/linkfilter_logging_youtube.png)

## Vanity URL

With Fire, you can create a custom Vanity URL through inv.wtf, e.g. [inv.wtf/fire](https://inv.wtf/fire)

This is perfect for sharing on social media or giving to friends as it gives a personal touch to the server and is shorter than any discord.gg link you could create.

![](../.gitbook/assets/vanityurl_cmd.png)

## Public Server

Fire's website has a public servers page which you can shove your server into. Servers are shown to users in a random order and a captcha must be completed to access the invite to prevent scraping.

The public servers page uses the same invite as your Vanity URL (since it's the same code pretty much) so you'll need to have one before going public.

To make your server public, just run the `/public` command.
This requires the **Manage Server** permission.

![](../.gitbook/assets/public_cmd.png)

![](../.gitbook/assets/website_discover.png)

## Auto Quotes

Fire's `quote` command allows you to quote a message using a message link. This can be handy to refer to old messages or even ones from a different server (provided the server has Fire)

When the quote command is enabled (which it is by default, but you can disable it with `/command`) you can make Fire find message links in any message and quote them.

![](../.gitbook/assets/autoquote_example.png)

{% hint style="info" %}
The image above uses Fire's webhook quoting, which requires Fire to have the **Manage Webhooks** permission in the channel.

Auto quoting follows all command restrictions, e.g. users can't quote in moderator only channels without being a moderator & also follows permissions meaning they cannot quote a message they don't have access to.
{% endhint %}
