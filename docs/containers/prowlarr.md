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
<tr><td><div id="tag31344" onclick="CopyToClipboard('tag31344');return false;" class="tag-decoration">nightly</div><div id="tag25556" onclick="CopyToClipboard('tag25556');return false;" class="tag-decoration">nightly-7aa96c0</div><div id="tag21387" onclick="CopyToClipboard('tag21387');return false;" class="tag-decoration">nightly-2.6.5.5620</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/7aa96c083d6abb80acbc8542921217ab393de86d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/36760422241" target="_blank">2026-09-30 18:41:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24336" onclick="CopyToClipboard('tag24336');return false;" class="tag-decoration">release</div><div id="tag24487" onclick="CopyToClipboard('tag24487');return false;" class="tag-decoration">release-b62eccc</div><div id="tag17801" onclick="CopyToClipboard('tag17801');return false;" class="tag-decoration">release-2.6.5.5623</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/b62eccccf567e830965be64cca9a5b83052efe25" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/36760426238" target="_blank">2026-09-30 18:41:48</a></td></tr>
<tr><td><div id="tag25791" onclick="CopyToClipboard('tag25791');return false;" class="tag-decoration">testing</div><div id="tag6094" onclick="CopyToClipboard('tag6094');return false;" class="tag-decoration">testing-5432149</div><div id="tag24596" onclick="CopyToClipboard('tag24596');return false;" class="tag-decoration">testing-2.6.5.5623</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/5432149e830254aaea38eb928b2132707eb832a2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/36923228232" target="_blank">2026-10-01 20:39:48</a></td></tr>
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
