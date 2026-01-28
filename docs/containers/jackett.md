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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27177" onclick="CopyToClipboard('tag27177');return false;" class="tag-decoration">release</div><div id="tag26050" onclick="CopyToClipboard('tag26050');return false;" class="tag-decoration">release-a467288</div><div id="tag18292" onclick="CopyToClipboard('tag18292');return false;" class="tag-decoration">release-0.24.955</div><div id="tag27564" onclick="CopyToClipboard('tag27564');return false;" class="tag-decoration">release-v0</div><div id="tag3897" onclick="CopyToClipboard('tag3897');return false;" class="tag-decoration">release-v0.24</div><div id="tag22282" onclick="CopyToClipboard('tag22282');return false;" class="tag-decoration">release-v0.24.955</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/a4672884c6f3babefcd724be367c1c7a467cdb74" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21426199959" target="_blank">2026-01-28 05:22:54</a></td></tr>
<tr><td><div id="tag1589" onclick="CopyToClipboard('tag1589');return false;" class="tag-decoration">testing</div><div id="tag14127" onclick="CopyToClipboard('tag14127');return false;" class="tag-decoration">testing-0e607b8</div><div id="tag5595" onclick="CopyToClipboard('tag5595');return false;" class="tag-decoration">testing-0.24.955</div><div id="tag24844" onclick="CopyToClipboard('tag24844');return false;" class="tag-decoration">testing-v0</div><div id="tag15274" onclick="CopyToClipboard('tag15274');return false;" class="tag-decoration">testing-v0.24</div><div id="tag32474" onclick="CopyToClipboard('tag32474');return false;" class="tag-decoration">testing-v0.24.955</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/0e607b83dc3a933a7874088c205f2e6c0fae1a51" target="_blank">Version update: 0.24.946 => 0.24.955</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21395680060" target="_blank">2026-01-27 11:37:15</a></td></tr>
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
