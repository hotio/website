<div class="image-logo"><img src="/img/image-logos/nzbget.png" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbget){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/nzbget){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbget){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: NZBGet](https://github.com/nzbget/nzbget){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name nzbget \
            -p 6789:6789 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/nzbget
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          nzbget:
            container_name: nzbget
            image: cr.hotio.dev/hotio/nzbget
            ports:
              - "6789:6789"
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
