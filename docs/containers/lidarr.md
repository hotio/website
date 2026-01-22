---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag23086" onclick="CopyToClipboard('tag23086');return false;" class="tag-decoration">nightly</div><div id="tag4555" onclick="CopyToClipboard('tag4555');return false;" class="tag-decoration">nightly-d30e7d9</div><div id="tag13718" onclick="CopyToClipboard('tag13718');return false;" class="tag-decoration">nightly-3.1.2.4914</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/d30e7d9351c7b96670c3c67ca5fe4d9e29da45fa" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21243350218" target="_blank">2026-01-22 09:35:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7095" onclick="CopyToClipboard('tag7095');return false;" class="tag-decoration">release</div><div id="tag24789" onclick="CopyToClipboard('tag24789');return false;" class="tag-decoration">release-7524e7d</div><div id="tag30969" onclick="CopyToClipboard('tag30969');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/7524e7d430d25aa32217c0bfaf68b33df49baecf" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21237943283" target="_blank">2026-01-22 06:02:55</a></td></tr>
<tr><td><div id="tag32087" onclick="CopyToClipboard('tag32087');return false;" class="tag-decoration">testing</div><div id="tag6481" onclick="CopyToClipboard('tag6481');return false;" class="tag-decoration">testing-c54ea36</div><div id="tag21874" onclick="CopyToClipboard('tag21874');return false;" class="tag-decoration">testing-3.1.2.4902</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/c54ea362ae2ab21872d4fecdd878c6964484aa85" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21237943772" target="_blank">2026-01-22 06:02:57</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
