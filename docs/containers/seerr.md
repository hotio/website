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
<tr><td><div id="tag5140" onclick="CopyToClipboard('tag5140');return false;" class="tag-decoration">nightly</div><div id="tag28405" onclick="CopyToClipboard('tag28405');return false;" class="tag-decoration">nightly-1b7225d</div><div id="tag22814" onclick="CopyToClipboard('tag22814');return false;" class="tag-decoration">nightly-946bdecec524b4e7f8aaf8f2b3856f319a3580c1</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/1b7225d83bf4ce1f2a3cc0f5a5babded8a7c62cd" target="_blank">Version update: 4ae20684092b5b28527b23dfbc1a3417858fee8e => 946bdecec524b4e7f8aaf8f2b3856f319a3580c1</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22497079884" target="_blank">2026-02-27 17:40:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16775" onclick="CopyToClipboard('tag16775');return false;" class="tag-decoration">release</div><div id="tag31065" onclick="CopyToClipboard('tag31065');return false;" class="tag-decoration">release-61e4a12</div><div id="tag985" onclick="CopyToClipboard('tag985');return false;" class="tag-decoration">release-3.1.0</div><div id="tag2834" onclick="CopyToClipboard('tag2834');return false;" class="tag-decoration">release-v3</div><div id="tag16160" onclick="CopyToClipboard('tag16160');return false;" class="tag-decoration">release-v3.1</div><div id="tag10151" onclick="CopyToClipboard('tag10151');return false;" class="tag-decoration">release-v3.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/61e4a126c6170ac9f9170f273b9f6bde04aa339f" target="_blank">Version update: 3.0.1 => 3.1.0</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22497080527" target="_blank">2026-02-27 17:40:24</a></td></tr>
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
