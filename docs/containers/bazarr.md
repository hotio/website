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
<tr><td><div id="tag17732" onclick="CopyToClipboard('tag17732');return false;" class="tag-decoration">nightly</div><div id="tag22970" onclick="CopyToClipboard('tag22970');return false;" class="tag-decoration">nightly-1.5.5-beta.1</div><div id="tag13234" onclick="CopyToClipboard('tag13234');return false;" class="tag-decoration">nightly-c6f3878</div><div id="tag18882" onclick="CopyToClipboard('tag18882');return false;" class="tag-decoration">nightly-v1</div><div id="tag24587" onclick="CopyToClipboard('tag24587');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag5304" onclick="CopyToClipboard('tag5304');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/c6f3878ac99da7589a0bb62e40f294bf65ae2baa" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20770096225" target="_blank">2026-01-07 03:57:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27125" onclick="CopyToClipboard('tag27125');return false;" class="tag-decoration">release</div><div id="tag30434" onclick="CopyToClipboard('tag30434');return false;" class="tag-decoration">release-1.5.4</div><div id="tag22233" onclick="CopyToClipboard('tag22233');return false;" class="tag-decoration">release-95a9416</div><div id="tag9585" onclick="CopyToClipboard('tag9585');return false;" class="tag-decoration">release-v1</div><div id="tag31146" onclick="CopyToClipboard('tag31146');return false;" class="tag-decoration">release-v1.5</div><div id="tag17938" onclick="CopyToClipboard('tag17938');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/95a9416dd273a95f8b1f68cf7c08e0a088ad5d69" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20770096329" target="_blank">2026-01-07 03:57:11</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name bazarr \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

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
          - WEBUI_PORTS=6767/tcp
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
