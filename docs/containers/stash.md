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
<tr><td><div id="tag6241" onclick="CopyToClipboard('tag6241');return false;" class="tag-decoration">nightly</div><div id="tag17124" onclick="CopyToClipboard('tag17124');return false;" class="tag-decoration">nightly-eaf1546</div><div id="tag7869" onclick="CopyToClipboard('tag7869');return false;" class="tag-decoration">nightly-6ba61d795af19fc659a3c6ad59c5e2fc64fc6769</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/eaf15466674d2de97b236a5f0bd36644f5bd7eee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/31018555361" target="_blank">2026-08-05 15:05:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31606" onclick="CopyToClipboard('tag31606');return false;" class="tag-decoration">release</div><div id="tag7443" onclick="CopyToClipboard('tag7443');return false;" class="tag-decoration">release-3f85216</div><div id="tag22892" onclick="CopyToClipboard('tag22892');return false;" class="tag-decoration">release-0.31.1</div><div id="tag15483" onclick="CopyToClipboard('tag15483');return false;" class="tag-decoration">release-v0</div><div id="tag31810" onclick="CopyToClipboard('tag31810');return false;" class="tag-decoration">release-v0.31</div><div id="tag1925" onclick="CopyToClipboard('tag1925');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/3f85216485e96b9a320c4c12fb18e6ed6f823f39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/30888064369" target="_blank">2026-08-04 07:30:05</a></td></tr>
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
