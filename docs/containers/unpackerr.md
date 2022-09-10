<div class="image-logo"><img src="/img/image-logos/unpackerr.png" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/unpackerr){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Unpackerr](https://github.com/davidnewhall/unpackerr){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name unpackerr \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/unpackerr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          unpackerr:
            container_name: unpackerr
            image: cr.hotio.dev/hotio/unpackerr
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

--8<-- "includes/tags.md"

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Don't forget to mount your volume where Unpackerr should look to find your downloads. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){: target=_blank rel="noopener noreferrer" } project page for info on how to configure Unpackerr.
