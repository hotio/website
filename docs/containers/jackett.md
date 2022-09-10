<div class="image-logo"><img src="/img/image-logos/jackett.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/jackett){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){: .header-icons target=_blank rel="noopener noreferrer" }
[:octicons-link-16: Jackett](https://github.com/jackett/jackett){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name jackett \
            -p 9117:9117 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/jackett
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          jackett:
            container_name: jackett
            image: cr.hotio.dev/hotio/jackett
            ports:
              - "9117:9117"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

--8<-- "includes/tags.md"
