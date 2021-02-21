<img src="https://hotio.dev/img/requestrr.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/requestrr){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/requestrr){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/requestrr){: .header-icons target=_blank }  
[:material-link: Requestrr](https://github.com/darkalfx/requestrr){: .header-icons target=_blank }  

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name requestrr \
            -p 4545:4545 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            hotio/requestrr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          requestrr:
            container_name: requestrr
            image: hotio/requestrr
            ports:
              - "4545:4545"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

## Tags

--8<-- "tags/requestrr.md"
