---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag30487" onclick="CopyToClipboard('tag30487');return false;" class="tag-decoration">nightly</div><div id="tag1048" onclick="CopyToClipboard('tag1048');return false;" class="tag-decoration">nightly-e5c2eac</div><div id="tag26041" onclick="CopyToClipboard('tag26041');return false;" class="tag-decoration">nightly-6.2.0.10409</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/e5c2eac3bea3619bef4afc2d0d91381f93872896" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25707218383" target="_blank">2026-05-12 01:16:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7595" onclick="CopyToClipboard('tag7595');return false;" class="tag-decoration">release</div><div id="tag31622" onclick="CopyToClipboard('tag31622');return false;" class="tag-decoration">release-e74ef2f</div><div id="tag13799" onclick="CopyToClipboard('tag13799');return false;" class="tag-decoration">release-6.1.1.10360</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/e74ef2fe0a6ce20e6606c2a2ccd050b611f19075" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25708430144" target="_blank">2026-05-12 01:52:53</a></td></tr>
<tr><td><div id="tag7362" onclick="CopyToClipboard('tag7362');return false;" class="tag-decoration">testing</div><div id="tag23977" onclick="CopyToClipboard('tag23977');return false;" class="tag-decoration">testing-017e2d9</div><div id="tag25068" onclick="CopyToClipboard('tag25068');return false;" class="tag-decoration">testing-6.2.0.10390</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/017e2d9208e80a0c0939ee283e4720c190160a84" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25707223945" target="_blank">2026-05-12 01:16:54</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
