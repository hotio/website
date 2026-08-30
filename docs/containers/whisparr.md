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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14935" onclick="CopyToClipboard('tag14935');return false;" class="tag-decoration">v2</div><div id="tag24999" onclick="CopyToClipboard('tag24999');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag9971" onclick="CopyToClipboard('tag9971');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag25876" onclick="CopyToClipboard('tag25876');return false;" class="tag-decoration">v2-v2</div><div id="tag8705" onclick="CopyToClipboard('tag8705');return false;" class="tag-decoration">v2-v2.2</div><div id="tag11017" onclick="CopyToClipboard('tag11017');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag8400" onclick="CopyToClipboard('tag8400');return false;" class="tag-decoration">v2-develop</div><div id="tag18525" onclick="CopyToClipboard('tag18525');return false;" class="tag-decoration">v2-develop-e3ce916</div><div id="tag15241" onclick="CopyToClipboard('tag15241');return false;" class="tag-decoration">v2-develop-2.2.0-develop.328</div><div id="tag23374" onclick="CopyToClipboard('tag23374');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag11080" onclick="CopyToClipboard('tag11080');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag15873" onclick="CopyToClipboard('tag15873');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e3ce9166b38f089fe7a1a5193d520505377f16e5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33324095224" target="_blank">2026-08-30 17:01:51</a></td></tr>
<tr><td><div id="tag22989" onclick="CopyToClipboard('tag22989');return false;" class="tag-decoration">v3</div><div id="tag28297" onclick="CopyToClipboard('tag28297');return false;" class="tag-decoration">v3-00d55e6</div><div id="tag2944" onclick="CopyToClipboard('tag2944');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag23637" onclick="CopyToClipboard('tag23637');return false;" class="tag-decoration">v3-v3</div><div id="tag18304" onclick="CopyToClipboard('tag18304');return false;" class="tag-decoration">v3-v3.4</div><div id="tag14905" onclick="CopyToClipboard('tag14905');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/00d55e6821959f1ee697c5a3948c9e9b7d7bdd51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33311324528" target="_blank">2026-08-30 12:22:47</a></td></tr>
<tr><td><div id="tag9757" onclick="CopyToClipboard('tag9757');return false;" class="tag-decoration">v3-develop</div><div id="tag16069" onclick="CopyToClipboard('tag16069');return false;" class="tag-decoration">v3-develop-670c81e</div><div id="tag14354" onclick="CopyToClipboard('tag14354');return false;" class="tag-decoration">v3-develop-3.4.0-develop.1388</div><div id="tag19220" onclick="CopyToClipboard('tag19220');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag17777" onclick="CopyToClipboard('tag17777');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag32061" onclick="CopyToClipboard('tag32061');return false;" class="tag-decoration">v3-develop-v3.4.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/670c81e495a5b5095e4a6958b817aa1b5042d10a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33311321020" target="_blank">2026-08-30 12:22:43</a></td></tr>
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
