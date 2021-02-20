[<img src="https://hotio.dev/img/qbittorrent.png" alt="logo" height="130" width="130">](https://github.com/qbittorrent/qbittorrent)

[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/hotio/qbittorrent)
[![GitHub Registry](https://img.shields.io/badge/github-registry-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/orgs/hotio/packages/container/package/qbittorrent)
[![Docker Pulls](https://img.shields.io/docker/pulls/hotio/qbittorrent?color=ffb64c&style=flat-square&label=pulls&logo=docker&logoColor=white&labelColor=757575)](https://hub.docker.com/r/hotio/qbittorrent)
[![Discord](https://img.shields.io/discord/610068305893523457?style=flat-square&color=ffb64c&label=discord&logo=discord&logoColor=white&labelColor=757575)](https://hotio.dev/discord)
[![Upstream](https://img.shields.io/badge/upstream-project-ffb64c?style=flat-square&labelColor=757575)](https://github.com/qbittorrent/qbittorrent)
[![Website](https://img.shields.io/badge/website-hotio.dev-ffb64c?style=flat-square&labelColor=757575)](https://hotio.dev/containers/qbittorrent)

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name qbittorrent \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        hotio/qbittorrent
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      qbittorrent:
        container_name: qbittorrent
        image: hotio/qbittorrent
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files.

## Tags

--8<-- "tags/qbittorrent.md"

--8<-- "includes/wg-pre.md"

=== "cli"

    ```shell
    docker run --rm \
        --name qbittorrent \
        -p 8080:8080 \
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
        -v /<host_folder_config>:/config \
        --cap-add=NET_ADMIN \
        --sysctl="net.ipv4.conf.all.src_valid_mark=1" \
        --sysctl="net.ipv6.conf.all.disable_ipv6=0" \
        hotio/qbittorrent
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      qbittorrent:
        container_name: qbittorrent
        image: hotio/qbittorrent
        ports:
          - "8080:8080"
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
        volumes:
          - /<host_folder_config>:/config
        cap_add:
          - NET_ADMIN
        sysctls:
          - net.ipv4.conf.all.src_valid_mark=1
          - net.ipv6.conf.all.disable_ipv6=0
    ```

--8<-- "includes/wg-post.md"

## VueTorrent

[<img src="https://hotio.dev/img/vuetorrentui.png" alt="vuetorrentui">](https://github.com/WDaan/VueTorrent)

This image comes bundled with the alternative Web UI VueTorrent, to enable it you'll have to adjust your settings like pictured below.

<img src="https://hotio.dev/img/vuetorrentsettings.png" alt="vuetorrentsettings" width="300">
