---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag27998" onclick="CopyToClipboard('tag27998');return false;" class="tag-decoration">nightly</div><div id="tag31654" onclick="CopyToClipboard('tag31654');return false;" class="tag-decoration">nightly-a8880a5</div><div id="tag24046" onclick="CopyToClipboard('tag24046');return false;" class="tag-decoration">nightly-7.0.2.10878</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/a8880a55115721c673e0cf0ac8fb617af12d6436" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/42295112779" target="_blank">2026-11-06 21:14:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32763" onclick="CopyToClipboard('tag32763');return false;" class="tag-decoration">release</div><div id="tag6405" onclick="CopyToClipboard('tag6405');return false;" class="tag-decoration">release-4f00110</div><div id="tag20985" onclick="CopyToClipboard('tag20985');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/4f00110163973d33ee10b4e192c96c1548068f7a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/42138800018" target="_blank">2026-11-06 00:42:37</a></td></tr>
<tr><td><div id="tag32675" onclick="CopyToClipboard('tag32675');return false;" class="tag-decoration">testing</div><div id="tag15369" onclick="CopyToClipboard('tag15369');return false;" class="tag-decoration">testing-52eb368</div><div id="tag16553" onclick="CopyToClipboard('tag16553');return false;" class="tag-decoration">testing-7.0.1.10859</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/52eb368620ce6dbdee2177a59d752bbbd33f083e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/42324753842" target="_blank">2026-11-07 01:33:59</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
