<div class="image-logo"><img src="/img/image-logos/tautulli.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/tautulli){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/tautulli){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Tautulli](https://github.com/tautulli/tautulli){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name tautulli \
            -p 8181:8181 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            hotio/tautulli
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          tautulli:
            container_name: tautulli
            image: hotio/tautulli
            ports:
              - "8181:8181"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

--8<-- "includes/tags.md"
