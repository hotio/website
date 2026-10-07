---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag19969" onclick="CopyToClipboard('tag19969');return false;" class="tag-decoration">nightly</div><div id="tag1931" onclick="CopyToClipboard('tag1931');return false;" class="tag-decoration">nightly-557d201</div><div id="tag8021" onclick="CopyToClipboard('tag8021');return false;" class="tag-decoration">nightly-2.6.5.5649</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/557d2019bee9d3e8f3b4405655d0826efa398b91" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/37555502006" target="_blank">2026-10-07 01:07:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23297" onclick="CopyToClipboard('tag23297');return false;" class="tag-decoration">release</div><div id="tag4527" onclick="CopyToClipboard('tag4527');return false;" class="tag-decoration">release-1ac3433</div><div id="tag24430" onclick="CopyToClipboard('tag24430');return false;" class="tag-decoration">release-2.6.5.5623</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/1ac3433374af563ed2e982a82368d148ceb7899a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/37590216644" target="_blank">2026-10-07 07:53:57</a></td></tr>
<tr><td><div id="tag17281" onclick="CopyToClipboard('tag17281');return false;" class="tag-decoration">testing</div><div id="tag23209" onclick="CopyToClipboard('tag23209');return false;" class="tag-decoration">testing-04c0e6b</div><div id="tag20562" onclick="CopyToClipboard('tag20562');return false;" class="tag-decoration">testing-2.6.5.5623</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/04c0e6b2f337a9db1eba6016111f26b351522981" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/37555498003" target="_blank">2026-10-07 01:07:10</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
