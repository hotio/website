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
<tr><td><div id="tag1734" onclick="CopyToClipboard('tag1734');return false;" class="tag-decoration">nightly</div><div id="tag5263" onclick="CopyToClipboard('tag5263');return false;" class="tag-decoration">nightly-20f72fb</div><div id="tag14064" onclick="CopyToClipboard('tag14064');return false;" class="tag-decoration">nightly-2.6.6.5717</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/20f72fb0f1d96d939869a2448c4854b783099eac" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/40230458073" target="_blank">2026-10-25 20:22:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7729" onclick="CopyToClipboard('tag7729');return false;" class="tag-decoration">release</div><div id="tag1174" onclick="CopyToClipboard('tag1174');return false;" class="tag-decoration">release-87c7fa6</div><div id="tag2503" onclick="CopyToClipboard('tag2503');return false;" class="tag-decoration">release-2.6.5.5623</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/87c7fa65b1d06a498f9d97624c7365c0866c1232" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/40230454249" target="_blank">2026-10-25 20:22:21</a></td></tr>
<tr><td><div id="tag1554" onclick="CopyToClipboard('tag1554');return false;" class="tag-decoration">testing</div><div id="tag21281" onclick="CopyToClipboard('tag21281');return false;" class="tag-decoration">testing-bf8c059</div><div id="tag4189" onclick="CopyToClipboard('tag4189');return false;" class="tag-decoration">testing-2.6.6.5717</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/bf8c059d310a9e047d1ff60edd73f5fb72568951" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/40409583907" target="_blank">2026-10-26 22:04:32</a></td></tr>
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
