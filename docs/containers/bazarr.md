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
<tr><td><div id="tag13993" onclick="CopyToClipboard('tag13993');return false;" class="tag-decoration">nightly</div><div id="tag27480" onclick="CopyToClipboard('tag27480');return false;" class="tag-decoration">nightly-d8923e7</div><div id="tag25255" onclick="CopyToClipboard('tag25255');return false;" class="tag-decoration">nightly-1.6.3-beta.40</div><div id="tag8384" onclick="CopyToClipboard('tag8384');return false;" class="tag-decoration">nightly-v1</div><div id="tag16205" onclick="CopyToClipboard('tag16205');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag20193" onclick="CopyToClipboard('tag20193');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/d8923e7ff94859e91f0ee18d11867738f1b6970b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/45752382478" target="_blank">2026-11-26 03:59:55</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29210" onclick="CopyToClipboard('tag29210');return false;" class="tag-decoration">release</div><div id="tag19565" onclick="CopyToClipboard('tag19565');return false;" class="tag-decoration">release-03d3601</div><div id="tag32280" onclick="CopyToClipboard('tag32280');return false;" class="tag-decoration">release-1.6.2</div><div id="tag26362" onclick="CopyToClipboard('tag26362');return false;" class="tag-decoration">release-v1</div><div id="tag3623" onclick="CopyToClipboard('tag3623');return false;" class="tag-decoration">release-v1.6</div><div id="tag10152" onclick="CopyToClipboard('tag10152');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/03d36017f26b4f3a44caee8946d0fcc1f51fa273" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/45752385822" target="_blank">2026-11-26 03:59:58</a></td></tr>
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
