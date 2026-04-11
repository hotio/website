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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5687" onclick="CopyToClipboard('tag5687');return false;" class="tag-decoration">release</div><div id="tag14354" onclick="CopyToClipboard('tag14354');return false;" class="tag-decoration">release-5d66c66</div><div id="tag27319" onclick="CopyToClipboard('tag27319');return false;" class="tag-decoration">release-0.24.1562</div><div id="tag7189" onclick="CopyToClipboard('tag7189');return false;" class="tag-decoration">release-v0</div><div id="tag15833" onclick="CopyToClipboard('tag15833');return false;" class="tag-decoration">release-v0.24</div><div id="tag25113" onclick="CopyToClipboard('tag25113');return false;" class="tag-decoration">release-v0.24.1562</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/5d66c662392ccbadf31ed743ad146f804b67d1b1" target="_blank">Version update: 0.24.1554 => 0.24.1562</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24229369559" target="_blank">2026-04-10 06:15:47</a></td></tr>
<tr><td><div id="tag10554" onclick="CopyToClipboard('tag10554');return false;" class="tag-decoration">testing</div><div id="tag19955" onclick="CopyToClipboard('tag19955');return false;" class="tag-decoration">testing-3f9ba01</div><div id="tag20563" onclick="CopyToClipboard('tag20563');return false;" class="tag-decoration">testing-0.24.1564</div><div id="tag14396" onclick="CopyToClipboard('tag14396');return false;" class="tag-decoration">testing-v0</div><div id="tag10751" onclick="CopyToClipboard('tag10751');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22259" onclick="CopyToClipboard('tag22259');return false;" class="tag-decoration">testing-v0.24.1564</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/3f9ba0181019406a706b8e2a8bf51a1a52ff4ef9" target="_blank">Version update: 0.24.1562 => 0.24.1564</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24276251975" target="_blank">2026-04-11 06:03:01</a></td></tr>
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
