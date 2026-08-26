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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18868" onclick="CopyToClipboard('tag18868');return false;" class="tag-decoration">v2</div><div id="tag4807" onclick="CopyToClipboard('tag4807');return false;" class="tag-decoration">v2-7521c04</div><div id="tag30553" onclick="CopyToClipboard('tag30553');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag18708" onclick="CopyToClipboard('tag18708');return false;" class="tag-decoration">v2-v2</div><div id="tag5376" onclick="CopyToClipboard('tag5376');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13772" onclick="CopyToClipboard('tag13772');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/7521c04f7664e1015d5d821dabc467611f4e9972" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172201" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag19756" onclick="CopyToClipboard('tag19756');return false;" class="tag-decoration">v2-develop</div><div id="tag27400" onclick="CopyToClipboard('tag27400');return false;" class="tag-decoration">v2-develop-d5c6d74</div><div id="tag16335" onclick="CopyToClipboard('tag16335');return false;" class="tag-decoration">v2-develop-2.2.0-develop.210</div><div id="tag22398" onclick="CopyToClipboard('tag22398');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26734" onclick="CopyToClipboard('tag26734');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag8304" onclick="CopyToClipboard('tag8304');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d5c6d74b92fb1f404cc6fef221f3fe678e1177dc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32980988092" target="_blank">2026-08-26 14:33:05</a></td></tr>
<tr><td><div id="tag3167" onclick="CopyToClipboard('tag3167');return false;" class="tag-decoration">v3</div><div id="tag14081" onclick="CopyToClipboard('tag14081');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag11401" onclick="CopyToClipboard('tag11401');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag29520" onclick="CopyToClipboard('tag29520');return false;" class="tag-decoration">v3-v3</div><div id="tag5634" onclick="CopyToClipboard('tag5634');return false;" class="tag-decoration">v3-v3.3</div><div id="tag31518" onclick="CopyToClipboard('tag31518');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag11898" onclick="CopyToClipboard('tag11898');return false;" class="tag-decoration">v3-develop</div><div id="tag17052" onclick="CopyToClipboard('tag17052');return false;" class="tag-decoration">v3-develop-f24470e</div><div id="tag22386" onclick="CopyToClipboard('tag22386');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1287</div><div id="tag28142" onclick="CopyToClipboard('tag28142');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag24198" onclick="CopyToClipboard('tag24198');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag3162" onclick="CopyToClipboard('tag3162');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f24470eebce674ed5adf53bd767840fb689bd026" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32953241622" target="_blank">2026-08-26 09:29:03</a></td></tr>
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
