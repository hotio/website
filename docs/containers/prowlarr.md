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
<tr><td><div id="tag8424" onclick="CopyToClipboard('tag8424');return false;" class="tag-decoration">nightly</div><div id="tag29895" onclick="CopyToClipboard('tag29895');return false;" class="tag-decoration">nightly-7aa96c0</div><div id="tag21533" onclick="CopyToClipboard('tag21533');return false;" class="tag-decoration">nightly-2.6.5.5620</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/7aa96c083d6abb80acbc8542921217ab393de86d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/36760422241" target="_blank">2026-09-30 18:41:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22466" onclick="CopyToClipboard('tag22466');return false;" class="tag-decoration">release</div><div id="tag13779" onclick="CopyToClipboard('tag13779');return false;" class="tag-decoration">release-b62eccc</div><div id="tag30581" onclick="CopyToClipboard('tag30581');return false;" class="tag-decoration">release-2.6.5.5623</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/b62eccccf567e830965be64cca9a5b83052efe25" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/36760426238" target="_blank">2026-09-30 18:41:48</a></td></tr>
<tr><td><div id="tag27469" onclick="CopyToClipboard('tag27469');return false;" class="tag-decoration">testing</div><div id="tag1203" onclick="CopyToClipboard('tag1203');return false;" class="tag-decoration">testing-4ae1639</div><div id="tag18326" onclick="CopyToClipboard('tag18326');return false;" class="tag-decoration">testing-2.6.5.5623</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/4ae16390058c84ae1400205deffd3e2c9ec82621" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/36760415273" target="_blank">2026-09-30 18:41:42</a></td></tr>
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
