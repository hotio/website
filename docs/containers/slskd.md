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
<tr><td><div id="tag26618" onclick="CopyToClipboard('tag26618');return false;" class="tag-decoration">nightly</div><div id="tag24784" onclick="CopyToClipboard('tag24784');return false;" class="tag-decoration">nightly-d99883e</div><div id="tag11290" onclick="CopyToClipboard('tag11290');return false;" class="tag-decoration">nightly-0.25.1.65534-746f7cee</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/d99883ec48cc1cf92b22853ce24ba7af7a7b59d9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/26352572022" target="_blank">2026-05-24 05:07:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9573" onclick="CopyToClipboard('tag9573');return false;" class="tag-decoration">release</div><div id="tag31006" onclick="CopyToClipboard('tag31006');return false;" class="tag-decoration">release-374d77d</div><div id="tag14932" onclick="CopyToClipboard('tag14932');return false;" class="tag-decoration">release-0.25.1</div><div id="tag15427" onclick="CopyToClipboard('tag15427');return false;" class="tag-decoration">release-v0</div><div id="tag6850" onclick="CopyToClipboard('tag6850');return false;" class="tag-decoration">release-v0.25</div><div id="tag8029" onclick="CopyToClipboard('tag8029');return false;" class="tag-decoration">release-v0.25.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/374d77d2089988eab707ba9b423ee3d0be0d1bdf" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/25987659287" target="_blank">2026-05-17 09:55:23</a></td></tr>
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
