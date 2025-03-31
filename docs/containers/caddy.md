---
hide:
  - toc
---

--8<-- "includes/header-links.md"

!!! question "What is this?"

    A docker image with [Caddy 2](https://caddyserver.com){: target=_blank rel="noopener" } (included modules: [caddy-dns/cloudflare](https://github.com/caddy-dns/cloudflare){: target=_blank rel="noopener" }, [mholt/caddy-ratelimit](https://github.com/mholt/caddy-ratelimit){: target=_blank rel="noopener" }). The default config only allows access from private ip ranges.

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name caddy \
        -p 80:8080 \
        -p 443:8443 \
        -e PUID=1001 \
        -e PGID=1001 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e CUSTOM_BUILD="" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/caddy
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      caddy:
        container_name: caddy
        image: ghcr.io/hotio/caddy
        ports:
          - "80:8080"
          - "443:8443"
        environment:
          - PUID=1001
          - PGID=1001
          - UMASK=002
          - TZ=Etc/UTC
          - CUSTOM_BUILD
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/tags.md"

## Custom build

If you set the environment variable `CUSTOM_BUILD` to a file location like for example `/config/caddy_linux_amd64_custom`, an attempt is made to start Caddy with that binary. The custom build can be obtained from the Caddy [download](https://caddyserver.com/download){: target=_blank rel="noopener" } page. This is particularly useful if you need extra modules.

--8<-- "includes/wireguard.md"
