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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17087" onclick="CopyToClipboard('tag17087');return false;" class="tag-decoration">v2</div><div id="tag676" onclick="CopyToClipboard('tag676');return false;" class="tag-decoration">v2-e4c1492</div><div id="tag22962" onclick="CopyToClipboard('tag22962');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag8127" onclick="CopyToClipboard('tag8127');return false;" class="tag-decoration">v2-v2</div><div id="tag6050" onclick="CopyToClipboard('tag6050');return false;" class="tag-decoration">v2-v2.2</div><div id="tag30760" onclick="CopyToClipboard('tag30760');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e4c14926e2d84e8e9e45268ed3d94942349a0cc2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39646367152" target="_blank">2026-10-21 17:43:41</a></td></tr>
<tr><td><div id="tag30260" onclick="CopyToClipboard('tag30260');return false;" class="tag-decoration">v2-develop</div><div id="tag23838" onclick="CopyToClipboard('tag23838');return false;" class="tag-decoration">v2-develop-2c67e73</div><div id="tag28670" onclick="CopyToClipboard('tag28670');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag11284" onclick="CopyToClipboard('tag11284');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag30278" onclick="CopyToClipboard('tag30278');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag11577" onclick="CopyToClipboard('tag11577');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2c67e7393903510b35e0cd1776f445860fe305ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39646374016" target="_blank">2026-10-21 17:43:44</a></td></tr>
<tr><td><div id="tag9963" onclick="CopyToClipboard('tag9963');return false;" class="tag-decoration">v3</div><div id="tag957" onclick="CopyToClipboard('tag957');return false;" class="tag-decoration">v3-2f7567a</div><div id="tag5366" onclick="CopyToClipboard('tag5366');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag150" onclick="CopyToClipboard('tag150');return false;" class="tag-decoration">v3-v3</div><div id="tag23086" onclick="CopyToClipboard('tag23086');return false;" class="tag-decoration">v3-v3.6</div><div id="tag22721" onclick="CopyToClipboard('tag22721');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/2f7567ac9afe8543f9534d645152abf2765a4f49" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39674895749" target="_blank">2026-10-21 20:58:21</a></td></tr>
<tr><td><div id="tag10611" onclick="CopyToClipboard('tag10611');return false;" class="tag-decoration">v3-develop</div><div id="tag23580" onclick="CopyToClipboard('tag23580');return false;" class="tag-decoration">v3-develop-9320bee</div><div id="tag25837" onclick="CopyToClipboard('tag25837');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag8482" onclick="CopyToClipboard('tag8482');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag19281" onclick="CopyToClipboard('tag19281');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag28790" onclick="CopyToClipboard('tag28790');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/9320bee221615c04ac68e3cf0ac5f7c7ea511757" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39674903622" target="_blank">2026-10-21 20:58:24</a></td></tr>
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
