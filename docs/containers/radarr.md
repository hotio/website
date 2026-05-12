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
<tr><td><div id="tag7463" onclick="CopyToClipboard('tag7463');return false;" class="tag-decoration">nightly</div><div id="tag27871" onclick="CopyToClipboard('tag27871');return false;" class="tag-decoration">nightly-fad45b7</div><div id="tag5811" onclick="CopyToClipboard('tag5811');return false;" class="tag-decoration">nightly-6.2.0.10409</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/fad45b792ca0c8d881a8bd345c3845dd463062b2" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25706882216" target="_blank">2026-05-12 01:06:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7513" onclick="CopyToClipboard('tag7513');return false;" class="tag-decoration">release</div><div id="tag7297" onclick="CopyToClipboard('tag7297');return false;" class="tag-decoration">release-2b7d548</div><div id="tag32025" onclick="CopyToClipboard('tag32025');return false;" class="tag-decoration">release-6.1.1.10360</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/2b7d5480a7fff8f68597117ea26bb05a618ecc7d" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25706887653" target="_blank">2026-05-12 01:06:58</a></td></tr>
<tr><td><div id="tag21827" onclick="CopyToClipboard('tag21827');return false;" class="tag-decoration">testing</div><div id="tag19386" onclick="CopyToClipboard('tag19386');return false;" class="tag-decoration">testing-2d16ba0</div><div id="tag19528" onclick="CopyToClipboard('tag19528');return false;" class="tag-decoration">testing-6.2.0.10390</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/2d16ba0f8504c8a46bfdf37d14e1bb2053bebd90" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25706891852" target="_blank">2026-05-12 01:07:06</a></td></tr>
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
