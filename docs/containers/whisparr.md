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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29165" onclick="CopyToClipboard('tag29165');return false;" class="tag-decoration">v2</div><div id="tag19982" onclick="CopyToClipboard('tag19982');return false;" class="tag-decoration">v2-f568107</div><div id="tag24475" onclick="CopyToClipboard('tag24475');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag10728" onclick="CopyToClipboard('tag10728');return false;" class="tag-decoration">v2-v2</div><div id="tag32620" onclick="CopyToClipboard('tag32620');return false;" class="tag-decoration">v2-v2.2</div><div id="tag17744" onclick="CopyToClipboard('tag17744');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f5681079493172e77f97b091fe3638da1641a183" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715061311" target="_blank">2026-05-12 05:19:58</a></td></tr>
<tr><td><div id="tag245" onclick="CopyToClipboard('tag245');return false;" class="tag-decoration">v2-develop</div><div id="tag30891" onclick="CopyToClipboard('tag30891');return false;" class="tag-decoration">v2-develop-2d9661d</div><div id="tag12870" onclick="CopyToClipboard('tag12870');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag20581" onclick="CopyToClipboard('tag20581');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12621" onclick="CopyToClipboard('tag12621');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag7212" onclick="CopyToClipboard('tag7212');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2d9661dbe6017cee3ba05f6b38b08e23761ff9d7" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25927511014" target="_blank">2026-05-15 15:55:16</a></td></tr>
<tr><td><div id="tag7919" onclick="CopyToClipboard('tag7919');return false;" class="tag-decoration">v3</div><div id="tag2702" onclick="CopyToClipboard('tag2702');return false;" class="tag-decoration">v3-05868f4</div><div id="tag29169" onclick="CopyToClipboard('tag29169');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag25160" onclick="CopyToClipboard('tag25160');return false;" class="tag-decoration">v3-v3</div><div id="tag1453" onclick="CopyToClipboard('tag1453');return false;" class="tag-decoration">v3-v3.3</div><div id="tag21118" onclick="CopyToClipboard('tag21118');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/05868f4160fbd5c11dca809d582262c0e2eede20" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25927508449" target="_blank">2026-05-15 15:55:13</a></td></tr>
<tr><td><div id="tag10742" onclick="CopyToClipboard('tag10742');return false;" class="tag-decoration">v3-develop</div><div id="tag18109" onclick="CopyToClipboard('tag18109');return false;" class="tag-decoration">v3-develop-5c1a10c</div><div id="tag13418" onclick="CopyToClipboard('tag13418');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag22772" onclick="CopyToClipboard('tag22772');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag9611" onclick="CopyToClipboard('tag9611');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag4499" onclick="CopyToClipboard('tag4499');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5c1a10c95c9efa5658b027e01bb7bd5ae60df374" target="_blank">test build</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25718085189" target="_blank">2026-05-12 06:41:56</a></td></tr>
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
