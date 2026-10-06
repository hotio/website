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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1339" onclick="CopyToClipboard('tag1339');return false;" class="tag-decoration">release</div><div id="tag23735" onclick="CopyToClipboard('tag23735');return false;" class="tag-decoration">release-1e3890b</div><div id="tag7518" onclick="CopyToClipboard('tag7518');return false;" class="tag-decoration">release-0.24.2793</div><div id="tag25652" onclick="CopyToClipboard('tag25652');return false;" class="tag-decoration">release-v0</div><div id="tag26709" onclick="CopyToClipboard('tag26709');return false;" class="tag-decoration">release-v0.24</div><div id="tag12903" onclick="CopyToClipboard('tag12903');return false;" class="tag-decoration">release-v0.24.2793</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/1e3890b317a6969bba8c7ea70da9264d8c256c7d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/37300266391" target="_blank">2026-10-05 11:01:21</a></td></tr>
<tr><td><div id="tag21747" onclick="CopyToClipboard('tag21747');return false;" class="tag-decoration">testing</div><div id="tag1525" onclick="CopyToClipboard('tag1525');return false;" class="tag-decoration">testing-b47847f</div><div id="tag19611" onclick="CopyToClipboard('tag19611');return false;" class="tag-decoration">testing-0.24.2793</div><div id="tag19897" onclick="CopyToClipboard('tag19897');return false;" class="tag-decoration">testing-v0</div><div id="tag31291" onclick="CopyToClipboard('tag31291');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22904" onclick="CopyToClipboard('tag22904');return false;" class="tag-decoration">testing-v0.24.2793</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b47847f6f18207c88f99e95f47c312b45c59d84c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/37397881482" target="_blank">2026-10-06 01:11:14</a></td></tr>
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
