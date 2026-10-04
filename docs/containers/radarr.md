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
<tr><td><div id="tag17523" onclick="CopyToClipboard('tag17523');return false;" class="tag-decoration">nightly</div><div id="tag27897" onclick="CopyToClipboard('tag27897');return false;" class="tag-decoration">nightly-d61f06c</div><div id="tag7111" onclick="CopyToClipboard('tag7111');return false;" class="tag-decoration">nightly-6.4.4.10716</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/d61f06c73d4dd47b81246ef0fe38c2f2ba486ad4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/37213736779" target="_blank">2026-10-04 15:38:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21999" onclick="CopyToClipboard('tag21999');return false;" class="tag-decoration">release</div><div id="tag20681" onclick="CopyToClipboard('tag20681');return false;" class="tag-decoration">release-e606263</div><div id="tag6385" onclick="CopyToClipboard('tag6385');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/e6062631a8995ac0375ee0a2d4fa82ba1554f5ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/36924664282" target="_blank">2026-10-01 20:51:40</a></td></tr>
<tr><td><div id="tag849" onclick="CopyToClipboard('tag849');return false;" class="tag-decoration">testing</div><div id="tag1012" onclick="CopyToClipboard('tag1012');return false;" class="tag-decoration">testing-939706b</div><div id="tag18712" onclick="CopyToClipboard('tag18712');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/939706b137c625568c06cb4b86548ac7988b824f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/36924678473" target="_blank">2026-10-01 20:51:44</a></td></tr>
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
