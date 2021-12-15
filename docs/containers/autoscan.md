<div class="image-logo no-logo"><img src="/img/pullio.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/autoscan){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/autoscan){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/autoscan){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Autoscan](https://github.com/cloudbox/autoscan){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name autoscan \
            -p 3030:3030 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -e PLEX_LOGIN="" \
            -e PLEX_PASSWORD="" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/autoscan
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          autoscan:
            container_name: autoscan
            image: cr.hotio.dev/hotio/autoscan
            ports:
              - "3030:3030"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
              - PLEX_LOGIN
              - PLEX_PASSWORD
            volumes:
              - /<host_folder_config>:/config
        ```

If `PLEX_LOGIN` + `PLEX_PASSWORD` are not empty and the file `/config/plex.token` does not exist, an attempt is made to get a Plex token for Autoscan.

--8<-- "includes/tags.md"

## Using a secure Plex connection

If you want to keep using secure connections within Plex, but don't wanna buy your own domain and keep the connection between Autoscan and Plex inside of their Docker network. Follow the below procedure.

Go to `https://plex.tv/pms/resources.xml?includeHttps=1&X-Plex-Token=xxxxxxxxxxxxxx` (replace `xxxxxxxxxxxxxx` with your token) and look for a url that looks like `https://10-1-0-100.xxxxxxxxxxxxx.plex.direct:32400`. That url can be used in your Autoscan plex target. You should however give the Plex container a static IP if you don't wanna do this every 5 minutes.
