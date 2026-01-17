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
<tr><td><div id="tag5085" onclick="CopyToClipboard('tag5085');return false;" class="tag-decoration">nightly</div><div id="tag6572" onclick="CopyToClipboard('tag6572');return false;" class="tag-decoration">nightly-045c679</div><div id="tag31308" onclick="CopyToClipboard('tag31308');return false;" class="tag-decoration">nightly-1.5.5-beta.6</div><div id="tag19192" onclick="CopyToClipboard('tag19192');return false;" class="tag-decoration">nightly-v1</div><div id="tag11790" onclick="CopyToClipboard('tag11790');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag24480" onclick="CopyToClipboard('tag24480');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/045c679fd133692ebfa2cf9dd5a3bc59dc3a246b" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21090386476" target="_blank">2026-01-17 07:00:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19900" onclick="CopyToClipboard('tag19900');return false;" class="tag-decoration">release</div><div id="tag29603" onclick="CopyToClipboard('tag29603');return false;" class="tag-decoration">release-2ffd92d</div><div id="tag14424" onclick="CopyToClipboard('tag14424');return false;" class="tag-decoration">release-1.5.4</div><div id="tag23178" onclick="CopyToClipboard('tag23178');return false;" class="tag-decoration">release-v1</div><div id="tag29049" onclick="CopyToClipboard('tag29049');return false;" class="tag-decoration">release-v1.5</div><div id="tag20785" onclick="CopyToClipboard('tag20785');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/2ffd92d2f4539a12b94e76f9b7e23dac0789495e" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21090386686" target="_blank">2026-01-17 07:00:58</a></td></tr>
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
