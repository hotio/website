---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27908" onclick="CopyToClipboard('tag27908');return false;" class="tag-decoration">v2</div><div id="tag30193" onclick="CopyToClipboard('tag30193');return false;" class="tag-decoration">v2-0c7568b</div><div id="tag17012" onclick="CopyToClipboard('tag17012');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag2636" onclick="CopyToClipboard('tag2636');return false;" class="tag-decoration">v2-v2</div><div id="tag9127" onclick="CopyToClipboard('tag9127');return false;" class="tag-decoration">v2-v2.2</div><div id="tag9687" onclick="CopyToClipboard('tag9687');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/0c7568ba6fd4d3584b9f419d4e6acc38b2487702" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42059429907" target="_blank">2026-11-05 15:52:42</a></td></tr>
<tr><td><div id="tag29599" onclick="CopyToClipboard('tag29599');return false;" class="tag-decoration">v2-develop</div><div id="tag12313" onclick="CopyToClipboard('tag12313');return false;" class="tag-decoration">v2-develop-7c8ccf4</div><div id="tag21385" onclick="CopyToClipboard('tag21385');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag23732" onclick="CopyToClipboard('tag23732');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag8483" onclick="CopyToClipboard('tag8483');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag2098" onclick="CopyToClipboard('tag2098');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/7c8ccf4b5c73e09bf74eabfb2ace93630a382627" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42059418662" target="_blank">2026-11-05 15:52:38</a></td></tr>
<tr><td><div id="tag9071" onclick="CopyToClipboard('tag9071');return false;" class="tag-decoration">v3</div><div id="tag13926" onclick="CopyToClipboard('tag13926');return false;" class="tag-decoration">v3-206249f</div><div id="tag24104" onclick="CopyToClipboard('tag24104');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag9464" onclick="CopyToClipboard('tag9464');return false;" class="tag-decoration">v3-v3</div><div id="tag20100" onclick="CopyToClipboard('tag20100');return false;" class="tag-decoration">v3-v3.6</div><div id="tag5650" onclick="CopyToClipboard('tag5650');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/206249f5c5ee02c72b2ebc2cf78d5c56d4d6152e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42059423143" target="_blank">2026-11-05 15:52:40</a></td></tr>
<tr><td><div id="tag30492" onclick="CopyToClipboard('tag30492');return false;" class="tag-decoration">v3-develop</div><div id="tag13179" onclick="CopyToClipboard('tag13179');return false;" class="tag-decoration">v3-develop-3eaacb6</div><div id="tag10957" onclick="CopyToClipboard('tag10957');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag31232" onclick="CopyToClipboard('tag31232');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag8623" onclick="CopyToClipboard('tag8623');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag25906" onclick="CopyToClipboard('tag25906');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3eaacb6a0c480bcada289dd5e4daaf6d9095048e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42059447392" target="_blank">2026-11-05 15:52:48</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
