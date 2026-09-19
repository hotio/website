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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4060" onclick="CopyToClipboard('tag4060');return false;" class="tag-decoration">v2</div><div id="tag18839" onclick="CopyToClipboard('tag18839');return false;" class="tag-decoration">v2-e3f9ed7</div><div id="tag1597" onclick="CopyToClipboard('tag1597');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag7558" onclick="CopyToClipboard('tag7558');return false;" class="tag-decoration">v2-v2</div><div id="tag31288" onclick="CopyToClipboard('tag31288');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8381" onclick="CopyToClipboard('tag8381');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e3f9ed77e12d9bf2897d2491633962dc288ac1c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363840725" target="_blank">2026-09-18 15:40:14</a></td></tr>
<tr><td><div id="tag13166" onclick="CopyToClipboard('tag13166');return false;" class="tag-decoration">v2-develop</div><div id="tag13666" onclick="CopyToClipboard('tag13666');return false;" class="tag-decoration">v2-develop-5574480</div><div id="tag31948" onclick="CopyToClipboard('tag31948');return false;" class="tag-decoration">v2-develop-2.2.0-develop.380</div><div id="tag21841" onclick="CopyToClipboard('tag21841');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag28538" onclick="CopyToClipboard('tag28538');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag26399" onclick="CopyToClipboard('tag26399');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5574480ba93983a57e6b3e4ed191c77a04c34351" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363855676" target="_blank">2026-09-18 15:40:23</a></td></tr>
<tr><td><div id="tag30399" onclick="CopyToClipboard('tag30399');return false;" class="tag-decoration">v3</div><div id="tag19895" onclick="CopyToClipboard('tag19895');return false;" class="tag-decoration">v3-44c7018</div><div id="tag2993" onclick="CopyToClipboard('tag2993');return false;" class="tag-decoration">v3-3.6.0-release.1660</div><div id="tag8159" onclick="CopyToClipboard('tag8159');return false;" class="tag-decoration">v3-v3</div><div id="tag7432" onclick="CopyToClipboard('tag7432');return false;" class="tag-decoration">v3-v3.6</div><div id="tag21506" onclick="CopyToClipboard('tag21506');return false;" class="tag-decoration">v3-v3.6.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/44c70188b212c0edcc5a8dd8de67fef16b6994a1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363850436" target="_blank">2026-09-18 15:40:20</a></td></tr>
<tr><td><div id="tag7525" onclick="CopyToClipboard('tag7525');return false;" class="tag-decoration">v3-develop</div><div id="tag6484" onclick="CopyToClipboard('tag6484');return false;" class="tag-decoration">v3-develop-7fd09c5</div><div id="tag8718" onclick="CopyToClipboard('tag8718');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1694</div><div id="tag9642" onclick="CopyToClipboard('tag9642');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag9876" onclick="CopyToClipboard('tag9876');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag24299" onclick="CopyToClipboard('tag24299');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/7fd09c58cc40a3210c20ea1a130b4459617405d3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35429788033" target="_blank">2026-09-19 07:36:30</a></td></tr>
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
