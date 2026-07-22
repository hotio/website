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
<tr><td><div id="tag30700" onclick="CopyToClipboard('tag30700');return false;" class="tag-decoration">nightly</div><div id="tag18660" onclick="CopyToClipboard('tag18660');return false;" class="tag-decoration">nightly-56b7088</div><div id="tag6184" onclick="CopyToClipboard('tag6184');return false;" class="tag-decoration">nightly-0821d2c02bfce9b0cf51f66678506c8a10c8849a</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/56b7088eefc54182aab947da02b0b97fe3c2cca6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29944787347" target="_blank">2026-07-22 18:00:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13010" onclick="CopyToClipboard('tag13010');return false;" class="tag-decoration">release</div><div id="tag11729" onclick="CopyToClipboard('tag11729');return false;" class="tag-decoration">release-5a53b4c</div><div id="tag27891" onclick="CopyToClipboard('tag27891');return false;" class="tag-decoration">release-0.31.1</div><div id="tag12774" onclick="CopyToClipboard('tag12774');return false;" class="tag-decoration">release-v0</div><div id="tag26370" onclick="CopyToClipboard('tag26370');return false;" class="tag-decoration">release-v0.31</div><div id="tag32162" onclick="CopyToClipboard('tag32162');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/5a53b4cfdeb5dd8c340db9083dc88a4593dcfa20" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29956964711" target="_blank">2026-07-22 20:52:52</a></td></tr>
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
