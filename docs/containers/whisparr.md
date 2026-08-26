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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3314" onclick="CopyToClipboard('tag3314');return false;" class="tag-decoration">v2</div><div id="tag13673" onclick="CopyToClipboard('tag13673');return false;" class="tag-decoration">v2-7521c04</div><div id="tag14689" onclick="CopyToClipboard('tag14689');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag24576" onclick="CopyToClipboard('tag24576');return false;" class="tag-decoration">v2-v2</div><div id="tag31123" onclick="CopyToClipboard('tag31123');return false;" class="tag-decoration">v2-v2.2</div><div id="tag10397" onclick="CopyToClipboard('tag10397');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/7521c04f7664e1015d5d821dabc467611f4e9972" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172201" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag28845" onclick="CopyToClipboard('tag28845');return false;" class="tag-decoration">v2-develop</div><div id="tag21853" onclick="CopyToClipboard('tag21853');return false;" class="tag-decoration">v2-develop-6d8ef45</div><div id="tag9187" onclick="CopyToClipboard('tag9187');return false;" class="tag-decoration">v2-develop-2.2.0-develop.198</div><div id="tag2134" onclick="CopyToClipboard('tag2134');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag20571" onclick="CopyToClipboard('tag20571');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag1370" onclick="CopyToClipboard('tag1370');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6d8ef4525bcfc34049941775db0094351af42fcc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922181221" target="_blank">2026-08-26 02:17:33</a></td></tr>
<tr><td><div id="tag10799" onclick="CopyToClipboard('tag10799');return false;" class="tag-decoration">v3</div><div id="tag6010" onclick="CopyToClipboard('tag6010');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag21639" onclick="CopyToClipboard('tag21639');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag3732" onclick="CopyToClipboard('tag3732');return false;" class="tag-decoration">v3-v3</div><div id="tag26722" onclick="CopyToClipboard('tag26722');return false;" class="tag-decoration">v3-v3.3</div><div id="tag24332" onclick="CopyToClipboard('tag24332');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag23896" onclick="CopyToClipboard('tag23896');return false;" class="tag-decoration">v3-develop</div><div id="tag12512" onclick="CopyToClipboard('tag12512');return false;" class="tag-decoration">v3-develop-f7396fb</div><div id="tag24807" onclick="CopyToClipboard('tag24807');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1279</div><div id="tag9118" onclick="CopyToClipboard('tag9118');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14896" onclick="CopyToClipboard('tag14896');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag31049" onclick="CopyToClipboard('tag31049');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f7396fba0d4fda86103197a99b59bb397993e44c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922173242" target="_blank">2026-08-26 02:17:25</a></td></tr>
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
