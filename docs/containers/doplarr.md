---
hide:
  - toc
---

<div class="image-logo"><img src="/img/image-logos/doplarr.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/doplarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/doplarr){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/doplarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Doplarr](https://github.com/kiranshila/doplarr){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name doplarr \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/doplarr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          doplarr:
            container_name: doplarr
            image: cr.hotio.dev/hotio/doplarr
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

--8<-- "includes/tags.md"
