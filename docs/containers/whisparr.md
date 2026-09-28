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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23881" onclick="CopyToClipboard('tag23881');return false;" class="tag-decoration">v2</div><div id="tag5278" onclick="CopyToClipboard('tag5278');return false;" class="tag-decoration">v2-b17234c</div><div id="tag757" onclick="CopyToClipboard('tag757');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag7454" onclick="CopyToClipboard('tag7454');return false;" class="tag-decoration">v2-v2</div><div id="tag14273" onclick="CopyToClipboard('tag14273');return false;" class="tag-decoration">v2-v2.2</div><div id="tag18507" onclick="CopyToClipboard('tag18507');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b17234cdfc48210cb4f3ff24aaddb946b79bd524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960757575" target="_blank">2026-09-24 05:37:16</a></td></tr>
<tr><td><div id="tag16166" onclick="CopyToClipboard('tag16166');return false;" class="tag-decoration">v2-develop</div><div id="tag27348" onclick="CopyToClipboard('tag27348');return false;" class="tag-decoration">v2-develop-17c4b95</div><div id="tag1186" onclick="CopyToClipboard('tag1186');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag15662" onclick="CopyToClipboard('tag15662');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag32293" onclick="CopyToClipboard('tag32293');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag7908" onclick="CopyToClipboard('tag7908');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/17c4b956b22fac6e304c14d97d5b95a431f0c0e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960755350" target="_blank">2026-09-24 05:37:15</a></td></tr>
<tr><td><div id="tag6737" onclick="CopyToClipboard('tag6737');return false;" class="tag-decoration">v3</div><div id="tag19929" onclick="CopyToClipboard('tag19929');return false;" class="tag-decoration">v3-0a2e672</div><div id="tag8846" onclick="CopyToClipboard('tag8846');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag8533" onclick="CopyToClipboard('tag8533');return false;" class="tag-decoration">v3-v3</div><div id="tag16817" onclick="CopyToClipboard('tag16817');return false;" class="tag-decoration">v3-v3.6</div><div id="tag5485" onclick="CopyToClipboard('tag5485');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0a2e6724dec3845704c770f093144f4c49325571" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960752074" target="_blank">2026-09-24 05:37:11</a></td></tr>
<tr><td><div id="tag27084" onclick="CopyToClipboard('tag27084');return false;" class="tag-decoration">v3-develop</div><div id="tag19383" onclick="CopyToClipboard('tag19383');return false;" class="tag-decoration">v3-develop-63ce618</div><div id="tag13365" onclick="CopyToClipboard('tag13365');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1757</div><div id="tag915" onclick="CopyToClipboard('tag915');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag24004" onclick="CopyToClipboard('tag24004');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag4622" onclick="CopyToClipboard('tag4622');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/63ce618529105eb086b596ba1ee34f25dc634385" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36360908832" target="_blank">2026-09-28 00:05:57</a></td></tr>
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
