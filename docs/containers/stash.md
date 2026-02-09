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
<tr><td><div id="tag30501" onclick="CopyToClipboard('tag30501');return false;" class="tag-decoration">nightly</div><div id="tag21224" onclick="CopyToClipboard('tag21224');return false;" class="tag-decoration">nightly-a38b5f6</div><div id="tag8843" onclick="CopyToClipboard('tag8843');return false;" class="tag-decoration">nightly-07b483038ae499c8c4f9b93609342940573e5bd4</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/a38b5f6d9b60bc9f26dd1219003c6cfd1caf708f" target="_blank">Version update: 8dec195c2d5f909fad98d2b59f8498185d4bb21d => 07b483038ae499c8c4f9b93609342940573e5bd4</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21811146784" target="_blank">2026-02-09 03:17:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1524" onclick="CopyToClipboard('tag1524');return false;" class="tag-decoration">release</div><div id="tag23575" onclick="CopyToClipboard('tag23575');return false;" class="tag-decoration">release-ed4f6db</div><div id="tag5980" onclick="CopyToClipboard('tag5980');return false;" class="tag-decoration">release-0.30.1</div><div id="tag16490" onclick="CopyToClipboard('tag16490');return false;" class="tag-decoration">release-v0</div><div id="tag28580" onclick="CopyToClipboard('tag28580');return false;" class="tag-decoration">release-v0.30</div><div id="tag4742" onclick="CopyToClipboard('tag4742');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/ed4f6db1cfee934d14f039af289874ba72299767" target="_blank">Upstream update: noblevpn-8ba830a => noblevpn-b1148ef</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21428872957" target="_blank">2026-01-28 07:15:35</a></td></tr>
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
