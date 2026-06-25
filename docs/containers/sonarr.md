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
<tr><td><div id="tag24036" onclick="CopyToClipboard('tag24036');return false;" class="tag-decoration">nightly</div><div id="tag26353" onclick="CopyToClipboard('tag26353');return false;" class="tag-decoration">nightly-f79d342</div><div id="tag21113" onclick="CopyToClipboard('tag21113');return false;" class="tag-decoration">nightly-4.0.18.2976</div></td><td>develop/v4-nightly</td><td><a href="https://github.com/hotio/sonarr/commit/f79d342a5ebcd53fe4286b60322eebb8047e97be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/28137840420" target="_blank">2026-06-25 00:08:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18355" onclick="CopyToClipboard('tag18355');return false;" class="tag-decoration">release</div><div id="tag20864" onclick="CopyToClipboard('tag20864');return false;" class="tag-decoration">release-7350588</div><div id="tag4514" onclick="CopyToClipboard('tag4514');return false;" class="tag-decoration">release-4.0.18.2971</div></td><td>main/v4-stable</td><td><a href="https://github.com/hotio/sonarr/commit/73505888550d80c1655dffe74be8f0a8bac2028b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sonarr/actions/runs/28112915442" target="_blank">2026-06-24 16:17:04</a></td></tr>
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
