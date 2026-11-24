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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag689" onclick="CopyToClipboard('tag689');return false;" class="tag-decoration">v2</div><div id="tag32587" onclick="CopyToClipboard('tag32587');return false;" class="tag-decoration">v2-0a9521c</div><div id="tag26015" onclick="CopyToClipboard('tag26015');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag3816" onclick="CopyToClipboard('tag3816');return false;" class="tag-decoration">v2-v2</div><div id="tag27271" onclick="CopyToClipboard('tag27271');return false;" class="tag-decoration">v2-v2.3</div><div id="tag7942" onclick="CopyToClipboard('tag7942');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/0a9521c2ce0dcffe8eb338eb16b83b7a31beb82f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45304243110" target="_blank">2026-11-24 01:19:54</a></td></tr>
<tr><td><div id="tag23069" onclick="CopyToClipboard('tag23069');return false;" class="tag-decoration">v2-develop</div><div id="tag9140" onclick="CopyToClipboard('tag9140');return false;" class="tag-decoration">v2-develop-5dac1ec</div><div id="tag10431" onclick="CopyToClipboard('tag10431');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag31133" onclick="CopyToClipboard('tag31133');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag23182" onclick="CopyToClipboard('tag23182');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag21657" onclick="CopyToClipboard('tag21657');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5dac1ec0f50f4474c54aa252a0c9d7eb500aa187" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45304117260" target="_blank">2026-11-24 01:18:54</a></td></tr>
<tr><td><div id="tag3524" onclick="CopyToClipboard('tag3524');return false;" class="tag-decoration">v3</div><div id="tag4789" onclick="CopyToClipboard('tag4789');return false;" class="tag-decoration">v3-57a16ad</div><div id="tag15083" onclick="CopyToClipboard('tag15083');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag12570" onclick="CopyToClipboard('tag12570');return false;" class="tag-decoration">v3-v3</div><div id="tag6945" onclick="CopyToClipboard('tag6945');return false;" class="tag-decoration">v3-v3.6</div><div id="tag1842" onclick="CopyToClipboard('tag1842');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/57a16ad727b9c42b6aefaeb3fe938d4bc1c07b3a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45304116863" target="_blank">2026-11-24 01:18:53</a></td></tr>
<tr><td><div id="tag28391" onclick="CopyToClipboard('tag28391');return false;" class="tag-decoration">v3-develop</div><div id="tag23667" onclick="CopyToClipboard('tag23667');return false;" class="tag-decoration">v3-develop-d1664aa</div><div id="tag17097" onclick="CopyToClipboard('tag17097');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag22730" onclick="CopyToClipboard('tag22730');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14147" onclick="CopyToClipboard('tag14147');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag1370" onclick="CopyToClipboard('tag1370');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d1664aaf00ac08365d53a288d66deb44bd9258f7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45304125114" target="_blank">2026-11-24 01:18:57</a></td></tr>
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
