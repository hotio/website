[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/hotio/hdidle)
[![GitHub Registry](https://img.shields.io/badge/github-registry-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/orgs/hotio/packages/container/package/hdidle)
[![Docker Pulls](https://img.shields.io/docker/pulls/hotio/hdidle?color=ffb64c&style=flat-square&label=pulls&logo=docker&logoColor=white&labelColor=757575)](https://hub.docker.com/r/hotio/hdidle)
[![Discord](https://img.shields.io/discord/610068305893523457?style=flat-square&color=ffb64c&label=discord&logo=discord&logoColor=white&labelColor=757575)](https://hotio.dev/discord)
[![Upstream](https://img.shields.io/badge/upstream-project-ffb64c?style=flat-square&labelColor=757575)](https://github.com/adelolmo/hd-idle)
[![Website](https://img.shields.io/badge/website-hotio.dev-ffb64c?style=flat-square&labelColor=757575)](https://hotio.dev/containers/hdidle)

## Starting the container

CLI:

```shell
docker run --rm \
    --name hdidle \
    --privileged=true \
    -e PUID=1000 \
    -e PGID=1000 \
    -e UMASK=002 \
    -e TZ="Etc/UTC" \
    -e ARGS="" \
    -e DEBUG="no" \
    -e IDLE_TIME=1800 \
    -v /<host_folder_config>:/config \
    hotio/hdidle
```

Compose:

```yaml
version: "3.7"

services:
  hdidle:
    container_name: hdidle
    image: hotio/hdidle
    privileged: true
    environment:
      - PUID=1000
      - PGID=1000
      - UMASK=002
      - TZ=Etc/UTC
      - ARGS
      - DEBUG=no
      - IDLE_TIME=1800
    volumes:
      - /<host_folder_config>:/config
```

## Tags

| Tag                | Upstream        | Version | Build |
| -------------------|-----------------|---------|-------|
| `release` (latest) | GitHub releases | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhotio%2Fhdidle%2Frelease%2FVERSION.json) | ![build](https://img.shields.io/github/workflow/status/hotio/hdidle/build/release?style=flat-square&label=) |

You can also find tags that reference a commit or version number.

## Executing your own scripts

If you have a need to do additional stuff when the container starts or stops, you can mount your script with the volume `/docker/host/my-script.sh:/etc/cont-init.d/99-my-script` to execute your script on container start or `/docker/host/my-script.sh:/etc/cont-finish.d/99-my-script` to execute it when the container stops. An example script can be seen below.

```shell
#!/usr/bin/with-contenv bash

echo "Hello, this is me, your script."
```

## Troubleshooting a problem

By default all output is redirected to `/dev/null`, so you won't see anything from the application when using `docker logs`. Most applications write everything to a log file too. If you do want to see this output with `docker logs`, you can set `DEBUG` to `yes`.
