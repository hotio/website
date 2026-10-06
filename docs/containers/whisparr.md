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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3710" onclick="CopyToClipboard('tag3710');return false;" class="tag-decoration">v2</div><div id="tag15754" onclick="CopyToClipboard('tag15754');return false;" class="tag-decoration">v2-885d3a4</div><div id="tag13585" onclick="CopyToClipboard('tag13585');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag24910" onclick="CopyToClipboard('tag24910');return false;" class="tag-decoration">v2-v2</div><div id="tag31601" onclick="CopyToClipboard('tag31601');return false;" class="tag-decoration">v2-v2.2</div><div id="tag28141" onclick="CopyToClipboard('tag28141');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/885d3a4875d86020cf438d690312d481d4971fcb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37426848781" target="_blank">2026-10-06 06:58:45</a></td></tr>
<tr><td><div id="tag8164" onclick="CopyToClipboard('tag8164');return false;" class="tag-decoration">v2-develop</div><div id="tag13004" onclick="CopyToClipboard('tag13004');return false;" class="tag-decoration">v2-develop-c580781</div><div id="tag4830" onclick="CopyToClipboard('tag4830');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag22875" onclick="CopyToClipboard('tag22875');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag32035" onclick="CopyToClipboard('tag32035');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag14242" onclick="CopyToClipboard('tag14242');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c580781debaa28a96ee140554b4926957ce1eab7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37426853595" target="_blank">2026-10-06 06:58:48</a></td></tr>
<tr><td><div id="tag23690" onclick="CopyToClipboard('tag23690');return false;" class="tag-decoration">v3</div><div id="tag19804" onclick="CopyToClipboard('tag19804');return false;" class="tag-decoration">v3-95a07d1</div><div id="tag18595" onclick="CopyToClipboard('tag18595');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag4793" onclick="CopyToClipboard('tag4793');return false;" class="tag-decoration">v3-v3</div><div id="tag16725" onclick="CopyToClipboard('tag16725');return false;" class="tag-decoration">v3-v3.6</div><div id="tag11874" onclick="CopyToClipboard('tag11874');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/95a07d19c6386f3907ae728814a92b946bb6b755" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37474608462" target="_blank">2026-10-06 13:54:52</a></td></tr>
<tr><td><div id="tag31346" onclick="CopyToClipboard('tag31346');return false;" class="tag-decoration">v3-develop</div><div id="tag20837" onclick="CopyToClipboard('tag20837');return false;" class="tag-decoration">v3-develop-ee4758a</div><div id="tag7620" onclick="CopyToClipboard('tag7620');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag9189" onclick="CopyToClipboard('tag9189');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag5796" onclick="CopyToClipboard('tag5796');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag12498" onclick="CopyToClipboard('tag12498');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ee4758a177eb2179e433d473288af3974402732d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37426848196" target="_blank">2026-10-06 06:58:45</a></td></tr>
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
