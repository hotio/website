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
<tr><td><div id="tag17471" onclick="CopyToClipboard('tag17471');return false;" class="tag-decoration">nightly</div><div id="tag20500" onclick="CopyToClipboard('tag20500');return false;" class="tag-decoration">nightly-b010ad2</div><div id="tag29434" onclick="CopyToClipboard('tag29434');return false;" class="tag-decoration">nightly-1.5.5-beta.13</div><div id="tag18259" onclick="CopyToClipboard('tag18259');return false;" class="tag-decoration">nightly-v1</div><div id="tag5642" onclick="CopyToClipboard('tag5642');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag2045" onclick="CopyToClipboard('tag2045');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/b010ad25465c8afcdaa94240bc7ceb6fc55cc590" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21426194552" target="_blank">2026-01-28 05:22:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27397" onclick="CopyToClipboard('tag27397');return false;" class="tag-decoration">release</div><div id="tag1415" onclick="CopyToClipboard('tag1415');return false;" class="tag-decoration">release-a77d68d</div><div id="tag25715" onclick="CopyToClipboard('tag25715');return false;" class="tag-decoration">release-1.5.4</div><div id="tag7252" onclick="CopyToClipboard('tag7252');return false;" class="tag-decoration">release-v1</div><div id="tag11367" onclick="CopyToClipboard('tag11367');return false;" class="tag-decoration">release-v1.5</div><div id="tag31769" onclick="CopyToClipboard('tag31769');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/a77d68d731a0ad5867689b276908e371a8b88114" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21426194879" target="_blank">2026-01-28 05:22:46</a></td></tr>
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
