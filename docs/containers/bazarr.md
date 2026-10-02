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
<tr><td><div id="tag3178" onclick="CopyToClipboard('tag3178');return false;" class="tag-decoration">nightly</div><div id="tag14596" onclick="CopyToClipboard('tag14596');return false;" class="tag-decoration">nightly-f886c71</div><div id="tag30669" onclick="CopyToClipboard('tag30669');return false;" class="tag-decoration">nightly-1.6.3-beta.3</div><div id="tag29770" onclick="CopyToClipboard('tag29770');return false;" class="tag-decoration">nightly-v1</div><div id="tag11646" onclick="CopyToClipboard('tag11646');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag19918" onclick="CopyToClipboard('tag19918');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/f886c71b251dc5d8a48744a2bceaa3f4268e4d7a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37027424994" target="_blank">2026-10-02 15:30:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag843" onclick="CopyToClipboard('tag843');return false;" class="tag-decoration">release</div><div id="tag25385" onclick="CopyToClipboard('tag25385');return false;" class="tag-decoration">release-e5016dd</div><div id="tag11921" onclick="CopyToClipboard('tag11921');return false;" class="tag-decoration">release-1.6.2</div><div id="tag15375" onclick="CopyToClipboard('tag15375');return false;" class="tag-decoration">release-v1</div><div id="tag24087" onclick="CopyToClipboard('tag24087');return false;" class="tag-decoration">release-v1.6</div><div id="tag29299" onclick="CopyToClipboard('tag29299');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/e5016dd1a27ea4ec5a06284ff663fdb65505507b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/36929977788" target="_blank">2026-10-01 21:38:06</a></td></tr>
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
