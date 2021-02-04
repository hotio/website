[<img src="https://hotio.dev/img/mylar3.png" alt="logo" height="130" width="130">](https://github.com/mylar3/mylar3)

[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/hotio/mylar3)
[![GitHub Registry](https://img.shields.io/badge/github-registry-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/orgs/hotio/packages/container/package/mylar3)
[![Docker Pulls](https://img.shields.io/docker/pulls/hotio/mylar3?color=ffb64c&style=flat-square&label=pulls&logo=docker&logoColor=white&labelColor=757575)](https://hub.docker.com/r/hotio/mylar3)
[![Discord](https://img.shields.io/discord/610068305893523457?style=flat-square&color=ffb64c&label=discord&logo=discord&logoColor=white&labelColor=757575)](https://hotio.dev/discord)
[![Upstream](https://img.shields.io/badge/upstream-project-ffb64c?style=flat-square&labelColor=757575)](https://github.com/mylar3/mylar3)
[![Website](https://img.shields.io/badge/website-hotio.dev-ffb64c?style=flat-square&labelColor=757575)](https://hotio.dev/containers/mylar3)

## Starting the container

CLI:

```shell
docker run --rm \
    --name mylar3 \
    -p 8090:8090 \
    -e PUID=1000 \
    -e PGID=1000 \
    -e UMASK=002 \
    -e TZ="Etc/UTC" \
    -e ARGS="" \
    -v /<host_folder_config>:/config \
    hotio/mylar3
```

Compose:

```yaml
version: "3.7"

services:
  mylar3:
    container_name: mylar3
    image: hotio/mylar3
    ports:
      - "8090:8090"
    environment:
      - PUID=1000
      - PGID=1000
      - UMASK=002
      - TZ=Etc/UTC
      - ARGS
    volumes:
      - /<host_folder_config>:/config
```

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files.

## Tags

| Tag                | Upstream                           | Version | Build |
| -------------------|------------------------------------|---------|-------|
| `release` (latest) | GitHub releases                    | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhotio%2Fmylar3%2Frelease%2FVERSION.json) | ![build](https://img.shields.io/github/workflow/status/hotio/mylar3/build/release?style=flat-square&label=) |
| `nightly`          | Every commit to python3-dev branch | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhotio%2Fmylar3%2Fnightly%2FVERSION.json) | ![build](https://img.shields.io/github/workflow/status/hotio/mylar3/build/nightly?style=flat-square&label=) |

You can also find tags that reference a commit or version number.
