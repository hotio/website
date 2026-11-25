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
<tr><td><div id="tag14549" onclick="CopyToClipboard('tag14549');return false;" class="tag-decoration">nightly</div><div id="tag23414" onclick="CopyToClipboard('tag23414');return false;" class="tag-decoration">nightly-9128c5b</div><div id="tag15614" onclick="CopyToClipboard('tag15614');return false;" class="tag-decoration">nightly-fa96d925c2e3db86859d04995b51cf7cda473d34</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/9128c5badd394a04c375f14e8dcc7fc6a1202ba4" target="_blank">Modified: meta.json, packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/45596750822" target="_blank">2026-11-25 10:37:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21664" onclick="CopyToClipboard('tag21664');return false;" class="tag-decoration">release</div><div id="tag26002" onclick="CopyToClipboard('tag26002');return false;" class="tag-decoration">release-b4cbeb0</div><div id="tag31039" onclick="CopyToClipboard('tag31039');return false;" class="tag-decoration">release-0.32.0</div><div id="tag31276" onclick="CopyToClipboard('tag31276');return false;" class="tag-decoration">release-v0</div><div id="tag19115" onclick="CopyToClipboard('tag19115');return false;" class="tag-decoration">release-v0.32</div><div id="tag14076" onclick="CopyToClipboard('tag14076');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/b4cbeb09330096fbd78597344458c408b5b2c604" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/45693324142" target="_blank">2026-11-25 20:16:09</a></td></tr>
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
