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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27207" onclick="CopyToClipboard('tag27207');return false;" class="tag-decoration">v2</div><div id="tag17641" onclick="CopyToClipboard('tag17641');return false;" class="tag-decoration">v2-8aa1fb0</div><div id="tag4854" onclick="CopyToClipboard('tag4854');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag22345" onclick="CopyToClipboard('tag22345');return false;" class="tag-decoration">v2-v2</div><div id="tag4895" onclick="CopyToClipboard('tag4895');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19945" onclick="CopyToClipboard('tag19945');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/8aa1fb0f21762762c5b146d78ee175e8ad2f3108" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41938236779" target="_blank">2026-11-05 00:01:44</a></td></tr>
<tr><td><div id="tag20426" onclick="CopyToClipboard('tag20426');return false;" class="tag-decoration">v2-develop</div><div id="tag1194" onclick="CopyToClipboard('tag1194');return false;" class="tag-decoration">v2-develop-648b1c5</div><div id="tag20261" onclick="CopyToClipboard('tag20261');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag13172" onclick="CopyToClipboard('tag13172');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag28438" onclick="CopyToClipboard('tag28438');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag3209" onclick="CopyToClipboard('tag3209');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/648b1c53f5a4b6445fcb967f90b3cd23ce141c4a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41938246506" target="_blank">2026-11-05 00:01:48</a></td></tr>
<tr><td><div id="tag20920" onclick="CopyToClipboard('tag20920');return false;" class="tag-decoration">v3</div><div id="tag16234" onclick="CopyToClipboard('tag16234');return false;" class="tag-decoration">v3-c103c08</div><div id="tag4281" onclick="CopyToClipboard('tag4281');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag7255" onclick="CopyToClipboard('tag7255');return false;" class="tag-decoration">v3-v3</div><div id="tag26629" onclick="CopyToClipboard('tag26629');return false;" class="tag-decoration">v3-v3.6</div><div id="tag993" onclick="CopyToClipboard('tag993');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/c103c0888316c628a11fb7365d80f49d5095b9ee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41938242698" target="_blank">2026-11-05 00:01:47</a></td></tr>
<tr><td><div id="tag2712" onclick="CopyToClipboard('tag2712');return false;" class="tag-decoration">v3-develop</div><div id="tag15261" onclick="CopyToClipboard('tag15261');return false;" class="tag-decoration">v3-develop-280f620</div><div id="tag309" onclick="CopyToClipboard('tag309');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag1569" onclick="CopyToClipboard('tag1569');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag12894" onclick="CopyToClipboard('tag12894');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag4662" onclick="CopyToClipboard('tag4662');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/280f62058b3663bdd831edc8f466c3e99e6c334b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41938236549" target="_blank">2026-11-05 00:01:44</a></td></tr>
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
