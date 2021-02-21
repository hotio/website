<img src="https://hotio.dev/img/lidarr.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/lidarr){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/lidarr){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/lidarr){: .header-icons target=_blank }  
[:material-link: Lidarr](https://github.com/lidarr/lidarr){: .header-icons target=_blank }  

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name lidarr \
            -p 8686:8686 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            hotio/lidarr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          lidarr:
            container_name: lidarr
            image: hotio/lidarr
            ports:
              - "8686:8686"
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

--8<-- "tags/lidarr.md"
