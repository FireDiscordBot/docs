---
description: >-
  Some news to share regarding new & future updates for Fire, crossposted from the Fire Discord server
---

# You can now purchase Fire Premium using PayPal!

![](../.gitbook/assets/fire-premium-paypal.png)

Fire Premium can currently be purchased using a credit/debit card (Visa, Mastercard, American Express, Discover, Diners Club and China UnionPay), Apple Pay, Google Pay. With the addition of PayPal support, it's even easier for you to get more from Fire!

To subscribe with PayPal, just select the PayPal option at checkout, enter your name, agree to the terms & privacy policy then hit `Subscribe`. You will then be redirected to PayPal where you can select the payment method to use & whether or not it should use your balance first.

![](../.gitbook/assets/paypal-checkout-option.png)

If you have any questions about/issues with using PayPal for Fire Premium, let me know in [#fire-help](https://discord.gg/firebot)

---

# Miscellaneous News

## Display Name support

You may have noticed that Fire does not currently have support for Discord's new display names which can result in features like autodehoist & autodecancer from functioning correctly. I just finalised my plans for the implementation of display names in Fire earlier this week which got delayed by Discord initially not allowing you to set a user's nickname to their username then changing it without saying anything.

Support for display names should come within the next 2 weeks and I will be running a script to go through users in servers with autodehoist & autodecancer enabled to ensure that all users are renamed correctly. Larger servers will be prioritised due to it taking much longer to go through them whereas smaller servers should only take a couple minutes each.

## Bug Fixes

I am aware of some bugs & minor quirks in Fire that have fortunately only affected a small number of users. After the display name update rolls out and the script is finished, I'll be working on fixing all of these as quickly as possible

## Fire Premium Referral Codes

I recently asked for some input on an upcoming Fire feature in the [official Discord server](https://discord.gg/firebot) without mentioning what exactly it was. I unfortunately did not receive great input so I'm hoping that by revealing what it's about, you'll be able to better understand what it is that I'm asking for which I'm hoping will result in better input.

Any user will be eligible to create a referral code (and maybe referral links too though I'm not sure if my idea for this will work correctly) which will give you both €2.50 (this amount may change!) credit for every user who signs up to Fire Premium for the first time with your code/link and stays subscribed past the trial period. This credit can either be used as a discount for an ongoing subscription or can be saved to be used to pay for Fire Premium. If you have an ongoing subscription, any credit you have will be used towards your next payment and I don't believe there's any way to prevent this from happening

What I am stuck on and requesting feedback on is whether the referral codes should be randomly generated or if users should be able to set their own codes. You can let me know your opinion either in the [Fire Discord server](https://discord.gg/firebot) or by sending an email to `referrals-feedback@getfire.bot`

## Update frequency

It's no secret that updates to Fire haven't been as frequent as they used to and it unfortunately doesn't support features before/when they are released. This is partially due to discord.js making changes that resulted in my fork being harder to maintain but also due to a lack of motivation on my end to work on it.

I recently purchased a new laptop (13" M2 MacBook Air if anyone is interested) that will be arriving in the next couple days as of writing this post and I'm hoping that the ability to work on Fire wherever I want to rather than being stuck in one place will provide the kickstart I need to get back to working on it, continuing the switch to slash commands and adding new features.

## New Social Account

Fire is now on Bluesky! You can follow it at `@getfire.bot` where updates & more will be posted, just like how they have been posted on Twitter
