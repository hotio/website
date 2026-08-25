---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag26014" onclick="CopyToClipboard('tag26014');return false;" class="tag-decoration">nightly</div><div id="tag24328" onclick="CopyToClipboard('tag24328');return false;" class="tag-decoration">nightly-f16b53d</div><div id="tag19041" onclick="CopyToClipboard('tag19041');return false;" class="tag-decoration">nightly-0.26.0.65534-bf3e1c7a</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/f16b53d67f6b19c83c4a13d752324bac25cccc21" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/32810264348" target="_blank">2026-08-25 04:46:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27289" onclick="CopyToClipboard('tag27289');return false;" class="tag-decoration">release</div><div id="tag6154" onclick="CopyToClipboard('tag6154');return false;" class="tag-decoration">release-bf429a3</div><div id="tag20388" onclick="CopyToClipboard('tag20388');return false;" class="tag-decoration">release-0.26.0</div><div id="tag20176" onclick="CopyToClipboard('tag20176');return false;" class="tag-decoration">release-v0</div><div id="tag14889" onclick="CopyToClipboard('tag14889');return false;" class="tag-decoration">release-v0.26</div><div id="tag6735" onclick="CopyToClipboard('tag6735');return false;" class="tag-decoration">release-v0.26.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/bf429a3494f6c840a7de4650c6a3d91765583775" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/32326926507" target="_blank">2026-08-20 03:04:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="slskd" \
        -p 5030:5030 \
        -p 5031:5031 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5030/tcp,5031/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/slskd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      slskd:
        container_name: slskd
        image: ghcr.io/hotio/slskd
        ports:
          - "5030:5030"
          - "5031:5031"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5030/tcp,5031/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
