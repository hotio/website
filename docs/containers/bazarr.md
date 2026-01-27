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
<tr><td><div id="tag29914" onclick="CopyToClipboard('tag29914');return false;" class="tag-decoration">nightly</div><div id="tag549" onclick="CopyToClipboard('tag549');return false;" class="tag-decoration">nightly-e14e24a</div><div id="tag17153" onclick="CopyToClipboard('tag17153');return false;" class="tag-decoration">nightly-1.5.5-beta.13</div><div id="tag13680" onclick="CopyToClipboard('tag13680');return false;" class="tag-decoration">nightly-v1</div><div id="tag8115" onclick="CopyToClipboard('tag8115');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag31866" onclick="CopyToClipboard('tag31866');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/e14e24ae80df9b4959c3ddc3ef6aab62e3911791" target="_blank">Version update: 1.5.5-beta.12 => 1.5.5-beta.13</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21387529748" target="_blank">2026-01-27 06:50:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2848" onclick="CopyToClipboard('tag2848');return false;" class="tag-decoration">release</div><div id="tag5737" onclick="CopyToClipboard('tag5737');return false;" class="tag-decoration">release-bddcdf9</div><div id="tag30581" onclick="CopyToClipboard('tag30581');return false;" class="tag-decoration">release-1.5.4</div><div id="tag3357" onclick="CopyToClipboard('tag3357');return false;" class="tag-decoration">release-v1</div><div id="tag27983" onclick="CopyToClipboard('tag27983');return false;" class="tag-decoration">release-v1.5</div><div id="tag24201" onclick="CopyToClipboard('tag24201');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/bddcdf9bc887e8298a8a4c11a219c9b29f09556b" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21354160863" target="_blank">2026-01-26 10:20:10</a></td></tr>
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
