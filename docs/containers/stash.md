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
<tr><td><div id="tag13826" onclick="CopyToClipboard('tag13826');return false;" class="tag-decoration">nightly</div><div id="tag29049" onclick="CopyToClipboard('tag29049');return false;" class="tag-decoration">nightly-e6b9d4f</div><div id="tag13504" onclick="CopyToClipboard('tag13504');return false;" class="tag-decoration">nightly-d4e02f754712f67ee1307e444d58fa8039b39e38</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/e6b9d4f6f2c013c8412dee406eda8ddd6f676d08" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/28608938063" target="_blank">2026-07-02 17:23:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25881" onclick="CopyToClipboard('tag25881');return false;" class="tag-decoration">release</div><div id="tag28677" onclick="CopyToClipboard('tag28677');return false;" class="tag-decoration">release-37b8ee2</div><div id="tag32717" onclick="CopyToClipboard('tag32717');return false;" class="tag-decoration">release-0.31.1</div><div id="tag12759" onclick="CopyToClipboard('tag12759');return false;" class="tag-decoration">release-v0</div><div id="tag20755" onclick="CopyToClipboard('tag20755');return false;" class="tag-decoration">release-v0.31</div><div id="tag2677" onclick="CopyToClipboard('tag2677');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/37b8ee2aa15e8d53aed562393511d94ec5512cf4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/28581623393" target="_blank">2026-07-02 09:59:33</a></td></tr>
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
