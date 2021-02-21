<img src="https://hotio.dev/img/ombi.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/ombi){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/ombi){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/ombi){: .header-icons target=_blank }  
[:material-link: Ombi](https://github.com/ombi-app/ombi){: .header-icons target=_blank }  

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name ombi \
        -p 5000:5000 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        hotio/ombi
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      ombi:
        container_name: ombi
        image: hotio/ombi
        ports:
          - "5000:5000"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

## Tags

--8<-- "tags/ombi.md"
