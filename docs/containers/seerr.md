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
<tr><td><div id="tag2006" onclick="CopyToClipboard('tag2006');return false;" class="tag-decoration">nightly</div><div id="tag27569" onclick="CopyToClipboard('tag27569');return false;" class="tag-decoration">nightly-4731960</div><div id="tag9642" onclick="CopyToClipboard('tag9642');return false;" class="tag-decoration">nightly-0a305f6e18d888bc5029fcbfa6fd8a7399392210</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/4731960cb583f492b807de9b35487702f53adf74" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/27014137418" target="_blank">2026-06-05 12:12:28</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16566" onclick="CopyToClipboard('tag16566');return false;" class="tag-decoration">release</div><div id="tag13960" onclick="CopyToClipboard('tag13960');return false;" class="tag-decoration">release-8ed8b88</div><div id="tag10666" onclick="CopyToClipboard('tag10666');return false;" class="tag-decoration">release-3.3.0</div><div id="tag11176" onclick="CopyToClipboard('tag11176');return false;" class="tag-decoration">release-v3</div><div id="tag14000" onclick="CopyToClipboard('tag14000');return false;" class="tag-decoration">release-v3.3</div><div id="tag23099" onclick="CopyToClipboard('tag23099');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/8ed8b883d8ab9f624270b81ee78d703379f2a160" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/26818360701" target="_blank">2026-06-02 12:01:23</a></td></tr>
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
