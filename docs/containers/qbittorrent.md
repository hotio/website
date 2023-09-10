---
hide:
  - toc
---

--8<-- "includes/header-links.md"

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
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbittorrent
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      qbittorrent:
        container_name: qbittorrent
        image: ghcr.io/hotio/qbittorrent
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

=== "cli vpn"

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
        -v /<host_folder_data>:/data \
        --cap-add=NET_ADMIN \
        --dns 1.1.1.1 \
        --sysctl="net.ipv4.conf.all.src_valid_mark=1" \
        --sysctl="net.ipv6.conf.all.disable_ipv6=0" \
        ghcr.io/hotio/qbittorrent
    ```

=== "compose vpn"

    ```yaml
    version: "3.7"

    services:
      qbittorrent:
        container_name: qbittorrent
        image: ghcr.io/hotio/qbittorrent
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
          - /<host_folder_data>:/data
        cap_add:
          - NET_ADMIN
        dns:
          - 1.1.1.1
        sysctls:
          - net.ipv4.conf.all.src_valid_mark=1
          - net.ipv6.conf.all.disable_ipv6=0
    ```

!!! info "Login credentials"

    The default qBittorrent username is `admin` and the default password is `adminadmin`. If this doesn't work you're probably running Unraid and you'll most likely have to change the internal port on which the WebUI runs to match the external port.

--8<-- "includes/tags.md"

## Changing the WebUI port

Under certain circumstances it's required to run the WebUI on a different internal port, you can do that by modifying the environment variable `WEBUI_PORTS` accordingly. It should be in the format `xxxx/tcp,xxxx/udp`, take a look at the default with `docker logs` (variable is printed at container start) or `docker inspect`.

## VueTorrent

[<img src="/img/vuetorrentui.png" alt="vuetorrentui">](https://github.com/WDaan/VueTorrent){: target=_blank rel="noopener noreferrer" }

This image comes bundled with the alternative Web UI VueTorrent, to enable it you'll have to adjust your settings like pictured below.

<img src="/img/vuetorrentsettings.png" alt="vuetorrentsettings" width="300">

--8<-- "includes/wireguard.md"

--8<-- "includes/wireguard-go.md"
