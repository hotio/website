---
hide:
  - toc
---

<div class="image-logo"><img src="/img/image-logos/caddy.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/caddy){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/caddy){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/caddy){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Upstream Project](https://caddyserver.com){: .header-icons target=_blank rel="noopener noreferrer" }  

!!! question "What is this?"

    A docker image with [Caddy 2](https://caddyserver.com){: target=_blank rel="noopener noreferrer" } (included module: [dns.providers.cloudflare](https://caddyserver.com/docs/modules/dns.providers.cloudflare)), fail2ban, cron and the `logrotate` command are also available. If you spin up a new container, some sample templates/configs are provided in `/config`.

## Starting the container

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
        --cap-add=NET_ADMIN \
        ghcr.io/hotio/caddy
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      caddy:
        container_name: caddy
        image: ghcr.io/hotio/caddy
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
        cap_add:
          - NET_ADMIN
    ```

## Custom build

If you set the environment variable `CUSTOM_BUILD` to a file location like for example `/config/caddy_linux_amd64_custom`, an attempt is made to start Caddy with that binary. The custom build can be obtained from the Caddy [download](https://caddyserver.com/download){: target=_blank rel="noopener noreferrer" } page. This is particularly useful if you need extra modules.

--8<-- "includes/tags.md"
