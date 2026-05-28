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
<tr><td><div id="tag9969" onclick="CopyToClipboard('tag9969');return false;" class="tag-decoration">nightly</div><div id="tag23" onclick="CopyToClipboard('tag23');return false;" class="tag-decoration">nightly-e14d57e</div><div id="tag16088" onclick="CopyToClipboard('tag16088');return false;" class="tag-decoration">nightly-4187d164b349f8442a4f31c72bb477302590a9a4</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/e14d57e3e02a2c70a18605dba24ae1f87e5cf720" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26532959572" target="_blank">2026-05-27 19:12:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1142" onclick="CopyToClipboard('tag1142');return false;" class="tag-decoration">release</div><div id="tag5270" onclick="CopyToClipboard('tag5270');return false;" class="tag-decoration">release-d2bdd1e</div><div id="tag8246" onclick="CopyToClipboard('tag8246');return false;" class="tag-decoration">release-0.31.1</div><div id="tag6195" onclick="CopyToClipboard('tag6195');return false;" class="tag-decoration">release-v0</div><div id="tag20435" onclick="CopyToClipboard('tag20435');return false;" class="tag-decoration">release-v0.31</div><div id="tag8267" onclick="CopyToClipboard('tag8267');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/d2bdd1e1525e38d2316bcd4c741578a06a6f96cc" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/26557644321" target="_blank">2026-05-28 05:59:43</a></td></tr>
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
