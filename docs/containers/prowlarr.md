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
<tr><td><div id="tag20228" onclick="CopyToClipboard('tag20228');return false;" class="tag-decoration">nightly</div><div id="tag17508" onclick="CopyToClipboard('tag17508');return false;" class="tag-decoration">nightly-dafd0d2</div><div id="tag4987" onclick="CopyToClipboard('tag4987');return false;" class="tag-decoration">nightly-2.4.0.5368</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/dafd0d23ed9e9fa5f4bcd59e503d93b2922155f0" target="_blank">Version update: 2.3.7.5365 => 2.4.0.5368</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25615144349" target="_blank">2026-05-10 00:05:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12090" onclick="CopyToClipboard('tag12090');return false;" class="tag-decoration">release</div><div id="tag30236" onclick="CopyToClipboard('tag30236');return false;" class="tag-decoration">release-9c0f99f</div><div id="tag3378" onclick="CopyToClipboard('tag3378');return false;" class="tag-decoration">release-2.3.5.5327</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/9c0f99f2f2b29317f1b85e1473297fcf26555834" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25605053667" target="_blank">2026-05-09 15:43:44</a></td></tr>
<tr><td><div id="tag31322" onclick="CopyToClipboard('tag31322');return false;" class="tag-decoration">testing</div><div id="tag30746" onclick="CopyToClipboard('tag30746');return false;" class="tag-decoration">testing-3a16d95</div><div id="tag19210" onclick="CopyToClipboard('tag19210');return false;" class="tag-decoration">testing-2.3.7.5365</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/3a16d95b0b78204081560645ebea27fb160712ec" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25605054180" target="_blank">2026-05-09 15:43:45</a></td></tr>
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
