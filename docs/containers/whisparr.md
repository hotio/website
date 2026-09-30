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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22257" onclick="CopyToClipboard('tag22257');return false;" class="tag-decoration">v2</div><div id="tag30190" onclick="CopyToClipboard('tag30190');return false;" class="tag-decoration">v2-b17234c</div><div id="tag16921" onclick="CopyToClipboard('tag16921');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag5154" onclick="CopyToClipboard('tag5154');return false;" class="tag-decoration">v2-v2</div><div id="tag5073" onclick="CopyToClipboard('tag5073');return false;" class="tag-decoration">v2-v2.2</div><div id="tag1372" onclick="CopyToClipboard('tag1372');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b17234cdfc48210cb4f3ff24aaddb946b79bd524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35960757575" target="_blank">2026-09-24 05:37:16</a></td></tr>
<tr><td><div id="tag26033" onclick="CopyToClipboard('tag26033');return false;" class="tag-decoration">v2-develop</div><div id="tag26906" onclick="CopyToClipboard('tag26906');return false;" class="tag-decoration">v2-develop-16fd73a</div><div id="tag10347" onclick="CopyToClipboard('tag10347');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag26701" onclick="CopyToClipboard('tag26701');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12338" onclick="CopyToClipboard('tag12338');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag23329" onclick="CopyToClipboard('tag23329');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/16fd73aa2cfe8f883938062debfb21c17af570d2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767602397" target="_blank">2026-09-30 19:43:01</a></td></tr>
<tr><td><div id="tag2418" onclick="CopyToClipboard('tag2418');return false;" class="tag-decoration">v3</div><div id="tag12423" onclick="CopyToClipboard('tag12423');return false;" class="tag-decoration">v3-1d21d81</div><div id="tag31452" onclick="CopyToClipboard('tag31452');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag32629" onclick="CopyToClipboard('tag32629');return false;" class="tag-decoration">v3-v3</div><div id="tag31709" onclick="CopyToClipboard('tag31709');return false;" class="tag-decoration">v3-v3.6</div><div id="tag6865" onclick="CopyToClipboard('tag6865');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/1d21d8160a7277e7b799544e1fef8a6abfecfd28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767605536" target="_blank">2026-09-30 19:43:03</a></td></tr>
<tr><td><div id="tag7344" onclick="CopyToClipboard('tag7344');return false;" class="tag-decoration">v3-develop</div><div id="tag16718" onclick="CopyToClipboard('tag16718');return false;" class="tag-decoration">v3-develop-a3a4c3a</div><div id="tag3256" onclick="CopyToClipboard('tag3256');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag22060" onclick="CopyToClipboard('tag22060');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag17954" onclick="CopyToClipboard('tag17954');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag13641" onclick="CopyToClipboard('tag13641');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a3a4c3ac4709362bdb0195b6e9a050f55a7cb30a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767594545" target="_blank">2026-09-30 19:42:57</a></td></tr>
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
