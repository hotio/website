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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag195" onclick="CopyToClipboard('tag195');return false;" class="tag-decoration">v2</div><div id="tag30766" onclick="CopyToClipboard('tag30766');return false;" class="tag-decoration">v2-6ea229b</div><div id="tag30810" onclick="CopyToClipboard('tag30810');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag32146" onclick="CopyToClipboard('tag32146');return false;" class="tag-decoration">v2-v2</div><div id="tag12215" onclick="CopyToClipboard('tag12215');return false;" class="tag-decoration">v2-v2.2</div><div id="tag17118" onclick="CopyToClipboard('tag17118');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/6ea229b3d66042bb935b7d2ce6961ebbaeb0228b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138533454" target="_blank">2026-10-18 15:00:38</a></td></tr>
<tr><td><div id="tag20373" onclick="CopyToClipboard('tag20373');return false;" class="tag-decoration">v2-develop</div><div id="tag24535" onclick="CopyToClipboard('tag24535');return false;" class="tag-decoration">v2-develop-b89797f</div><div id="tag25074" onclick="CopyToClipboard('tag25074');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag13647" onclick="CopyToClipboard('tag13647');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag32453" onclick="CopyToClipboard('tag32453');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag15719" onclick="CopyToClipboard('tag15719');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b89797f2fd0d5e72962dd0f3a5ed7e01a665ceb1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138532890" target="_blank">2026-10-18 15:00:37</a></td></tr>
<tr><td><div id="tag21713" onclick="CopyToClipboard('tag21713');return false;" class="tag-decoration">v3</div><div id="tag1149" onclick="CopyToClipboard('tag1149');return false;" class="tag-decoration">v3-7fb9b23</div><div id="tag24056" onclick="CopyToClipboard('tag24056');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag27897" onclick="CopyToClipboard('tag27897');return false;" class="tag-decoration">v3-v3</div><div id="tag5571" onclick="CopyToClipboard('tag5571');return false;" class="tag-decoration">v3-v3.6</div><div id="tag18978" onclick="CopyToClipboard('tag18978');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7fb9b2395ccc8060763d457df9946db9e183be64" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38456159836" target="_blank">2026-10-13 19:36:17</a></td></tr>
<tr><td><div id="tag22803" onclick="CopyToClipboard('tag22803');return false;" class="tag-decoration">v3-develop</div><div id="tag17712" onclick="CopyToClipboard('tag17712');return false;" class="tag-decoration">v3-develop-eb7b104</div><div id="tag25177" onclick="CopyToClipboard('tag25177');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag19962" onclick="CopyToClipboard('tag19962');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag27985" onclick="CopyToClipboard('tag27985');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag9746" onclick="CopyToClipboard('tag9746');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/eb7b10487653e67df05dff8675b9cdb232f25d69" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38988416479" target="_blank">2026-10-17 00:53:09</a></td></tr>
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
