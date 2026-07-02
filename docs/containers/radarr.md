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
<tr><td><div id="tag12525" onclick="CopyToClipboard('tag12525');return false;" class="tag-decoration">nightly</div><div id="tag15291" onclick="CopyToClipboard('tag15291');return false;" class="tag-decoration">nightly-66430be</div><div id="tag20146" onclick="CopyToClipboard('tag20146');return false;" class="tag-decoration">nightly-6.3.0.10501</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/66430bea3bae8749bd4a787140d8c76f8a725c3b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/28626956858" target="_blank">2026-07-02 23:00:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31789" onclick="CopyToClipboard('tag31789');return false;" class="tag-decoration">release</div><div id="tag19348" onclick="CopyToClipboard('tag19348');return false;" class="tag-decoration">release-1e52ed5</div><div id="tag25769" onclick="CopyToClipboard('tag25769');return false;" class="tag-decoration">release-6.2.1.10461</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/1e52ed5f407d7e3f975f66328d6edb89847801de" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/28589104266" target="_blank">2026-07-02 12:13:21</a></td></tr>
<tr><td><div id="tag32480" onclick="CopyToClipboard('tag32480');return false;" class="tag-decoration">testing</div><div id="tag24586" onclick="CopyToClipboard('tag24586');return false;" class="tag-decoration">testing-e1f480d</div><div id="tag28037" onclick="CopyToClipboard('tag28037');return false;" class="tag-decoration">testing-6.2.1.10461</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/e1f480d6b7eee3cedbef1c30bc7e2b165d73eb99" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/28589109388" target="_blank">2026-07-02 12:13:25</a></td></tr>
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
