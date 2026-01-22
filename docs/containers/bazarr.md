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
<tr><td><div id="tag14605" onclick="CopyToClipboard('tag14605');return false;" class="tag-decoration">nightly</div><div id="tag31346" onclick="CopyToClipboard('tag31346');return false;" class="tag-decoration">nightly-1074af8</div><div id="tag10026" onclick="CopyToClipboard('tag10026');return false;" class="tag-decoration">nightly-1.5.5-beta.9</div><div id="tag28573" onclick="CopyToClipboard('tag28573');return false;" class="tag-decoration">nightly-v1</div><div id="tag17261" onclick="CopyToClipboard('tag17261');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag8663" onclick="CopyToClipboard('tag8663');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/1074af8929ed40a951c7426e4f6247e386bb0afb" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21243338382" target="_blank">2026-01-22 09:34:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14235" onclick="CopyToClipboard('tag14235');return false;" class="tag-decoration">release</div><div id="tag353" onclick="CopyToClipboard('tag353');return false;" class="tag-decoration">release-633a0b9</div><div id="tag28183" onclick="CopyToClipboard('tag28183');return false;" class="tag-decoration">release-1.5.4</div><div id="tag24591" onclick="CopyToClipboard('tag24591');return false;" class="tag-decoration">release-v1</div><div id="tag32604" onclick="CopyToClipboard('tag32604');return false;" class="tag-decoration">release-v1.5</div><div id="tag10198" onclick="CopyToClipboard('tag10198');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/633a0b946033a0081ccf546cd6ff93e79b9b8e1f" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21237937048" target="_blank">2026-01-22 06:02:40</a></td></tr>
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
