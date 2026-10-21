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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24418" onclick="CopyToClipboard('tag24418');return false;" class="tag-decoration">v2</div><div id="tag7586" onclick="CopyToClipboard('tag7586');return false;" class="tag-decoration">v2-e4c1492</div><div id="tag10632" onclick="CopyToClipboard('tag10632');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag187" onclick="CopyToClipboard('tag187');return false;" class="tag-decoration">v2-v2</div><div id="tag26850" onclick="CopyToClipboard('tag26850');return false;" class="tag-decoration">v2-v2.2</div><div id="tag17427" onclick="CopyToClipboard('tag17427');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e4c14926e2d84e8e9e45268ed3d94942349a0cc2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39646367152" target="_blank">2026-10-21 17:43:41</a></td></tr>
<tr><td><div id="tag3666" onclick="CopyToClipboard('tag3666');return false;" class="tag-decoration">v2-develop</div><div id="tag10934" onclick="CopyToClipboard('tag10934');return false;" class="tag-decoration">v2-develop-2c67e73</div><div id="tag28285" onclick="CopyToClipboard('tag28285');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag15185" onclick="CopyToClipboard('tag15185');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag2448" onclick="CopyToClipboard('tag2448');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag26778" onclick="CopyToClipboard('tag26778');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2c67e7393903510b35e0cd1776f445860fe305ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39646374016" target="_blank">2026-10-21 17:43:44</a></td></tr>
<tr><td><div id="tag26750" onclick="CopyToClipboard('tag26750');return false;" class="tag-decoration">v3</div><div id="tag29713" onclick="CopyToClipboard('tag29713');return false;" class="tag-decoration">v3-cae187b</div><div id="tag4847" onclick="CopyToClipboard('tag4847');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag21044" onclick="CopyToClipboard('tag21044');return false;" class="tag-decoration">v3-v3</div><div id="tag3387" onclick="CopyToClipboard('tag3387');return false;" class="tag-decoration">v3-v3.6</div><div id="tag5341" onclick="CopyToClipboard('tag5341');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cae187bd5ad6f492f779af265ca29e1b653dd096" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39646361802" target="_blank">2026-10-21 17:43:39</a></td></tr>
<tr><td><div id="tag24633" onclick="CopyToClipboard('tag24633');return false;" class="tag-decoration">v3-develop</div><div id="tag14345" onclick="CopyToClipboard('tag14345');return false;" class="tag-decoration">v3-develop-9320bee</div><div id="tag29376" onclick="CopyToClipboard('tag29376');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag17285" onclick="CopyToClipboard('tag17285');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag31438" onclick="CopyToClipboard('tag31438');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag5768" onclick="CopyToClipboard('tag5768');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/9320bee221615c04ac68e3cf0ac5f7c7ea511757" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39674903622" target="_blank">2026-10-21 20:58:24</a></td></tr>
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
