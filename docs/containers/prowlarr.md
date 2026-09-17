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
<tr><td><div id="tag30010" onclick="CopyToClipboard('tag30010');return false;" class="tag-decoration">nightly</div><div id="tag4654" onclick="CopyToClipboard('tag4654');return false;" class="tag-decoration">nightly-2277c00</div><div id="tag17592" onclick="CopyToClipboard('tag17592');return false;" class="tag-decoration">nightly-2.6.5.5620</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/2277c00a731e96dbdb7131f9a7c8af295dcb8824" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/35255277903" target="_blank">2026-09-17 17:51:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29286" onclick="CopyToClipboard('tag29286');return false;" class="tag-decoration">release</div><div id="tag4499" onclick="CopyToClipboard('tag4499');return false;" class="tag-decoration">release-8b1efaa</div><div id="tag7510" onclick="CopyToClipboard('tag7510');return false;" class="tag-decoration">release-2.6.5.5623</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/8b1efaa24301d829a0878b02aa6fa09ea982ff6a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/35255281346" target="_blank">2026-09-17 17:51:29</a></td></tr>
<tr><td><div id="tag31262" onclick="CopyToClipboard('tag31262');return false;" class="tag-decoration">testing</div><div id="tag19464" onclick="CopyToClipboard('tag19464');return false;" class="tag-decoration">testing-971103e</div><div id="tag11641" onclick="CopyToClipboard('tag11641');return false;" class="tag-decoration">testing-2.6.5.5623</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/971103e4a8f568831287a5254888eda1e08edf56" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/35255282967" target="_blank">2026-09-17 17:51:30</a></td></tr>
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
