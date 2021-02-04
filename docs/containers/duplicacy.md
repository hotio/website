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
    volumes:
      - /<host_folder_config>:/config
      - /<host_folder_cache>:/cache
      - /<host_folder_logs>:/logs
```

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files. If you don't want to enter your password every time you restart the container, you can set the environment variable `DWE_PASSWORD` with your password or starting with version 1.4.1 a file `/config/keyring` will be created that stores your password encryted if you click the checkmark on the login page.

## Tags

Go [here](https://hotio.dev/tags-overview/#hotioduplicacy) to see all available tags.
