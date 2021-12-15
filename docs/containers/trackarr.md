<div class="image-logo no-logo"><img src="/img/pullio.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/trackarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/trackarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/trackarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Trackarr](https://gitlab.com/cloudb0x/trackarr){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name trackarr \
            -p 7337:7337 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/trackarr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          trackarr:
            container_name: trackarr
            image: cr.hotio.dev/hotio/trackarr
            ports:
              - "7337:7337"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

--8<-- "includes/tags.md"
