<img src="https://hotio.dev/img/duplicacy.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/duplicacy){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/duplicacy){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/duplicacy){: .header-icons target=_blank }  
[:material-link: Duplicacy](https://duplicacy.com){: .header-icons target=_blank }  

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name duplicacy \
        --hostname duplicacy \
        -p 3875:3875 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_cache>:/cache \
        -v /<host_folder_logs>:/logs \
        hotio/duplicacy
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      duplicacy:
        container_name: duplicacy
        hostname: duplicacy
        image: hotio/duplicacy
        ports:
          - "3875:3875"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_cache>:/cache
          - /<host_folder_logs>:/logs
    ```

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files. If you don't want to enter your password every time you restart the container, you can set the environment variable `DWE_PASSWORD` with your password or starting with version 1.4.1 a file `/config/keyring` will be created that stores your password encryted if you click the checkmark on the login page.

## Tags

--8<-- "tags/duplicacy.md"
