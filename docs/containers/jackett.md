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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22409" onclick="CopyToClipboard('tag22409');return false;" class="tag-decoration">release</div><div id="tag4398" onclick="CopyToClipboard('tag4398');return false;" class="tag-decoration">release-99b418a</div><div id="tag24491" onclick="CopyToClipboard('tag24491');return false;" class="tag-decoration">release-0.24.1292</div><div id="tag3718" onclick="CopyToClipboard('tag3718');return false;" class="tag-decoration">release-v0</div><div id="tag31582" onclick="CopyToClipboard('tag31582');return false;" class="tag-decoration">release-v0.24</div><div id="tag20951" onclick="CopyToClipboard('tag20951');return false;" class="tag-decoration">release-v0.24.1292</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/99b418a8dfbe9e37c7f1da76b8d3754ef2ab3279" target="_blank">Version update: 0.24.1287 => 0.24.1292</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22751289540" target="_blank">2026-03-06 06:00:34</a></td></tr>
<tr><td><div id="tag2738" onclick="CopyToClipboard('tag2738');return false;" class="tag-decoration">testing</div><div id="tag22404" onclick="CopyToClipboard('tag22404');return false;" class="tag-decoration">testing-fb41c4a</div><div id="tag11041" onclick="CopyToClipboard('tag11041');return false;" class="tag-decoration">testing-0.24.1287</div><div id="tag24807" onclick="CopyToClipboard('tag24807');return false;" class="tag-decoration">testing-v0</div><div id="tag13309" onclick="CopyToClipboard('tag13309');return false;" class="tag-decoration">testing-v0.24</div><div id="tag2444" onclick="CopyToClipboard('tag2444');return false;" class="tag-decoration">testing-v0.24.1287</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/fb41c4a349e90bc5b690986ef5e0f16d88ab8fd4" target="_blank">Version update: 0.24.1278 => 0.24.1287</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22705526891" target="_blank">2026-03-05 06:32:12</a></td></tr>
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
