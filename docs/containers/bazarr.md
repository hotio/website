---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag1351" onclick="CopyToClipboard('tag1351');return false;" class="tag-decoration">nightly</div><div id="tag5134" onclick="CopyToClipboard('tag5134');return false;" class="tag-decoration">nightly-07c111c</div><div id="tag8284" onclick="CopyToClipboard('tag8284');return false;" class="tag-decoration">nightly-1.6.3-beta.24</div><div id="tag22485" onclick="CopyToClipboard('tag22485');return false;" class="tag-decoration">nightly-v1</div><div id="tag13357" onclick="CopyToClipboard('tag13357');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag17255" onclick="CopyToClipboard('tag17255');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/07c111cd4177c4bf87d34205f2c99a2d4a733906" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/41555944538" target="_blank">2026-11-03 00:52:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22387" onclick="CopyToClipboard('tag22387');return false;" class="tag-decoration">release</div><div id="tag6260" onclick="CopyToClipboard('tag6260');return false;" class="tag-decoration">release-c6a0455</div><div id="tag27493" onclick="CopyToClipboard('tag27493');return false;" class="tag-decoration">release-1.6.2</div><div id="tag23463" onclick="CopyToClipboard('tag23463');return false;" class="tag-decoration">release-v1</div><div id="tag29753" onclick="CopyToClipboard('tag29753');return false;" class="tag-decoration">release-v1.6</div><div id="tag3527" onclick="CopyToClipboard('tag3527');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/c6a04553b346a9111194ee7e67a51c91254225a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/41555959585" target="_blank">2026-11-03 00:52:41</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
