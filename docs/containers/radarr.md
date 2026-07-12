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
<tr><td><div id="tag6844" onclick="CopyToClipboard('tag6844');return false;" class="tag-decoration">nightly</div><div id="tag16214" onclick="CopyToClipboard('tag16214');return false;" class="tag-decoration">nightly-712633d</div><div id="tag7761" onclick="CopyToClipboard('tag7761');return false;" class="tag-decoration">nightly-6.3.0.10513</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/712633d4fe36fe488357bba0757634994f43b61b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29191709800" target="_blank">2026-07-12 11:55:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31560" onclick="CopyToClipboard('tag31560');return false;" class="tag-decoration">release</div><div id="tag1253" onclick="CopyToClipboard('tag1253');return false;" class="tag-decoration">release-3518382</div><div id="tag18814" onclick="CopyToClipboard('tag18814');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/3518382b01317c1a251bc1f704ccc3187fa9f7cf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29208167608" target="_blank">2026-07-12 20:40:04</a></td></tr>
<tr><td><div id="tag27479" onclick="CopyToClipboard('tag27479');return false;" class="tag-decoration">testing</div><div id="tag6834" onclick="CopyToClipboard('tag6834');return false;" class="tag-decoration">testing-58b04ec</div><div id="tag11580" onclick="CopyToClipboard('tag11580');return false;" class="tag-decoration">testing-6.3.0.10514</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/58b04ec0bda2208ede723c1889b57093aefa845e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29208168991" target="_blank">2026-07-12 20:40:07</a></td></tr>
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
