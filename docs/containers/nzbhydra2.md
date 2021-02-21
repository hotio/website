<img src="https://hotio.dev/img/nzbhydra2.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/nzbhydra2){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/nzbhydra2){: .header-icons target=_blank }  
[:material-link: NZBHydra2](https://github.com/theotherp/nzbhydra2){: .header-icons target=_blank }  

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name nzbhydra2 \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        hotio/nzbhydra2
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

## Tags

--8<-- "tags/nzbhydra2.md"
