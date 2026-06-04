---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag24956" onclick="CopyToClipboard('tag24956');return false;" class="tag-decoration">nightly</div><div id="tag25651" onclick="CopyToClipboard('tag25651');return false;" class="tag-decoration">nightly-57335c1</div><div id="tag11274" onclick="CopyToClipboard('tag11274');return false;" class="tag-decoration">nightly-32249f26fe22620436a9c8a5b1f33959df054a34</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/57335c1d008b007be30b1bb197cab56e381d2470" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/26974381801" target="_blank">2026-06-04 19:25:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17777" onclick="CopyToClipboard('tag17777');return false;" class="tag-decoration">release</div><div id="tag1814" onclick="CopyToClipboard('tag1814');return false;" class="tag-decoration">release-8ed8b88</div><div id="tag19698" onclick="CopyToClipboard('tag19698');return false;" class="tag-decoration">release-3.3.0</div><div id="tag8688" onclick="CopyToClipboard('tag8688');return false;" class="tag-decoration">release-v3</div><div id="tag2126" onclick="CopyToClipboard('tag2126');return false;" class="tag-decoration">release-v3.3</div><div id="tag12651" onclick="CopyToClipboard('tag12651');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/8ed8b883d8ab9f624270b81ee78d703379f2a160" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/26818360701" target="_blank">2026-06-02 12:01:23</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
