<img src="https://hotio.dev/img/radarr.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/radarr){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/radarr){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/radarr){: .header-icons target=_blank }  
[:material-link: Radarr](https://github.com/radarr/radarr){: .header-icons target=_blank }  

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name radarr \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        hotio/radarr
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      radarr:
        container_name: radarr
        image: hotio/radarr
        ports:
          - "7878:7878"
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

--8<-- "tags/radarr.md"
