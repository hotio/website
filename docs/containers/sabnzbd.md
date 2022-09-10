<div class="image-logo"><img src="/img/image-logos/sabnzbd.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/sabnzbd){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: SABnzbd](https://github.com/sabnzbd/sabnzbd){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name sabnzbd \
            -p 8080:8080 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/sabnzbd
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          sabnzbd:
            container_name: sabnzbd
            image: cr.hotio.dev/hotio/sabnzbd
            ports:
              - "8080:8080"
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
