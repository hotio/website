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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21160" onclick="CopyToClipboard('tag21160');return false;" class="tag-decoration">release</div><div id="tag9119" onclick="CopyToClipboard('tag9119');return false;" class="tag-decoration">release-ee227b0</div><div id="tag7373" onclick="CopyToClipboard('tag7373');return false;" class="tag-decoration">release-0.24.1736</div><div id="tag22207" onclick="CopyToClipboard('tag22207');return false;" class="tag-decoration">release-v0</div><div id="tag2120" onclick="CopyToClipboard('tag2120');return false;" class="tag-decoration">release-v0.24</div><div id="tag27409" onclick="CopyToClipboard('tag27409');return false;" class="tag-decoration">release-v0.24.1736</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ee227b0ef04b15bb843d101d50ff3773200afa02" target="_blank">Version update: 0.24.1731 => 0.24.1736</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24875137758" target="_blank">2026-04-24 06:11:04</a></td></tr>
<tr><td><div id="tag7320" onclick="CopyToClipboard('tag7320');return false;" class="tag-decoration">testing</div><div id="tag9470" onclick="CopyToClipboard('tag9470');return false;" class="tag-decoration">testing-4397d50</div><div id="tag3851" onclick="CopyToClipboard('tag3851');return false;" class="tag-decoration">testing-0.24.1764</div><div id="tag32733" onclick="CopyToClipboard('tag32733');return false;" class="tag-decoration">testing-v0</div><div id="tag14973" onclick="CopyToClipboard('tag14973');return false;" class="tag-decoration">testing-v0.24</div><div id="tag4456" onclick="CopyToClipboard('tag4456');return false;" class="tag-decoration">testing-v0.24.1764</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/4397d50301325b9cc3a09f0ef0b275a0c132dce4" target="_blank">Version update: 0.24.1736 => 0.24.1764</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24925073059" target="_blank">2026-04-25 06:51:16</a></td></tr>
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
