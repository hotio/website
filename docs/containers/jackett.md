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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18526" onclick="CopyToClipboard('tag18526');return false;" class="tag-decoration">release</div><div id="tag19515" onclick="CopyToClipboard('tag19515');return false;" class="tag-decoration">release-90b9b0f</div><div id="tag6202" onclick="CopyToClipboard('tag6202');return false;" class="tag-decoration">release-0.24.1827</div><div id="tag12621" onclick="CopyToClipboard('tag12621');return false;" class="tag-decoration">release-v0</div><div id="tag17138" onclick="CopyToClipboard('tag17138');return false;" class="tag-decoration">release-v0.24</div><div id="tag8058" onclick="CopyToClipboard('tag8058');return false;" class="tag-decoration">release-v0.24.1827</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/90b9b0f58326fe7cc6953c5746bfb1a1301c408c" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25605046946" target="_blank">2026-05-09 15:43:21</a></td></tr>
<tr><td><div id="tag14859" onclick="CopyToClipboard('tag14859');return false;" class="tag-decoration">testing</div><div id="tag4472" onclick="CopyToClipboard('tag4472');return false;" class="tag-decoration">testing-0fd4d41</div><div id="tag13274" onclick="CopyToClipboard('tag13274');return false;" class="tag-decoration">testing-0.24.1827</div><div id="tag19683" onclick="CopyToClipboard('tag19683');return false;" class="tag-decoration">testing-v0</div><div id="tag27654" onclick="CopyToClipboard('tag27654');return false;" class="tag-decoration">testing-v0.24</div><div id="tag16636" onclick="CopyToClipboard('tag16636');return false;" class="tag-decoration">testing-v0.24.1827</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/0fd4d418424bb811b34a94b11c699ae4d054a66c" target="_blank">Version update: 0.24.1822 => 0.24.1827</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25592152631" target="_blank">2026-05-09 04:51:02</a></td></tr>
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
