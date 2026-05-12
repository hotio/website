---
hide:
  - toc
title: hotio/caddy
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/caddy){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/caddy){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://caddyserver.com){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2130" onclick="CopyToClipboard('tag2130');return false;" class="tag-decoration">release</div><div id="tag25579" onclick="CopyToClipboard('tag25579');return false;" class="tag-decoration">release-1d0a013</div><div id="tag27812" onclick="CopyToClipboard('tag27812');return false;" class="tag-decoration">release-2.11.2</div><div id="tag13314" onclick="CopyToClipboard('tag13314');return false;" class="tag-decoration">release-v2</div><div id="tag31905" onclick="CopyToClipboard('tag31905');return false;" class="tag-decoration">release-v2.11</div><div id="tag29406" onclick="CopyToClipboard('tag29406');return false;" class="tag-decoration">release-v2.11.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/caddy/commit/1d0a013c9220622106a3a73a90bcd970d5764676" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/caddy/actions/runs/25714899960" target="_blank">2026-05-12 05:14:57</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="caddy" \
        -p 80:8080 \
        -p 443:8443 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp,8443/tcp" \ #(3)!
        -e CUSTOM_BUILD="" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/caddy
    ```

    --8<-- "includes/annotations.md"

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
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp,8443/tcp #(3)!
          - CUSTOM_BUILD
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

!!! info

    Included modules: [caddy-dns/cloudflare](https://github.com/caddy-dns/cloudflare){ target="_blank" rel="noopener" }, [mholt/caddy-ratelimit](https://github.com/mholt/caddy-ratelimit){ target="_blank" rel="noopener" }. The default config only allows access from private ip ranges.

## Custom build

If you set the environment variable `CUSTOM_BUILD` to a file location like for example `/config/caddy_linux_amd64_custom`, an attempt is made to start Caddy with that binary. The custom build can be obtained from the Caddy [download](https://caddyserver.com/download){ target="_blank" rel="noopener" } page. This is particularly useful if you need extra modules.

--8<-- "includes/wireguard.md"
