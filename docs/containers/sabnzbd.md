---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag24349" onclick="CopyToClipboard('tag24349');return false;" class="tag-decoration">nightly</div><div id="tag13421" onclick="CopyToClipboard('tag13421');return false;" class="tag-decoration">nightly-edf3754</div><div id="tag9954" onclick="CopyToClipboard('tag9954');return false;" class="tag-decoration">nightly-cdb87866aee3891b2b68e4380961e63e6e8ef7a9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/edf3754bfbe4866e71e0f3def584c3eafac36c41" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27608216953" target="_blank">2026-06-16 09:33:01</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32706" onclick="CopyToClipboard('tag32706');return false;" class="tag-decoration">release</div><div id="tag1727" onclick="CopyToClipboard('tag1727');return false;" class="tag-decoration">release-a0ab641</div><div id="tag27378" onclick="CopyToClipboard('tag27378');return false;" class="tag-decoration">release-5.0.4</div><div id="tag23067" onclick="CopyToClipboard('tag23067');return false;" class="tag-decoration">release-v5</div><div id="tag7591" onclick="CopyToClipboard('tag7591');return false;" class="tag-decoration">release-v5.0</div><div id="tag19571" onclick="CopyToClipboard('tag19571');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a0ab641838975e084f5308d638d56e590ba97b58" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27354554271" target="_blank">2026-06-11 14:35:22</a></td></tr>
<tr><td><div id="tag24489" onclick="CopyToClipboard('tag24489');return false;" class="tag-decoration">testing</div><div id="tag9040" onclick="CopyToClipboard('tag9040');return false;" class="tag-decoration">testing-908790b</div><div id="tag7473" onclick="CopyToClipboard('tag7473');return false;" class="tag-decoration">testing-5.1.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/908790bd11c54bde5e979501e778e12f3f272b90" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27498084504" target="_blank">2026-06-14 11:57:10</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
