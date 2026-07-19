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
<tr><td><div id="tag28072" onclick="CopyToClipboard('tag28072');return false;" class="tag-decoration">nightly</div><div id="tag27512" onclick="CopyToClipboard('tag27512');return false;" class="tag-decoration">nightly-dbc9775</div><div id="tag32404" onclick="CopyToClipboard('tag32404');return false;" class="tag-decoration">nightly-6.4.0.10523</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/dbc977530826ce990d217a2a9941edaee52b4185" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29681338758" target="_blank">2026-07-19 09:18:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12362" onclick="CopyToClipboard('tag12362');return false;" class="tag-decoration">release</div><div id="tag15787" onclick="CopyToClipboard('tag15787');return false;" class="tag-decoration">release-6171903</div><div id="tag9375" onclick="CopyToClipboard('tag9375');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/61719030848aa8c34b1332e7834d22bde227aa61" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29681328937" target="_blank">2026-07-19 09:17:59</a></td></tr>
<tr><td><div id="tag3755" onclick="CopyToClipboard('tag3755');return false;" class="tag-decoration">testing</div><div id="tag17906" onclick="CopyToClipboard('tag17906');return false;" class="tag-decoration">testing-c4e452a</div><div id="tag7811" onclick="CopyToClipboard('tag7811');return false;" class="tag-decoration">testing-6.3.0.10514</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/c4e452a4a4d2684b71d9a0b0dabfd5c93c57946a" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29681334166" target="_blank">2026-07-19 09:18:10</a></td></tr>
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
