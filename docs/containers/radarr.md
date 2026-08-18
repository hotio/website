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
<tr><td><div id="tag16959" onclick="CopyToClipboard('tag16959');return false;" class="tag-decoration">nightly</div><div id="tag13188" onclick="CopyToClipboard('tag13188');return false;" class="tag-decoration">nightly-06614a1</div><div id="tag23500" onclick="CopyToClipboard('tag23500');return false;" class="tag-decoration">nightly-6.4.2.10574</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/06614a183a527cf5c11d0ada1a43245fe116de2d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/32143505206" target="_blank">2026-08-18 13:38:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15108" onclick="CopyToClipboard('tag15108');return false;" class="tag-decoration">release</div><div id="tag12428" onclick="CopyToClipboard('tag12428');return false;" class="tag-decoration">release-557c128</div><div id="tag14957" onclick="CopyToClipboard('tag14957');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/557c128ce0c3b1046e3b5e23b2cc6d438e8bc72a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/32143514277" target="_blank">2026-08-18 13:38:10</a></td></tr>
<tr><td><div id="tag21069" onclick="CopyToClipboard('tag21069');return false;" class="tag-decoration">testing</div><div id="tag10779" onclick="CopyToClipboard('tag10779');return false;" class="tag-decoration">testing-9ffecff</div><div id="tag24737" onclick="CopyToClipboard('tag24737');return false;" class="tag-decoration">testing-6.4.1.10545</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/9ffecfffe8fef08b0f71935334ee543c5731c5fe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/32143508750" target="_blank">2026-08-18 13:38:06</a></td></tr>
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
