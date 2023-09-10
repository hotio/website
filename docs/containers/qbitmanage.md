---
hide:
  - toc
---

--8<-- "includes/header-links.md"

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name qbitmanage \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/tags.md"
