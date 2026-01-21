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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10227" onclick="CopyToClipboard('tag10227');return false;" class="tag-decoration">release</div><div id="tag25549" onclick="CopyToClipboard('tag25549');return false;" class="tag-decoration">release-2820cc6</div><div id="tag17087" onclick="CopyToClipboard('tag17087');return false;" class="tag-decoration">release-0.24.898</div><div id="tag8226" onclick="CopyToClipboard('tag8226');return false;" class="tag-decoration">release-v0</div><div id="tag4106" onclick="CopyToClipboard('tag4106');return false;" class="tag-decoration">release-v0.24</div><div id="tag23534" onclick="CopyToClipboard('tag23534');return false;" class="tag-decoration">release-v0.24.898</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/2820cc624da352a27edf0d15b672d43a807fd1e0" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21200255793" target="_blank">2026-01-21 06:57:14</a></td></tr>
<tr><td><div id="tag6035" onclick="CopyToClipboard('tag6035');return false;" class="tag-decoration">testing</div><div id="tag31980" onclick="CopyToClipboard('tag31980');return false;" class="tag-decoration">testing-8ef18d5</div><div id="tag16838" onclick="CopyToClipboard('tag16838');return false;" class="tag-decoration">testing-0.24.898</div><div id="tag21024" onclick="CopyToClipboard('tag21024');return false;" class="tag-decoration">testing-v0</div><div id="tag3098" onclick="CopyToClipboard('tag3098');return false;" class="tag-decoration">testing-v0.24</div><div id="tag14414" onclick="CopyToClipboard('tag14414');return false;" class="tag-decoration">testing-v0.24.898</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/8ef18d5375eb47f2d0b1360eb5af328a6bb424be" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21200256633" target="_blank">2026-01-21 06:57:16</a></td></tr>
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
