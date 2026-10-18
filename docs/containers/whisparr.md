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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27046" onclick="CopyToClipboard('tag27046');return false;" class="tag-decoration">v2</div><div id="tag3437" onclick="CopyToClipboard('tag3437');return false;" class="tag-decoration">v2-6ea229b</div><div id="tag27262" onclick="CopyToClipboard('tag27262');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag28890" onclick="CopyToClipboard('tag28890');return false;" class="tag-decoration">v2-v2</div><div id="tag31680" onclick="CopyToClipboard('tag31680');return false;" class="tag-decoration">v2-v2.2</div><div id="tag32529" onclick="CopyToClipboard('tag32529');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/6ea229b3d66042bb935b7d2ce6961ebbaeb0228b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138533454" target="_blank">2026-10-18 15:00:38</a></td></tr>
<tr><td><div id="tag9986" onclick="CopyToClipboard('tag9986');return false;" class="tag-decoration">v2-develop</div><div id="tag6476" onclick="CopyToClipboard('tag6476');return false;" class="tag-decoration">v2-develop-b89797f</div><div id="tag20850" onclick="CopyToClipboard('tag20850');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag9419" onclick="CopyToClipboard('tag9419');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag25953" onclick="CopyToClipboard('tag25953');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag24712" onclick="CopyToClipboard('tag24712');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b89797f2fd0d5e72962dd0f3a5ed7e01a665ceb1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138532890" target="_blank">2026-10-18 15:00:37</a></td></tr>
<tr><td><div id="tag23089" onclick="CopyToClipboard('tag23089');return false;" class="tag-decoration">v3</div><div id="tag25482" onclick="CopyToClipboard('tag25482');return false;" class="tag-decoration">v3-de7f4e6</div><div id="tag29322" onclick="CopyToClipboard('tag29322');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag25174" onclick="CopyToClipboard('tag25174');return false;" class="tag-decoration">v3-v3</div><div id="tag4583" onclick="CopyToClipboard('tag4583');return false;" class="tag-decoration">v3-v3.6</div><div id="tag25375" onclick="CopyToClipboard('tag25375');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/de7f4e670db8ee53949d1eeb9539c05e8ceb47f2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138532961" target="_blank">2026-10-18 15:00:37</a></td></tr>
<tr><td><div id="tag5698" onclick="CopyToClipboard('tag5698');return false;" class="tag-decoration">v3-develop</div><div id="tag32375" onclick="CopyToClipboard('tag32375');return false;" class="tag-decoration">v3-develop-eb7b104</div><div id="tag31123" onclick="CopyToClipboard('tag31123');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag21144" onclick="CopyToClipboard('tag21144');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag28711" onclick="CopyToClipboard('tag28711');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag10681" onclick="CopyToClipboard('tag10681');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/eb7b10487653e67df05dff8675b9cdb232f25d69" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38988416479" target="_blank">2026-10-17 00:53:09</a></td></tr>
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
