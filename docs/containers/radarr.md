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
<tr><td><div id="tag10202" onclick="CopyToClipboard('tag10202');return false;" class="tag-decoration">nightly</div><div id="tag13601" onclick="CopyToClipboard('tag13601');return false;" class="tag-decoration">nightly-24071e4</div><div id="tag23073" onclick="CopyToClipboard('tag23073');return false;" class="tag-decoration">nightly-7.0.1.10833</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/24071e41af7b90ed2f3dad1c0c8afc3ff751a227" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/40589475186" target="_blank">2026-10-27 21:45:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22341" onclick="CopyToClipboard('tag22341');return false;" class="tag-decoration">release</div><div id="tag19742" onclick="CopyToClipboard('tag19742');return false;" class="tag-decoration">release-17e0f30</div><div id="tag23695" onclick="CopyToClipboard('tag23695');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/17e0f303912df44581c86b20ef1cf8aac772d8df" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/40589467901" target="_blank">2026-10-27 21:45:46</a></td></tr>
<tr><td><div id="tag18955" onclick="CopyToClipboard('tag18955');return false;" class="tag-decoration">testing</div><div id="tag3235" onclick="CopyToClipboard('tag3235');return false;" class="tag-decoration">testing-ecc5594</div><div id="tag11523" onclick="CopyToClipboard('tag11523');return false;" class="tag-decoration">testing-7.0.0.10815</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/ecc5594e6eca23ba2e27d778bdaffc5cc0f5c861" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/40549886274" target="_blank">2026-10-27 17:21:54</a></td></tr>
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
