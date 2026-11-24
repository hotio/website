---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag8851" onclick="CopyToClipboard('tag8851');return false;" class="tag-decoration">nightly</div><div id="tag32044" onclick="CopyToClipboard('tag32044');return false;" class="tag-decoration">nightly-85df384</div><div id="tag24905" onclick="CopyToClipboard('tag24905');return false;" class="tag-decoration">nightly-7.1.0.10948</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/85df384b6f34a8bd82c29ce3f42bef8334cd8aaf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/45474965340" target="_blank">2026-11-24 19:53:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11770" onclick="CopyToClipboard('tag11770');return false;" class="tag-decoration">release</div><div id="tag14555" onclick="CopyToClipboard('tag14555');return false;" class="tag-decoration">release-0cd751c</div><div id="tag16430" onclick="CopyToClipboard('tag16430');return false;" class="tag-decoration">release-7.0.3.10918</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/0cd751c192e1a3bbfdb9b1ba0b631c131a067e59" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/45353499267" target="_blank">2026-11-24 08:08:11</a></td></tr>
<tr><td><div id="tag32181" onclick="CopyToClipboard('tag32181');return false;" class="tag-decoration">testing</div><div id="tag13997" onclick="CopyToClipboard('tag13997');return false;" class="tag-decoration">testing-99a2100</div><div id="tag30207" onclick="CopyToClipboard('tag30207');return false;" class="tag-decoration">testing-7.1.0.10948</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/99a2100970f0934c4da50892b4c3f7cc536cd535" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/45353511445" target="_blank">2026-11-24 08:08:15</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
