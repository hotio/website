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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15342" onclick="CopyToClipboard('tag15342');return false;" class="tag-decoration">v2</div><div id="tag7029" onclick="CopyToClipboard('tag7029');return false;" class="tag-decoration">v2-b4cafd0</div><div id="tag11059" onclick="CopyToClipboard('tag11059');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag5091" onclick="CopyToClipboard('tag5091');return false;" class="tag-decoration">v2-v2</div><div id="tag18342" onclick="CopyToClipboard('tag18342');return false;" class="tag-decoration">v2-v2.2</div><div id="tag9291" onclick="CopyToClipboard('tag9291');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b4cafd068010be73de87e6dea8491badfba85189" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28395539195" target="_blank">2026-06-29 18:56:47</a></td></tr>
<tr><td><div id="tag20999" onclick="CopyToClipboard('tag20999');return false;" class="tag-decoration">v2-develop</div><div id="tag17753" onclick="CopyToClipboard('tag17753');return false;" class="tag-decoration">v2-develop-322bc44</div><div id="tag27932" onclick="CopyToClipboard('tag27932');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag3469" onclick="CopyToClipboard('tag3469');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag20343" onclick="CopyToClipboard('tag20343');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag24159" onclick="CopyToClipboard('tag24159');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/322bc44ff71a8e085afa10304311c49f7122b3db" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27988392736" target="_blank">2026-06-22 22:29:54</a></td></tr>
<tr><td><div id="tag15740" onclick="CopyToClipboard('tag15740');return false;" class="tag-decoration">v3</div><div id="tag5481" onclick="CopyToClipboard('tag5481');return false;" class="tag-decoration">v3-46bca41</div><div id="tag21999" onclick="CopyToClipboard('tag21999');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag2675" onclick="CopyToClipboard('tag2675');return false;" class="tag-decoration">v3-v3</div><div id="tag115" onclick="CopyToClipboard('tag115');return false;" class="tag-decoration">v3-v3.3</div><div id="tag20639" onclick="CopyToClipboard('tag20639');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/46bca41437faab2d4029371735993e26ac5e11f9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27988389852" target="_blank">2026-06-22 22:29:49</a></td></tr>
<tr><td><div id="tag27486" onclick="CopyToClipboard('tag27486');return false;" class="tag-decoration">v3-develop</div><div id="tag22522" onclick="CopyToClipboard('tag22522');return false;" class="tag-decoration">v3-develop-2e947fd</div><div id="tag19160" onclick="CopyToClipboard('tag19160');return false;" class="tag-decoration">v3-develop-3.3.4-develop.798</div><div id="tag18359" onclick="CopyToClipboard('tag18359');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag8280" onclick="CopyToClipboard('tag8280');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag26977" onclick="CopyToClipboard('tag26977');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2e947fd542ee61c162cbd3c89111cd4f14dd7370" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28012666109" target="_blank">2026-06-23 08:23:10</a></td></tr>
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
