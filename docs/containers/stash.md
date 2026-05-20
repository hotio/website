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
<tr><td><div id="tag25005" onclick="CopyToClipboard('tag25005');return false;" class="tag-decoration">nightly</div><div id="tag4118" onclick="CopyToClipboard('tag4118');return false;" class="tag-decoration">nightly-7c0bc60</div><div id="tag5416" onclick="CopyToClipboard('tag5416');return false;" class="tag-decoration">nightly-4a4cd1c5d1a2d9d1343abd10f5d1934ba8bf7352</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/7c0bc60b1c72d54e4cfd1aecc3ac111e37debe9b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26136675971" target="_blank">2026-05-20 02:00:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23346" onclick="CopyToClipboard('tag23346');return false;" class="tag-decoration">release</div><div id="tag1503" onclick="CopyToClipboard('tag1503');return false;" class="tag-decoration">release-db63fe8</div><div id="tag24162" onclick="CopyToClipboard('tag24162');return false;" class="tag-decoration">release-0.31.1</div><div id="tag9613" onclick="CopyToClipboard('tag9613');return false;" class="tag-decoration">release-v0</div><div id="tag31011" onclick="CopyToClipboard('tag31011');return false;" class="tag-decoration">release-v0.31</div><div id="tag12471" onclick="CopyToClipboard('tag12471');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/db63fe8477c6d9fcdfa2fd1965c3afb204dace3a" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26165717469" target="_blank">2026-05-20 13:28:52</a></td></tr>
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
