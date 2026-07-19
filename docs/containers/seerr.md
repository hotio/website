---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag29224" onclick="CopyToClipboard('tag29224');return false;" class="tag-decoration">nightly</div><div id="tag7485" onclick="CopyToClipboard('tag7485');return false;" class="tag-decoration">nightly-8e3d8b8</div><div id="tag28305" onclick="CopyToClipboard('tag28305');return false;" class="tag-decoration">nightly-5ae70d05e1ee123b3cda43153ed415754fd8e816</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/8e3d8b87e9d0e035398993dd1d3373231a6a820e" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/29681395753" target="_blank">2026-07-19 09:20:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24418" onclick="CopyToClipboard('tag24418');return false;" class="tag-decoration">release</div><div id="tag31862" onclick="CopyToClipboard('tag31862');return false;" class="tag-decoration">release-c02d226</div><div id="tag14905" onclick="CopyToClipboard('tag14905');return false;" class="tag-decoration">release-3.3.0</div><div id="tag1258" onclick="CopyToClipboard('tag1258');return false;" class="tag-decoration">release-v3</div><div id="tag27851" onclick="CopyToClipboard('tag27851');return false;" class="tag-decoration">release-v3.3</div><div id="tag29599" onclick="CopyToClipboard('tag29599');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/c02d226d260f6f787796acb180283de06c8df518" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/29361824176" target="_blank">2026-07-14 19:26:32</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
