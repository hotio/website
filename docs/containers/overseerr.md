---
hide:
  - toc
title: hotio/overseerr
status: deprecated
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/overseerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/overseerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sct/overseerr){ class="header-links" target="_blank" rel="noopener" }  

!!! warning
     Please migrate from `hotio/overseerr` to `hotio/seerr`. Seerr v3 has been released, so this should be safe to do.

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
<tr><td><div id="tag16566" onclick="CopyToClipboard('tag16566');return false;" class="tag-decoration">nightly</div><div id="tag824" onclick="CopyToClipboard('tag824');return false;" class="tag-decoration">nightly-c1cf93c</div><div id="tag28141" onclick="CopyToClipboard('tag28141');return false;" class="tag-decoration">nightly-b0a15d3809554610cd835b3e2474d5c6663cb8a9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/overseerr/commit/c1cf93c049d69061840f1c83da7debd52bc35968" target="_blank">Version update: ccf45eb8b9f9d18d8e06ccada222e3cff6dec695 => b0a15d3809554610cd835b3e2474d5c6663cb8a9</a></td><td><a href="https://github.com/hotio/overseerr/actions/runs/22023836683" target="_blank">2026-02-14 20:32:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31555" onclick="CopyToClipboard('tag31555');return false;" class="tag-decoration">release</div><div id="tag19913" onclick="CopyToClipboard('tag19913');return false;" class="tag-decoration">release-8e70e36</div><div id="tag20639" onclick="CopyToClipboard('tag20639');return false;" class="tag-decoration">release-1.34.0</div><div id="tag26556" onclick="CopyToClipboard('tag26556');return false;" class="tag-decoration">release-v1</div><div id="tag10526" onclick="CopyToClipboard('tag10526');return false;" class="tag-decoration">release-v1.34</div><div id="tag23588" onclick="CopyToClipboard('tag23588');return false;" class="tag-decoration">release-v1.34.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/overseerr/commit/8e70e36d2cf7af1d5cba58d5de67aa4af0c32090" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/overseerr/actions/runs/21428852239" target="_blank">2026-01-28 07:14:48</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="overseerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/overseerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      overseerr:
        container_name: overseerr
        image: ghcr.io/hotio/overseerr
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
