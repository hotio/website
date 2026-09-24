---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag15846" onclick="CopyToClipboard('tag15846');return false;" class="tag-decoration">nightly</div><div id="tag15303" onclick="CopyToClipboard('tag15303');return false;" class="tag-decoration">nightly-fcc855a</div><div id="tag388" onclick="CopyToClipboard('tag388');return false;" class="tag-decoration">nightly-3.1.6.5078</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/fcc855a6b71a596d449c3d2c6e54c9a1b7ed03ed" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/35955303028" target="_blank">2026-09-24 04:21:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27048" onclick="CopyToClipboard('tag27048');return false;" class="tag-decoration">release</div><div id="tag15251" onclick="CopyToClipboard('tag15251');return false;" class="tag-decoration">release-da36ede</div><div id="tag31802" onclick="CopyToClipboard('tag31802');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/da36ede3ad803679cb4b91ae865c6a975ce96ac8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/35955297747" target="_blank">2026-09-24 04:21:24</a></td></tr>
<tr><td><div id="tag29998" onclick="CopyToClipboard('tag29998');return false;" class="tag-decoration">testing</div><div id="tag31319" onclick="CopyToClipboard('tag31319');return false;" class="tag-decoration">testing-10241ea</div><div id="tag20101" onclick="CopyToClipboard('tag20101');return false;" class="tag-decoration">testing-3.1.6.5078</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/10241eaa6347ac6ad585262975c83eef3c12efe6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/35955295825" target="_blank">2026-09-24 04:21:22</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
