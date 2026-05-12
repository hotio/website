---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag25474" onclick="CopyToClipboard('tag25474');return false;" class="tag-decoration">nightly</div><div id="tag14883" onclick="CopyToClipboard('tag14883');return false;" class="tag-decoration">nightly-af440e5</div><div id="tag22392" onclick="CopyToClipboard('tag22392');return false;" class="tag-decoration">nightly-1.5.7-beta.37</div><div id="tag29230" onclick="CopyToClipboard('tag29230');return false;" class="tag-decoration">nightly-v1</div><div id="tag29984" onclick="CopyToClipboard('tag29984');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag11051" onclick="CopyToClipboard('tag11051');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/af440e5fc83ebf8d57d2e37a56c1b22b984639dc" target="_blank">Version update: 1.5.7-beta.36 => 1.5.7-beta.37</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25721730764" target="_blank">2026-05-12 08:05:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8593" onclick="CopyToClipboard('tag8593');return false;" class="tag-decoration">release</div><div id="tag6294" onclick="CopyToClipboard('tag6294');return false;" class="tag-decoration">release-0e7172a</div><div id="tag19213" onclick="CopyToClipboard('tag19213');return false;" class="tag-decoration">release-1.5.6</div><div id="tag17336" onclick="CopyToClipboard('tag17336');return false;" class="tag-decoration">release-v1</div><div id="tag30416" onclick="CopyToClipboard('tag30416');return false;" class="tag-decoration">release-v1.5</div><div id="tag14040" onclick="CopyToClipboard('tag14040');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/0e7172a1e4272a9feba318ea2f44e6e46be06c0e" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25714898346" target="_blank">2026-05-12 05:14:54</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
