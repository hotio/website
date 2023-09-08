---
hide:
  - toc
---

<div class="image-logo no-logo"><img src="/img/pullio.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/autoscan){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/autoscan){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/autoscan){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Upstream Project](https://github.com/cloudbox/autoscan){: .header-icons target=_blank rel="noopener noreferrer" }  

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name autoscan \
        -p 3030:3030 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e PLEX_LOGIN="" \
        -e PLEX_PASSWORD="" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/autoscan
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      autoscan:
        container_name: autoscan
        image: ghcr.io/hotio/autoscan
        ports:
          - "3030:3030"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - PLEX_LOGIN
          - PLEX_PASSWORD
        volumes:
          - /<host_folder_config>:/config
    ```

If `PLEX_LOGIN` + `PLEX_PASSWORD` are not empty and the file `/config/plex.token` does not exist, an attempt is made to get a Plex token for Autoscan.

--8<-- "includes/tags.md"
