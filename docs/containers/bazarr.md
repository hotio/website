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
<tr><td><div id="tag1360" onclick="CopyToClipboard('tag1360');return false;" class="tag-decoration">nightly</div><div id="tag26394" onclick="CopyToClipboard('tag26394');return false;" class="tag-decoration">nightly-583ffee</div><div id="tag13880" onclick="CopyToClipboard('tag13880');return false;" class="tag-decoration">nightly-1.5.5-beta.4</div><div id="tag467" onclick="CopyToClipboard('tag467');return false;" class="tag-decoration">nightly-v1</div><div id="tag9346" onclick="CopyToClipboard('tag9346');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag26993" onclick="CopyToClipboard('tag26993');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/583ffee12c371061f0284f61d2698bae5c01b8ff" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20949698921" target="_blank">2026-01-13 08:21:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2854" onclick="CopyToClipboard('tag2854');return false;" class="tag-decoration">release</div><div id="tag7182" onclick="CopyToClipboard('tag7182');return false;" class="tag-decoration">release-1.5.4</div><div id="tag30687" onclick="CopyToClipboard('tag30687');return false;" class="tag-decoration">release-2a308b8</div><div id="tag3239" onclick="CopyToClipboard('tag3239');return false;" class="tag-decoration">release-v1</div><div id="tag27338" onclick="CopyToClipboard('tag27338');return false;" class="tag-decoration">release-v1.5</div><div id="tag27798" onclick="CopyToClipboard('tag27798');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/2a308b8f8ed6f0ca4ebfb9d66fffadf67cfa8e6f" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20898157213" target="_blank">2026-01-11 16:17:02</a></td></tr>
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
