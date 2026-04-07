---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag10645" onclick="CopyToClipboard('tag10645');return false;" class="tag-decoration">nightly</div><div id="tag12781" onclick="CopyToClipboard('tag12781');return false;" class="tag-decoration">nightly-e548dae</div><div id="tag6005" onclick="CopyToClipboard('tag6005');return false;" class="tag-decoration">nightly-672147deaf4fc04ebf0e00c1a0797487765b2896</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/e548dae2590a5fe025a14f0dbdb52e64dfaa3cc3" target="_blank">Version update: 0ed2992a72c606e14c859737690bd8c06030a461 => 672147deaf4fc04ebf0e00c1a0797487765b2896</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24057284616" target="_blank">2026-04-07 00:00:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32045" onclick="CopyToClipboard('tag32045');return false;" class="tag-decoration">release</div><div id="tag31150" onclick="CopyToClipboard('tag31150');return false;" class="tag-decoration">release-c0e65f4</div><div id="tag26633" onclick="CopyToClipboard('tag26633');return false;" class="tag-decoration">release-0.31.0</div><div id="tag20242" onclick="CopyToClipboard('tag20242');return false;" class="tag-decoration">release-v0</div><div id="tag20469" onclick="CopyToClipboard('tag20469');return false;" class="tag-decoration">release-v0.31</div><div id="tag28257" onclick="CopyToClipboard('tag28257');return false;" class="tag-decoration">release-v0.31.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/c0e65f4af66f0944c3050fd364a8117a0f9bfaf0" target="_blank">Upstream update: noblevpn-3867c07 => noblevpn-cba64e8</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24067337657" target="_blank">2026-04-07 06:16:19</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
