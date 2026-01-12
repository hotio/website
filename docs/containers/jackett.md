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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24008" onclick="CopyToClipboard('tag24008');return false;" class="tag-decoration">release</div><div id="tag26889" onclick="CopyToClipboard('tag26889');return false;" class="tag-decoration">release-0.24.821</div><div id="tag14647" onclick="CopyToClipboard('tag14647');return false;" class="tag-decoration">release-6bf98b0</div><div id="tag19244" onclick="CopyToClipboard('tag19244');return false;" class="tag-decoration">release-v0</div><div id="tag18843" onclick="CopyToClipboard('tag18843');return false;" class="tag-decoration">release-v0.24</div><div id="tag26500" onclick="CopyToClipboard('tag26500');return false;" class="tag-decoration">release-v0.24.821</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/6bf98b062273c44ff2f99a30b3de37b5eb6d14ca" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20898158666" target="_blank">2026-01-11 16:17:11</a></td></tr>
<tr><td><div id="tag1972" onclick="CopyToClipboard('tag1972');return false;" class="tag-decoration">testing</div><div id="tag27718" onclick="CopyToClipboard('tag27718');return false;" class="tag-decoration">testing-0.24.821</div><div id="tag16746" onclick="CopyToClipboard('tag16746');return false;" class="tag-decoration">testing-94a48c2</div><div id="tag10217" onclick="CopyToClipboard('tag10217');return false;" class="tag-decoration">testing-v0</div><div id="tag6525" onclick="CopyToClipboard('tag6525');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25068" onclick="CopyToClipboard('tag25068');return false;" class="tag-decoration">testing-v0.24.821</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/94a48c2bf335ba51c1d8b271303e5c7a7b722cd0" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20898158846" target="_blank">2026-01-11 16:17:12</a></td></tr>
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
