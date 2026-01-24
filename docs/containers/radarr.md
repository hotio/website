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
<tr><td><div id="tag11242" onclick="CopyToClipboard('tag11242');return false;" class="tag-decoration">nightly</div><div id="tag4344" onclick="CopyToClipboard('tag4344');return false;" class="tag-decoration">nightly-a95fb06</div><div id="tag3459" onclick="CopyToClipboard('tag3459');return false;" class="tag-decoration">nightly-6.1.1.10317</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/a95fb0699c4868d23c4d87444626d8b336446cab" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/21322457461" target="_blank">2026-01-24 22:14:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9157" onclick="CopyToClipboard('tag9157');return false;" class="tag-decoration">release</div><div id="tag4297" onclick="CopyToClipboard('tag4297');return false;" class="tag-decoration">release-fcd7981</div><div id="tag996" onclick="CopyToClipboard('tag996');return false;" class="tag-decoration">release-6.0.4.10291</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/fcd798155283dc76e27f26f2437c597b0c15a33e" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/21246769410" target="_blank">2026-01-22 11:29:33</a></td></tr>
<tr><td><div id="tag17652" onclick="CopyToClipboard('tag17652');return false;" class="tag-decoration">testing</div><div id="tag24038" onclick="CopyToClipboard('tag24038');return false;" class="tag-decoration">testing-807a550</div><div id="tag23349" onclick="CopyToClipboard('tag23349');return false;" class="tag-decoration">testing-6.1.1.10317</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/807a550365f471ba14acbbbb2a4849320632d568" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/21246770209" target="_blank">2026-01-22 11:29:34</a></td></tr>
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
