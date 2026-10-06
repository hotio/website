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
<tr><td><div id="tag31588" onclick="CopyToClipboard('tag31588');return false;" class="tag-decoration">nightly</div><div id="tag24825" onclick="CopyToClipboard('tag24825');return false;" class="tag-decoration">nightly-ce0b461</div><div id="tag26529" onclick="CopyToClipboard('tag26529');return false;" class="tag-decoration">nightly-6.4.4.10716</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/ce0b461ed0f092d2685f4c377ba728dbaba80961" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/37506610717" target="_blank">2026-10-06 17:50:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19211" onclick="CopyToClipboard('tag19211');return false;" class="tag-decoration">release</div><div id="tag7344" onclick="CopyToClipboard('tag7344');return false;" class="tag-decoration">release-2ab97c1</div><div id="tag1116" onclick="CopyToClipboard('tag1116');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/2ab97c1a4cd269ee4055e9759d88d57d701b9248" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/37506610579" target="_blank">2026-10-06 17:50:08</a></td></tr>
<tr><td><div id="tag31734" onclick="CopyToClipboard('tag31734');return false;" class="tag-decoration">testing</div><div id="tag19553" onclick="CopyToClipboard('tag19553');return false;" class="tag-decoration">testing-a0871a2</div><div id="tag28404" onclick="CopyToClipboard('tag28404');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/a0871a28a4b88edf758d58831a395882ee713b66" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/37414472529" target="_blank">2026-10-06 04:35:54</a></td></tr>
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
