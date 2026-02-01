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
<tr><td><div id="tag27438" onclick="CopyToClipboard('tag27438');return false;" class="tag-decoration">nightly</div><div id="tag11669" onclick="CopyToClipboard('tag11669');return false;" class="tag-decoration">nightly-4bfe9f9</div><div id="tag24082" onclick="CopyToClipboard('tag24082');return false;" class="tag-decoration">nightly-1.5.5</div><div id="tag32295" onclick="CopyToClipboard('tag32295');return false;" class="tag-decoration">nightly-v1</div><div id="tag5795" onclick="CopyToClipboard('tag5795');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag32195" onclick="CopyToClipboard('tag32195');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/4bfe9f93462576a36591cc46ffbe379a35c617b0" target="_blank">Version update: 1.5.5-beta.17 => 1.5.5</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21568319632" target="_blank">2026-02-01 18:51:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17743" onclick="CopyToClipboard('tag17743');return false;" class="tag-decoration">release</div><div id="tag30389" onclick="CopyToClipboard('tag30389');return false;" class="tag-decoration">release-051247e</div><div id="tag17442" onclick="CopyToClipboard('tag17442');return false;" class="tag-decoration">release-1.5.4</div><div id="tag294" onclick="CopyToClipboard('tag294');return false;" class="tag-decoration">release-v1</div><div id="tag27361" onclick="CopyToClipboard('tag27361');return false;" class="tag-decoration">release-v1.5</div><div id="tag28728" onclick="CopyToClipboard('tag28728');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/051247ed2f8ae835d3aa260fd2911443054af49c" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21428836638" target="_blank">2026-01-28 07:14:13</a></td></tr>
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
