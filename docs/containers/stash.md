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
<tr><td><div id="tag31339" onclick="CopyToClipboard('tag31339');return false;" class="tag-decoration">nightly</div><div id="tag22738" onclick="CopyToClipboard('tag22738');return false;" class="tag-decoration">nightly-eeea3c7</div><div id="tag30261" onclick="CopyToClipboard('tag30261');return false;" class="tag-decoration">nightly-944dd69436b7a944cd59e15871d31032fb3fa58a</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/eeea3c7bad9f73c38136269196352a5797c1bfb8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/41974543678" target="_blank">2026-11-05 05:31:28</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28407" onclick="CopyToClipboard('tag28407');return false;" class="tag-decoration">release</div><div id="tag14546" onclick="CopyToClipboard('tag14546');return false;" class="tag-decoration">release-58411c1</div><div id="tag10484" onclick="CopyToClipboard('tag10484');return false;" class="tag-decoration">release-0.32.0</div><div id="tag8391" onclick="CopyToClipboard('tag8391');return false;" class="tag-decoration">release-v0</div><div id="tag13696" onclick="CopyToClipboard('tag13696');return false;" class="tag-decoration">release-v0.32</div><div id="tag27339" onclick="CopyToClipboard('tag27339');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/58411c199d0a135bd25f1bab59271003b08a73ba" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/41763043406" target="_blank">2026-11-04 02:47:45</a></td></tr>
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
