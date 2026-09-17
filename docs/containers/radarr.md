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
<tr><td><div id="tag18362" onclick="CopyToClipboard('tag18362');return false;" class="tag-decoration">nightly</div><div id="tag25747" onclick="CopyToClipboard('tag25747');return false;" class="tag-decoration">nightly-28fa173</div><div id="tag12957" onclick="CopyToClipboard('tag12957');return false;" class="tag-decoration">nightly-6.4.4.10684</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/28fa173810e95560d32dd1513d91da65095d8d82" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35234824822" target="_blank">2026-09-17 14:37:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4575" onclick="CopyToClipboard('tag4575');return false;" class="tag-decoration">release</div><div id="tag2291" onclick="CopyToClipboard('tag2291');return false;" class="tag-decoration">release-7df5e22</div><div id="tag29995" onclick="CopyToClipboard('tag29995');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/7df5e2206f3493e4578fb594f41e27bddfea7d19" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35234824311" target="_blank">2026-09-17 14:37:30</a></td></tr>
<tr><td><div id="tag26826" onclick="CopyToClipboard('tag26826');return false;" class="tag-decoration">testing</div><div id="tag11953" onclick="CopyToClipboard('tag11953');return false;" class="tag-decoration">testing-ec72632</div><div id="tag32127" onclick="CopyToClipboard('tag32127');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/ec726328a2325f56a4953fadf7325746059dd082" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35234825714" target="_blank">2026-09-17 14:37:31</a></td></tr>
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
