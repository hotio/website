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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1418" onclick="CopyToClipboard('tag1418');return false;" class="tag-decoration">v2</div><div id="tag23043" onclick="CopyToClipboard('tag23043');return false;" class="tag-decoration">v2-640b6d0</div><div id="tag20840" onclick="CopyToClipboard('tag20840');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag27086" onclick="CopyToClipboard('tag27086');return false;" class="tag-decoration">v2-v2</div><div id="tag742" onclick="CopyToClipboard('tag742');return false;" class="tag-decoration">v2-v2.2</div><div id="tag21290" onclick="CopyToClipboard('tag21290');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/640b6d02dacd2ffb7e9228a830a5ec50e512fa39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33498575525" target="_blank">2026-09-01 10:39:59</a></td></tr>
<tr><td><div id="tag4134" onclick="CopyToClipboard('tag4134');return false;" class="tag-decoration">v2-develop</div><div id="tag28120" onclick="CopyToClipboard('tag28120');return false;" class="tag-decoration">v2-develop-2f81abc</div><div id="tag8985" onclick="CopyToClipboard('tag8985');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag16223" onclick="CopyToClipboard('tag16223');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag30054" onclick="CopyToClipboard('tag30054');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag17472" onclick="CopyToClipboard('tag17472');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2f81abc9270dfb188870f2400cc35a0bddde711d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33498580887" target="_blank">2026-09-01 10:40:02</a></td></tr>
<tr><td><div id="tag22684" onclick="CopyToClipboard('tag22684');return false;" class="tag-decoration">v3</div><div id="tag23068" onclick="CopyToClipboard('tag23068');return false;" class="tag-decoration">v3-95602df</div><div id="tag29683" onclick="CopyToClipboard('tag29683');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag18795" onclick="CopyToClipboard('tag18795');return false;" class="tag-decoration">v3-v3</div><div id="tag12856" onclick="CopyToClipboard('tag12856');return false;" class="tag-decoration">v3-v3.4</div><div id="tag5625" onclick="CopyToClipboard('tag5625');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/95602df96618f60fba7689422ce10d74d6d90cd3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33498583927" target="_blank">2026-09-01 10:40:05</a></td></tr>
<tr><td><div id="tag12185" onclick="CopyToClipboard('tag12185');return false;" class="tag-decoration">v3-develop</div><div id="tag526" onclick="CopyToClipboard('tag526');return false;" class="tag-decoration">v3-develop-7fd2e49</div><div id="tag32473" onclick="CopyToClipboard('tag32473');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1444</div><div id="tag2402" onclick="CopyToClipboard('tag2402');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag29073" onclick="CopyToClipboard('tag29073');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag17941" onclick="CopyToClipboard('tag17941');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/7fd2e4983884073ecae779870714b1b996b2c68d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33475060611" target="_blank">2026-09-01 05:49:01</a></td></tr>
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
