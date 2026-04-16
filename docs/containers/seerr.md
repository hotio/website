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
<tr><td><div id="tag17951" onclick="CopyToClipboard('tag17951');return false;" class="tag-decoration">nightly</div><div id="tag5947" onclick="CopyToClipboard('tag5947');return false;" class="tag-decoration">nightly-112d3f2</div><div id="tag2637" onclick="CopyToClipboard('tag2637');return false;" class="tag-decoration">nightly-c387d9c99903acf4e97d2b5522743e126896afcd</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/112d3f2e9b2c5632fe494ae8f047df78c0f05ca0" target="_blank">Version update: 85bfdb2be36f845c02a3d3b1de0b1133e5d4fc1e => c387d9c99903acf4e97d2b5522743e126896afcd</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24494524538" target="_blank">2026-04-16 05:52:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10847" onclick="CopyToClipboard('tag10847');return false;" class="tag-decoration">release</div><div id="tag29812" onclick="CopyToClipboard('tag29812');return false;" class="tag-decoration">release-44df00d</div><div id="tag32451" onclick="CopyToClipboard('tag32451');return false;" class="tag-decoration">release-3.2.0</div><div id="tag23712" onclick="CopyToClipboard('tag23712');return false;" class="tag-decoration">release-v3</div><div id="tag32587" onclick="CopyToClipboard('tag32587');return false;" class="tag-decoration">release-v3.2</div><div id="tag30206" onclick="CopyToClipboard('tag30206');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/44df00dc5061c7be1c4f9b8ca686d9f40305746e" target="_blank">Version update: 3.1.1 => 3.2.0</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24478452558" target="_blank">2026-04-15 21:07:25</a></td></tr>
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
