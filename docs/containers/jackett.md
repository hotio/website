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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag941" onclick="CopyToClipboard('tag941');return false;" class="tag-decoration">release</div><div id="tag9788" onclick="CopyToClipboard('tag9788');return false;" class="tag-decoration">release-64f2e2a</div><div id="tag9879" onclick="CopyToClipboard('tag9879');return false;" class="tag-decoration">release-0.24.1916</div><div id="tag22996" onclick="CopyToClipboard('tag22996');return false;" class="tag-decoration">release-v0</div><div id="tag20167" onclick="CopyToClipboard('tag20167');return false;" class="tag-decoration">release-v0.24</div><div id="tag17049" onclick="CopyToClipboard('tag17049');return false;" class="tag-decoration">release-v0.24.1916</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/64f2e2a3006de3e33d0b9714d3185e81c914733d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26325392834" target="_blank">2026-05-23 06:08:10</a></td></tr>
<tr><td><div id="tag17322" onclick="CopyToClipboard('tag17322');return false;" class="tag-decoration">testing</div><div id="tag12191" onclick="CopyToClipboard('tag12191');return false;" class="tag-decoration">testing-b2c24a2</div><div id="tag9017" onclick="CopyToClipboard('tag9017');return false;" class="tag-decoration">testing-0.24.1909</div><div id="tag24081" onclick="CopyToClipboard('tag24081');return false;" class="tag-decoration">testing-v0</div><div id="tag30784" onclick="CopyToClipboard('tag30784');return false;" class="tag-decoration">testing-v0.24</div><div id="tag24099" onclick="CopyToClipboard('tag24099');return false;" class="tag-decoration">testing-v0.24.1909</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b2c24a25db1ac20ba442d6873c85c1ec7b65980b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26210128617" target="_blank">2026-05-21 06:45:15</a></td></tr>
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
