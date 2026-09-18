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
<tr><td><div id="tag9909" onclick="CopyToClipboard('tag9909');return false;" class="tag-decoration">nightly</div><div id="tag30533" onclick="CopyToClipboard('tag30533');return false;" class="tag-decoration">nightly-4f6f3ac</div><div id="tag14099" onclick="CopyToClipboard('tag14099');return false;" class="tag-decoration">nightly-59d5947b4df8591882bda70ae199f3a708e2d02b</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/4f6f3acab295a5319834dd2f6c7acb01206ad103" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/35311787748" target="_blank">2026-09-18 05:41:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9689" onclick="CopyToClipboard('tag9689');return false;" class="tag-decoration">release</div><div id="tag6715" onclick="CopyToClipboard('tag6715');return false;" class="tag-decoration">release-e39f010</div><div id="tag29771" onclick="CopyToClipboard('tag29771');return false;" class="tag-decoration">release-3.4.1</div><div id="tag29124" onclick="CopyToClipboard('tag29124');return false;" class="tag-decoration">release-v3</div><div id="tag6077" onclick="CopyToClipboard('tag6077');return false;" class="tag-decoration">release-v3.4</div><div id="tag2257" onclick="CopyToClipboard('tag2257');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/e39f01047affded244c73e14bbf0172c9a61faef" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/35311788931" target="_blank">2026-09-18 05:41:22</a></td></tr>
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
