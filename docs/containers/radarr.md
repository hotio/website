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
<tr><td><div id="tag3424" onclick="CopyToClipboard('tag3424');return false;" class="tag-decoration">nightly</div><div id="tag7797" onclick="CopyToClipboard('tag7797');return false;" class="tag-decoration">nightly-a2d89fb</div><div id="tag6956" onclick="CopyToClipboard('tag6956');return false;" class="tag-decoration">nightly-6.1.2.10361</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/a2d89fb89ab65375d48146d5250ecdd85b285017" target="_blank">Version update: 6.1.2.10359 => 6.1.2.10361</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/23715500033" target="_blank">2026-03-29 18:02:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31960" onclick="CopyToClipboard('tag31960');return false;" class="tag-decoration">release</div><div id="tag26168" onclick="CopyToClipboard('tag26168');return false;" class="tag-decoration">release-779b69d</div><div id="tag23310" onclick="CopyToClipboard('tag23310');return false;" class="tag-decoration">release-6.1.1.10360</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/779b69d85f730b3f8f67d2728a8a09248b7ced41" target="_blank">Version update: 6.0.4.10291 => 6.1.1.10360</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/23910165092" target="_blank">2026-04-02 16:13:16</a></td></tr>
<tr><td><div id="tag2193" onclick="CopyToClipboard('tag2193');return false;" class="tag-decoration">testing</div><div id="tag384" onclick="CopyToClipboard('tag384');return false;" class="tag-decoration">testing-54aa31a</div><div id="tag17796" onclick="CopyToClipboard('tag17796');return false;" class="tag-decoration">testing-6.1.2.10359</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/54aa31a3b98c33b0d0533a66c2a6fb4c0e08f904" target="_blank">Version update: 6.1.1.10317 => 6.1.2.10359</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/23593274772" target="_blank">2026-03-26 12:03:15</a></td></tr>
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
