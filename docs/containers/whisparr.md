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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21785" onclick="CopyToClipboard('tag21785');return false;" class="tag-decoration">v2</div><div id="tag12534" onclick="CopyToClipboard('tag12534');return false;" class="tag-decoration">v2-5dd76d2</div><div id="tag28013" onclick="CopyToClipboard('tag28013');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag1416" onclick="CopyToClipboard('tag1416');return false;" class="tag-decoration">v2-v2</div><div id="tag7902" onclick="CopyToClipboard('tag7902');return false;" class="tag-decoration">v2-v2.2</div><div id="tag25516" onclick="CopyToClipboard('tag25516');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/5dd76d29651963aabf95be18d24a45f397c90062" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356440855" target="_blank">2026-07-14 18:05:12</a></td></tr>
<tr><td><div id="tag2001" onclick="CopyToClipboard('tag2001');return false;" class="tag-decoration">v2-develop</div><div id="tag22317" onclick="CopyToClipboard('tag22317');return false;" class="tag-decoration">v2-develop-3e573cd</div><div id="tag3246" onclick="CopyToClipboard('tag3246');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag16258" onclick="CopyToClipboard('tag16258');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag18022" onclick="CopyToClipboard('tag18022');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag13775" onclick="CopyToClipboard('tag13775');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3e573cd13f78f65341dd9fa843ce16aa58204fcf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356438023" target="_blank">2026-07-14 18:05:11</a></td></tr>
<tr><td><div id="tag12607" onclick="CopyToClipboard('tag12607');return false;" class="tag-decoration">v3</div><div id="tag8693" onclick="CopyToClipboard('tag8693');return false;" class="tag-decoration">v3-be17d29</div><div id="tag23304" onclick="CopyToClipboard('tag23304');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag25953" onclick="CopyToClipboard('tag25953');return false;" class="tag-decoration">v3-v3</div><div id="tag17381" onclick="CopyToClipboard('tag17381');return false;" class="tag-decoration">v3-v3.3</div><div id="tag1952" onclick="CopyToClipboard('tag1952');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/be17d29c400052915b1b18741e61dd7e6f4f625d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356451636" target="_blank">2026-07-14 18:05:24</a></td></tr>
<tr><td><div id="tag13029" onclick="CopyToClipboard('tag13029');return false;" class="tag-decoration">v3-develop</div><div id="tag2048" onclick="CopyToClipboard('tag2048');return false;" class="tag-decoration">v3-develop-fe89420</div><div id="tag25573" onclick="CopyToClipboard('tag25573');return false;" class="tag-decoration">v3-develop-3.3.4-develop.822</div><div id="tag7703" onclick="CopyToClipboard('tag7703');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag25487" onclick="CopyToClipboard('tag25487');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag16426" onclick="CopyToClipboard('tag16426');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/fe89420b45ac2d0c123ec51c28d5b0deb4010ab8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29463998914" target="_blank">2026-07-16 01:23:30</a></td></tr>
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
