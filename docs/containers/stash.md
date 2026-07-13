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
<tr><td><div id="tag19217" onclick="CopyToClipboard('tag19217');return false;" class="tag-decoration">nightly</div><div id="tag3143" onclick="CopyToClipboard('tag3143');return false;" class="tag-decoration">nightly-f6bb8e0</div><div id="tag25102" onclick="CopyToClipboard('tag25102');return false;" class="tag-decoration">nightly-d4e02f754712f67ee1307e444d58fa8039b39e38</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/f6bb8e0e8fdc2f5830e49bee65fe8405351c51bc" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29255895072" target="_blank">2026-07-13 13:57:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag823" onclick="CopyToClipboard('tag823');return false;" class="tag-decoration">release</div><div id="tag9007" onclick="CopyToClipboard('tag9007');return false;" class="tag-decoration">release-71c6337</div><div id="tag10695" onclick="CopyToClipboard('tag10695');return false;" class="tag-decoration">release-0.31.1</div><div id="tag22217" onclick="CopyToClipboard('tag22217');return false;" class="tag-decoration">release-v0</div><div id="tag12903" onclick="CopyToClipboard('tag12903');return false;" class="tag-decoration">release-v0.31</div><div id="tag12220" onclick="CopyToClipboard('tag12220');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/71c633710684040fb219b88dfcbbfa2b0adf9d3f" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29048765808" target="_blank">2026-07-09 20:41:08</a></td></tr>
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
