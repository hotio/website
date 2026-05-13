---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag15308" onclick="CopyToClipboard('tag15308');return false;" class="tag-decoration">nightly</div><div id="tag10341" onclick="CopyToClipboard('tag10341');return false;" class="tag-decoration">nightly-7a3b529</div><div id="tag10458" onclick="CopyToClipboard('tag10458');return false;" class="tag-decoration">nightly-080c68a778032edef17a69edb06ef12a20ca3aa2</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/7a3b529b1dd1ac53929a1ee240782e43b5e302f5" target="_blank">Version update: 8759263e124f8cbf7990c9dfcb9816e94dee56a8 => 080c68a778032edef17a69edb06ef12a20ca3aa2</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25828635527" target="_blank">2026-05-13 21:54:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24654" onclick="CopyToClipboard('tag24654');return false;" class="tag-decoration">release</div><div id="tag14625" onclick="CopyToClipboard('tag14625');return false;" class="tag-decoration">release-515b38f</div><div id="tag13055" onclick="CopyToClipboard('tag13055');return false;" class="tag-decoration">release-3.2.0</div><div id="tag12217" onclick="CopyToClipboard('tag12217');return false;" class="tag-decoration">release-v3</div><div id="tag1879" onclick="CopyToClipboard('tag1879');return false;" class="tag-decoration">release-v3.2</div><div id="tag5388" onclick="CopyToClipboard('tag5388');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/515b38fe138874f893bf72af5f6e90d4e0996d96" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25715025698" target="_blank">2026-05-12 05:18:50</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
