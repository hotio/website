[:material-github: GitHub](https://github.com/hotio/hdidle){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/hdidle){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/hdidle){: .header-icons target=_blank }  
[:material-link: hd-idle](https://github.com/adelolmo/hd-idle){: .header-icons target=_blank }  

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name hdidle \
            --privileged=true \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -e ARGS="-d -i 1800" \
            -v /<host_folder_config>:/config \
            hotio/hdidle
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          hdidle:
            container_name: hdidle
            image: hotio/hdidle
            privileged: true
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
              - ARGS=-d -i 1800
            volumes:
              - /<host_folder_config>:/config
        ```

It's not recommended to use `--privileged`, it's best to pass through individual devices and only allow the required privileges. We are using `--privileged` here for ease of use.

## Tags

--8<-- "tags/hdidle.md"
