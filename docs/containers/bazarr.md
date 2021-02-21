<img src="https://hotio.dev/img/bazarr.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/bazarr){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/bazarr){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/bazarr){: .header-icons target=_blank }  
[:material-link: Bazarr](https://github.com/morpheus65535/bazarr){: .header-icons target=_blank }  

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name bazarr \
            -p 6767:6767 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            hotio/bazarr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          bazarr:
            container_name: bazarr
            image: hotio/bazarr
            ports:
              - "6767:6767"
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

--8<-- "tags/bazarr.md"
