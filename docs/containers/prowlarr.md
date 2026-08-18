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
<tr><td><div id="tag25093" onclick="CopyToClipboard('tag25093');return false;" class="tag-decoration">nightly</div><div id="tag29906" onclick="CopyToClipboard('tag29906');return false;" class="tag-decoration">nightly-072a173</div><div id="tag17218" onclick="CopyToClipboard('tag17218');return false;" class="tag-decoration">nightly-2.6.2.5548</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/072a17344092c668f1175b5e43f047bb07816b2f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/32147911163" target="_blank">2026-08-18 14:22:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25843" onclick="CopyToClipboard('tag25843');return false;" class="tag-decoration">release</div><div id="tag7013" onclick="CopyToClipboard('tag7013');return false;" class="tag-decoration">release-5b76a01</div><div id="tag7260" onclick="CopyToClipboard('tag7260');return false;" class="tag-decoration">release-2.5.2.5491</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/5b76a01dbb821dbd796d75f7e2a4cac2ebe45aae" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/32147915491" target="_blank">2026-08-18 14:22:16</a></td></tr>
<tr><td><div id="tag21340" onclick="CopyToClipboard('tag21340');return false;" class="tag-decoration">testing</div><div id="tag15547" onclick="CopyToClipboard('tag15547');return false;" class="tag-decoration">testing-4066257</div><div id="tag19824" onclick="CopyToClipboard('tag19824');return false;" class="tag-decoration">testing-2.6.1.5509</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/40662574bcb3790ab7ab76a8d963e874ba5ed001" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/32147916916" target="_blank">2026-08-18 14:22:17</a></td></tr>
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
