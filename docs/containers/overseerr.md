<div class="image-logo"><img src="/img/image-logos/overseerr.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/overseerr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/overseerr){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/overseerr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Overseerr](https://github.com/sct/overseerr){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name overseerr \
            -p 5055:5055 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/overseerr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          overseerr:
            container_name: overseerr
            image: cr.hotio.dev/hotio/overseerr
            ports:
              - "5055:5055"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

--8<-- "includes/tags.md"

## Using a secure Plex connection

If you want to keep using secure connections within Plex, but don't want to buy your own domain and keep the connection between Overseerr and Plex inside of their Docker network. Follow the below procedure.

We'll use Google Chrome in this example. Visit `https://app.plex.tv` and make sure you are logged in. Open Chrome DevTools (usually F12) and open the `Console` tab, then refresh your browser window. One of the very first lines you will see is `[Servers] Initialize server with token, ...`, in that message you should see some url that looks like `https://10-1-0-100.xxxxxxxxxxxxx.plex.direct:32400`. Part of that url can be used in your Overseerr settings, the part `10-1-0-100.xxxxxxxxxxxxx.plex.direct`is what you'll need to copy/paste, the port is in a seperate input box and enable SSL. You should however give the Plex container a static IP if you don't wanna do this every 5 minutes.

## Caching images

If you want to cache the image files, you'll have to add an additional volume and make sure that the permissions are correct on the host system.

!!! docker ""

    === "cli"

        ```shell
          -v /<host_folder_images_cache>:/app/.next/cache/images
        ```

    === "compose"

        ```yaml
          volumes:
            - /<host_folder_images_cache>:/app/.next/cache/images
        ```
