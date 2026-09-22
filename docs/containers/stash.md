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
<tr><td><div id="tag15130" onclick="CopyToClipboard('tag15130');return false;" class="tag-decoration">nightly</div><div id="tag17447" onclick="CopyToClipboard('tag17447');return false;" class="tag-decoration">nightly-09e0253</div><div id="tag5292" onclick="CopyToClipboard('tag5292');return false;" class="tag-decoration">nightly-b872e360f05963f59d45605d1e638de88511dc47</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/09e0253dac42b18592258c4a55f548222322d817" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/35697215483" target="_blank">2026-09-22 06:57:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4428" onclick="CopyToClipboard('tag4428');return false;" class="tag-decoration">release</div><div id="tag32486" onclick="CopyToClipboard('tag32486');return false;" class="tag-decoration">release-f3e30ea</div><div id="tag16227" onclick="CopyToClipboard('tag16227');return false;" class="tag-decoration">release-0.31.1</div><div id="tag18291" onclick="CopyToClipboard('tag18291');return false;" class="tag-decoration">release-v0</div><div id="tag24515" onclick="CopyToClipboard('tag24515');return false;" class="tag-decoration">release-v0.31</div><div id="tag17229" onclick="CopyToClipboard('tag17229');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/f3e30eaedc2655dd207fb2ef838999ade2ac108d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/35697215938" target="_blank">2026-09-22 06:57:23</a></td></tr>
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
