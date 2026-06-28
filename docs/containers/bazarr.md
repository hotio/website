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
<tr><td><div id="tag3315" onclick="CopyToClipboard('tag3315');return false;" class="tag-decoration">nightly</div><div id="tag4031" onclick="CopyToClipboard('tag4031');return false;" class="tag-decoration">nightly-cf1cc6c</div><div id="tag966" onclick="CopyToClipboard('tag966');return false;" class="tag-decoration">nightly-1.5.7-beta.64</div><div id="tag19508" onclick="CopyToClipboard('tag19508');return false;" class="tag-decoration">nightly-v1</div><div id="tag26011" onclick="CopyToClipboard('tag26011');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag26915" onclick="CopyToClipboard('tag26915');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/cf1cc6c3b821a962d20e43121fe517cf8547dbc5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28316379124" target="_blank">2026-06-28 08:22:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21319" onclick="CopyToClipboard('tag21319');return false;" class="tag-decoration">release</div><div id="tag28268" onclick="CopyToClipboard('tag28268');return false;" class="tag-decoration">release-329a0f1</div><div id="tag7094" onclick="CopyToClipboard('tag7094');return false;" class="tag-decoration">release-1.5.6</div><div id="tag17975" onclick="CopyToClipboard('tag17975');return false;" class="tag-decoration">release-v1</div><div id="tag23114" onclick="CopyToClipboard('tag23114');return false;" class="tag-decoration">release-v1.5</div><div id="tag17373" onclick="CopyToClipboard('tag17373');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/329a0f1b8897fbbf904062ec4e1df613123675ce" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28046249256" target="_blank">2026-06-23 17:59:26</a></td></tr>
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
