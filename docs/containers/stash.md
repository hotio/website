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
<tr><td><div id="tag19860" onclick="CopyToClipboard('tag19860');return false;" class="tag-decoration">nightly</div><div id="tag27175" onclick="CopyToClipboard('tag27175');return false;" class="tag-decoration">nightly-43017bb</div><div id="tag10500" onclick="CopyToClipboard('tag10500');return false;" class="tag-decoration">nightly-fafb0d5ce30d99a4b6bc44d1ed9a008a96982ced</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/43017bbae56a3c54d128a7b09177e8217aefee3a" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/45523676428" target="_blank">2026-11-25 01:09:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18090" onclick="CopyToClipboard('tag18090');return false;" class="tag-decoration">release</div><div id="tag21312" onclick="CopyToClipboard('tag21312');return false;" class="tag-decoration">release-b932fca</div><div id="tag16417" onclick="CopyToClipboard('tag16417');return false;" class="tag-decoration">release-0.32.0</div><div id="tag22587" onclick="CopyToClipboard('tag22587');return false;" class="tag-decoration">release-v0</div><div id="tag23229" onclick="CopyToClipboard('tag23229');return false;" class="tag-decoration">release-v0.32</div><div id="tag14564" onclick="CopyToClipboard('tag14564');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/b932fca34ec3be2b78a5a4e7ed486abe3b3ea1eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/45334843185" target="_blank">2026-11-24 05:39:22</a></td></tr>
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
