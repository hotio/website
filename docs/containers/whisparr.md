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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9059" onclick="CopyToClipboard('tag9059');return false;" class="tag-decoration">v2</div><div id="tag3063" onclick="CopyToClipboard('tag3063');return false;" class="tag-decoration">v2-885d3a4</div><div id="tag29577" onclick="CopyToClipboard('tag29577');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag9602" onclick="CopyToClipboard('tag9602');return false;" class="tag-decoration">v2-v2</div><div id="tag23842" onclick="CopyToClipboard('tag23842');return false;" class="tag-decoration">v2-v2.2</div><div id="tag23639" onclick="CopyToClipboard('tag23639');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/885d3a4875d86020cf438d690312d481d4971fcb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37426848781" target="_blank">2026-10-06 06:58:45</a></td></tr>
<tr><td><div id="tag15339" onclick="CopyToClipboard('tag15339');return false;" class="tag-decoration">v2-develop</div><div id="tag29737" onclick="CopyToClipboard('tag29737');return false;" class="tag-decoration">v2-develop-c580781</div><div id="tag6459" onclick="CopyToClipboard('tag6459');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag11946" onclick="CopyToClipboard('tag11946');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9878" onclick="CopyToClipboard('tag9878');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag28556" onclick="CopyToClipboard('tag28556');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c580781debaa28a96ee140554b4926957ce1eab7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37426853595" target="_blank">2026-10-06 06:58:48</a></td></tr>
<tr><td><div id="tag24048" onclick="CopyToClipboard('tag24048');return false;" class="tag-decoration">v3</div><div id="tag24116" onclick="CopyToClipboard('tag24116');return false;" class="tag-decoration">v3-816c8e5</div><div id="tag14376" onclick="CopyToClipboard('tag14376');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag12270" onclick="CopyToClipboard('tag12270');return false;" class="tag-decoration">v3-v3</div><div id="tag5213" onclick="CopyToClipboard('tag5213');return false;" class="tag-decoration">v3-v3.6</div><div id="tag27559" onclick="CopyToClipboard('tag27559');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/816c8e5d9e5434c74787b281ef663b6696d570eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37426852007" target="_blank">2026-10-06 06:58:47</a></td></tr>
<tr><td><div id="tag19172" onclick="CopyToClipboard('tag19172');return false;" class="tag-decoration">v3-develop</div><div id="tag12145" onclick="CopyToClipboard('tag12145');return false;" class="tag-decoration">v3-develop-ee4758a</div><div id="tag10641" onclick="CopyToClipboard('tag10641');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag13878" onclick="CopyToClipboard('tag13878');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14196" onclick="CopyToClipboard('tag14196');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag22934" onclick="CopyToClipboard('tag22934');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ee4758a177eb2179e433d473288af3974402732d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37426848196" target="_blank">2026-10-06 06:58:45</a></td></tr>
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
