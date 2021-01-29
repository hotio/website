[<img src="https://hotio.dev/img/duplicacy.png" alt="logo" height="130" width="130">](https://duplicacy.com/)

[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/hotio/duplicacy)
[![GitHub Registry](https://img.shields.io/badge/github-registry-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/orgs/hotio/packages/container/package/duplicacy)
[![Docker Pulls](https://img.shields.io/docker/pulls/hotio/duplicacy?color=ffb64c&style=flat-square&label=pulls&logo=docker&logoColor=white&labelColor=757575)](https://hub.docker.com/r/hotio/duplicacy)
[![Discord](https://img.shields.io/discord/610068305893523457?style=flat-square&color=ffb64c&label=discord&logo=discord&logoColor=white&labelColor=757575)](https://hotio.dev/discord)
[![Upstream](https://img.shields.io/badge/upstream-project-ffb64c?style=flat-square&labelColor=757575)](https://duplicacy.com/)
[![Website](https://img.shields.io/badge/website-hotio.dev-ffb64c?style=flat-square&labelColor=757575)](https://hotio.dev/containers/duplicacy)

## Starting the container

CLI:

```shell
docker run --rm \
    --name duplicacy \
    --hostname duplicacy \
    -p 3875:3875 \
    -e PUID=1000 \
    -e PGID=1000 \
    -e UMASK=002 \
    -e TZ="Etc/UTC" \
    -e ARGS="" \
    -e DEBUG="no" \
    -v /<host_folder_config>:/config \
    -v /<host_folder_cache>:/cache \
    -v /<host_folder_logs>:/logs \
    hotio/duplicacy
```

Compose:

```yaml
version: "3.7"

services:
  duplicacy:
    container_name: duplicacy
    hostname: duplicacy
    image: hotio/duplicacy
    ports:
      - "3875:3875"
    environment:
      - PUID=1000
      - PGID=1000
      - UMASK=002
      - TZ=Etc/UTC
      - ARGS
      - DEBUG=no
    volumes:
      - /<host_folder_config>:/config
      - /<host_folder_cache>:/cache
      - /<host_folder_logs>:/logs
```

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files. If you don't want to enter your password every time you restart the container, set the environment variable `DWE_PASSWORD` with your password.

## Tags

| Tag                | Upstream       | Version | Build |
| -------------------|----------------|---------|-------|
| `release` (latest) | Stable channel | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhotio%2Fduplicacy%2Frelease%2FVERSION.json) | ![build](https://img.shields.io/github/workflow/status/hotio/duplicacy/build/release?style=flat-square&label=) |
| `testing`          | Latest channel | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhotio%2Fduplicacy%2Ftesting%2FVERSION.json) | ![build](https://img.shields.io/github/workflow/status/hotio/duplicacy/build/testing?style=flat-square&label=) |

You can also find tags that reference a commit or version number.

## Executing your own scripts

If you have a need to do additional stuff when the container starts or stops, you can mount your script with the volume `/docker/host/my-script.sh:/etc/cont-init.d/99-my-script` to execute your script on container start or `/docker/host/my-script.sh:/etc/cont-finish.d/99-my-script` to execute it when the container stops. An example script can be seen below.

```shell
#!/usr/bin/with-contenv bash

echo "Hello, this is me, your script."
```

## Troubleshooting a problem

By default all output is redirected to `/dev/null`, so you won't see anything from the application when using `docker logs`. Most applications write everything to a log file too. If you do want to see this output with `docker logs`, you can set `DEBUG` to `yes`.
