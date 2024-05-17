---
description: >-
  Details about an incident that occured at Sentry, a service Fire uses for error tracking, that resulted in some data being exposed.
---

# What happened?

On May 15th, Sentry's team was alerted to a mistake that resulted in data about errors being exposed. Most of this data is fine to be public but there is one important piece that required action from me: breadcrumbs.

Breadcrumbs are a "trail" to show what happened leading up to the error. For Fire, this is almost always just console logs and HTTP requests. The data included about HTTP requests is minimal (no headers, meaning Fire's token is safe and is never shared with third-party data processors anyways) but the URL is included, which is what the issue was here

# What got exposed?

Most of Fire's requests are to Discord's API with the primary two resources being audit logs & webhooks. Audit logs are fine because the URL does not contain any sensitive data but to execute a webhook, the ID & webhook token is required

This lead to some webhooks being exposed as they were included in the breadcrumbs. With these URLs, anyone can send messages to the channel they're in and can even mention everyone

The total number of webhooks exposed was 18 and they were all for logging channels, which made handling this very easy. A quick DELETE request to all exposed webhooks resulted in them all being deleted, as anyone can delete a webhook once they know the ID & webhook token. Fire was then restarted to more quickly clear out the now deleted webhooks from memory to prevent unnecessary requests to them

Fire will (and already has for most of the servers) create a new webhook the next time something is being logged.

# Do I need to worry?

No. Thanks to the quick cooperation of Sentry's security team, I was given a list of all issues that got exposed along with a data dump for one expired issue which allowed me to identify what was exposed and take immediate action.

Mistakes happen, we're only human after all, so this will not impact Fire's relationship with Sentry meaning Fire will continue to use it for error tracking. I have also implemented changes in Fire to filter out webhook IDs & tokens in breadcrumbs before being sent to Sentry meaning they will not be exposed in the future