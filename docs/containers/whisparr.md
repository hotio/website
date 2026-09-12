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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4403" onclick="CopyToClipboard('tag4403');return false;" class="tag-decoration">v2</div><div id="tag20262" onclick="CopyToClipboard('tag20262');return false;" class="tag-decoration">v2-aa0f0d2</div><div id="tag11685" onclick="CopyToClipboard('tag11685');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag18656" onclick="CopyToClipboard('tag18656');return false;" class="tag-decoration">v2-v2</div><div id="tag8276" onclick="CopyToClipboard('tag8276');return false;" class="tag-decoration">v2-v2.2</div><div id="tag26737" onclick="CopyToClipboard('tag26737');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aa0f0d26e4d2f049b755c376d333254de06c29ae" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496182974" target="_blank">2026-09-10 15:31:17</a></td></tr>
<tr><td><div id="tag7690" onclick="CopyToClipboard('tag7690');return false;" class="tag-decoration">v2-develop</div><div id="tag5346" onclick="CopyToClipboard('tag5346');return false;" class="tag-decoration">v2-develop-f11c090</div><div id="tag30216" onclick="CopyToClipboard('tag30216');return false;" class="tag-decoration">v2-develop-2.2.0-develop.337</div><div id="tag21939" onclick="CopyToClipboard('tag21939');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag21728" onclick="CopyToClipboard('tag21728');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag10834" onclick="CopyToClipboard('tag10834');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f11c0909978109156ef58ac5b4948503b204d171" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34516422502" target="_blank">2026-09-10 18:46:47</a></td></tr>
<tr><td><div id="tag14978" onclick="CopyToClipboard('tag14978');return false;" class="tag-decoration">v3</div><div id="tag8162" onclick="CopyToClipboard('tag8162');return false;" class="tag-decoration">v3-70ef522</div><div id="tag32027" onclick="CopyToClipboard('tag32027');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag20061" onclick="CopyToClipboard('tag20061');return false;" class="tag-decoration">v3-v3</div><div id="tag19292" onclick="CopyToClipboard('tag19292');return false;" class="tag-decoration">v3-v3.5</div><div id="tag6914" onclick="CopyToClipboard('tag6914');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/70ef52211c01fbf7244fc912f128af3db4311133" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496194322" target="_blank">2026-09-10 15:31:23</a></td></tr>
<tr><td><div id="tag7970" onclick="CopyToClipboard('tag7970');return false;" class="tag-decoration">v3-develop</div><div id="tag20298" onclick="CopyToClipboard('tag20298');return false;" class="tag-decoration">v3-develop-72463df</div><div id="tag9678" onclick="CopyToClipboard('tag9678');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1604</div><div id="tag29409" onclick="CopyToClipboard('tag29409');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30815" onclick="CopyToClipboard('tag30815');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag12936" onclick="CopyToClipboard('tag12936');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/72463df8be2002bbf33ff177c8ff4707e1981e6f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34720912587" target="_blank">2026-09-12 21:46:43</a></td></tr>
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
