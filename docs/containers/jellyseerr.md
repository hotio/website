---
hide:
  - toc
---

<div class="image-logo"><img src="/img/image-logos/jellyseerr.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jellyseerr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/jellyseerr){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jellyseerr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Upstream Project](https://github.com/Fallenbagel/jellyseerr){: .header-icons target=_blank rel="noopener noreferrer" }  

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name jellyseerr \
            -p 5055:5055 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            ghcr.io/hotio/jellyseerr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          jellyseerr:
            container_name: jellyseerr
            image: ghcr.io/hotio/jellyseerr
            ports:
              - "5055:5055"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

--8<-- "includes/tags.md"