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
<tr><td><div id="tag19380" onclick="CopyToClipboard('tag19380');return false;" class="tag-decoration">nightly</div><div id="tag12308" onclick="CopyToClipboard('tag12308');return false;" class="tag-decoration">nightly-8feb99b</div><div id="tag6617" onclick="CopyToClipboard('tag6617');return false;" class="tag-decoration">nightly-843806247d9f9162bb7775b668058d730bb4a71f</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/8feb99ba688143f9387decb4595bf4d3844463b1" target="_blank">Version update: 3dc86239d2c7ff9425f00d5aa2ec8aac2acda79b => 843806247d9f9162bb7775b668058d730bb4a71f</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22203491579" target="_blank">2026-02-19 22:52:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17770" onclick="CopyToClipboard('tag17770');return false;" class="tag-decoration">release</div><div id="tag14197" onclick="CopyToClipboard('tag14197');return false;" class="tag-decoration">release-6cc02ec</div><div id="tag2067" onclick="CopyToClipboard('tag2067');return false;" class="tag-decoration">release-0.30.1</div><div id="tag3422" onclick="CopyToClipboard('tag3422');return false;" class="tag-decoration">release-v0</div><div id="tag13641" onclick="CopyToClipboard('tag13641');return false;" class="tag-decoration">release-v0.30</div><div id="tag8917" onclick="CopyToClipboard('tag8917');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/6cc02ec5f24bf14d66e1c5d4b38cafb8905d15f7" target="_blank">Upstream update: noblevpn-b1148ef => noblevpn-f921142</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22118133620" target="_blank">2026-02-17 22:24:17</a></td></tr>
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
