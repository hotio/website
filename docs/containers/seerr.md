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
<tr><td><div id="tag21014" onclick="CopyToClipboard('tag21014');return false;" class="tag-decoration">nightly</div><div id="tag26999" onclick="CopyToClipboard('tag26999');return false;" class="tag-decoration">nightly-59a3f08</div><div id="tag19393" onclick="CopyToClipboard('tag19393');return false;" class="tag-decoration">nightly-10ea21b20ff696768424b64f6fd834c8e3e24108</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/59a3f085a643e4279e46fbd18dcbd974ac503b51" target="_blank">Version update: 55776ea24f271435d83b30e5220b42c150f59175 => 10ea21b20ff696768424b64f6fd834c8e3e24108</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22481624280" target="_blank">2026-02-27 10:00:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24982" onclick="CopyToClipboard('tag24982');return false;" class="tag-decoration">release</div><div id="tag12985" onclick="CopyToClipboard('tag12985');return false;" class="tag-decoration">release-ee64b06</div><div id="tag28474" onclick="CopyToClipboard('tag28474');return false;" class="tag-decoration">release-3.0.1</div><div id="tag13584" onclick="CopyToClipboard('tag13584');return false;" class="tag-decoration">release-v3</div><div id="tag23395" onclick="CopyToClipboard('tag23395');return false;" class="tag-decoration">release-v3.0</div><div id="tag1019" onclick="CopyToClipboard('tag1019');return false;" class="tag-decoration">release-v3.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/ee64b067380776071f115c0f1cee0d61a9960005" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22292138291" target="_blank">2026-02-23 03:44:23</a></td></tr>
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
