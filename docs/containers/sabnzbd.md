<img src="https://hotio.dev/img/sabnzbd.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/sabnzbd){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/sabnzbd){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/sabnzbd){: .header-icons target=_blank }  
[:material-link: SABnzbd](https://github.com/sabnzbd/sabnzbd){: .header-icons target=_blank }  

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name sabnzbd \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        hotio/sabnzbd
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      sabnzbd:
        container_name: sabnzbd
        image: hotio/sabnzbd
        ports:
          - "8080:8080"
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

--8<-- "tags/sabnzbd.md"
