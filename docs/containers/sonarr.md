<div class="image-logo"><img src="/img/image-logos/sonarr.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sonarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/sonarr){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sonarr){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: quay.io](https://quay.io/repository/hotio/sonarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Sonarr](https://github.com/sonarr/sonarr){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name sonarr \
            -p 8989:8989 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/sonarr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          sonarr:
            container_name: sonarr
            image: cr.hotio.dev/hotio/sonarr
            ports:
              - "8989:8989"
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
