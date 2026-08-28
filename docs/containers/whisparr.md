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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3425" onclick="CopyToClipboard('tag3425');return false;" class="tag-decoration">v2</div><div id="tag24113" onclick="CopyToClipboard('tag24113');return false;" class="tag-decoration">v2-f001ed4</div><div id="tag8141" onclick="CopyToClipboard('tag8141');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag457" onclick="CopyToClipboard('tag457');return false;" class="tag-decoration">v2-v2</div><div id="tag1297" onclick="CopyToClipboard('tag1297');return false;" class="tag-decoration">v2-v2.2</div><div id="tag31963" onclick="CopyToClipboard('tag31963');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f001ed4ac7ffb6f4182a75492837b6669fcbefee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33033024849" target="_blank">2026-08-27 02:21:22</a></td></tr>
<tr><td><div id="tag10959" onclick="CopyToClipboard('tag10959');return false;" class="tag-decoration">v2-develop</div><div id="tag18131" onclick="CopyToClipboard('tag18131');return false;" class="tag-decoration">v2-develop-db22ec2</div><div id="tag12094" onclick="CopyToClipboard('tag12094');return false;" class="tag-decoration">v2-develop-2.2.0-develop.273</div><div id="tag14995" onclick="CopyToClipboard('tag14995');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag5431" onclick="CopyToClipboard('tag5431');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag15773" onclick="CopyToClipboard('tag15773');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/db22ec20cff8fec8f01aeb898a0bd784666a9671" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33151414695" target="_blank">2026-08-28 07:25:38</a></td></tr>
<tr><td><div id="tag29284" onclick="CopyToClipboard('tag29284');return false;" class="tag-decoration">v3</div><div id="tag7232" onclick="CopyToClipboard('tag7232');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag25651" onclick="CopyToClipboard('tag25651');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag26332" onclick="CopyToClipboard('tag26332');return false;" class="tag-decoration">v3-v3</div><div id="tag16726" onclick="CopyToClipboard('tag16726');return false;" class="tag-decoration">v3-v3.3</div><div id="tag9395" onclick="CopyToClipboard('tag9395');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag8496" onclick="CopyToClipboard('tag8496');return false;" class="tag-decoration">v3-develop</div><div id="tag15075" onclick="CopyToClipboard('tag15075');return false;" class="tag-decoration">v3-develop-e381cdf</div><div id="tag26351" onclick="CopyToClipboard('tag26351');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1310</div><div id="tag19458" onclick="CopyToClipboard('tag19458');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag11139" onclick="CopyToClipboard('tag11139');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag29055" onclick="CopyToClipboard('tag29055');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e381cdfeedf5795afa1c086bcc7fb7a619437518" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33113811549" target="_blank">2026-08-27 20:32:21</a></td></tr>
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
