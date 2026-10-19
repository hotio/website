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
<tr><td><div id="tag24633" onclick="CopyToClipboard('tag24633');return false;" class="tag-decoration">nightly</div><div id="tag5100" onclick="CopyToClipboard('tag5100');return false;" class="tag-decoration">nightly-d711222</div><div id="tag7779" onclick="CopyToClipboard('tag7779');return false;" class="tag-decoration">nightly-1.6.3-beta.16</div><div id="tag24434" onclick="CopyToClipboard('tag24434');return false;" class="tag-decoration">nightly-v1</div><div id="tag10093" onclick="CopyToClipboard('tag10093');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag31500" onclick="CopyToClipboard('tag31500');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/d711222b5a52abe926d1ce176ae9ff00ab186afb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/39206686742" target="_blank">2026-10-19 05:51:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18081" onclick="CopyToClipboard('tag18081');return false;" class="tag-decoration">release</div><div id="tag11255" onclick="CopyToClipboard('tag11255');return false;" class="tag-decoration">release-40ec246</div><div id="tag18656" onclick="CopyToClipboard('tag18656');return false;" class="tag-decoration">release-1.6.2</div><div id="tag22962" onclick="CopyToClipboard('tag22962');return false;" class="tag-decoration">release-v1</div><div id="tag28257" onclick="CopyToClipboard('tag28257');return false;" class="tag-decoration">release-v1.6</div><div id="tag18760" onclick="CopyToClipboard('tag18760');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/40ec24678ab38dfe37c4078bfc027b6ebbe645a3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/39133200368" target="_blank">2026-10-18 13:48:53</a></td></tr>
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
