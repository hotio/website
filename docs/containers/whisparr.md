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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12529" onclick="CopyToClipboard('tag12529');return false;" class="tag-decoration">v2</div><div id="tag6388" onclick="CopyToClipboard('tag6388');return false;" class="tag-decoration">v2-c75114f</div><div id="tag498" onclick="CopyToClipboard('tag498');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag7319" onclick="CopyToClipboard('tag7319');return false;" class="tag-decoration">v2-v2</div><div id="tag16631" onclick="CopyToClipboard('tag16631');return false;" class="tag-decoration">v2-v2.2</div><div id="tag2789" onclick="CopyToClipboard('tag2789');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/c75114fed8467f31908ecd749daa2c815a431553" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36928997579" target="_blank">2026-10-01 21:29:11</a></td></tr>
<tr><td><div id="tag15243" onclick="CopyToClipboard('tag15243');return false;" class="tag-decoration">v2-develop</div><div id="tag943" onclick="CopyToClipboard('tag943');return false;" class="tag-decoration">v2-develop-c580781</div><div id="tag3164" onclick="CopyToClipboard('tag3164');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag7891" onclick="CopyToClipboard('tag7891');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag11217" onclick="CopyToClipboard('tag11217');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag416" onclick="CopyToClipboard('tag416');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c580781debaa28a96ee140554b4926957ce1eab7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37426853595" target="_blank">2026-10-06 06:58:48</a></td></tr>
<tr><td><div id="tag11264" onclick="CopyToClipboard('tag11264');return false;" class="tag-decoration">v3</div><div id="tag13638" onclick="CopyToClipboard('tag13638');return false;" class="tag-decoration">v3-816c8e5</div><div id="tag5790" onclick="CopyToClipboard('tag5790');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag25028" onclick="CopyToClipboard('tag25028');return false;" class="tag-decoration">v3-v3</div><div id="tag1239" onclick="CopyToClipboard('tag1239');return false;" class="tag-decoration">v3-v3.6</div><div id="tag28987" onclick="CopyToClipboard('tag28987');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/816c8e5d9e5434c74787b281ef663b6696d570eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37426852007" target="_blank">2026-10-06 06:58:47</a></td></tr>
<tr><td><div id="tag30543" onclick="CopyToClipboard('tag30543');return false;" class="tag-decoration">v3-develop</div><div id="tag5333" onclick="CopyToClipboard('tag5333');return false;" class="tag-decoration">v3-develop-ee4758a</div><div id="tag17562" onclick="CopyToClipboard('tag17562');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag377" onclick="CopyToClipboard('tag377');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag12142" onclick="CopyToClipboard('tag12142');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag25623" onclick="CopyToClipboard('tag25623');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ee4758a177eb2179e433d473288af3974402732d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37426848196" target="_blank">2026-10-06 06:58:45</a></td></tr>
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
