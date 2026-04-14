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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27211" onclick="CopyToClipboard('tag27211');return false;" class="tag-decoration">release</div><div id="tag13009" onclick="CopyToClipboard('tag13009');return false;" class="tag-decoration">release-395d1e1</div><div id="tag27351" onclick="CopyToClipboard('tag27351');return false;" class="tag-decoration">release-0.24.1591</div><div id="tag30547" onclick="CopyToClipboard('tag30547');return false;" class="tag-decoration">release-v0</div><div id="tag75" onclick="CopyToClipboard('tag75');return false;" class="tag-decoration">release-v0.24</div><div id="tag19058" onclick="CopyToClipboard('tag19058');return false;" class="tag-decoration">release-v0.24.1591</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/395d1e15a148c959e95ca66a818f7f4eaed6dbed" target="_blank">Version update: 0.24.1577 => 0.24.1591</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24387644322" target="_blank">2026-04-14 07:55:12</a></td></tr>
<tr><td><div id="tag21821" onclick="CopyToClipboard('tag21821');return false;" class="tag-decoration">testing</div><div id="tag11011" onclick="CopyToClipboard('tag11011');return false;" class="tag-decoration">testing-c4f3fee</div><div id="tag8287" onclick="CopyToClipboard('tag8287');return false;" class="tag-decoration">testing-0.24.1577</div><div id="tag5053" onclick="CopyToClipboard('tag5053');return false;" class="tag-decoration">testing-v0</div><div id="tag25605" onclick="CopyToClipboard('tag25605');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25649" onclick="CopyToClipboard('tag25649');return false;" class="tag-decoration">testing-v0.24.1577</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c4f3fee29e067546c9700bee743d9cda76cbed4a" target="_blank">Version update: 0.24.1567 => 0.24.1577</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24330220908" target="_blank">2026-04-13 07:03:19</a></td></tr>
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
