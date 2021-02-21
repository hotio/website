<img src="https://hotio.dev/img/sonarr.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/sonarr){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/sonarr){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/sonarr){: .header-icons target=_blank }  
[:material-link: Sonarr](https://github.com/sonarr/sonarr){: .header-icons target=_blank }  

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
            hotio/sonarr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          sonarr:
            container_name: sonarr
            image: hotio/sonarr
            ports:
              - "8989:8989
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files.

## Tags

--8<-- "tags/sonarr.md"
