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
<tr><td><div id="tag16547" onclick="CopyToClipboard('tag16547');return false;" class="tag-decoration">nightly</div><div id="tag1119" onclick="CopyToClipboard('tag1119');return false;" class="tag-decoration">nightly-e18fa1a</div><div id="tag25324" onclick="CopyToClipboard('tag25324');return false;" class="tag-decoration">nightly-98fd0267d04792b315cbc63c91401cac3a60dda1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/e18fa1afb32d2d929fc80ebcf84d5606e5508b77" target="_blank">Version update: 103181a6d2c1b2199157bd84d280b53492c5c6b8 => 98fd0267d04792b315cbc63c91401cac3a60dda1</a></td><td><a href="https://github.com/hotio/stash/actions/runs/25038193959" target="_blank">2026-04-28 06:46:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31433" onclick="CopyToClipboard('tag31433');return false;" class="tag-decoration">release</div><div id="tag4553" onclick="CopyToClipboard('tag4553');return false;" class="tag-decoration">release-2cfa3ca</div><div id="tag23777" onclick="CopyToClipboard('tag23777');return false;" class="tag-decoration">release-0.31.1</div><div id="tag17722" onclick="CopyToClipboard('tag17722');return false;" class="tag-decoration">release-v0</div><div id="tag10317" onclick="CopyToClipboard('tag10317');return false;" class="tag-decoration">release-v0.31</div><div id="tag31708" onclick="CopyToClipboard('tag31708');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/2cfa3caf080c34572a6b0a3606135961f5e0e45a" target="_blank">Version update: 0.31.1 => 0.31.1</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24656406068" target="_blank">2026-04-20 08:28:37</a></td></tr>
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
