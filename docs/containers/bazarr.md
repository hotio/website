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
<tr><td><div id="tag26422" onclick="CopyToClipboard('tag26422');return false;" class="tag-decoration">nightly</div><div id="tag24553" onclick="CopyToClipboard('tag24553');return false;" class="tag-decoration">nightly-7c9957e</div><div id="tag8480" onclick="CopyToClipboard('tag8480');return false;" class="tag-decoration">nightly-1.5.5-beta.10</div><div id="tag25591" onclick="CopyToClipboard('tag25591');return false;" class="tag-decoration">nightly-v1</div><div id="tag18612" onclick="CopyToClipboard('tag18612');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag25402" onclick="CopyToClipboard('tag25402');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/7c9957ee6827129d7ab0b6fc199be928b7c17b6f" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21322445188" target="_blank">2026-01-24 22:13:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32013" onclick="CopyToClipboard('tag32013');return false;" class="tag-decoration">release</div><div id="tag32228" onclick="CopyToClipboard('tag32228');return false;" class="tag-decoration">release-322162b</div><div id="tag19854" onclick="CopyToClipboard('tag19854');return false;" class="tag-decoration">release-1.5.4</div><div id="tag12850" onclick="CopyToClipboard('tag12850');return false;" class="tag-decoration">release-v1</div><div id="tag3991" onclick="CopyToClipboard('tag3991');return false;" class="tag-decoration">release-v1.5</div><div id="tag21770" onclick="CopyToClipboard('tag21770');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/322162bb17c266aacd3057ece51f17641b4fa99b" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21322445732" target="_blank">2026-01-24 22:14:01</a></td></tr>
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
