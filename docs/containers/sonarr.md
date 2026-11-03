---
hide:
  - toc
title: hotio/sonarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sonarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sonarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sonarr/sonarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag7320" onclick="CopyToClipboard('tag7320');return false;" class="tag-decoration">nightly</div><div id="tag11329" onclick="CopyToClipboard('tag11329');return false;" class="tag-decoration">nightly-bb42a10</div><div id="tag573" onclick="CopyToClipboard('tag573');return false;" class="tag-decoration">nightly-5.0.0.2941</div></td><td>develop/v5-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/bb42a1066c44e975f28020b95939bf47f7890cce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/41609208726" target="_blank">2026-11-03 09:12:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13805" onclick="CopyToClipboard('tag13805');return false;" class="tag-decoration">release</div><div id="tag11969" onclick="CopyToClipboard('tag11969');return false;" class="tag-decoration">release-ce51964</div><div id="tag14952" onclick="CopyToClipboard('tag14952');return false;" class="tag-decoration">release-4.0.20.3014</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/ce519641431dd6abd49960024cdd0866eb19f41d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/41506884141" target="_blank">2026-11-02 19:06:46</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sonarr" \
        -p 8989:8989 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8989/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sonarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sonarr:
        container_name: sonarr
        image: ghcr.io/hotio/sonarr
        ports:
          - "8989:8989"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8989/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
