---
hide:
  - toc
---

<div class="image-logo no-logo"><img src="/img/pullio.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/autoscan){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/autoscan){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/autoscan){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Upstream Project](https://github.com/cloudbox/autoscan){: .header-icons target=_blank rel="noopener noreferrer" }  

## Starting the container

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
        ghcr.io/hotio/autoscan
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      autoscan:
        container_name: autoscan
        image: ghcr.io/hotio/autoscan
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

If you want to keep using secure connections within Plex, but don't want to buy your own domain and keep the connection between Overseerr and Plex inside of their Docker network. Follow the below procedure.

We'll use Google Chrome in this example. Visit `https://app.plex.tv` and make sure you are logged in. Open Chrome DevTools (usually F12) and open the `Console` tab, then refresh your browser window. One of the very first lines you will see is `[Servers] Initialize server with token, ...`, in that message you should see some url that looks like `https://10-1-0-100.xxxxxxxxxxxxx.plex.direct:32400`. Part of that url can be used in your Overseerr settings, the part `10-1-0-100.xxxxxxxxxxxxx.plex.direct`is what you'll need to copy/paste, the port is in a seperate input box and enable SSL. You should however give the Plex container a static IP if you don't wanna do this every 5 minutes.
