---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1753" onclick="CopyToClipboard('tag1753');return false;" class="tag-decoration">release</div><div id="tag24058" onclick="CopyToClipboard('tag24058');return false;" class="tag-decoration">release-2557fd5</div><div id="tag4386" onclick="CopyToClipboard('tag4386');return false;" class="tag-decoration">release-0.24.2187</div><div id="tag31159" onclick="CopyToClipboard('tag31159');return false;" class="tag-decoration">release-v0</div><div id="tag24211" onclick="CopyToClipboard('tag24211');return false;" class="tag-decoration">release-v0.24</div><div id="tag29238" onclick="CopyToClipboard('tag29238');return false;" class="tag-decoration">release-v0.24.2187</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/2557fd5dd0186b0d829ad8df37448af788abba5c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28927755056" target="_blank">2026-07-08 08:11:06</a></td></tr>
<tr><td><div id="tag27004" onclick="CopyToClipboard('tag27004');return false;" class="tag-decoration">testing</div><div id="tag12878" onclick="CopyToClipboard('tag12878');return false;" class="tag-decoration">testing-970631f</div><div id="tag10504" onclick="CopyToClipboard('tag10504');return false;" class="tag-decoration">testing-0.24.2187</div><div id="tag27819" onclick="CopyToClipboard('tag27819');return false;" class="tag-decoration">testing-v0</div><div id="tag31056" onclick="CopyToClipboard('tag31056');return false;" class="tag-decoration">testing-v0.24</div><div id="tag6993" onclick="CopyToClipboard('tag6993');return false;" class="tag-decoration">testing-v0.24.2187</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/970631f83aaac3b4a0f00b00f0378efb99cc80de" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28975241952" target="_blank">2026-07-08 20:58:07</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
