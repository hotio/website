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
<tr><td><div id="tag31235" onclick="CopyToClipboard('tag31235');return false;" class="tag-decoration">nightly</div><div id="tag22937" onclick="CopyToClipboard('tag22937');return false;" class="tag-decoration">nightly-4e27ea6</div><div id="tag24632" onclick="CopyToClipboard('tag24632');return false;" class="tag-decoration">nightly-bdee3c83d33d802765332967f09db756e2877bcc</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/4e27ea6344e1603d72088aed841656b8e9a303a3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/38626712697" target="_blank">2026-10-14 19:48:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4490" onclick="CopyToClipboard('tag4490');return false;" class="tag-decoration">release</div><div id="tag11149" onclick="CopyToClipboard('tag11149');return false;" class="tag-decoration">release-d01a184</div><div id="tag28006" onclick="CopyToClipboard('tag28006');return false;" class="tag-decoration">release-0.31.1</div><div id="tag16144" onclick="CopyToClipboard('tag16144');return false;" class="tag-decoration">release-v0</div><div id="tag2746" onclick="CopyToClipboard('tag2746');return false;" class="tag-decoration">release-v0.31</div><div id="tag2450" onclick="CopyToClipboard('tag2450');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/d01a18471054694e749700c829ed1e1872b1d97d" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/38298517519" target="_blank">2026-10-12 19:34:09</a></td></tr>
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
