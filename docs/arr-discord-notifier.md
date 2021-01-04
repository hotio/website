---
hide:
  - navigation
---

[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/hotio/arr-discord-notifier)

Arr Discord Notifier sends pretty notifications to a discord webhook. The Radarr and Sonarr v3 (only v3 is supported) docker images come bundled with this script, but it can also be used on its own.

## Configuration

Add a `Custom Script` to the `Connect` settings in Sonarr/Radarr as seen below.  

<img src="/img/arr-discord-notifier-config.png" alt="config-screen" height="500" width="500" style="border: 1px solid #6c5d53;">

Then add the environment variable `DISCORD_WEBHOOK` with your webhook url provided by Discord to the container. After that hit the `Test` button and you should see a notification appear in your discord channel.  

If you also configure the environment variable `TMDB_API_KEY`, when possible it will use an episode still as a backdrop image and add a `Cast` field.

If you want to hide some fields, you can use `DROP_FIELDS="backdrop overview release airdate"` as a variable, all field names in lowercase, `backdrop` and `poster` are valid values too.

Sending to multiple webhooks can be done with additional variables like `DISCORD_WEBHOOK_0` and `DROP_FIELDS_0`.

By default the hostname is used as the Author of the notification, you can modify this by changing the hostname or the variable `AUTHOR_NAME`.

## Sample images

<img src="/img/arr-discord-notifier-sample1.png" alt="sample-screen" width="300">
<img src="/img/arr-discord-notifier-sample2.png" alt="sample-screen" width="300">
