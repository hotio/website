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
<tr><td><div id="tag7554" onclick="CopyToClipboard('tag7554');return false;" class="tag-decoration">nightly</div><div id="tag23254" onclick="CopyToClipboard('tag23254');return false;" class="tag-decoration">nightly-c131d04</div><div id="tag24257" onclick="CopyToClipboard('tag24257');return false;" class="tag-decoration">nightly-e28ab14c6e2117c44b2ad9f82fe499187be0943c</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/c131d042d4e056659125eb361f1081662a677486" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27178838403" target="_blank">2026-06-09 01:53:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14836" onclick="CopyToClipboard('tag14836');return false;" class="tag-decoration">release</div><div id="tag22552" onclick="CopyToClipboard('tag22552');return false;" class="tag-decoration">release-5ed75c5</div><div id="tag2566" onclick="CopyToClipboard('tag2566');return false;" class="tag-decoration">release-0.31.1</div><div id="tag5899" onclick="CopyToClipboard('tag5899');return false;" class="tag-decoration">release-v0</div><div id="tag22510" onclick="CopyToClipboard('tag22510');return false;" class="tag-decoration">release-v0.31</div><div id="tag25683" onclick="CopyToClipboard('tag25683');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/5ed75c5e62a1999ba7058a6cd8701178863b0603" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27160908009" target="_blank">2026-06-08 19:13:17</a></td></tr>
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
