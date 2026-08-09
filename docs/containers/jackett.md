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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4005" onclick="CopyToClipboard('tag4005');return false;" class="tag-decoration">release</div><div id="tag20136" onclick="CopyToClipboard('tag20136');return false;" class="tag-decoration">release-56a51d7</div><div id="tag24680" onclick="CopyToClipboard('tag24680');return false;" class="tag-decoration">release-0.24.2360</div><div id="tag28356" onclick="CopyToClipboard('tag28356');return false;" class="tag-decoration">release-v0</div><div id="tag9552" onclick="CopyToClipboard('tag9552');return false;" class="tag-decoration">release-v0.24</div><div id="tag30525" onclick="CopyToClipboard('tag30525');return false;" class="tag-decoration">release-v0.24.2360</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/56a51d7823aa38da366f7635b6a3f1b006b97c95" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31299404646" target="_blank">2026-08-09 06:40:17</a></td></tr>
<tr><td><div id="tag9630" onclick="CopyToClipboard('tag9630');return false;" class="tag-decoration">testing</div><div id="tag21606" onclick="CopyToClipboard('tag21606');return false;" class="tag-decoration">testing-1c45f60</div><div id="tag22064" onclick="CopyToClipboard('tag22064');return false;" class="tag-decoration">testing-0.24.2353</div><div id="tag31555" onclick="CopyToClipboard('tag31555');return false;" class="tag-decoration">testing-v0</div><div id="tag10690" onclick="CopyToClipboard('tag10690');return false;" class="tag-decoration">testing-v0.24</div><div id="tag14792" onclick="CopyToClipboard('tag14792');return false;" class="tag-decoration">testing-v0.24.2353</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/1c45f608fa9ca1a092329d05132fccdc370c760a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31244303281" target="_blank">2026-08-08 06:36:23</a></td></tr>
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
