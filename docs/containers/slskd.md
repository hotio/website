---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27472" onclick="CopyToClipboard('tag27472');return false;" class="tag-decoration">nightly</div><div id="tag32648" onclick="CopyToClipboard('tag32648');return false;" class="tag-decoration">nightly-ed1a2fe</div><div id="tag23328" onclick="CopyToClipboard('tag23328');return false;" class="tag-decoration">nightly-0.24.2.65534-35fb847f</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/ed1a2fe434a8c57bd2d92f94a33f21cf73442847" target="_blank">use GIT_AUTH_TOKEN</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21026619353" target="_blank">2026-01-15 09:39:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21396" onclick="CopyToClipboard('tag21396');return false;" class="tag-decoration">release</div><div id="tag5211" onclick="CopyToClipboard('tag5211');return false;" class="tag-decoration">release-56e4cfd</div><div id="tag24356" onclick="CopyToClipboard('tag24356');return false;" class="tag-decoration">release-0.24.2</div><div id="tag4936" onclick="CopyToClipboard('tag4936');return false;" class="tag-decoration">release-v0</div><div id="tag10447" onclick="CopyToClipboard('tag10447');return false;" class="tag-decoration">release-v0.24</div><div id="tag31957" onclick="CopyToClipboard('tag31957');return false;" class="tag-decoration">release-v0.24.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/56e4cfd04af6ea0ea21117b0e067ae344c6229f1" target="_blank">Update to version: 0.24.2</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/20950212862" target="_blank">2026-01-13 08:41:10</a></td></tr>
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
