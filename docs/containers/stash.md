---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag8810" onclick="CopyToClipboard('tag8810');return false;" class="tag-decoration">nightly</div><div id="tag9967" onclick="CopyToClipboard('tag9967');return false;" class="tag-decoration">nightly-bc9a2f0</div><div id="tag28230" onclick="CopyToClipboard('tag28230');return false;" class="tag-decoration">nightly-b2179cd7230c21460bf2a057badeefe1ac4174e8</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/bc9a2f0a3cce1f3f1dfb5dd103e43c800cde5711" target="_blank">Version update: c2e80d26764ab73e9009454c83cdd309c4773185 => b2179cd7230c21460bf2a057badeefe1ac4174e8</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23179550786" target="_blank">2026-03-17 05:14:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1633" onclick="CopyToClipboard('tag1633');return false;" class="tag-decoration">release</div><div id="tag22424" onclick="CopyToClipboard('tag22424');return false;" class="tag-decoration">release-e21e90e</div><div id="tag28145" onclick="CopyToClipboard('tag28145');return false;" class="tag-decoration">release-0.30.1</div><div id="tag6090" onclick="CopyToClipboard('tag6090');return false;" class="tag-decoration">release-v0</div><div id="tag29850" onclick="CopyToClipboard('tag29850');return false;" class="tag-decoration">release-v0.30</div><div id="tag3246" onclick="CopyToClipboard('tag3246');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/e21e90e74befea5a0ff6361f4d3a0007d9a46558" target="_blank">Upstream update: noblevpn-f921142 => noblevpn-c3daa84</a></td><td><a href="https://github.com/hotio/stash/actions/runs/22292141128" target="_blank">2026-02-23 03:44:34</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
