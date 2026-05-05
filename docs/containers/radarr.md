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
<tr><td><div id="tag15100" onclick="CopyToClipboard('tag15100');return false;" class="tag-decoration">nightly</div><div id="tag11043" onclick="CopyToClipboard('tag11043');return false;" class="tag-decoration">nightly-f92a67b</div><div id="tag11911" onclick="CopyToClipboard('tag11911');return false;" class="tag-decoration">nightly-6.2.0.10409</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/f92a67b090324e9158aecb9298d236e9bafd6b51" target="_blank">Version update: 6.2.0.10401 => 6.2.0.10409</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/25388067348" target="_blank">2026-05-05 16:12:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5737" onclick="CopyToClipboard('tag5737');return false;" class="tag-decoration">release</div><div id="tag25392" onclick="CopyToClipboard('tag25392');return false;" class="tag-decoration">release-f8eb6db</div><div id="tag18492" onclick="CopyToClipboard('tag18492');return false;" class="tag-decoration">release-6.1.1.10360</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/f8eb6db09b960eaf4cb70ed46c6f931228a756fe" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/24552138740" target="_blank">2026-04-17 06:54:21</a></td></tr>
<tr><td><div id="tag12361" onclick="CopyToClipboard('tag12361');return false;" class="tag-decoration">testing</div><div id="tag30429" onclick="CopyToClipboard('tag30429');return false;" class="tag-decoration">testing-947279f</div><div id="tag15506" onclick="CopyToClipboard('tag15506');return false;" class="tag-decoration">testing-6.2.0.10390</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/947279f60f6de38d73f6a27e4ac9dfa302ed1c77" target="_blank">Version update: 6.1.2.10359 => 6.2.0.10390</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/24635129551" target="_blank">2026-04-19 17:40:01</a></td></tr>
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
