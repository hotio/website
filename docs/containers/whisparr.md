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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12359" onclick="CopyToClipboard('tag12359');return false;" class="tag-decoration">v2</div><div id="tag1732" onclick="CopyToClipboard('tag1732');return false;" class="tag-decoration">v2-ff2ab73</div><div id="tag9792" onclick="CopyToClipboard('tag9792');return false;" class="tag-decoration">v2-2.0.0.2151</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ff2ab7361e0eebb02eafd05f04f9390cb7d6825a" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21237961294" target="_blank">2026-01-22 06:03:45</a></td></tr>
<tr><td><div id="tag32142" onclick="CopyToClipboard('tag32142');return false;" class="tag-decoration">v3</div><div id="tag15523" onclick="CopyToClipboard('tag15523');return false;" class="tag-decoration">v3-0c621e0</div><div id="tag18262" onclick="CopyToClipboard('tag18262');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag9863" onclick="CopyToClipboard('tag9863');return false;" class="tag-decoration">v3-v3</div><div id="tag13798" onclick="CopyToClipboard('tag13798');return false;" class="tag-decoration">v3-v3.2</div><div id="tag24030" onclick="CopyToClipboard('tag24030');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0c621e0337d0dc99f8a299fed326922541cac521" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21237962210" target="_blank">2026-01-22 06:03:48</a></td></tr>
<tr><td><div id="tag15060" onclick="CopyToClipboard('tag15060');return false;" class="tag-decoration">v3-develop</div><div id="tag18644" onclick="CopyToClipboard('tag18644');return false;" class="tag-decoration">v3-develop-dc9ea45</div><div id="tag24320" onclick="CopyToClipboard('tag24320');return false;" class="tag-decoration">v3-develop-3.2.1-develop.74</div><div id="tag3337" onclick="CopyToClipboard('tag3337');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6710" onclick="CopyToClipboard('tag6710');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag18954" onclick="CopyToClipboard('tag18954');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/dc9ea45cd1218c05fe7881f80f5206d75e83554d" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21237961557" target="_blank">2026-01-22 06:03:46</a></td></tr>
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
