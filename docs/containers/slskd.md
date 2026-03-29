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
<tr><td><div id="tag4650" onclick="CopyToClipboard('tag4650');return false;" class="tag-decoration">nightly</div><div id="tag15545" onclick="CopyToClipboard('tag15545');return false;" class="tag-decoration">nightly-4af603f</div><div id="tag14795" onclick="CopyToClipboard('tag14795');return false;" class="tag-decoration">nightly-0.24.5.65534-0d656fd8</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/4af603febc1750946fbae2b43488224bdc646f93" target="_blank">Version update: 0.24.5.65534+591bfd59 => 0.24.5.65534+0d656fd8</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/23719860979" target="_blank">2026-03-29 21:48:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5530" onclick="CopyToClipboard('tag5530');return false;" class="tag-decoration">release</div><div id="tag4115" onclick="CopyToClipboard('tag4115');return false;" class="tag-decoration">release-795c8d2</div><div id="tag13664" onclick="CopyToClipboard('tag13664');return false;" class="tag-decoration">release-0.24.5</div><div id="tag30531" onclick="CopyToClipboard('tag30531');return false;" class="tag-decoration">release-v0</div><div id="tag15792" onclick="CopyToClipboard('tag15792');return false;" class="tag-decoration">release-v0.24</div><div id="tag22444" onclick="CopyToClipboard('tag22444');return false;" class="tag-decoration">release-v0.24.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/795c8d2d279c063a7338a8628df415faaf15bb87" target="_blank">Version update: 0.24.4 => 0.24.5</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/22536347528" target="_blank">2026-03-01 04:58:07</a></td></tr>
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
