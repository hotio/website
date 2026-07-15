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
<tr><td><div id="tag22644" onclick="CopyToClipboard('tag22644');return false;" class="tag-decoration">nightly</div><div id="tag22532" onclick="CopyToClipboard('tag22532');return false;" class="tag-decoration">nightly-7e64a9e</div><div id="tag25726" onclick="CopyToClipboard('tag25726');return false;" class="tag-decoration">nightly-1.6.1-beta.2</div><div id="tag21079" onclick="CopyToClipboard('tag21079');return false;" class="tag-decoration">nightly-v1</div><div id="tag19299" onclick="CopyToClipboard('tag19299');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag16457" onclick="CopyToClipboard('tag16457');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/7e64a9efe3c225a052cd50fa92eb32897450c96e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29400232338" target="_blank">2026-07-15 08:16:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31244" onclick="CopyToClipboard('tag31244');return false;" class="tag-decoration">release</div><div id="tag17348" onclick="CopyToClipboard('tag17348');return false;" class="tag-decoration">release-76d96da</div><div id="tag22783" onclick="CopyToClipboard('tag22783');return false;" class="tag-decoration">release-1.6.0</div><div id="tag13934" onclick="CopyToClipboard('tag13934');return false;" class="tag-decoration">release-v1</div><div id="tag17279" onclick="CopyToClipboard('tag17279');return false;" class="tag-decoration">release-v1.6</div><div id="tag11870" onclick="CopyToClipboard('tag11870');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/76d96da98d3a421c88a0d765d16d9a8f96fd4ee2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/29356479015" target="_blank">2026-07-14 18:05:51</a></td></tr>
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
