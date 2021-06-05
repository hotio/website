<div class="image-logo"><img src="/img/image-logos/qbittorrent.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbittorrent){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/qbittorrent){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/qbittorrent){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: qBittorrent](https://github.com/qbittorrent/qbittorrent){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: VueTorrent](https://github.com/WDaan/VueTorrent){: .header-icons target=_blank rel="noopener noreferrer" }

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

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
            --cap-add=NET_ADMIN \
            --sysctl="net.ipv4.conf.all.src_valid_mark=1" \
            --sysctl="net.ipv6.conf.all.disable_ipv6=0" \
            hotio/qbittorrent
        ```

    === "compose vpn"

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

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files.

--8<-- "includes/tags.md"

## VueTorrent

[<img src="/img/vuetorrentui.png" alt="vuetorrentui">](https://github.com/WDaan/VueTorrent){: target=_blank rel="noopener noreferrer" }

This image comes bundled with the alternative Web UI VueTorrent, to enable it you'll have to adjust your settings like pictured below.

<img src="/img/vuetorrentsettings.png" alt="vuetorrentsettings" width="300">

--8<-- "includes/wireguard.md"
