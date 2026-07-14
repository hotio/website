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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25743" onclick="CopyToClipboard('tag25743');return false;" class="tag-decoration">v2</div><div id="tag29475" onclick="CopyToClipboard('tag29475');return false;" class="tag-decoration">v2-9422f24</div><div id="tag15757" onclick="CopyToClipboard('tag15757');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag25510" onclick="CopyToClipboard('tag25510');return false;" class="tag-decoration">v2-v2</div><div id="tag27060" onclick="CopyToClipboard('tag27060');return false;" class="tag-decoration">v2-v2.2</div><div id="tag27528" onclick="CopyToClipboard('tag27528');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/9422f2405e40a0ac77d1ae1ebe8665f01e1d87b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29322801194" target="_blank">2026-07-14 09:44:03</a></td></tr>
<tr><td><div id="tag16163" onclick="CopyToClipboard('tag16163');return false;" class="tag-decoration">v2-develop</div><div id="tag10345" onclick="CopyToClipboard('tag10345');return false;" class="tag-decoration">v2-develop-3e573cd</div><div id="tag3776" onclick="CopyToClipboard('tag3776');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag14893" onclick="CopyToClipboard('tag14893');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag6466" onclick="CopyToClipboard('tag6466');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag22107" onclick="CopyToClipboard('tag22107');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3e573cd13f78f65341dd9fa843ce16aa58204fcf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356438023" target="_blank">2026-07-14 18:05:11</a></td></tr>
<tr><td><div id="tag5011" onclick="CopyToClipboard('tag5011');return false;" class="tag-decoration">v3</div><div id="tag26742" onclick="CopyToClipboard('tag26742');return false;" class="tag-decoration">v3-be17d29</div><div id="tag10104" onclick="CopyToClipboard('tag10104');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag25792" onclick="CopyToClipboard('tag25792');return false;" class="tag-decoration">v3-v3</div><div id="tag30541" onclick="CopyToClipboard('tag30541');return false;" class="tag-decoration">v3-v3.3</div><div id="tag22698" onclick="CopyToClipboard('tag22698');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/be17d29c400052915b1b18741e61dd7e6f4f625d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356451636" target="_blank">2026-07-14 18:05:24</a></td></tr>
<tr><td><div id="tag19601" onclick="CopyToClipboard('tag19601');return false;" class="tag-decoration">v3-develop</div><div id="tag6233" onclick="CopyToClipboard('tag6233');return false;" class="tag-decoration">v3-develop-8a8108f</div><div id="tag28635" onclick="CopyToClipboard('tag28635');return false;" class="tag-decoration">v3-develop-3.3.4-develop.808</div><div id="tag9234" onclick="CopyToClipboard('tag9234');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag18765" onclick="CopyToClipboard('tag18765');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag3364" onclick="CopyToClipboard('tag3364');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8a8108fa1ae6ac29a992c8e8ac3410e94301a740" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356445651" target="_blank">2026-07-14 18:05:18</a></td></tr>
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
