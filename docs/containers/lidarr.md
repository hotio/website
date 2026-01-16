---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag27453" onclick="CopyToClipboard('tag27453');return false;" class="tag-decoration">nightly</div><div id="tag2033" onclick="CopyToClipboard('tag2033');return false;" class="tag-decoration">nightly-a09f73f</div><div id="tag12352" onclick="CopyToClipboard('tag12352');return false;" class="tag-decoration">nightly-3.1.2.4902</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/a09f73fe337e1764f7dd17669db2496c930b5129" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/21059644754" target="_blank">2026-01-16 07:55:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12927" onclick="CopyToClipboard('tag12927');return false;" class="tag-decoration">release</div><div id="tag2151" onclick="CopyToClipboard('tag2151');return false;" class="tag-decoration">release-c743f84</div><div id="tag21596" onclick="CopyToClipboard('tag21596');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/c743f8487e88354fb70e0fbd1f4c22e6bde5bf6e" target="_blank">Version update: 3.1.0.4875 => 3.1.0.4875</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20950112975" target="_blank">2026-01-13 08:37:30</a></td></tr>
<tr><td><div id="tag1299" onclick="CopyToClipboard('tag1299');return false;" class="tag-decoration">testing</div><div id="tag4576" onclick="CopyToClipboard('tag4576');return false;" class="tag-decoration">testing-a39f267</div><div id="tag4623" onclick="CopyToClipboard('tag4623');return false;" class="tag-decoration">testing-3.1.2.4902</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/a39f267cc4afe6e2d36e199489f5258598461b3c" target="_blank">Version update: 3.1.2.4902 => 3.1.2.4902</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20950113958" target="_blank">2026-01-13 08:37:31</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
