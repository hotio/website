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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28371" onclick="CopyToClipboard('tag28371');return false;" class="tag-decoration">v2</div><div id="tag26267" onclick="CopyToClipboard('tag26267');return false;" class="tag-decoration">v2-1167fdd</div><div id="tag21967" onclick="CopyToClipboard('tag21967');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag8900" onclick="CopyToClipboard('tag8900');return false;" class="tag-decoration">v2-v2</div><div id="tag7143" onclick="CopyToClipboard('tag7143');return false;" class="tag-decoration">v2-v2.2</div><div id="tag28236" onclick="CopyToClipboard('tag28236');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/1167fddcc4e47a17d75d395022d6f95db71e9d3d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27917391385" target="_blank">2026-06-21 21:02:48</a></td></tr>
<tr><td><div id="tag29830" onclick="CopyToClipboard('tag29830');return false;" class="tag-decoration">v2-develop</div><div id="tag2407" onclick="CopyToClipboard('tag2407');return false;" class="tag-decoration">v2-develop-41b6bcb</div><div id="tag20510" onclick="CopyToClipboard('tag20510');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag278" onclick="CopyToClipboard('tag278');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag14022" onclick="CopyToClipboard('tag14022');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag16177" onclick="CopyToClipboard('tag16177');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/41b6bcb97c7f33e885aeb9f9bba3126a134031aa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27917391804" target="_blank">2026-06-21 21:02:49</a></td></tr>
<tr><td><div id="tag21710" onclick="CopyToClipboard('tag21710');return false;" class="tag-decoration">v3</div><div id="tag5683" onclick="CopyToClipboard('tag5683');return false;" class="tag-decoration">v3-082401c</div><div id="tag4403" onclick="CopyToClipboard('tag4403');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag29998" onclick="CopyToClipboard('tag29998');return false;" class="tag-decoration">v3-v3</div><div id="tag5239" onclick="CopyToClipboard('tag5239');return false;" class="tag-decoration">v3-v3.3</div><div id="tag5538" onclick="CopyToClipboard('tag5538');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/082401c479b6d471c47a1306b32c6e527f823b53" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27917390003" target="_blank">2026-06-21 21:02:46</a></td></tr>
<tr><td><div id="tag20659" onclick="CopyToClipboard('tag20659');return false;" class="tag-decoration">v3-develop</div><div id="tag14121" onclick="CopyToClipboard('tag14121');return false;" class="tag-decoration">v3-develop-e59f96a</div><div id="tag2682" onclick="CopyToClipboard('tag2682');return false;" class="tag-decoration">v3-develop-3.3.4-develop.796</div><div id="tag571" onclick="CopyToClipboard('tag571');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30402" onclick="CopyToClipboard('tag30402');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag28324" onclick="CopyToClipboard('tag28324');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e59f96ac3e0f69aed628cbf72b8da9b28d797292" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27871042544" target="_blank">2026-06-20 12:22:09</a></td></tr>
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
