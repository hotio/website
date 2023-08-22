---
hide:
  - navigation
---

<div class="pullio-banner"><img src="/img/pullio-sunglasses.svg" alt="pullio"/><div class="pullio-banner-text">I can do things...</div></div>

[:material-github: GitHub](https://github.com/hotio/pullio){: .header-icons target=_blank rel="noopener noreferrer" }  

Updating your docker containers the easy way.

[Pullio](https://raw.githubusercontent.com/hotio/pullio/master/pullio.sh){: target=_blank rel="noopener noreferrer" } is a bash script that you execute with cron, [jobber](https://dshearer.github.io/jobber/){: target=_blank rel="noopener noreferrer" }, a systemd timer or any other way that you prefer, it then does a `docker-compose pull` for all the containers configured to have notifications or updates enabled. It then checks if there's an update available and takes action according to your configuration. As you might have already guessed it, this script relies on docker-compose to do the heavy lifting and thus is only compatible with docker-compose managed containers.

Features:

- Discord notifications (see below for preview)
- No notifications if you leave the webhook out, it'll run as an updater and script executer
- Detailed info about what has changed for images that follow the Opencontainers Annotation Keys
- Execute script before sending notification
- Execute script before updating container, after container is stopped
- Private registries
- With `--tag` you can use seperate configs for hourly "Update available" notifications and on a daily schedule actually apply the updates

## Installation

```shell
sudo curl -fsSL "https://raw.githubusercontent.com/hotio/pullio/master/pullio.sh" -o /usr/local/bin/pullio
sudo chmod +x /usr/local/bin/pullio
```

Now execute it however and whenever you want.

## Configuration

You configure the script its behaviour by adding one or more of the following labels to your `docker-compose.yml` for every container you want. Adding no discord webhook will disable the notifications.

```text
...
labels:
  - "org.hotio.pullio.notify=true"
  - "org.hotio.pullio.update=true"
  - "org.hotio.pullio.discord.webhook=https://discord.com/api/webhooks/..."
  - "org.hotio.pullio.generic.webhook=https://some.domain.com/api/webhooks/..."
  - "org.hotio.pullio.author.avatar=https://domain.com/logo.png"
  - "org.hotio.pullio.script.notify=bash /notify-script.sh"
  - "org.hotio.pullio.script.update=bash /update-script.sh"
  - "org.hotio.pullio.registry.authfile=/authfile.txt"
```

Using `--tag mytag`, would let you do the following.

```text
...
labels:
  - "org.hotio.pullio.mytag.notify=true"
  - "org.hotio.pullio.mytag.discord.webhook=https://discord.com/api/webhooks/..."
```

If you need to provide credentials for a Private Registry, this file's content needs to be as shown below.

```text
{
  "registry": "ghcr.io",
  "username": "your_username",
  "password": "your_password"
}
```

## Troubleshooting

It can be frustrating to test the script if no docker image updates are available, for that you can do `./pullio.sh --debug` and the script will behave as if an update is available.

## Notification preview

<div class="pullio-preview">
<img src="/img/pullio-update-1.png" alt="preview"/>
<img src="/img/pullio-update-2.png" alt="preview"/>
<img src="/img/pullio-update-3.png" alt="preview"/>
<img src="/img/pullio-update-4.png" alt="preview"/>
<img src="/img/pullio-update-5.png" alt="preview"/>
</div>
