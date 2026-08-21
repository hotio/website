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
<tr><td><div id="tag2290" onclick="CopyToClipboard('tag2290');return false;" class="tag-decoration">nightly</div><div id="tag14487" onclick="CopyToClipboard('tag14487');return false;" class="tag-decoration">nightly-11b5626</div><div id="tag28962" onclick="CopyToClipboard('tag28962');return false;" class="tag-decoration">nightly-f08b80723d4b65548732b9f1c5f96199e162195b</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/11b562693c6512586661fafa2424dc74fbdc9e02" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/32433138023" target="_blank">2026-08-21 00:33:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32616" onclick="CopyToClipboard('tag32616');return false;" class="tag-decoration">release</div><div id="tag15899" onclick="CopyToClipboard('tag15899');return false;" class="tag-decoration">release-63e981c</div><div id="tag15419" onclick="CopyToClipboard('tag15419');return false;" class="tag-decoration">release-0.31.1</div><div id="tag4697" onclick="CopyToClipboard('tag4697');return false;" class="tag-decoration">release-v0</div><div id="tag30002" onclick="CopyToClipboard('tag30002');return false;" class="tag-decoration">release-v0.31</div><div id="tag26372" onclick="CopyToClipboard('tag26372');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/63e981cc235eddf38f214614aef9e546c434fad1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/32292123142" target="_blank">2026-08-19 19:16:34</a></td></tr>
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
