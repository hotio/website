<img src="https://hotio.dev/img/mylar3.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/mylar3){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/mylar3){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/mylar3){: .header-icons target=_blank }  
[:material-link: Mylar3](https://github.com/mylar3/mylar3){: .header-icons target=_blank }  

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name mylar3 \
            -p 8090:8090 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            hotio/mylar3
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          mylar3:
            container_name: mylar3
            image: hotio/mylar3
            ports:
              - "8090:8090"
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

--8<-- "tags/mylar3.md"
