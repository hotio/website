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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24080" onclick="CopyToClipboard('tag24080');return false;" class="tag-decoration">v2</div><div id="tag20967" onclick="CopyToClipboard('tag20967');return false;" class="tag-decoration">v2-aa0f0d2</div><div id="tag24264" onclick="CopyToClipboard('tag24264');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag19887" onclick="CopyToClipboard('tag19887');return false;" class="tag-decoration">v2-v2</div><div id="tag28569" onclick="CopyToClipboard('tag28569');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19429" onclick="CopyToClipboard('tag19429');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aa0f0d26e4d2f049b755c376d333254de06c29ae" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496182974" target="_blank">2026-09-10 15:31:17</a></td></tr>
<tr><td><div id="tag8616" onclick="CopyToClipboard('tag8616');return false;" class="tag-decoration">v2-develop</div><div id="tag25368" onclick="CopyToClipboard('tag25368');return false;" class="tag-decoration">v2-develop-604b7ba</div><div id="tag16207" onclick="CopyToClipboard('tag16207');return false;" class="tag-decoration">v2-develop-2.2.0-develop.336</div><div id="tag28893" onclick="CopyToClipboard('tag28893');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag261" onclick="CopyToClipboard('tag261');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag591" onclick="CopyToClipboard('tag591');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/604b7ba5bba395a839639419f849187037ebb68a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34427135068" target="_blank">2026-09-10 01:51:29</a></td></tr>
<tr><td><div id="tag8925" onclick="CopyToClipboard('tag8925');return false;" class="tag-decoration">v3</div><div id="tag8132" onclick="CopyToClipboard('tag8132');return false;" class="tag-decoration">v3-70ef522</div><div id="tag31157" onclick="CopyToClipboard('tag31157');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag11627" onclick="CopyToClipboard('tag11627');return false;" class="tag-decoration">v3-v3</div><div id="tag11051" onclick="CopyToClipboard('tag11051');return false;" class="tag-decoration">v3-v3.5</div><div id="tag29177" onclick="CopyToClipboard('tag29177');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/70ef52211c01fbf7244fc912f128af3db4311133" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496194322" target="_blank">2026-09-10 15:31:23</a></td></tr>
<tr><td><div id="tag4049" onclick="CopyToClipboard('tag4049');return false;" class="tag-decoration">v3-develop</div><div id="tag8772" onclick="CopyToClipboard('tag8772');return false;" class="tag-decoration">v3-develop-3d0f521</div><div id="tag24835" onclick="CopyToClipboard('tag24835');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1591</div><div id="tag1979" onclick="CopyToClipboard('tag1979');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag18042" onclick="CopyToClipboard('tag18042');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag12138" onclick="CopyToClipboard('tag12138');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3d0f521d56a683594f8aa9743b88858aca151c62" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496173472" target="_blank">2026-09-10 15:31:12</a></td></tr>
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
