---
hide:
  - toc
---

<div class="image-logo"><img src="/img/image-logos/whisparr.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/whisparr){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Whisparr](https://github.com/whisparr/whisparr){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

!!! warning
    There's only a `nightly` tag available for the moment.

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name whisparr \
            -p 6969:6969 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/whisparr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          whisparr:
            container_name: whisparr
            image: cr.hotio.dev/hotio/whisparr
            ports:
              - "6969:6969"
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
