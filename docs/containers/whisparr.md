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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25530" onclick="CopyToClipboard('tag25530');return false;" class="tag-decoration">v2</div><div id="tag2474" onclick="CopyToClipboard('tag2474');return false;" class="tag-decoration">v2-7521c04</div><div id="tag30967" onclick="CopyToClipboard('tag30967');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag19228" onclick="CopyToClipboard('tag19228');return false;" class="tag-decoration">v2-v2</div><div id="tag14414" onclick="CopyToClipboard('tag14414');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13911" onclick="CopyToClipboard('tag13911');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/7521c04f7664e1015d5d821dabc467611f4e9972" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172201" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag29687" onclick="CopyToClipboard('tag29687');return false;" class="tag-decoration">v2-develop</div><div id="tag19734" onclick="CopyToClipboard('tag19734');return false;" class="tag-decoration">v2-develop-4c05b54</div><div id="tag25002" onclick="CopyToClipboard('tag25002');return false;" class="tag-decoration">v2-develop-2.2.0-develop.219</div><div id="tag22698" onclick="CopyToClipboard('tag22698');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26424" onclick="CopyToClipboard('tag26424');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag22924" onclick="CopyToClipboard('tag22924');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4c05b5464f35934b32154ad1f9e7500954c89119" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33015261004" target="_blank">2026-08-26 21:25:03</a></td></tr>
<tr><td><div id="tag11360" onclick="CopyToClipboard('tag11360');return false;" class="tag-decoration">v3</div><div id="tag2761" onclick="CopyToClipboard('tag2761');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag18192" onclick="CopyToClipboard('tag18192');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag27889" onclick="CopyToClipboard('tag27889');return false;" class="tag-decoration">v3-v3</div><div id="tag16781" onclick="CopyToClipboard('tag16781');return false;" class="tag-decoration">v3-v3.3</div><div id="tag18052" onclick="CopyToClipboard('tag18052');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag19887" onclick="CopyToClipboard('tag19887');return false;" class="tag-decoration">v3-develop</div><div id="tag4016" onclick="CopyToClipboard('tag4016');return false;" class="tag-decoration">v3-develop-889e6e3</div><div id="tag27135" onclick="CopyToClipboard('tag27135');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1290</div><div id="tag17648" onclick="CopyToClipboard('tag17648');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20373" onclick="CopyToClipboard('tag20373');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag15626" onclick="CopyToClipboard('tag15626');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/889e6e3be95d828df5a540ceec2d5814a370034f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33001478094" target="_blank">2026-08-26 18:45:42</a></td></tr>
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
