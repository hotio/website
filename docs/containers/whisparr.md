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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11824" onclick="CopyToClipboard('tag11824');return false;" class="tag-decoration">v2</div><div id="tag6543" onclick="CopyToClipboard('tag6543');return false;" class="tag-decoration">v2-9f598f3</div><div id="tag6150" onclick="CopyToClipboard('tag6150');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag7194" onclick="CopyToClipboard('tag7194');return false;" class="tag-decoration">v2-v2</div><div id="tag25326" onclick="CopyToClipboard('tag25326');return false;" class="tag-decoration">v2-v2.2</div><div id="tag3441" onclick="CopyToClipboard('tag3441');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/9f598f3e2bbe0b440f298ec92bcfb4b62a155935" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40229566913" target="_blank">2026-10-25 20:11:05</a></td></tr>
<tr><td><div id="tag29867" onclick="CopyToClipboard('tag29867');return false;" class="tag-decoration">v2-develop</div><div id="tag27506" onclick="CopyToClipboard('tag27506');return false;" class="tag-decoration">v2-develop-6fec5d3</div><div id="tag1147" onclick="CopyToClipboard('tag1147');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag28170" onclick="CopyToClipboard('tag28170');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag31364" onclick="CopyToClipboard('tag31364');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag28837" onclick="CopyToClipboard('tag28837');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6fec5d389a8513e41448989d2316fbe100736675" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40229561180" target="_blank">2026-10-25 20:11:01</a></td></tr>
<tr><td><div id="tag6966" onclick="CopyToClipboard('tag6966');return false;" class="tag-decoration">v3</div><div id="tag5060" onclick="CopyToClipboard('tag5060');return false;" class="tag-decoration">v3-442ad67</div><div id="tag30033" onclick="CopyToClipboard('tag30033');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag18070" onclick="CopyToClipboard('tag18070');return false;" class="tag-decoration">v3-v3</div><div id="tag15673" onclick="CopyToClipboard('tag15673');return false;" class="tag-decoration">v3-v3.6</div><div id="tag8088" onclick="CopyToClipboard('tag8088');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/442ad67ffbb7c57cf22609adf248489cb81855bf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40507610640" target="_blank">2026-10-27 12:55:14</a></td></tr>
<tr><td><div id="tag32183" onclick="CopyToClipboard('tag32183');return false;" class="tag-decoration">v3-develop</div><div id="tag13860" onclick="CopyToClipboard('tag13860');return false;" class="tag-decoration">v3-develop-6be2f44</div><div id="tag15440" onclick="CopyToClipboard('tag15440');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag6702" onclick="CopyToClipboard('tag6702');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag15038" onclick="CopyToClipboard('tag15038');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag25678" onclick="CopyToClipboard('tag25678');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6be2f4483b5d24df48894ac5a0eed2c79e734913" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40229565433" target="_blank">2026-10-25 20:11:04</a></td></tr>
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
