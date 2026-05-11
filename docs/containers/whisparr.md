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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28691" onclick="CopyToClipboard('tag28691');return false;" class="tag-decoration">v2</div><div id="tag26725" onclick="CopyToClipboard('tag26725');return false;" class="tag-decoration">v2-cad894c</div><div id="tag14608" onclick="CopyToClipboard('tag14608');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag6750" onclick="CopyToClipboard('tag6750');return false;" class="tag-decoration">v2-v2</div><div id="tag22463" onclick="CopyToClipboard('tag22463');return false;" class="tag-decoration">v2-v2.2</div><div id="tag7764" onclick="CopyToClipboard('tag7764');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/cad894cadcd52abcef8c1e5a2c5437f65bb53039" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25664546832" target="_blank">2026-05-11 10:25:25</a></td></tr>
<tr><td><div id="tag9632" onclick="CopyToClipboard('tag9632');return false;" class="tag-decoration">v2-develop</div><div id="tag13466" onclick="CopyToClipboard('tag13466');return false;" class="tag-decoration">v2-develop-a628891</div><div id="tag7621" onclick="CopyToClipboard('tag7621');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag6516" onclick="CopyToClipboard('tag6516');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag20712" onclick="CopyToClipboard('tag20712');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag11915" onclick="CopyToClipboard('tag11915');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a6288917ef0995e0dedc3bf1207162c59d9a60bb" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25700680195" target="_blank">2026-05-11 22:19:45</a></td></tr>
<tr><td><div id="tag21335" onclick="CopyToClipboard('tag21335');return false;" class="tag-decoration">v3</div><div id="tag22018" onclick="CopyToClipboard('tag22018');return false;" class="tag-decoration">v3-0dc9472</div><div id="tag4715" onclick="CopyToClipboard('tag4715');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag27440" onclick="CopyToClipboard('tag27440');return false;" class="tag-decoration">v3-v3</div><div id="tag4959" onclick="CopyToClipboard('tag4959');return false;" class="tag-decoration">v3-v3.3</div><div id="tag11288" onclick="CopyToClipboard('tag11288');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0dc9472864bc6cbea75e5dfe6b72b41f0a488522" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25700691509" target="_blank">2026-05-11 22:20:01</a></td></tr>
<tr><td><div id="tag5673" onclick="CopyToClipboard('tag5673');return false;" class="tag-decoration">v3-develop</div><div id="tag15441" onclick="CopyToClipboard('tag15441');return false;" class="tag-decoration">v3-develop-205e1d6</div><div id="tag10871" onclick="CopyToClipboard('tag10871');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag4986" onclick="CopyToClipboard('tag4986');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag7807" onclick="CopyToClipboard('tag7807');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag4007" onclick="CopyToClipboard('tag4007');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/205e1d66565fa45708538bdeac1d269712f6c565" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25700687074" target="_blank">2026-05-11 22:19:56</a></td></tr>
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
