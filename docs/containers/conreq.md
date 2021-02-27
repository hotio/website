<div class="image-logo"><img src="/img/image-logos/conreq.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/conreq){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/conreq){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/conreq){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Conreq](https://github.com/archmonger/conreq){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name conreq \
            -p 8000:8000 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            hotio/conreq
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          conreq:
            container_name: conreq
            image: hotio/conreq
            ports:
              - "8000:8000"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

--8<-- "includes/tags.md"
