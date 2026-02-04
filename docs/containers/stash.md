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
<tr><td><div id="tag13129" onclick="CopyToClipboard('tag13129');return false;" class="tag-decoration">nightly</div><div id="tag28889" onclick="CopyToClipboard('tag28889');return false;" class="tag-decoration">nightly-9a51bf0</div><div id="tag13895" onclick="CopyToClipboard('tag13895');return false;" class="tag-decoration">nightly-9eda7c2f602db5a26e53f405c2f8299211f7911a</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/9a51bf0fde821a1d1615847c0d16c0924d496c4e" target="_blank">Version update: b5de30a295ffb855000940e69e8d2047416f869a => 9eda7c2f602db5a26e53f405c2f8299211f7911a</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21691028224" target="_blank">2026-02-04 22:34:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17278" onclick="CopyToClipboard('tag17278');return false;" class="tag-decoration">release</div><div id="tag10033" onclick="CopyToClipboard('tag10033');return false;" class="tag-decoration">release-ed4f6db</div><div id="tag14274" onclick="CopyToClipboard('tag14274');return false;" class="tag-decoration">release-0.30.1</div><div id="tag24239" onclick="CopyToClipboard('tag24239');return false;" class="tag-decoration">release-v0</div><div id="tag25403" onclick="CopyToClipboard('tag25403');return false;" class="tag-decoration">release-v0.30</div><div id="tag29789" onclick="CopyToClipboard('tag29789');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/ed4f6db1cfee934d14f039af289874ba72299767" target="_blank">Upstream update: noblevpn-8ba830a => noblevpn-b1148ef</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21428872957" target="_blank">2026-01-28 07:15:35</a></td></tr>
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
