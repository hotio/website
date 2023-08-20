---
hide:
  - toc
---

<div class="image-logo"><img src="/img/image-logos/prowlarr.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/prowlarr){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Prowlarr](https://github.com/prowlarr/prowlarr){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name prowlarr \
            -p 9696:9696 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            ghcr.io/hotio/prowlarr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          prowlarr:
            container_name: prowlarr
            image: ghcr.io/hotio/prowlarr
            ports:
              - "9696:9696"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

--8<-- "includes/tags.md"
