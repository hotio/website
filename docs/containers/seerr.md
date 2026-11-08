---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag30321" onclick="CopyToClipboard('tag30321');return false;" class="tag-decoration">nightly</div><div id="tag25497" onclick="CopyToClipboard('tag25497');return false;" class="tag-decoration">nightly-bf197dd</div><div id="tag7554" onclick="CopyToClipboard('tag7554');return false;" class="tag-decoration">nightly-58318ecf5d0c66c677550ff5ef02dc8db2f7a343</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/bf197dd861e02edfcc58198b421566de584d4759" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/42500856270" target="_blank">2026-11-08 16:37:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13591" onclick="CopyToClipboard('tag13591');return false;" class="tag-decoration">release</div><div id="tag17531" onclick="CopyToClipboard('tag17531');return false;" class="tag-decoration">release-582fcb1</div><div id="tag14129" onclick="CopyToClipboard('tag14129');return false;" class="tag-decoration">release-3.5.1</div><div id="tag30843" onclick="CopyToClipboard('tag30843');return false;" class="tag-decoration">release-v3</div><div id="tag25032" onclick="CopyToClipboard('tag25032');return false;" class="tag-decoration">release-v3.5</div><div id="tag10295" onclick="CopyToClipboard('tag10295');return false;" class="tag-decoration">release-v3.5.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/582fcb115f50656e05262c57c3f0aca6d22760a8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/42320133641" target="_blank">2026-11-07 00:45:12</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
