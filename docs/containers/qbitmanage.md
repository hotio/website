---
hide:
  - toc
---

--8<-- "includes/header-links.md"

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name qbitmanage \
        -e PUID=1001 \
        -e PGID=1001 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        environment:
          - PUID=1001
          - PGID=1001
          - UMASK=002
          - TZ=Etc/UTC
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/tags.md"

--8<-- "includes/wireguard.md"
