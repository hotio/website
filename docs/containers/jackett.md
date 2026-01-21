---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag497" onclick="CopyToClipboard('tag497');return false;" class="tag-decoration">release</div><div id="tag7632" onclick="CopyToClipboard('tag7632');return false;" class="tag-decoration">release-a32031e</div><div id="tag27137" onclick="CopyToClipboard('tag27137');return false;" class="tag-decoration">release-0.24.898</div><div id="tag11469" onclick="CopyToClipboard('tag11469');return false;" class="tag-decoration">release-v0</div><div id="tag29086" onclick="CopyToClipboard('tag29086');return false;" class="tag-decoration">release-v0.24</div><div id="tag26295" onclick="CopyToClipboard('tag26295');return false;" class="tag-decoration">release-v0.24.898</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/a32031e39474235d420ca75849239486ed1758b7" target="_blank">Version update: 0.24.887 => 0.24.898</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21199011516" target="_blank">2026-01-21 05:58:32</a></td></tr>
<tr><td><div id="tag32522" onclick="CopyToClipboard('tag32522');return false;" class="tag-decoration">testing</div><div id="tag3015" onclick="CopyToClipboard('tag3015');return false;" class="tag-decoration">testing-c8f24b2</div><div id="tag1537" onclick="CopyToClipboard('tag1537');return false;" class="tag-decoration">testing-0.24.887</div><div id="tag18871" onclick="CopyToClipboard('tag18871');return false;" class="tag-decoration">testing-v0</div><div id="tag19341" onclick="CopyToClipboard('tag19341');return false;" class="tag-decoration">testing-v0.24</div><div id="tag12274" onclick="CopyToClipboard('tag12274');return false;" class="tag-decoration">testing-v0.24.887</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c8f24b2fdd56fb609ef15167fae7f03153ea88ea" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21198328859" target="_blank">2026-01-21 05:24:10</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
