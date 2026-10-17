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
<tr><td><div id="tag13307" onclick="CopyToClipboard('tag13307');return false;" class="tag-decoration">nightly</div><div id="tag20150" onclick="CopyToClipboard('tag20150');return false;" class="tag-decoration">nightly-9599d17</div><div id="tag29617" onclick="CopyToClipboard('tag29617');return false;" class="tag-decoration">nightly-bdee3c83d33d802765332967f09db756e2877bcc</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/9599d17469c5eaf1036d059836a4def485c21167" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/39022559169" target="_blank">2026-10-17 09:49:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16379" onclick="CopyToClipboard('tag16379');return false;" class="tag-decoration">release</div><div id="tag13412" onclick="CopyToClipboard('tag13412');return false;" class="tag-decoration">release-6a1365f</div><div id="tag20912" onclick="CopyToClipboard('tag20912');return false;" class="tag-decoration">release-0.31.1</div><div id="tag27303" onclick="CopyToClipboard('tag27303');return false;" class="tag-decoration">release-v0</div><div id="tag28087" onclick="CopyToClipboard('tag28087');return false;" class="tag-decoration">release-v0.31</div><div id="tag3514" onclick="CopyToClipboard('tag3514');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/6a1365f438d14e756a9c55648a8e539581bea6be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/38663387937" target="_blank">2026-10-15 01:01:59</a></td></tr>
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
