---
hide:
  - navigation
---

<img src="/img/hello.png" alt="hello" width="500" height="168">

## Introduction

Huh? What does `hotio` do?

I build and maintain Docker images. When joining the [Discord](discord){: target=_blank } server you'll get access to the `#image-builds` channel and you can keep an eye on when your favorite app has released a new update. All the updating of docker images is automated, giving you the fastest updates. We're not just building them and pushing them out though...no, every app is tested and when they fail the test, pushing to the registries is cancelled. This for the most part ensures your system remains operational when you are doing auto-updates and are not paying attention.

The images get pushed to [DockerHub](dockerhub){: target=_blank } and [ghcr.io](ghcr){: target=_blank }. They can then be pulled from DockerHub with `docker pull hotio/...` and from ghcr.io with `docker pull ghcr.io/hotio/...`.

On this website you'll also find all the documentation needed to get the containers running. All commands provided include the most basic to get the container running. In most cases you'll have to add additional volumes to get access to your other files that every app needs.

Almost all the commands will start with `docker run -rm ...`, which is the same as `docker create`, followed by `docker start`. The argument `--rm` will make sure that when we exit the container, it'll get deleted.

As you might have guessed, these command are not suited for longterm use. For that we suggest to maybe use `docker-compose` or integrate the commands with `systemd`.

Images where you see a mention of `ENTRYPOINT` are meant to be used like any other cli app, except that they are containerized.

## Support

Join us on Discord!

<a href="discord" target="_blank">
  <img src="/img/discord.png" alt="discord" width="300" height="102">
</a>

## Donations

If you like what I do, you know the drill... :octicons-heart-fill-24:{: .heart }

[:material-github: GitHub Sponsors](https://github.com/sponsors/mrhotio){: .md-button target=_blank .donate-button }

[:fontawesome-solid-money-bill-wave: Open Collective](https://opencollective.com/hotio_collective/donate){: .md-button target=_blank .donate-button }

[:fontawesome-solid-coins: Nano](https://nanocrawler.cc/explorer/account/nano_1bxqm6nsm55s64rgf8f5k9m795hda535to6y15ik496goatakpupjfqzokfc/history){: .md-button target=_blank .donate-button }

[:material-bitcoin: Bitcoin](https://www.blockchain.com/btc/address/39W6dcaG3uuF5mZTRL4h6Ghem74kUBHrmz){: .md-button target=_blank .donate-button }

[:material-litecoin: Litecoin](https://live.blockcypher.com/ltc/address/MMUFcGLiK6DnnHGFnN2MJLyTfANXw57bDY/){: .md-button target=_blank .donate-button }
