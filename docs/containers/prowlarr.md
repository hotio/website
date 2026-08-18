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
<tr><td><div id="tag14658" onclick="CopyToClipboard('tag14658');return false;" class="tag-decoration">nightly</div><div id="tag17644" onclick="CopyToClipboard('tag17644');return false;" class="tag-decoration">nightly-072a173</div><div id="tag17188" onclick="CopyToClipboard('tag17188');return false;" class="tag-decoration">nightly-2.6.2.5548</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/072a17344092c668f1175b5e43f047bb07816b2f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/32147911163" target="_blank">2026-08-18 14:22:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5215" onclick="CopyToClipboard('tag5215');return false;" class="tag-decoration">release</div><div id="tag11005" onclick="CopyToClipboard('tag11005');return false;" class="tag-decoration">release-93fdaad</div><div id="tag31422" onclick="CopyToClipboard('tag31422');return false;" class="tag-decoration">release-2.5.2.5491</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/93fdaad157681572c75b9654c65b003a75573bf3" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/32044772403" target="_blank">2026-08-17 16:14:37</a></td></tr>
<tr><td><div id="tag191" onclick="CopyToClipboard('tag191');return false;" class="tag-decoration">testing</div><div id="tag7529" onclick="CopyToClipboard('tag7529');return false;" class="tag-decoration">testing-8c2990c</div><div id="tag4441" onclick="CopyToClipboard('tag4441');return false;" class="tag-decoration">testing-2.6.1.5509</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/8c2990c2e79dc74d6e1ca46d6d2ece5de7f461f6" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/32049675108" target="_blank">2026-08-17 17:17:32</a></td></tr>
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
