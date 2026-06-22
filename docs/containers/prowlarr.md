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
<tr><td><div id="tag23151" onclick="CopyToClipboard('tag23151');return false;" class="tag-decoration">nightly</div><div id="tag20029" onclick="CopyToClipboard('tag20029');return false;" class="tag-decoration">nightly-7e8ddb7</div><div id="tag26545" onclick="CopyToClipboard('tag26545');return false;" class="tag-decoration">nightly-2.5.0.5422</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/7e8ddb7d15e8bf1810f0f3bac612ce564b303e36" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/27982157257" target="_blank">2026-06-22 20:33:55</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13903" onclick="CopyToClipboard('tag13903');return false;" class="tag-decoration">release</div><div id="tag1587" onclick="CopyToClipboard('tag1587');return false;" class="tag-decoration">release-cc3fa59</div><div id="tag16175" onclick="CopyToClipboard('tag16175');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/cc3fa5983f1182168784e5f0556f4aeb5448d1dc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/27982154251" target="_blank">2026-06-22 20:33:54</a></td></tr>
<tr><td><div id="tag27944" onclick="CopyToClipboard('tag27944');return false;" class="tag-decoration">testing</div><div id="tag29556" onclick="CopyToClipboard('tag29556');return false;" class="tag-decoration">testing-c77582f</div><div id="tag9866" onclick="CopyToClipboard('tag9866');return false;" class="tag-decoration">testing-2.4.0.5397</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/c77582f3fa35fd845a191a9d1a736ea4a07d36d6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/27982158620" target="_blank">2026-06-22 20:33:57</a></td></tr>
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
