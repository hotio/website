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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag213" onclick="CopyToClipboard('tag213');return false;" class="tag-decoration">v2</div><div id="tag1669" onclick="CopyToClipboard('tag1669');return false;" class="tag-decoration">v2-b4cafd0</div><div id="tag22059" onclick="CopyToClipboard('tag22059');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag16459" onclick="CopyToClipboard('tag16459');return false;" class="tag-decoration">v2-v2</div><div id="tag24972" onclick="CopyToClipboard('tag24972');return false;" class="tag-decoration">v2-v2.2</div><div id="tag84" onclick="CopyToClipboard('tag84');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b4cafd068010be73de87e6dea8491badfba85189" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28395539195" target="_blank">2026-06-29 18:56:47</a></td></tr>
<tr><td><div id="tag1917" onclick="CopyToClipboard('tag1917');return false;" class="tag-decoration">v2-develop</div><div id="tag27754" onclick="CopyToClipboard('tag27754');return false;" class="tag-decoration">v2-develop-a3c8876</div><div id="tag26626" onclick="CopyToClipboard('tag26626');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag13898" onclick="CopyToClipboard('tag13898');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag2686" onclick="CopyToClipboard('tag2686');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag9661" onclick="CopyToClipboard('tag9661');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a3c8876a45e18e05e43e2e3d226e80154e92b3e6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28395536367" target="_blank">2026-06-29 18:56:44</a></td></tr>
<tr><td><div id="tag22498" onclick="CopyToClipboard('tag22498');return false;" class="tag-decoration">v3</div><div id="tag21546" onclick="CopyToClipboard('tag21546');return false;" class="tag-decoration">v3-46bca41</div><div id="tag10902" onclick="CopyToClipboard('tag10902');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag2697" onclick="CopyToClipboard('tag2697');return false;" class="tag-decoration">v3-v3</div><div id="tag26527" onclick="CopyToClipboard('tag26527');return false;" class="tag-decoration">v3-v3.3</div><div id="tag5233" onclick="CopyToClipboard('tag5233');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/46bca41437faab2d4029371735993e26ac5e11f9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27988389852" target="_blank">2026-06-22 22:29:49</a></td></tr>
<tr><td><div id="tag15334" onclick="CopyToClipboard('tag15334');return false;" class="tag-decoration">v3-develop</div><div id="tag14254" onclick="CopyToClipboard('tag14254');return false;" class="tag-decoration">v3-develop-2e947fd</div><div id="tag12842" onclick="CopyToClipboard('tag12842');return false;" class="tag-decoration">v3-develop-3.3.4-develop.798</div><div id="tag24001" onclick="CopyToClipboard('tag24001');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag31584" onclick="CopyToClipboard('tag31584');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag25364" onclick="CopyToClipboard('tag25364');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2e947fd542ee61c162cbd3c89111cd4f14dd7370" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28012666109" target="_blank">2026-06-23 08:23:10</a></td></tr>
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
