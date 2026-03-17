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
<tr><td><div id="tag20527" onclick="CopyToClipboard('tag20527');return false;" class="tag-decoration">nightly</div><div id="tag23579" onclick="CopyToClipboard('tag23579');return false;" class="tag-decoration">nightly-03caa82</div><div id="tag26306" onclick="CopyToClipboard('tag26306');return false;" class="tag-decoration">nightly-b2179cd7230c21460bf2a057badeefe1ac4174e8</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/03caa82c919dba2c1442a35812858d5c6d1fc762" target="_blank">Version update: b2179cd7230c21460bf2a057badeefe1ac4174e8 => b2179cd7230c21460bf2a057badeefe1ac4174e8</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23201649114" target="_blank">2026-03-17 15:18:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6780" onclick="CopyToClipboard('tag6780');return false;" class="tag-decoration">release</div><div id="tag26753" onclick="CopyToClipboard('tag26753');return false;" class="tag-decoration">release-35dd95d</div><div id="tag3650" onclick="CopyToClipboard('tag3650');return false;" class="tag-decoration">release-0.30.1</div><div id="tag19005" onclick="CopyToClipboard('tag19005');return false;" class="tag-decoration">release-v0</div><div id="tag28905" onclick="CopyToClipboard('tag28905');return false;" class="tag-decoration">release-v0.30</div><div id="tag22752" onclick="CopyToClipboard('tag22752');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/35dd95deeab435280033c13de52bb51ad6cc4f78" target="_blank">Upstream update: noblevpn-c3daa84 => noblevpn-3867c07</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23180614720" target="_blank">2026-03-17 05:55:15</a></td></tr>
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
