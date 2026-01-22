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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10659" onclick="CopyToClipboard('tag10659');return false;" class="tag-decoration">v2</div><div id="tag16103" onclick="CopyToClipboard('tag16103');return false;" class="tag-decoration">v2-550f2e7</div><div id="tag1949" onclick="CopyToClipboard('tag1949');return false;" class="tag-decoration">v2-2.0.0.2151</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/550f2e77377292433e4d4175b3672f73e214967f" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21243883930" target="_blank">2026-01-22 09:52:33</a></td></tr>
<tr><td><div id="tag1426" onclick="CopyToClipboard('tag1426');return false;" class="tag-decoration">v3</div><div id="tag26089" onclick="CopyToClipboard('tag26089');return false;" class="tag-decoration">v3-0c621e0</div><div id="tag31839" onclick="CopyToClipboard('tag31839');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag13082" onclick="CopyToClipboard('tag13082');return false;" class="tag-decoration">v3-v3</div><div id="tag28449" onclick="CopyToClipboard('tag28449');return false;" class="tag-decoration">v3-v3.2</div><div id="tag28146" onclick="CopyToClipboard('tag28146');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0c621e0337d0dc99f8a299fed326922541cac521" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21237962210" target="_blank">2026-01-22 06:03:48</a></td></tr>
<tr><td><div id="tag2424" onclick="CopyToClipboard('tag2424');return false;" class="tag-decoration">v3-develop</div><div id="tag6586" onclick="CopyToClipboard('tag6586');return false;" class="tag-decoration">v3-develop-dc9ea45</div><div id="tag16189" onclick="CopyToClipboard('tag16189');return false;" class="tag-decoration">v3-develop-3.2.1-develop.74</div><div id="tag11791" onclick="CopyToClipboard('tag11791');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag12245" onclick="CopyToClipboard('tag12245');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag2297" onclick="CopyToClipboard('tag2297');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/dc9ea45cd1218c05fe7881f80f5206d75e83554d" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21237961557" target="_blank">2026-01-22 06:03:46</a></td></tr>
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
