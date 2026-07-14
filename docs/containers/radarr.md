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
<tr><td><div id="tag29137" onclick="CopyToClipboard('tag29137');return false;" class="tag-decoration">nightly</div><div id="tag12566" onclick="CopyToClipboard('tag12566');return false;" class="tag-decoration">nightly-5930f5e</div><div id="tag29348" onclick="CopyToClipboard('tag29348');return false;" class="tag-decoration">nightly-6.3.0.10513</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/5930f5e3b5fc008d37467b27e8b38770ab8c6475" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29308499161" target="_blank">2026-07-14 05:25:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22340" onclick="CopyToClipboard('tag22340');return false;" class="tag-decoration">release</div><div id="tag5327" onclick="CopyToClipboard('tag5327');return false;" class="tag-decoration">release-9cf9f03</div><div id="tag8671" onclick="CopyToClipboard('tag8671');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/9cf9f0395e1f36d557f1e6115800900753c9f5ea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29308499097" target="_blank">2026-07-14 05:25:31</a></td></tr>
<tr><td><div id="tag20795" onclick="CopyToClipboard('tag20795');return false;" class="tag-decoration">testing</div><div id="tag4252" onclick="CopyToClipboard('tag4252');return false;" class="tag-decoration">testing-383de8d</div><div id="tag22386" onclick="CopyToClipboard('tag22386');return false;" class="tag-decoration">testing-6.3.0.10514</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/383de8d07e6d0cc3928b70ad645864a1f29c32f4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29308495514" target="_blank">2026-07-14 05:25:27</a></td></tr>
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
