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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3775" onclick="CopyToClipboard('tag3775');return false;" class="tag-decoration">v2</div><div id="tag14888" onclick="CopyToClipboard('tag14888');return false;" class="tag-decoration">v2-bd26bf8</div><div id="tag13377" onclick="CopyToClipboard('tag13377');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag29554" onclick="CopyToClipboard('tag29554');return false;" class="tag-decoration">v2-v2</div><div id="tag31609" onclick="CopyToClipboard('tag31609');return false;" class="tag-decoration">v2-v2.2</div><div id="tag15539" onclick="CopyToClipboard('tag15539');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/bd26bf80189b90f776856cc63082e2145da00049" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702527208" target="_blank">2026-09-22 08:00:54</a></td></tr>
<tr><td><div id="tag2617" onclick="CopyToClipboard('tag2617');return false;" class="tag-decoration">v2-develop</div><div id="tag3214" onclick="CopyToClipboard('tag3214');return false;" class="tag-decoration">v2-develop-e2c30e7</div><div id="tag18912" onclick="CopyToClipboard('tag18912');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag24972" onclick="CopyToClipboard('tag24972');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag20081" onclick="CopyToClipboard('tag20081');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag13088" onclick="CopyToClipboard('tag13088');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e2c30e7e94393fae086a94e9da38d134dbd4a9d3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702539420" target="_blank">2026-09-22 08:01:03</a></td></tr>
<tr><td><div id="tag19953" onclick="CopyToClipboard('tag19953');return false;" class="tag-decoration">v3</div><div id="tag27552" onclick="CopyToClipboard('tag27552');return false;" class="tag-decoration">v3-e36c32c</div><div id="tag18153" onclick="CopyToClipboard('tag18153');return false;" class="tag-decoration">v3-3.6.1-release.1708</div><div id="tag540" onclick="CopyToClipboard('tag540');return false;" class="tag-decoration">v3-v3</div><div id="tag27387" onclick="CopyToClipboard('tag27387');return false;" class="tag-decoration">v3-v3.6</div><div id="tag28826" onclick="CopyToClipboard('tag28826');return false;" class="tag-decoration">v3-v3.6.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e36c32c5776e543477a023bde7c6a6f366fd35a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702527361" target="_blank">2026-09-22 08:00:55</a></td></tr>
<tr><td><div id="tag23650" onclick="CopyToClipboard('tag23650');return false;" class="tag-decoration">v3-develop</div><div id="tag16729" onclick="CopyToClipboard('tag16729');return false;" class="tag-decoration">v3-develop-ad98dbc</div><div id="tag18308" onclick="CopyToClipboard('tag18308');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1711</div><div id="tag25770" onclick="CopyToClipboard('tag25770');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20892" onclick="CopyToClipboard('tag20892');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag1177" onclick="CopyToClipboard('tag1177');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ad98dbce53211ad47fcca2af8524380359961394" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702530980" target="_blank">2026-09-22 08:00:56</a></td></tr>
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
