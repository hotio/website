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
<tr><td><div id="tag9056" onclick="CopyToClipboard('tag9056');return false;" class="tag-decoration">nightly</div><div id="tag13238" onclick="CopyToClipboard('tag13238');return false;" class="tag-decoration">nightly-529fd88</div><div id="tag952" onclick="CopyToClipboard('tag952');return false;" class="tag-decoration">nightly-bef4e3fbd585a272f51c71aaf16d06185d3e26d9</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/529fd8849214242b4a7fdee8fcf27a4e97b2e316" target="_blank">Version update: 5b3785f16490e8bd603dbe71915a6233379e72e1 => bef4e3fbd585a272f51c71aaf16d06185d3e26d9</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21383913504" target="_blank">2026-01-27 03:56:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag299" onclick="CopyToClipboard('tag299');return false;" class="tag-decoration">release</div><div id="tag24472" onclick="CopyToClipboard('tag24472');return false;" class="tag-decoration">release-165c262</div><div id="tag13055" onclick="CopyToClipboard('tag13055');return false;" class="tag-decoration">release-0.30.1</div><div id="tag21384" onclick="CopyToClipboard('tag21384');return false;" class="tag-decoration">release-v0</div><div id="tag26265" onclick="CopyToClipboard('tag26265');return false;" class="tag-decoration">release-v0.30</div><div id="tag20377" onclick="CopyToClipboard('tag20377');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/165c262a8bd1cdf1e19c19bdae99eb0761afd5e5" target="_blank">Upstream update: noblevpn-aac85c0 => noblevpn-8ba830a</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21354185241" target="_blank">2026-01-26 10:21:02</a></td></tr>
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
