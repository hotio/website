[<img src="https://hotio.dev/img/requestrr.png" alt="logo" height="130" width="130">](https://github.com/darkalfx/requestrr)

[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/hotio/requestrr)
[![GitHub Registry](https://img.shields.io/badge/github-registry-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/orgs/hotio/packages/container/package/requestrr)
[![Docker Pulls](https://img.shields.io/docker/pulls/hotio/requestrr?color=ffb64c&style=flat-square&label=pulls&logo=docker&logoColor=white&labelColor=757575)](https://hub.docker.com/r/hotio/requestrr)
[![Discord](https://img.shields.io/discord/610068305893523457?style=flat-square&color=ffb64c&label=discord&logo=discord&logoColor=white&labelColor=757575)](https://hotio.dev/discord)
[![Upstream](https://img.shields.io/badge/upstream-project-ffb64c?style=flat-square&labelColor=757575)](https://github.com/darkalfx/requestrr)
[![Website](https://img.shields.io/badge/website-hotio.dev-ffb64c?style=flat-square&labelColor=757575)](https://hotio.dev/containers/requestrr)

## Starting the container

CLI:

```shell
docker run --rm \
    --name requestrr \
    -p 4545:4545 \
    -e PUID=1000 \
    -e PGID=1000 \
    -e UMASK=002 \
    -e TZ="Etc/UTC" \
    -e ARGS="" \
    -v /<host_folder_config>:/config \
    hotio/requestrr
```

Compose:

```yaml
version: "3.7"

services:
  requestrr:
    container_name: requestrr
    image: hotio/requestrr
    ports:
      - "4545:4545"
    environment:
      - PUID=1000
      - PGID=1000
      - UMASK=002
      - TZ=Etc/UTC
      - ARGS
    volumes:
      - /<host_folder_config>:/config
```

## Tags

| Tag                | Upstream        | Version | Build |
| -------------------|-----------------|---------|-------|
| `release` (latest) | GitHub releases | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhotio%2Frequestrr%2Frelease%2FVERSION.json) | ![build](https://img.shields.io/github/workflow/status/hotio/requestrr/build/release?style=flat-square&label=) |

You can also find tags that reference a commit or version number.
