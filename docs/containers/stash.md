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
<tr><td><div id="tag15461" onclick="CopyToClipboard('tag15461');return false;" class="tag-decoration">nightly</div><div id="tag28306" onclick="CopyToClipboard('tag28306');return false;" class="tag-decoration">nightly-09f0e15</div><div id="tag23342" onclick="CopyToClipboard('tag23342');return false;" class="tag-decoration">nightly-afdaa082b63708793d83312e692562aa36821f50</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/09f0e1531c0c36e5d7edf72d7fe2c69880d16c44" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/30561332235" target="_blank">2026-07-30 16:24:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8259" onclick="CopyToClipboard('tag8259');return false;" class="tag-decoration">release</div><div id="tag26061" onclick="CopyToClipboard('tag26061');return false;" class="tag-decoration">release-d5fe00b</div><div id="tag10140" onclick="CopyToClipboard('tag10140');return false;" class="tag-decoration">release-0.31.1</div><div id="tag31384" onclick="CopyToClipboard('tag31384');return false;" class="tag-decoration">release-v0</div><div id="tag7790" onclick="CopyToClipboard('tag7790');return false;" class="tag-decoration">release-v0.31</div><div id="tag18603" onclick="CopyToClipboard('tag18603');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/d5fe00b998f53286ad98e31f70f83a7025c1d053" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/30497260153" target="_blank">2026-07-29 22:45:37</a></td></tr>
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
