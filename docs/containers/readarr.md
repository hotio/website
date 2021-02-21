<img src="https://hotio.dev/img/readarr.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/readarr){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/readarr){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/readarr){: .header-icons target=_blank }  
[:material-link: Readarr](https://github.com/readarr/readarr){: .header-icons target=_blank }  

!!! warning
    Until further notice, some updates could require a fresh database.
    There's only a `nightly`tag available for the moment.

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name readarr \
        -p 8787:8787 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        hotio/readarr
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      readarr:
        container_name: readarr
        image: hotio/readarr
        ports:
          - "8787:8787"
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

--8<-- "tags/readarr.md"
