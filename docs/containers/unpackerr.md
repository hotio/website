<img src="https://hotio.dev/img/unpackerr.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/unpackerr){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/unpackerr){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/unpackerr){: .header-icons target=_blank }  
[:material-link: Unpackerr](https://github.com/davidnewhall/unpackerr){: .header-icons target=_blank }  

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name unpackerr \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        hotio/unpackerr
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      unpackerr:
        container_name: unpackerr
        image: hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

## Tags

--8<-- "tags/unpackerr.md"

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/app/unpackerr.conf`. Don't forget to mount your volume where Unpackerr should look to find your downloads. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr) project page for info on how to configure Unpackerr.
