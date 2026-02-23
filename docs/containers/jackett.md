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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5784" onclick="CopyToClipboard('tag5784');return false;" class="tag-decoration">release</div><div id="tag7184" onclick="CopyToClipboard('tag7184');return false;" class="tag-decoration">release-034f702</div><div id="tag14294" onclick="CopyToClipboard('tag14294');return false;" class="tag-decoration">release-0.24.1178</div><div id="tag28454" onclick="CopyToClipboard('tag28454');return false;" class="tag-decoration">release-v0</div><div id="tag20078" onclick="CopyToClipboard('tag20078');return false;" class="tag-decoration">release-v0.24</div><div id="tag13814" onclick="CopyToClipboard('tag13814');return false;" class="tag-decoration">release-v0.24.1178</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/034f702cd2a0b0ef7fa487d0d4a0ee29689812de" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22292121545" target="_blank">2026-02-23 03:43:26</a></td></tr>
<tr><td><div id="tag11168" onclick="CopyToClipboard('tag11168');return false;" class="tag-decoration">testing</div><div id="tag1835" onclick="CopyToClipboard('tag1835');return false;" class="tag-decoration">testing-7b06e46</div><div id="tag2" onclick="CopyToClipboard('tag2');return false;" class="tag-decoration">testing-0.24.1178</div><div id="tag6224" onclick="CopyToClipboard('tag6224');return false;" class="tag-decoration">testing-v0</div><div id="tag7324" onclick="CopyToClipboard('tag7324');return false;" class="tag-decoration">testing-v0.24</div><div id="tag27400" onclick="CopyToClipboard('tag27400');return false;" class="tag-decoration">testing-v0.24.1178</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7b06e46d9aaa1793848945769773027e35516a08" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22292122028" target="_blank">2026-02-23 03:43:27</a></td></tr>
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
