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
<tr><td><div id="tag4874" onclick="CopyToClipboard('tag4874');return false;" class="tag-decoration">nightly</div><div id="tag4005" onclick="CopyToClipboard('tag4005');return false;" class="tag-decoration">nightly-2.3.2.5251</div><div id="tag3602" onclick="CopyToClipboard('tag3602');return false;" class="tag-decoration">nightly-255a6cf</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/255a6cfd2e1eaf1c1bd0e8dd37c6cca3db51dabc" target="_blank">Version update: 2.3.2.5250 => 2.3.2.5251</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20899026757" target="_blank">2026-01-11 17:24:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9709" onclick="CopyToClipboard('tag9709');return false;" class="tag-decoration">release</div><div id="tag18093" onclick="CopyToClipboard('tag18093');return false;" class="tag-decoration">release-2.3.0.5236</div><div id="tag23118" onclick="CopyToClipboard('tag23118');return false;" class="tag-decoration">release-3d8016b</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/3d8016b73373ea40a7b704ac10c4ab202abe019b" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20898162400" target="_blank">2026-01-11 16:17:31</a></td></tr>
<tr><td><div id="tag15564" onclick="CopyToClipboard('tag15564');return false;" class="tag-decoration">testing</div><div id="tag15111" onclick="CopyToClipboard('tag15111');return false;" class="tag-decoration">testing-2.3.2.5245</div><div id="tag15277" onclick="CopyToClipboard('tag15277');return false;" class="tag-decoration">testing-359b7bb</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/359b7bb5d898404e0207ac2b813f72f42bd65daf" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20898162621" target="_blank">2026-01-11 16:17:32</a></td></tr>
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

--8<-- "includes/wireguard.md"
