---
hide:
  - toc
---

--8<-- "includes/header-links.md"

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name tautulli \
        -p 8181:8181 \
        -e PUID=1001 \
        -e PGID=1001 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp,8181/udp" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1001
          - PGID=1001
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp,8181/udp
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/tags.md"

--8<-- "includes/wireguard.md"
