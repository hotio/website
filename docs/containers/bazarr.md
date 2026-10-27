---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag11504" onclick="CopyToClipboard('tag11504');return false;" class="tag-decoration">nightly</div><div id="tag11047" onclick="CopyToClipboard('tag11047');return false;" class="tag-decoration">nightly-b43e3cc</div><div id="tag29119" onclick="CopyToClipboard('tag29119');return false;" class="tag-decoration">nightly-1.6.3-beta.21</div><div id="tag27893" onclick="CopyToClipboard('tag27893');return false;" class="tag-decoration">nightly-v1</div><div id="tag13849" onclick="CopyToClipboard('tag13849');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag30517" onclick="CopyToClipboard('tag30517');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/b43e3cc82d61ee8adba17274937558dbe46d1593" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40573261076" target="_blank">2026-10-27 19:54:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag749" onclick="CopyToClipboard('tag749');return false;" class="tag-decoration">release</div><div id="tag26063" onclick="CopyToClipboard('tag26063');return false;" class="tag-decoration">release-c7342a9</div><div id="tag4256" onclick="CopyToClipboard('tag4256');return false;" class="tag-decoration">release-1.6.2</div><div id="tag5070" onclick="CopyToClipboard('tag5070');return false;" class="tag-decoration">release-v1</div><div id="tag16859" onclick="CopyToClipboard('tag16859');return false;" class="tag-decoration">release-v1.6</div><div id="tag10906" onclick="CopyToClipboard('tag10906');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/c7342a9011d02f96c6eb95f7316efc02240b1514" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40573264133" target="_blank">2026-10-27 19:54:14</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
