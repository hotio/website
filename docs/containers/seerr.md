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
<tr><td><div id="tag7158" onclick="CopyToClipboard('tag7158');return false;" class="tag-decoration">nightly</div><div id="tag4988" onclick="CopyToClipboard('tag4988');return false;" class="tag-decoration">nightly-a18d59a</div><div id="tag22090" onclick="CopyToClipboard('tag22090');return false;" class="tag-decoration">nightly-dfde4d34e69732935c0ffa72da4d1f15469b6774</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/a18d59a23a8978e0d3789ab48b86a162b34d829e" target="_blank">Version update: bd27f2de6b30853dcaaf3dbb4f538100d353f3f7 => dfde4d34e69732935c0ffa72da4d1f15469b6774</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25609947967" target="_blank">2026-05-09 19:34:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8974" onclick="CopyToClipboard('tag8974');return false;" class="tag-decoration">release</div><div id="tag26583" onclick="CopyToClipboard('tag26583');return false;" class="tag-decoration">release-a86acc7</div><div id="tag24489" onclick="CopyToClipboard('tag24489');return false;" class="tag-decoration">release-3.2.0</div><div id="tag7664" onclick="CopyToClipboard('tag7664');return false;" class="tag-decoration">release-v3</div><div id="tag14536" onclick="CopyToClipboard('tag14536');return false;" class="tag-decoration">release-v3.2</div><div id="tag7843" onclick="CopyToClipboard('tag7843');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/a86acc7264294c3224d7c4b0a6a703af145418f0" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25605061923" target="_blank">2026-05-09 15:44:10</a></td></tr>
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
