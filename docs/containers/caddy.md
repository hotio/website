<div class="image-logo"><img src="/img/image-logos/caddy.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/caddy){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/caddy){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/caddy){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Caddy](https://caddyserver.com){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name caddy \
            -p 80:8080 \
            -p 443:8443 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -e CUSTOM_BUILD="" \
            -v /<host_folder_config>:/config \
            hotio/caddy
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          caddy:
            container_name: caddy
            image: hotio/caddy
            ports:
              - "80:8080"
              - "443:8443"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
              - CUSTOM_BUILD
            volumes:
              - /<host_folder_config>:/config
        ```

## Custom build

If you set the environment variable `CUSTOM_BUILD` to a file location like for example `/config/caddy_linux_amd64_custom`, an attempt is made to start Caddy with that binary. The custom build can be obtained from the Caddy [download](https://caddyserver.com/download){: .header-icons target=_blank rel="noopener noreferrer" } page. This is particularly useful if you need extra modules.

--8<-- "includes/tags.md"
