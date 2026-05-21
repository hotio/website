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
<tr><td><div id="tag13644" onclick="CopyToClipboard('tag13644');return false;" class="tag-decoration">nightly</div><div id="tag24676" onclick="CopyToClipboard('tag24676');return false;" class="tag-decoration">nightly-94512dc</div><div id="tag26865" onclick="CopyToClipboard('tag26865');return false;" class="tag-decoration">nightly-0.25.1.65534-0bc3f2e3</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/94512dcfd0770e7f6fd73c0aff9d857648e69093" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/26238694286" target="_blank">2026-05-21 16:21:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16962" onclick="CopyToClipboard('tag16962');return false;" class="tag-decoration">release</div><div id="tag7802" onclick="CopyToClipboard('tag7802');return false;" class="tag-decoration">release-374d77d</div><div id="tag14185" onclick="CopyToClipboard('tag14185');return false;" class="tag-decoration">release-0.25.1</div><div id="tag29678" onclick="CopyToClipboard('tag29678');return false;" class="tag-decoration">release-v0</div><div id="tag30442" onclick="CopyToClipboard('tag30442');return false;" class="tag-decoration">release-v0.25</div><div id="tag16802" onclick="CopyToClipboard('tag16802');return false;" class="tag-decoration">release-v0.25.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/374d77d2089988eab707ba9b423ee3d0be0d1bdf" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/25987659287" target="_blank">2026-05-17 09:55:23</a></td></tr>
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
