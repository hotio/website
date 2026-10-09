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
<tr><td><div id="tag359" onclick="CopyToClipboard('tag359');return false;" class="tag-decoration">nightly</div><div id="tag25743" onclick="CopyToClipboard('tag25743');return false;" class="tag-decoration">nightly-8a318ad</div><div id="tag11977" onclick="CopyToClipboard('tag11977');return false;" class="tag-decoration">nightly-2.6.5.5659</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/8a318ad2c6ae4b0a8d0feb3838a3542c9661a8ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/37941452073" target="_blank">2026-10-09 14:04:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10144" onclick="CopyToClipboard('tag10144');return false;" class="tag-decoration">release</div><div id="tag32627" onclick="CopyToClipboard('tag32627');return false;" class="tag-decoration">release-1ac3433</div><div id="tag6697" onclick="CopyToClipboard('tag6697');return false;" class="tag-decoration">release-2.6.5.5623</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/1ac3433374af563ed2e982a82368d148ceb7899a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/37590216644" target="_blank">2026-10-07 07:53:57</a></td></tr>
<tr><td><div id="tag5382" onclick="CopyToClipboard('tag5382');return false;" class="tag-decoration">testing</div><div id="tag9007" onclick="CopyToClipboard('tag9007');return false;" class="tag-decoration">testing-04c0e6b</div><div id="tag19693" onclick="CopyToClipboard('tag19693');return false;" class="tag-decoration">testing-2.6.5.5623</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/04c0e6b2f337a9db1eba6016111f26b351522981" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/37555498003" target="_blank">2026-10-07 01:07:10</a></td></tr>
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
