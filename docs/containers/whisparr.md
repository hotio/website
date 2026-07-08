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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28887" onclick="CopyToClipboard('tag28887');return false;" class="tag-decoration">v2</div><div id="tag19490" onclick="CopyToClipboard('tag19490');return false;" class="tag-decoration">v2-632fb9e</div><div id="tag20977" onclick="CopyToClipboard('tag20977');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag25228" onclick="CopyToClipboard('tag25228');return false;" class="tag-decoration">v2-v2</div><div id="tag28373" onclick="CopyToClipboard('tag28373');return false;" class="tag-decoration">v2-v2.2</div><div id="tag4182" onclick="CopyToClipboard('tag4182');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/632fb9ea6b0ab4d2b56c6eda018d51ac5d16db60" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28978568972" target="_blank">2026-07-08 21:57:03</a></td></tr>
<tr><td><div id="tag28586" onclick="CopyToClipboard('tag28586');return false;" class="tag-decoration">v2-develop</div><div id="tag14716" onclick="CopyToClipboard('tag14716');return false;" class="tag-decoration">v2-develop-85131af</div><div id="tag21134" onclick="CopyToClipboard('tag21134');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag22410" onclick="CopyToClipboard('tag22410');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9316" onclick="CopyToClipboard('tag9316');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag25398" onclick="CopyToClipboard('tag25398');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/85131afc0061ff9d183b359cd0e9403ac24e23a0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28591530188" target="_blank">2026-07-02 12:53:23</a></td></tr>
<tr><td><div id="tag17482" onclick="CopyToClipboard('tag17482');return false;" class="tag-decoration">v3</div><div id="tag19907" onclick="CopyToClipboard('tag19907');return false;" class="tag-decoration">v3-07d0e40</div><div id="tag7827" onclick="CopyToClipboard('tag7827');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag17709" onclick="CopyToClipboard('tag17709');return false;" class="tag-decoration">v3-v3</div><div id="tag26687" onclick="CopyToClipboard('tag26687');return false;" class="tag-decoration">v3-v3.3</div><div id="tag24030" onclick="CopyToClipboard('tag24030');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/07d0e406b8d766712ff279abfce49d64aee8b6e5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28978568950" target="_blank">2026-07-08 21:57:02</a></td></tr>
<tr><td><div id="tag25672" onclick="CopyToClipboard('tag25672');return false;" class="tag-decoration">v3-develop</div><div id="tag11113" onclick="CopyToClipboard('tag11113');return false;" class="tag-decoration">v3-develop-88991cb</div><div id="tag2669" onclick="CopyToClipboard('tag2669');return false;" class="tag-decoration">v3-develop-3.3.4-develop.798</div><div id="tag26838" onclick="CopyToClipboard('tag26838');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag21323" onclick="CopyToClipboard('tag21323');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag18183" onclick="CopyToClipboard('tag18183');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/88991cb592d11d8bc82d6c108da13296a462fc43" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28978568265" target="_blank">2026-07-08 21:57:02</a></td></tr>
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
