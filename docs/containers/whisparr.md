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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13127" onclick="CopyToClipboard('tag13127');return false;" class="tag-decoration">v2</div><div id="tag30843" onclick="CopyToClipboard('tag30843');return false;" class="tag-decoration">v2-0faf6e6</div><div id="tag13694" onclick="CopyToClipboard('tag13694');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag27895" onclick="CopyToClipboard('tag27895');return false;" class="tag-decoration">v2-v2</div><div id="tag8776" onclick="CopyToClipboard('tag8776');return false;" class="tag-decoration">v2-v2.2</div><div id="tag11239" onclick="CopyToClipboard('tag11239');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/0faf6e66f559dd5a4cb1617df7488d9ee90bc656" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41559589572" target="_blank">2026-11-03 01:24:52</a></td></tr>
<tr><td><div id="tag29609" onclick="CopyToClipboard('tag29609');return false;" class="tag-decoration">v2-develop</div><div id="tag8570" onclick="CopyToClipboard('tag8570');return false;" class="tag-decoration">v2-develop-f407b94</div><div id="tag26734" onclick="CopyToClipboard('tag26734');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag1743" onclick="CopyToClipboard('tag1743');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag10429" onclick="CopyToClipboard('tag10429');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag26598" onclick="CopyToClipboard('tag26598');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f407b949c2be6cfd6b3ed760a49b941c87fa2122" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41559574877" target="_blank">2026-11-03 01:24:45</a></td></tr>
<tr><td><div id="tag24344" onclick="CopyToClipboard('tag24344');return false;" class="tag-decoration">v3</div><div id="tag2929" onclick="CopyToClipboard('tag2929');return false;" class="tag-decoration">v3-dd51edb</div><div id="tag32614" onclick="CopyToClipboard('tag32614');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag29928" onclick="CopyToClipboard('tag29928');return false;" class="tag-decoration">v3-v3</div><div id="tag22451" onclick="CopyToClipboard('tag22451');return false;" class="tag-decoration">v3-v3.6</div><div id="tag16232" onclick="CopyToClipboard('tag16232');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/dd51edbca0b157b2687ddac7a20f8e7e1c6f28d7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40617637014" target="_blank">2026-10-28 01:52:45</a></td></tr>
<tr><td><div id="tag4942" onclick="CopyToClipboard('tag4942');return false;" class="tag-decoration">v3-develop</div><div id="tag23061" onclick="CopyToClipboard('tag23061');return false;" class="tag-decoration">v3-develop-d6274e6</div><div id="tag10714" onclick="CopyToClipboard('tag10714');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag22453" onclick="CopyToClipboard('tag22453');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag10375" onclick="CopyToClipboard('tag10375');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag10712" onclick="CopyToClipboard('tag10712');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d6274e6cc6d6bb2a18411070f2dba903f9bccc8e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40596998526" target="_blank">2026-10-27 22:43:39</a></td></tr>
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
