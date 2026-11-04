---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag30061" onclick="CopyToClipboard('tag30061');return false;" class="tag-decoration">nightly</div><div id="tag7562" onclick="CopyToClipboard('tag7562');return false;" class="tag-decoration">nightly-c2d70dc</div><div id="tag21709" onclick="CopyToClipboard('tag21709');return false;" class="tag-decoration">nightly-3.2.0.5175</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/c2d70dcb11d760f2cb342661f9bbf4c25775be5c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/41752108477" target="_blank">2026-11-04 01:09:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1518" onclick="CopyToClipboard('tag1518');return false;" class="tag-decoration">release</div><div id="tag13041" onclick="CopyToClipboard('tag13041');return false;" class="tag-decoration">release-1b04eb2</div><div id="tag21868" onclick="CopyToClipboard('tag21868');return false;" class="tag-decoration">release-3.1.6.5079</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/1b04eb2930bdc450dd1dff235602779b4f70c410" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/41926247954" target="_blank">2026-11-04 22:33:01</a></td></tr>
<tr><td><div id="tag30364" onclick="CopyToClipboard('tag30364');return false;" class="tag-decoration">testing</div><div id="tag31958" onclick="CopyToClipboard('tag31958');return false;" class="tag-decoration">testing-544b118</div><div id="tag11306" onclick="CopyToClipboard('tag11306');return false;" class="tag-decoration">testing-3.2.0.5144</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/544b118ae9763fdc6e2f2d23a230a83e0b333a50" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/41545042965" target="_blank">2026-11-02 23:23:17</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
