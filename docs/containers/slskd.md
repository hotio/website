---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

!!! question
    If the community feels that we should switch to the more feature rich fork [slskdn](https://github.com/snapetech/slskdn), feel free to join the discord server and let your opinion be heard.

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
<tr><td><div id="tag23091" onclick="CopyToClipboard('tag23091');return false;" class="tag-decoration">nightly</div><div id="tag13720" onclick="CopyToClipboard('tag13720');return false;" class="tag-decoration">nightly-1398f83</div><div id="tag17196" onclick="CopyToClipboard('tag17196');return false;" class="tag-decoration">nightly-0.24.3.65534-9c1c726f</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/1398f83a0f5ee304b0868f94003bd467a794451a" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21113701478" target="_blank">2026-01-18 14:57:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17274" onclick="CopyToClipboard('tag17274');return false;" class="tag-decoration">release</div><div id="tag26067" onclick="CopyToClipboard('tag26067');return false;" class="tag-decoration">release-1e37a1b</div><div id="tag26" onclick="CopyToClipboard('tag26');return false;" class="tag-decoration">release-0.24.3</div><div id="tag26396" onclick="CopyToClipboard('tag26396');return false;" class="tag-decoration">release-v0</div><div id="tag9231" onclick="CopyToClipboard('tag9231');return false;" class="tag-decoration">release-v0.24</div><div id="tag7261" onclick="CopyToClipboard('tag7261');return false;" class="tag-decoration">release-v0.24.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/1e37a1bb814bf1f368d19bdbd463cd7e1fd01347" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21113701666" target="_blank">2026-01-18 14:57:33</a></td></tr>
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
