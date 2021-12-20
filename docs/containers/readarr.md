<div class="image-logo"><img src="/img/image-logos/readarr.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/readarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/readarr){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/readarr){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: quay.io](https://quay.io/repository/hotio/readarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Readarr](https://github.com/readarr/readarr){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

!!! warning
    Until further notice, some updates could require a fresh database.
    There's only a `nightly` tag available for the moment.

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name readarr \
            -p 8787:8787 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/readarr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          readarr:
            container_name: readarr
            image: cr.hotio.dev/hotio/readarr
            ports:
              - "8787:8787"
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
