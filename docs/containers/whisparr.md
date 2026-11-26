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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25839" onclick="CopyToClipboard('tag25839');return false;" class="tag-decoration">v2</div><div id="tag32325" onclick="CopyToClipboard('tag32325');return false;" class="tag-decoration">v2-6bd1507</div><div id="tag6813" onclick="CopyToClipboard('tag6813');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag26834" onclick="CopyToClipboard('tag26834');return false;" class="tag-decoration">v2-v2</div><div id="tag21011" onclick="CopyToClipboard('tag21011');return false;" class="tag-decoration">v2-v2.3</div><div id="tag17016" onclick="CopyToClipboard('tag17016');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/6bd1507262a6497557281cadb53a8291420ce6ed" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45548261406" target="_blank">2026-11-25 04:39:18</a></td></tr>
<tr><td><div id="tag5525" onclick="CopyToClipboard('tag5525');return false;" class="tag-decoration">v2-develop</div><div id="tag18438" onclick="CopyToClipboard('tag18438');return false;" class="tag-decoration">v2-develop-434ab16</div><div id="tag14837" onclick="CopyToClipboard('tag14837');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag16341" onclick="CopyToClipboard('tag16341');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag22073" onclick="CopyToClipboard('tag22073');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag17224" onclick="CopyToClipboard('tag17224');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/434ab16345c50ceca31ae3ecc9972465d07c0772" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45763759432" target="_blank">2026-11-26 05:46:18</a></td></tr>
<tr><td><div id="tag25027" onclick="CopyToClipboard('tag25027');return false;" class="tag-decoration">v3</div><div id="tag31054" onclick="CopyToClipboard('tag31054');return false;" class="tag-decoration">v3-f3b7012</div><div id="tag6156" onclick="CopyToClipboard('tag6156');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag8737" onclick="CopyToClipboard('tag8737');return false;" class="tag-decoration">v3-v3</div><div id="tag17665" onclick="CopyToClipboard('tag17665');return false;" class="tag-decoration">v3-v3.6</div><div id="tag28318" onclick="CopyToClipboard('tag28318');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/f3b70121cf0940ddafcc2fadfa9548f850174462" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45763754489" target="_blank">2026-11-26 05:46:15</a></td></tr>
<tr><td><div id="tag8368" onclick="CopyToClipboard('tag8368');return false;" class="tag-decoration">v3-develop</div><div id="tag22679" onclick="CopyToClipboard('tag22679');return false;" class="tag-decoration">v3-develop-aeb2eea</div><div id="tag27696" onclick="CopyToClipboard('tag27696');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag2830" onclick="CopyToClipboard('tag2830');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6747" onclick="CopyToClipboard('tag6747');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag20870" onclick="CopyToClipboard('tag20870');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/aeb2eea648a28e6d19b0c3863f6dbc9273afe43d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45763770956" target="_blank">2026-11-26 05:46:24</a></td></tr>
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
