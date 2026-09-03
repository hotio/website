---
hide:
  - toc
title: hotio/seerr
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
<tr><td><div id="tag17389" onclick="CopyToClipboard('tag17389');return false;" class="tag-decoration">nightly</div><div id="tag27517" onclick="CopyToClipboard('tag27517');return false;" class="tag-decoration">nightly-db732b7</div><div id="tag28916" onclick="CopyToClipboard('tag28916');return false;" class="tag-decoration">nightly-d7dc7bdd347bd5fac83c5a6089ba5226ae57ed36</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/db732b78e2a140663e20b6ab2103769bb53cb113" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/33761071192" target="_blank">2026-09-03 13:25:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11460" onclick="CopyToClipboard('tag11460');return false;" class="tag-decoration">release</div><div id="tag30475" onclick="CopyToClipboard('tag30475');return false;" class="tag-decoration">release-ed050d4</div><div id="tag24110" onclick="CopyToClipboard('tag24110');return false;" class="tag-decoration">release-3.4.1</div><div id="tag7300" onclick="CopyToClipboard('tag7300');return false;" class="tag-decoration">release-v3</div><div id="tag32106" onclick="CopyToClipboard('tag32106');return false;" class="tag-decoration">release-v3.4</div><div id="tag9424" onclick="CopyToClipboard('tag9424');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/ed050d4a70bc7d9546251806a9d007116c87356f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/33609764559" target="_blank">2026-09-02 08:38:07</a></td></tr>
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
