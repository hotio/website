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
<tr><td><div id="tag4208" onclick="CopyToClipboard('tag4208');return false;" class="tag-decoration">nightly</div><div id="tag21552" onclick="CopyToClipboard('tag21552');return false;" class="tag-decoration">nightly-f09df76</div><div id="tag22812" onclick="CopyToClipboard('tag22812');return false;" class="tag-decoration">nightly-0.25.1.65534-427a3de7</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/f09df76fed696f8f9edd090245eab3e250fd138e" target="_blank">Version update: 0.25.1.65534+8fb75597 => 0.25.1.65534+427a3de7</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/25841711712" target="_blank">2026-05-14 04:29:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30395" onclick="CopyToClipboard('tag30395');return false;" class="tag-decoration">release</div><div id="tag32540" onclick="CopyToClipboard('tag32540');return false;" class="tag-decoration">release-1150bd8</div><div id="tag13653" onclick="CopyToClipboard('tag13653');return false;" class="tag-decoration">release-0.25.1</div><div id="tag8867" onclick="CopyToClipboard('tag8867');return false;" class="tag-decoration">release-v0</div><div id="tag14254" onclick="CopyToClipboard('tag14254');return false;" class="tag-decoration">release-v0.25</div><div id="tag29769" onclick="CopyToClipboard('tag29769');return false;" class="tag-decoration">release-v0.25.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/1150bd87b87ebfa354af2a6bb07d3703efe1d502" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/25715029971" target="_blank">2026-05-12 05:18:58</a></td></tr>
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
