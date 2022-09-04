<div class="image-logo"><img src="/img/image-logos/flood.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qflood){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/qflood){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qflood){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: quay.io](https://quay.io/repository/hotio/qflood){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: qBittorrent](https://github.com/qbittorrent/qbittorrent){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-link-16: Flood](https://github.com/jesec/flood){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

!!! question "What is this?"

    A docker image with qBittorrent and the Flood UI, also optional WireGuard VPN support.

!!! warning
    A recent qBittorrent update (v4.4.5) has broken the Flood UI, you'll see a message that no connection could be established.

## Starting the container

!!! docker ""

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
            cr.hotio.dev/hotio/qflood
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          qflood:
            container_name: qflood
            image: cr.hotio.dev/hotio/qflood
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

    === "cli vpn"

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
            -e VPN_IP_CHECK_DELAY="5" \
            -e PRIVOXY_ENABLED="false" \
            -e FLOOD_AUTH="false" \
            -v /<host_folder_config>:/config \
            --cap-add=NET_ADMIN \
            --sysctl="net.ipv4.conf.all.src_valid_mark=1" \
            --sysctl="net.ipv6.conf.all.disable_ipv6=0" \
            cr.hotio.dev/hotio/qflood
        ```

    === "compose vpn"

        ```yaml
        version: "3.7"

        services:
          qflood:
            container_name: qflood
            image: cr.hotio.dev/hotio/qflood
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
              - VPN_IP_CHECK_DELAY=5
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

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files.

!!! info "Login credentials"

    The default qBittorrent username is `admin` and the default password is `adminadmin`. If this doesn't work you're probably running Unraid and you'll most likely have to change the internal port on which the WebUI runs to match the external port.

--8<-- "includes/tags.md"

## Changing the WebUI port

Under certain circumstances it's required to run the WebUI on a different internal port, you can do that by modifying the environment variable `WEBUI_PORTS` accordingly. It should be in the format `xxxx/tcp,xxxx/udp`, take a look at the default with `docker logs` (variable is printed at container start) or `docker inspect`.

--8<-- "includes/wireguard.md"

--8<-- "includes/wireguard-go.md"
