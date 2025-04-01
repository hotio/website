---
hide:
  - toc
---

--8<-- "includes/header-links.md"

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name readarr \
        -p 8787:8787 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/readarr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      readarr:
        container_name: readarr
        image: ghcr.io/hotio/readarr
        ports:
          - "8787:8787"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/tags.md"

--8<-- "includes/wireguard.md"
