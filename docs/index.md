---
hide:
  - navigation
---

<p align="center"><img src="/img/logo-header.png" alt="logo" height="250" width="250"></p>

## Introduction

Huh? What does `hotio` do?

I build and maintain Docker images. When joining the [Discord](discord) server you'll get access to the `#image-builds` channel and you can keep an eye on when your favorite app has released a new update. All the updating of docker images is automated, giving you the fastest updates. We're not just building them and pushing them out though...no, every app is tested and when they fail the test, pushing to the registries is cancelled. This for the most part ensures your system remains operational when you are doing auto-updates and are not paying attention.

The images get pushed to [DockerHub](dockerhub) and [ghcr.io](ghcr). They can then be pulled from DockerHub with `docker pull hotio/...` and from ghcr.io with `docker pull ghcr.io/hotio/...`.

On this website you'll also find all the documentation needed to get the containers running. All commands provided include the most basic to get the container running. In most cases you'll have to add additional volumes to get access to your other files that every app needs.

Almost all the commands will start with `docker run -rm ...`, which is the same as `docker create`, followed by `docker start`. The argument `--rm` will make sure that when we exit the container, it'll get deleted.

As you might have guessed, these command are not suited for longterm use. For that we suggest to maybe use `compose` or integrate the commands with `systemd`.

Images where you see a mention of `ENTRYPOINT` are meant to be used like any other cli app, except that they are containerized.

## Donations

If you like what I do, you know the drill... :octicons-heart-fill-24:{: .heart }

<iframe src="https://github.com/sponsors/mrhotio/button" title="Sponsor mrhotio" height="35" width="116" style="border: 0;"></iframe>

<sub><sup>Logo made possible by [Freepik](https://www.flaticon.com/authors/freepik) from [flaticon.com](https://www.flaticon.com).</sup></sub>
