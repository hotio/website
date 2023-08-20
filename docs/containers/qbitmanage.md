---
hide:
  - toc
---

<div class="image-logo"><img src="/img/image-logos/qbitmanage.png" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/qbitmanage){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: qbit_manage](https://github.com/StuffAnThings/qbit_manage){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

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
        ```

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files.

--8<-- "includes/tags.md"
