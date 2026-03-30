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
<tr><td><div id="tag32312" onclick="CopyToClipboard('tag32312');return false;" class="tag-decoration">nightly</div><div id="tag19940" onclick="CopyToClipboard('tag19940');return false;" class="tag-decoration">nightly-4a5c0a8</div><div id="tag30521" onclick="CopyToClipboard('tag30521');return false;" class="tag-decoration">nightly-2da8074316f4f362eeb95bd7d33053e843a117e7</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/4a5c0a8627b182c287dfcb070a18787a75aef306" target="_blank">Version update: 8af2cfe5255f70d8bc0864e3a275571d2db96de0 => 2da8074316f4f362eeb95bd7d33053e843a117e7</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23726747907" target="_blank">2026-03-30 03:33:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31129" onclick="CopyToClipboard('tag31129');return false;" class="tag-decoration">release</div><div id="tag13475" onclick="CopyToClipboard('tag13475');return false;" class="tag-decoration">release-203417b</div><div id="tag32213" onclick="CopyToClipboard('tag32213');return false;" class="tag-decoration">release-0.30.1</div><div id="tag29727" onclick="CopyToClipboard('tag29727');return false;" class="tag-decoration">release-v0</div><div id="tag16028" onclick="CopyToClipboard('tag16028');return false;" class="tag-decoration">release-v0.30</div><div id="tag26632" onclick="CopyToClipboard('tag26632');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/203417ba2ef146280b5620b2a68e302589ac9364" target="_blank">Version update: 0.30.1 => 0.30.1</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23201650964" target="_blank">2026-03-17 15:18:16</a></td></tr>
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
