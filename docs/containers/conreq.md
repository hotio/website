<img src="https://hotio.dev/img/conreq.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/conreq){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/conreq){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/conreq){: .header-icons target=_blank }  
[:material-link: Conreq](https://github.com/archmonger/conreq){: .header-icons target=_blank }  

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

## Tags

--8<-- "tags/conreq.md"
