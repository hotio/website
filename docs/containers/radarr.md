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
<tr><td><div id="tag11644" onclick="CopyToClipboard('tag11644');return false;" class="tag-decoration">nightly</div><div id="tag5118" onclick="CopyToClipboard('tag5118');return false;" class="tag-decoration">nightly-fee9c1d</div><div id="tag5406" onclick="CopyToClipboard('tag5406');return false;" class="tag-decoration">nightly-6.4.2.10590</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/fee9c1de06b5c2b34d6a90bf72b710d07c11c250" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/32609432497" target="_blank">2026-08-23 01:03:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3140" onclick="CopyToClipboard('tag3140');return false;" class="tag-decoration">release</div><div id="tag12669" onclick="CopyToClipboard('tag12669');return false;" class="tag-decoration">release-9838a79</div><div id="tag20094" onclick="CopyToClipboard('tag20094');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/9838a790e214226ea9b5b681559ca27d65672bf8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/32324160229" target="_blank">2026-08-20 02:18:19</a></td></tr>
<tr><td><div id="tag22756" onclick="CopyToClipboard('tag22756');return false;" class="tag-decoration">testing</div><div id="tag22468" onclick="CopyToClipboard('tag22468');return false;" class="tag-decoration">testing-1ef9129</div><div id="tag7383" onclick="CopyToClipboard('tag7383');return false;" class="tag-decoration">testing-6.4.2.10590</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/1ef912993669291573d5a25f7e30a04ce35d68e8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/32628151748" target="_blank">2026-08-23 08:23:48</a></td></tr>
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
