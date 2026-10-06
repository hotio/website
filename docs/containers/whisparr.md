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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25651" onclick="CopyToClipboard('tag25651');return false;" class="tag-decoration">v2</div><div id="tag20897" onclick="CopyToClipboard('tag20897');return false;" class="tag-decoration">v2-885d3a4</div><div id="tag12759" onclick="CopyToClipboard('tag12759');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag26624" onclick="CopyToClipboard('tag26624');return false;" class="tag-decoration">v2-v2</div><div id="tag13444" onclick="CopyToClipboard('tag13444');return false;" class="tag-decoration">v2-v2.2</div><div id="tag6711" onclick="CopyToClipboard('tag6711');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/885d3a4875d86020cf438d690312d481d4971fcb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37426848781" target="_blank">2026-10-06 06:58:45</a></td></tr>
<tr><td><div id="tag20026" onclick="CopyToClipboard('tag20026');return false;" class="tag-decoration">v2-develop</div><div id="tag20510" onclick="CopyToClipboard('tag20510');return false;" class="tag-decoration">v2-develop-8820652</div><div id="tag15873" onclick="CopyToClipboard('tag15873');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag5369" onclick="CopyToClipboard('tag5369');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag10242" onclick="CopyToClipboard('tag10242');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag3524" onclick="CopyToClipboard('tag3524');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8820652532b5a7710b76e0457a3d57eded2d029d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37474607625" target="_blank">2026-10-06 13:54:44</a></td></tr>
<tr><td><div id="tag11543" onclick="CopyToClipboard('tag11543');return false;" class="tag-decoration">v3</div><div id="tag6751" onclick="CopyToClipboard('tag6751');return false;" class="tag-decoration">v3-95a07d1</div><div id="tag22702" onclick="CopyToClipboard('tag22702');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag24383" onclick="CopyToClipboard('tag24383');return false;" class="tag-decoration">v3-v3</div><div id="tag4222" onclick="CopyToClipboard('tag4222');return false;" class="tag-decoration">v3-v3.6</div><div id="tag8012" onclick="CopyToClipboard('tag8012');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/95a07d19c6386f3907ae728814a92b946bb6b755" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37474608462" target="_blank">2026-10-06 13:54:52</a></td></tr>
<tr><td><div id="tag20112" onclick="CopyToClipboard('tag20112');return false;" class="tag-decoration">v3-develop</div><div id="tag9738" onclick="CopyToClipboard('tag9738');return false;" class="tag-decoration">v3-develop-410e400</div><div id="tag13300" onclick="CopyToClipboard('tag13300');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag14277" onclick="CopyToClipboard('tag14277');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag2947" onclick="CopyToClipboard('tag2947');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag16216" onclick="CopyToClipboard('tag16216');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/410e400a8b082a27a4c4eb921b0f0fe3304b06eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37474608372" target="_blank">2026-10-06 13:54:44</a></td></tr>
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
