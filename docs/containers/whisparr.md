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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31080" onclick="CopyToClipboard('tag31080');return false;" class="tag-decoration">v2</div><div id="tag17550" onclick="CopyToClipboard('tag17550');return false;" class="tag-decoration">v2-3b89e2e</div><div id="tag19597" onclick="CopyToClipboard('tag19597');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag22624" onclick="CopyToClipboard('tag22624');return false;" class="tag-decoration">v2-v2</div><div id="tag19439" onclick="CopyToClipboard('tag19439');return false;" class="tag-decoration">v2-v2.2</div><div id="tag29654" onclick="CopyToClipboard('tag29654');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3b89e2e9a15c44c5415047148770ea51241447ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599372066" target="_blank">2026-09-02 06:33:24</a></td></tr>
<tr><td><div id="tag29305" onclick="CopyToClipboard('tag29305');return false;" class="tag-decoration">v2-develop</div><div id="tag26483" onclick="CopyToClipboard('tag26483');return false;" class="tag-decoration">v2-develop-1c0e956</div><div id="tag13738" onclick="CopyToClipboard('tag13738');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag9971" onclick="CopyToClipboard('tag9971');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag11529" onclick="CopyToClipboard('tag11529');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag13939" onclick="CopyToClipboard('tag13939');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1c0e9564c09c7d78cfa5ce72ca00f60cd5afa701" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599363470" target="_blank">2026-09-02 06:33:17</a></td></tr>
<tr><td><div id="tag3397" onclick="CopyToClipboard('tag3397');return false;" class="tag-decoration">v3</div><div id="tag29723" onclick="CopyToClipboard('tag29723');return false;" class="tag-decoration">v3-7f610bc</div><div id="tag6420" onclick="CopyToClipboard('tag6420');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag30727" onclick="CopyToClipboard('tag30727');return false;" class="tag-decoration">v3-v3</div><div id="tag538" onclick="CopyToClipboard('tag538');return false;" class="tag-decoration">v3-v3.4</div><div id="tag2365" onclick="CopyToClipboard('tag2365');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7f610bcd319101e2d80ae6fc96d350998e687ff0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33599360065" target="_blank">2026-09-02 06:33:15</a></td></tr>
<tr><td><div id="tag23074" onclick="CopyToClipboard('tag23074');return false;" class="tag-decoration">v3-develop</div><div id="tag7983" onclick="CopyToClipboard('tag7983');return false;" class="tag-decoration">v3-develop-521b935</div><div id="tag31028" onclick="CopyToClipboard('tag31028');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1494</div><div id="tag9902" onclick="CopyToClipboard('tag9902');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag26532" onclick="CopyToClipboard('tag26532');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag2051" onclick="CopyToClipboard('tag2051');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/521b935d716d22ae67ecc0b2d65b58f0159472ed" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33701042290" target="_blank">2026-09-03 00:48:09</a></td></tr>
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
