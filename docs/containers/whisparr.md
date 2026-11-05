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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3347" onclick="CopyToClipboard('tag3347');return false;" class="tag-decoration">v2</div><div id="tag9454" onclick="CopyToClipboard('tag9454');return false;" class="tag-decoration">v2-8aa1fb0</div><div id="tag21708" onclick="CopyToClipboard('tag21708');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag26304" onclick="CopyToClipboard('tag26304');return false;" class="tag-decoration">v2-v2</div><div id="tag28617" onclick="CopyToClipboard('tag28617');return false;" class="tag-decoration">v2-v2.2</div><div id="tag32689" onclick="CopyToClipboard('tag32689');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/8aa1fb0f21762762c5b146d78ee175e8ad2f3108" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41938236779" target="_blank">2026-11-05 00:01:44</a></td></tr>
<tr><td><div id="tag13685" onclick="CopyToClipboard('tag13685');return false;" class="tag-decoration">v2-develop</div><div id="tag29182" onclick="CopyToClipboard('tag29182');return false;" class="tag-decoration">v2-develop-f407b94</div><div id="tag9912" onclick="CopyToClipboard('tag9912');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag29568" onclick="CopyToClipboard('tag29568');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag25093" onclick="CopyToClipboard('tag25093');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag24458" onclick="CopyToClipboard('tag24458');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f407b949c2be6cfd6b3ed760a49b941c87fa2122" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41559574877" target="_blank">2026-11-03 01:24:45</a></td></tr>
<tr><td><div id="tag17967" onclick="CopyToClipboard('tag17967');return false;" class="tag-decoration">v3</div><div id="tag18853" onclick="CopyToClipboard('tag18853');return false;" class="tag-decoration">v3-5285acd</div><div id="tag11044" onclick="CopyToClipboard('tag11044');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag7137" onclick="CopyToClipboard('tag7137');return false;" class="tag-decoration">v3-v3</div><div id="tag4696" onclick="CopyToClipboard('tag4696');return false;" class="tag-decoration">v3-v3.6</div><div id="tag14948" onclick="CopyToClipboard('tag14948');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/5285acde4988cf37122482b615a53aa0516ea421" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41559580759" target="_blank">2026-11-03 01:24:48</a></td></tr>
<tr><td><div id="tag167" onclick="CopyToClipboard('tag167');return false;" class="tag-decoration">v3-develop</div><div id="tag22352" onclick="CopyToClipboard('tag22352');return false;" class="tag-decoration">v3-develop-280f620</div><div id="tag4199" onclick="CopyToClipboard('tag4199');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag4183" onclick="CopyToClipboard('tag4183');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag29014" onclick="CopyToClipboard('tag29014');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag15534" onclick="CopyToClipboard('tag15534');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/280f62058b3663bdd831edc8f466c3e99e6c334b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41938236549" target="_blank">2026-11-05 00:01:44</a></td></tr>
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
