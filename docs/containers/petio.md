<div class="image-logo"><img src="/img/image-logos/petio.png" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/petio){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/petio){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/petio){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Petio](https://petio.tv){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name petio \
            -p 7777:7777 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/petio
        ```

        ```shell
        docker run --rm \
            --name mongo \
            --user 1000:1000 \
            -v /<host_folder_configdb>:/data/configdb \
            -v /<host_folder_db>:/data/db \
            mongo
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          petio:
            container_name: petio
            image: cr.hotio.dev/hotio/petio
            ports:
              - "7777:7777"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config

          mongo:
            container_name: mongo
            image: mongo
            user: "1000:1000"
            volumes:
              - /<host_folder_configdb>:/data/configdb
              - /<host_folder_db>:/data/db
        ```

You'll need to pre-create the folders for Mongo on the host and give them the correct permissions. The folder `/data/configdb` isn't always required, take a look at the Mongo documentation to see if this applies to you. For ease of use you'll want to create a custom bridge network (most likely you already have one) for Mongo and Petio (and others) when using the cli commands, so that you can refer to the Mongo container by containername.

For first time setup you'll need to visit `http://<ip or hostname>:7777/admin`.

--8<-- "includes/tags.md"
