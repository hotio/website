[<img src="https://hotio.dev/img/qflood.png" alt="logo" height="130" width="130">](https://github.com/jesec/flood)

[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/hotio/qflood)
[![GitHub Registry](https://img.shields.io/badge/github-registry-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/orgs/hotio/packages/container/package/qflood)
[![Docker Pulls](https://img.shields.io/docker/pulls/hotio/qflood?color=ffb64c&style=flat-square&label=pulls&logo=docker&logoColor=white&labelColor=757575)](https://hub.docker.com/r/hotio/qflood)
[![Discord](https://img.shields.io/discord/610068305893523457?style=flat-square&color=ffb64c&label=discord&logo=discord&logoColor=white&labelColor=757575)](https://hotio.dev/discord)
[![Upstream Flood](https://img.shields.io/badge/upstream-flood-ffb64c?style=flat-square&labelColor=757575)](https://github.com/jesec/flood)
[![Upstream qBittorrent](https://img.shields.io/badge/upstream-qbittorrent-ffb64c?style=flat-square&labelColor=757575)](https://github.com/qbittorrent/qbittorrent)
[![Website](https://img.shields.io/badge/website-hotio.dev-ffb64c?style=flat-square&labelColor=757575)](https://hotio.dev/containers/qflood)

## What is this?

A docker image with qBittorrent and the Flood UI, also optional WireGuard VPN support.

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name qflood \
        -p 8080:8080 \
        -p 3000:3000 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e FLOOD_AUTH="false" \
        -v /<host_folder_config>:/config \
        hotio/qflood
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      qflood:
        container_name: qflood
        image: hotio/qflood
        ports:
          - "8080:8080"
          - "3000:3000"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - FLOOD_AUTH=false
        volumes:
          - /<host_folder_config>:/config
    ```

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files.

## Tags

--8<-- "tags/qflood.md"

--8<-- "includes/wg-pre.md"

=== "cli"

    ```shell
    docker run --rm \
        --name qflood \
        -p 8080:8080 \
        -p 3000:3000 \
        -p 8118:8118 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e VPN_ENABLED="true" \
        -e VPN_LAN_NETWORK="" \
        -e VPN_CONF="wg0" \
        -e VPN_ADDITIONAL_PORTS="" \
        -e PRIVOXY_ENABLED="false" \
        -e FLOOD_AUTH="false" \
        -v /<host_folder_config>:/config \
        --cap-add=NET_ADMIN \
        --sysctl="net.ipv4.conf.all.src_valid_mark=1" \
        --sysctl="net.ipv6.conf.all.disable_ipv6=0" \
        hotio/qflood
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      qflood:
        container_name: qflood
        image: hotio/qflood
        ports:
          - "8080:8080"
          - "3000:3000"
          - "8118:8118"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - VPN_ENABLED=true
          - VPN_LAN_NETWORK
          - VPN_CONF=wg0
          - VPN_ADDITIONAL_PORTS
          - PRIVOXY_ENABLED=false
          - FLOOD_AUTH=false
        volumes:
          - /<host_folder_config>:/config
        cap_add:
          - NET_ADMIN
        sysctls:
          - net.ipv4.conf.all.src_valid_mark=1
          - net.ipv6.conf.all.disable_ipv6=0
    ```

--8<-- "includes/wg-post.md"
