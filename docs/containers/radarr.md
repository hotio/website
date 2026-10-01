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
<tr><td><div id="tag21111" onclick="CopyToClipboard('tag21111');return false;" class="tag-decoration">nightly</div><div id="tag13605" onclick="CopyToClipboard('tag13605');return false;" class="tag-decoration">nightly-eae781a</div><div id="tag19951" onclick="CopyToClipboard('tag19951');return false;" class="tag-decoration">nightly-6.4.4.10704</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/eae781ab527d9a0717ee07a6640c03d551201844" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/36761198796" target="_blank">2026-09-30 18:48:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4514" onclick="CopyToClipboard('tag4514');return false;" class="tag-decoration">release</div><div id="tag592" onclick="CopyToClipboard('tag592');return false;" class="tag-decoration">release-e606263</div><div id="tag11387" onclick="CopyToClipboard('tag11387');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/e6062631a8995ac0375ee0a2d4fa82ba1554f5ab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/36924664282" target="_blank">2026-10-01 20:51:40</a></td></tr>
<tr><td><div id="tag29500" onclick="CopyToClipboard('tag29500');return false;" class="tag-decoration">testing</div><div id="tag4586" onclick="CopyToClipboard('tag4586');return false;" class="tag-decoration">testing-939706b</div><div id="tag22842" onclick="CopyToClipboard('tag22842');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/939706b137c625568c06cb4b86548ac7988b824f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/36924678473" target="_blank">2026-10-01 20:51:44</a></td></tr>
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
