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
<tr><td><div id="tag3720" onclick="CopyToClipboard('tag3720');return false;" class="tag-decoration">nightly</div><div id="tag23552" onclick="CopyToClipboard('tag23552');return false;" class="tag-decoration">nightly-5db95ff</div><div id="tag18529" onclick="CopyToClipboard('tag18529');return false;" class="tag-decoration">nightly-0.24.5.65534-15827da3</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/5db95ff4c6fbd285f4bad9e22918af7a53e0875d" target="_blank">Version update: 0.24.5.65534+95e85cac => 0.24.5.65534+15827da3</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/24622055543" target="_blank">2026-04-19 05:40:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18413" onclick="CopyToClipboard('tag18413');return false;" class="tag-decoration">release</div><div id="tag18318" onclick="CopyToClipboard('tag18318');return false;" class="tag-decoration">release-9405584</div><div id="tag24825" onclick="CopyToClipboard('tag24825');return false;" class="tag-decoration">release-0.25.0</div><div id="tag21239" onclick="CopyToClipboard('tag21239');return false;" class="tag-decoration">release-v0</div><div id="tag31719" onclick="CopyToClipboard('tag31719');return false;" class="tag-decoration">release-v0.25</div><div id="tag30229" onclick="CopyToClipboard('tag30229');return false;" class="tag-decoration">release-v0.25.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/94055843321f3cd9ca795984f75cdef62db0961f" target="_blank">Version update: 0.24.5 => 0.25.0</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/24622055720" target="_blank">2026-04-19 05:40:40</a></td></tr>
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
