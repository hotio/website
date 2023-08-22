---
hide:
  - toc
---

<div class="image-logo"><img src="/img/image-logos/lidarr.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/lidarr){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name lidarr \
            -p 8686:8686 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            ghcr.io/hotio/lidarr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          lidarr:
            container_name: lidarr
            image: ghcr.io/hotio/lidarr
            ports:
              - "8686:8686"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files.

--8<-- "includes/tags.md"
