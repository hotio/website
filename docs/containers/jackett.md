<img src="https://hotio.dev/img/jackett.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/jackett){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/jackett){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/jackett){: .header-icons target=_blank }  
[:material-link: Jackett](https://github.com/jackett/jackett){: .header-icons target=_blank }  

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name jackett \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        hotio/jackett
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      jackett:
        container_name: jackett
        image: hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

## Tags

--8<-- "tags/jackett.md"
