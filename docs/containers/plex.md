[<img src="https://hotio.dev/img/plex.png" alt="logo" height="130" width="130">](https://www.plex.tv)

[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/hotio/plex)
[![GitHub Registry](https://img.shields.io/badge/github-registry-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/orgs/hotio/packages/container/package/plex)
[![Docker Pulls](https://img.shields.io/docker/pulls/hotio/plex?color=ffb64c&style=flat-square&label=pulls&logo=docker&logoColor=white&labelColor=757575)](https://hub.docker.com/r/hotio/plex)
[![Discord](https://img.shields.io/discord/610068305893523457?style=flat-square&color=ffb64c&label=discord&logo=discord&logoColor=white&labelColor=757575)](https://hotio.dev/discord)
[![Upstream](https://img.shields.io/badge/upstream-project-ffb64c?style=flat-square&labelColor=757575)](https://www.plex.tv)
[![Website](https://img.shields.io/badge/website-hotio.dev-ffb64c?style=flat-square&labelColor=757575)](https://hotio.dev/containers/plex)

## Starting the container

CLI:

```shell
docker run --rm \
    --name plex \
    -p 32400:32400 \
    -e PUID=1000 \
    -e PGID=1000 \
    -e UMASK=002 \
    -e TZ="Etc/UTC" \
    -e ARGS="" \
    -e PLEX_CLAIM="" \
    -e ADVERTISE_IP="" \
    -e ALLOWED_NETWORKS="" \
    -e PLEX_PASS="no" \
    -v /<host_folder_config>:/config \
    -v /<host_folder_transcode>:/transcode \
    hotio/plex
```

Compose:

```yaml
version: "3.7"

services:
  plex:
    container_name: plex
    image: hotio/plex
    ports:
      - "32400:32400"
    environment:
      - PUID=1000
      - PGID=1000
      - UMASK=002
      - TZ=Etc/UTC
      - ARGS
      - PLEX_CLAIM
      - ADVERTISE_IP
      - ALLOWED_NETWORKS
      - PLEX_PASS=no
    volumes:
      - /<host_folder_config>:/config
      - /<host_folder_transcode>:/transcode
```

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files.

## Tags

Go [here](https://hotio.dev/tags-overview/#hotioplex) to see all available tags.

## Volumes

By default the container has 2 volumes defined, the volume `/config` that contains the configuration files and the volume `/transcode` which is used as the default transcode directory.

## Claim your server

Go to [plex.tv/claim](https://www.plex.tv/claim) and login with your account, copy the claim code and add it to the environment variable like this `-e PLEX_CLAIM="claim-xxxxxxxxxxxxxxxxxxxx"`. When starting the new plex server for the first time, the server will be added to your account.

## Plex Pass

If you are a Plex Pass subscriber, you can enable the install of beta builds with `-e PLEX_PASS="yes"`. When the container starts, a version check is done for the latest beta and installed if a newer version is found.

## Environment variables ADVERTISE_IP and ALLOWED_NETWORKS

The variables correspond to the below plex network settings.

![Plex settings](https://hotio.dev/img/plex_settings.png "Plex settings")

## TOP secret stuff

If you do `-e PLEX_PASS="https://..."`, stuff happens for which no support will be given.

## Configuration

Your plex configuration inside the container is stored in `/config/app/Plex Media Server`, your `Preferences.xml` file its full path would be `/config/app/Plex Media Server/Preferences.xml`.

## Hardware support

To make your hardware devices available inside the container use the following argument `--device=/dev/dri:/dev/dri` for Intel QuickSync and `--device=/dev/dvb:/dev/dvb` for a tuner. NVIDIA users should go visit the [NVIDIA github](https://github.com/NVIDIA/nvidia-docker) page for instructions.
