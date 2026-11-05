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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18052" onclick="CopyToClipboard('tag18052');return false;" class="tag-decoration">v2</div><div id="tag30149" onclick="CopyToClipboard('tag30149');return false;" class="tag-decoration">v2-0faf6e6</div><div id="tag7902" onclick="CopyToClipboard('tag7902');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag30105" onclick="CopyToClipboard('tag30105');return false;" class="tag-decoration">v2-v2</div><div id="tag12548" onclick="CopyToClipboard('tag12548');return false;" class="tag-decoration">v2-v2.2</div><div id="tag7398" onclick="CopyToClipboard('tag7398');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/0faf6e66f559dd5a4cb1617df7488d9ee90bc656" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41559589572" target="_blank">2026-11-03 01:24:52</a></td></tr>
<tr><td><div id="tag15114" onclick="CopyToClipboard('tag15114');return false;" class="tag-decoration">v2-develop</div><div id="tag12689" onclick="CopyToClipboard('tag12689');return false;" class="tag-decoration">v2-develop-f407b94</div><div id="tag19106" onclick="CopyToClipboard('tag19106');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag17812" onclick="CopyToClipboard('tag17812');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag1818" onclick="CopyToClipboard('tag1818');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag16480" onclick="CopyToClipboard('tag16480');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f407b949c2be6cfd6b3ed760a49b941c87fa2122" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41559574877" target="_blank">2026-11-03 01:24:45</a></td></tr>
<tr><td><div id="tag22251" onclick="CopyToClipboard('tag22251');return false;" class="tag-decoration">v3</div><div id="tag25093" onclick="CopyToClipboard('tag25093');return false;" class="tag-decoration">v3-5285acd</div><div id="tag30997" onclick="CopyToClipboard('tag30997');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag21655" onclick="CopyToClipboard('tag21655');return false;" class="tag-decoration">v3-v3</div><div id="tag8340" onclick="CopyToClipboard('tag8340');return false;" class="tag-decoration">v3-v3.6</div><div id="tag19535" onclick="CopyToClipboard('tag19535');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/5285acde4988cf37122482b615a53aa0516ea421" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41559580759" target="_blank">2026-11-03 01:24:48</a></td></tr>
<tr><td><div id="tag23982" onclick="CopyToClipboard('tag23982');return false;" class="tag-decoration">v3-develop</div><div id="tag15865" onclick="CopyToClipboard('tag15865');return false;" class="tag-decoration">v3-develop-280f620</div><div id="tag5102" onclick="CopyToClipboard('tag5102');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag12991" onclick="CopyToClipboard('tag12991');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag29202" onclick="CopyToClipboard('tag29202');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag4350" onclick="CopyToClipboard('tag4350');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/280f62058b3663bdd831edc8f466c3e99e6c334b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41938236549" target="_blank">2026-11-05 00:01:44</a></td></tr>
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
