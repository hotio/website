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
<tr><td><div id="tag30568" onclick="CopyToClipboard('tag30568');return false;" class="tag-decoration">nightly</div><div id="tag11056" onclick="CopyToClipboard('tag11056');return false;" class="tag-decoration">nightly-b43e3cc</div><div id="tag23221" onclick="CopyToClipboard('tag23221');return false;" class="tag-decoration">nightly-1.6.3-beta.21</div><div id="tag20467" onclick="CopyToClipboard('tag20467');return false;" class="tag-decoration">nightly-v1</div><div id="tag22084" onclick="CopyToClipboard('tag22084');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag13915" onclick="CopyToClipboard('tag13915');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/b43e3cc82d61ee8adba17274937558dbe46d1593" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40573261076" target="_blank">2026-10-27 19:54:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5883" onclick="CopyToClipboard('tag5883');return false;" class="tag-decoration">release</div><div id="tag28405" onclick="CopyToClipboard('tag28405');return false;" class="tag-decoration">release-500fb54</div><div id="tag10503" onclick="CopyToClipboard('tag10503');return false;" class="tag-decoration">release-1.6.2</div><div id="tag3754" onclick="CopyToClipboard('tag3754');return false;" class="tag-decoration">release-v1</div><div id="tag25121" onclick="CopyToClipboard('tag25121');return false;" class="tag-decoration">release-v1.6</div><div id="tag5667" onclick="CopyToClipboard('tag5667');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/500fb5425b6a6360ba97f4138498b72605019455" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/40518166844" target="_blank">2026-10-27 14:07:44</a></td></tr>
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
