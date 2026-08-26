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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8795" onclick="CopyToClipboard('tag8795');return false;" class="tag-decoration">v2</div><div id="tag8809" onclick="CopyToClipboard('tag8809');return false;" class="tag-decoration">v2-7521c04</div><div id="tag15095" onclick="CopyToClipboard('tag15095');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag11297" onclick="CopyToClipboard('tag11297');return false;" class="tag-decoration">v2-v2</div><div id="tag27781" onclick="CopyToClipboard('tag27781');return false;" class="tag-decoration">v2-v2.2</div><div id="tag7778" onclick="CopyToClipboard('tag7778');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/7521c04f7664e1015d5d821dabc467611f4e9972" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172201" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag2136" onclick="CopyToClipboard('tag2136');return false;" class="tag-decoration">v2-develop</div><div id="tag24521" onclick="CopyToClipboard('tag24521');return false;" class="tag-decoration">v2-develop-d3e001b</div><div id="tag12657" onclick="CopyToClipboard('tag12657');return false;" class="tag-decoration">v2-develop-2.2.0-develop.206</div><div id="tag22281" onclick="CopyToClipboard('tag22281');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag17394" onclick="CopyToClipboard('tag17394');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag1769" onclick="CopyToClipboard('tag1769');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d3e001bbecd2b8719dd4b40724d716590a877020" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32933773407" target="_blank">2026-08-26 05:22:06</a></td></tr>
<tr><td><div id="tag27235" onclick="CopyToClipboard('tag27235');return false;" class="tag-decoration">v3</div><div id="tag11167" onclick="CopyToClipboard('tag11167');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag11047" onclick="CopyToClipboard('tag11047');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag27383" onclick="CopyToClipboard('tag27383');return false;" class="tag-decoration">v3-v3</div><div id="tag11781" onclick="CopyToClipboard('tag11781');return false;" class="tag-decoration">v3-v3.3</div><div id="tag31001" onclick="CopyToClipboard('tag31001');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag22636" onclick="CopyToClipboard('tag22636');return false;" class="tag-decoration">v3-develop</div><div id="tag29961" onclick="CopyToClipboard('tag29961');return false;" class="tag-decoration">v3-develop-f7396fb</div><div id="tag22815" onclick="CopyToClipboard('tag22815');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1279</div><div id="tag9579" onclick="CopyToClipboard('tag9579');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag25014" onclick="CopyToClipboard('tag25014');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag30629" onclick="CopyToClipboard('tag30629');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f7396fba0d4fda86103197a99b59bb397993e44c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922173242" target="_blank">2026-08-26 02:17:25</a></td></tr>
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
