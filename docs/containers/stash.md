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
<tr><td><div id="tag8966" onclick="CopyToClipboard('tag8966');return false;" class="tag-decoration">nightly</div><div id="tag26712" onclick="CopyToClipboard('tag26712');return false;" class="tag-decoration">nightly-22f984f</div><div id="tag29834" onclick="CopyToClipboard('tag29834');return false;" class="tag-decoration">nightly-b4c7ad4b8120f28364ae9d7d6a5858cf5994d8f0</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/22f984fa9eb9a094a04baaf7e91968ce5b387d69" target="_blank">Version update: 2bb1df84437d09775cf859644826aacafc9de99e => b4c7ad4b8120f28364ae9d7d6a5858cf5994d8f0</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23423220105" target="_blank">2026-03-23 05:41:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30805" onclick="CopyToClipboard('tag30805');return false;" class="tag-decoration">release</div><div id="tag30129" onclick="CopyToClipboard('tag30129');return false;" class="tag-decoration">release-203417b</div><div id="tag13774" onclick="CopyToClipboard('tag13774');return false;" class="tag-decoration">release-0.30.1</div><div id="tag14429" onclick="CopyToClipboard('tag14429');return false;" class="tag-decoration">release-v0</div><div id="tag24001" onclick="CopyToClipboard('tag24001');return false;" class="tag-decoration">release-v0.30</div><div id="tag15758" onclick="CopyToClipboard('tag15758');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/203417ba2ef146280b5620b2a68e302589ac9364" target="_blank">Version update: 0.30.1 => 0.30.1</a></td><td><a href="https://github.com/hotio/stash/actions/runs/23201650964" target="_blank">2026-03-17 15:18:16</a></td></tr>
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
