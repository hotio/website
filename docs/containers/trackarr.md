<img src="https://hotio.dev/img/trackarr.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/trackarr){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/trackarr){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/trackarr){: .header-icons target=_blank }  
[:material-link: Trackarr](https://github.com/cloudb0x/trackarr){: .header-icons target=_blank }  

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
            hotio/trackarr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          trackarr:
            container_name: trackarr
            image: hotio/trackarr
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

## Tags

--8<-- "tags/trackarr.md"
