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
      - IDLE_TIME=1800
    volumes:
      - /<host_folder_config>:/config
```

## Tags

Go [here](https://hotio.dev/containers-overview/#hotiohdidle) to see all available tags.
