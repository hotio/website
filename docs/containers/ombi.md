<div class="image-logo"><img src="/img/image-logos/ombi.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/ombi){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/ombi){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/ombi){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Ombi](https://github.com/ombi-app/ombi){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name ombi \
            -p 5000:5000 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            hotio/ombi
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          ombi:
            container_name: ombi
            image: hotio/ombi
            ports:
              - "5000:5000"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

--8<-- "includes/tags.md"
