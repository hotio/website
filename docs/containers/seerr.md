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
<tr><td><div id="tag9397" onclick="CopyToClipboard('tag9397');return false;" class="tag-decoration">nightly</div><div id="tag26610" onclick="CopyToClipboard('tag26610');return false;" class="tag-decoration">nightly-ea029fc</div><div id="tag17098" onclick="CopyToClipboard('tag17098');return false;" class="tag-decoration">nightly-ef9edc832fa5efed53e330563e6db1fddbb44cf4</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/ea029fcc232f6087cef92c15f6a77a4d92f9a6e1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/28017692215" target="_blank">2026-06-23 09:51:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22160" onclick="CopyToClipboard('tag22160');return false;" class="tag-decoration">release</div><div id="tag17172" onclick="CopyToClipboard('tag17172');return false;" class="tag-decoration">release-5e87501</div><div id="tag22224" onclick="CopyToClipboard('tag22224');return false;" class="tag-decoration">release-3.3.0</div><div id="tag14449" onclick="CopyToClipboard('tag14449');return false;" class="tag-decoration">release-v3</div><div id="tag13793" onclick="CopyToClipboard('tag13793');return false;" class="tag-decoration">release-v3.3</div><div id="tag1460" onclick="CopyToClipboard('tag1460');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/5e87501e1c5400dcc48d3511466c07fee1b84545" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/27987336254" target="_blank">2026-06-22 22:08:19</a></td></tr>
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
