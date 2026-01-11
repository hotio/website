---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag32051" onclick="CopyToClipboard('tag32051');return false;" class="tag-decoration">nightly</div><div id="tag12313" onclick="CopyToClipboard('tag12313');return false;" class="tag-decoration">nightly-1.5.5-beta.3</div><div id="tag26357" onclick="CopyToClipboard('tag26357');return false;" class="tag-decoration">nightly-d4e5c0c</div><div id="tag5979" onclick="CopyToClipboard('tag5979');return false;" class="tag-decoration">nightly-v1</div><div id="tag8295" onclick="CopyToClipboard('tag8295');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag15999" onclick="CopyToClipboard('tag15999');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/d4e5c0c01161fa2ec99ef50267f0f88d07d8014d" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20895138465" target="_blank">2026-01-11 12:28:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18616" onclick="CopyToClipboard('tag18616');return false;" class="tag-decoration">release</div><div id="tag27422" onclick="CopyToClipboard('tag27422');return false;" class="tag-decoration">release-1.5.4</div><div id="tag1631" onclick="CopyToClipboard('tag1631');return false;" class="tag-decoration">release-7c42100</div><div id="tag29815" onclick="CopyToClipboard('tag29815');return false;" class="tag-decoration">release-v1</div><div id="tag17273" onclick="CopyToClipboard('tag17273');return false;" class="tag-decoration">release-v1.5</div><div id="tag29284" onclick="CopyToClipboard('tag29284');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/7c42100a2ab2e78ee79db82d6eac0e1d333bc4f0" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20895138605" target="_blank">2026-01-11 12:28:40</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
