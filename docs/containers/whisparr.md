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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18850" onclick="CopyToClipboard('tag18850');return false;" class="tag-decoration">v2</div><div id="tag20860" onclick="CopyToClipboard('tag20860');return false;" class="tag-decoration">v2-708fe0c</div><div id="tag26962" onclick="CopyToClipboard('tag26962');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag23370" onclick="CopyToClipboard('tag23370');return false;" class="tag-decoration">v2-v2</div><div id="tag1836" onclick="CopyToClipboard('tag1836');return false;" class="tag-decoration">v2-v2.2</div><div id="tag6896" onclick="CopyToClipboard('tag6896');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/708fe0ccacf65faa0432f75d254d222b105e9a8c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297339382" target="_blank">2026-09-18 01:56:24</a></td></tr>
<tr><td><div id="tag663" onclick="CopyToClipboard('tag663');return false;" class="tag-decoration">v2-develop</div><div id="tag30572" onclick="CopyToClipboard('tag30572');return false;" class="tag-decoration">v2-develop-ad6d4d2</div><div id="tag9078" onclick="CopyToClipboard('tag9078');return false;" class="tag-decoration">v2-develop-2.2.0-develop.353</div><div id="tag11138" onclick="CopyToClipboard('tag11138');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag8652" onclick="CopyToClipboard('tag8652');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag20744" onclick="CopyToClipboard('tag20744');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ad6d4d20b850aaaf3fdb4ce51b47c0b4e1af82bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35272261703" target="_blank">2026-09-17 20:40:47</a></td></tr>
<tr><td><div id="tag30741" onclick="CopyToClipboard('tag30741');return false;" class="tag-decoration">v3</div><div id="tag27640" onclick="CopyToClipboard('tag27640');return false;" class="tag-decoration">v3-7473cc8</div><div id="tag30283" onclick="CopyToClipboard('tag30283');return false;" class="tag-decoration">v3-3.6.0-release.1660</div><div id="tag17612" onclick="CopyToClipboard('tag17612');return false;" class="tag-decoration">v3-v3</div><div id="tag10426" onclick="CopyToClipboard('tag10426');return false;" class="tag-decoration">v3-v3.6</div><div id="tag11702" onclick="CopyToClipboard('tag11702');return false;" class="tag-decoration">v3-v3.6.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7473cc8e3c972f571ea0ad6fc177334f9017f959" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35297332996" target="_blank">2026-09-18 01:56:18</a></td></tr>
<tr><td><div id="tag21799" onclick="CopyToClipboard('tag21799');return false;" class="tag-decoration">v3-develop</div><div id="tag32058" onclick="CopyToClipboard('tag32058');return false;" class="tag-decoration">v3-develop-fefe407</div><div id="tag20791" onclick="CopyToClipboard('tag20791');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1639</div><div id="tag14238" onclick="CopyToClipboard('tag14238');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag21872" onclick="CopyToClipboard('tag21872');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag1641" onclick="CopyToClipboard('tag1641');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/fefe40709c3e644b87bb3f89147e88987141fc08" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35254982583" target="_blank">2026-09-17 17:48:33</a></td></tr>
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
