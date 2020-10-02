<p align="center""><img src="/img/logo-transparent.png" alt="Logo" height="300" width="300"></p>

Huh? What does `hotio` do?

I build and maintain Docker images. When joining the [discord](discord) server you'll get access to the `#image-builds` channel and can keep an eye on when your favorite app has released a new update. All the updating of docker images is automated, giving you the fastest updates. We're not just building them and pushing them to you though...every app is tested and when they fail the test, pushing to the registries is cancelled.

The images get pushed to [DockerHub](dockerhub) and [ghcr.io](ghcr).

On this website you'll find all the documentation needed to get the containers running. All commands provided include the most basic to get the container running.

Almost all the commands will start with `docker run -rm ...`, which is the same as `docker create`, followed by `docker start`. The argument `--rm` will make sure that when we exit the container, it'll get deleted.

As you might have guessed, these command are not suited for longterm use. For that we suggest to maybe use `compose` or integrate the commands with `systemd`.

All images can be pulled from Docker Hub with `docker pull hotio/...` and from GitHub Container Registry with `docker pull ghcr.io/hotio/...`.

Images where you see a mention of `ENTRYPOINT` are meant to be used like any other cli app, except that they are containerized.

<sub><sup>Logo made possible by [Freepik](https://www.flaticon.com/authors/freepik) from [flaticon.com](https://www.flaticon.com).</sup></sub>
