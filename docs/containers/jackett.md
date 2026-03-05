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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11424" onclick="CopyToClipboard('tag11424');return false;" class="tag-decoration">release</div><div id="tag12699" onclick="CopyToClipboard('tag12699');return false;" class="tag-decoration">release-5b46b3b</div><div id="tag13297" onclick="CopyToClipboard('tag13297');return false;" class="tag-decoration">release-0.24.1278</div><div id="tag8974" onclick="CopyToClipboard('tag8974');return false;" class="tag-decoration">release-v0</div><div id="tag13335" onclick="CopyToClipboard('tag13335');return false;" class="tag-decoration">release-v0.24</div><div id="tag32229" onclick="CopyToClipboard('tag32229');return false;" class="tag-decoration">release-v0.24.1278</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/5b46b3b6bd6e62efd9d46b5e57557b8e3fcaddc2" target="_blank">Version update: 0.24.1275 => 0.24.1278</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22662049919" target="_blank">2026-03-04 08:53:49</a></td></tr>
<tr><td><div id="tag5049" onclick="CopyToClipboard('tag5049');return false;" class="tag-decoration">testing</div><div id="tag28058" onclick="CopyToClipboard('tag28058');return false;" class="tag-decoration">testing-fb41c4a</div><div id="tag9090" onclick="CopyToClipboard('tag9090');return false;" class="tag-decoration">testing-0.24.1287</div><div id="tag26065" onclick="CopyToClipboard('tag26065');return false;" class="tag-decoration">testing-v0</div><div id="tag4500" onclick="CopyToClipboard('tag4500');return false;" class="tag-decoration">testing-v0.24</div><div id="tag4919" onclick="CopyToClipboard('tag4919');return false;" class="tag-decoration">testing-v0.24.1287</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/fb41c4a349e90bc5b690986ef5e0f16d88ab8fd4" target="_blank">Version update: 0.24.1278 => 0.24.1287</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22705526891" target="_blank">2026-03-05 06:32:12</a></td></tr>
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
