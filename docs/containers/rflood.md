---
hide:
  - toc
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/rflood){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/rflood){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/rflood){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Upstream Project 1](https://github.com/jesec/rtorrent){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-link-16: Upstream Project 2](https://github.com/jesec/flood){: .header-icons target=_blank rel="noopener noreferrer" }  

!!! question "What is this?"

    A docker image with rTorrent and the Flood UI, also optional WireGuard VPN support.

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name rflood \
        -p 3000:3000 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e FLOOD_AUTH="false" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/rflood
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      rflood:
        container_name: rflood
        image: ghcr.io/hotio/rflood
        ports:
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
        --name rflood \
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
        --dns 1.1.1.1 \
        --sysctl="net.ipv4.conf.all.src_valid_mark=1" \
        --sysctl="net.ipv6.conf.all.disable_ipv6=0" \
        ghcr.io/hotio/rflood
    ```

=== "compose vpn"

    ```yaml
    version: "3.7"

    services:
      rflood:
        container_name: rflood
        image: ghcr.io/hotio/rflood
        ports:
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
        dns:
          - 1.1.1.1
        sysctls:
          - net.ipv4.conf.all.src_valid_mark=1
          - net.ipv6.conf.all.disable_ipv6=0
    ```

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files.

--8<-- "includes/tags.md"

## Changing the WebUI port

Under certain circumstances it's required to run the WebUI on a different internal port, you can do that by modifying the environment variable `WEBUI_PORTS` accordingly. It should be in the format `xxxx/tcp,xxxx/udp`, take a look at the default with `docker logs` (variable is printed at container start) or `docker inspect`.

--8<-- "includes/wireguard.md"

--8<-- "includes/wireguard-go.md"
