<img src="https://hotio.dev/img/stash.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/stash){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/stash){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/stash){: .header-icons target=_blank }  
[:material-link: Stash](https://github.com/stashapp/stash){: .header-icons target=_blank }  

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name stash \
            -p 9999:9999 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            hotio/stash
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          stash:
            container_name: stash
            image: hotio/stash
            ports:
              - "9999:9999"
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

--8<-- "tags/stash.md"
