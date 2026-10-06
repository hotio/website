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
<tr><td><div id="tag27468" onclick="CopyToClipboard('tag27468');return false;" class="tag-decoration">nightly</div><div id="tag25076" onclick="CopyToClipboard('tag25076');return false;" class="tag-decoration">nightly-c80ef64</div><div id="tag16648" onclick="CopyToClipboard('tag16648');return false;" class="tag-decoration">nightly-2.6.5.5649</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/c80ef64f2b772a6971cbe89b5d42f03a1f050507" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/37495236215" target="_blank">2026-10-06 16:22:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17476" onclick="CopyToClipboard('tag17476');return false;" class="tag-decoration">release</div><div id="tag16744" onclick="CopyToClipboard('tag16744');return false;" class="tag-decoration">release-a63b111</div><div id="tag325" onclick="CopyToClipboard('tag325');return false;" class="tag-decoration">release-2.6.5.5623</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/a63b111f2a56b9a0ed56bac6e45743188215a680" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/37495244276" target="_blank">2026-10-06 16:22:49</a></td></tr>
<tr><td><div id="tag18073" onclick="CopyToClipboard('tag18073');return false;" class="tag-decoration">testing</div><div id="tag3733" onclick="CopyToClipboard('tag3733');return false;" class="tag-decoration">testing-0341010</div><div id="tag18188" onclick="CopyToClipboard('tag18188');return false;" class="tag-decoration">testing-2.6.5.5623</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/03410107566a65cd2d9d2a482f2c7c372c53b8d4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/37495234867" target="_blank">2026-10-06 16:22:44</a></td></tr>
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
