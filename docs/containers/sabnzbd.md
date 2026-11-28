---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag17125" onclick="CopyToClipboard('tag17125');return false;" class="tag-decoration">nightly</div><div id="tag12611" onclick="CopyToClipboard('tag12611');return false;" class="tag-decoration">nightly-1acaffb</div><div id="tag19841" onclick="CopyToClipboard('tag19841');return false;" class="tag-decoration">nightly-89000d5b3d4ad7e7dd605968f2cea727d629d47e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/1acaffba3f4104ec0b1bc1aed1f56a6c93ca6475" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/46107917055" target="_blank">2026-11-28 04:31:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25893" onclick="CopyToClipboard('tag25893');return false;" class="tag-decoration">release</div><div id="tag6666" onclick="CopyToClipboard('tag6666');return false;" class="tag-decoration">release-45df678</div><div id="tag2316" onclick="CopyToClipboard('tag2316');return false;" class="tag-decoration">release-5.1.3</div><div id="tag26767" onclick="CopyToClipboard('tag26767');return false;" class="tag-decoration">release-v5</div><div id="tag11954" onclick="CopyToClipboard('tag11954');return false;" class="tag-decoration">release-v5.1</div><div id="tag30451" onclick="CopyToClipboard('tag30451');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/45df67830a8a3e2d157796d85b7f07b44771ded8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/46107911678" target="_blank">2026-11-28 04:31:02</a></td></tr>
<tr><td><div id="tag6178" onclick="CopyToClipboard('tag6178');return false;" class="tag-decoration">testing</div><div id="tag1198" onclick="CopyToClipboard('tag1198');return false;" class="tag-decoration">testing-059e95f</div><div id="tag24960" onclick="CopyToClipboard('tag24960');return false;" class="tag-decoration">testing-5.2.0RC3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/059e95fad6c38bafc47ae247d2fe3db25ac3beeb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/46107913144" target="_blank">2026-11-28 04:31:04</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
