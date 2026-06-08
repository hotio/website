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
<tr><td><div id="tag8968" onclick="CopyToClipboard('tag8968');return false;" class="tag-decoration">nightly</div><div id="tag26532" onclick="CopyToClipboard('tag26532');return false;" class="tag-decoration">nightly-c45f5ee</div><div id="tag32473" onclick="CopyToClipboard('tag32473');return false;" class="tag-decoration">nightly-5f2722da30ba000f2d07ddaa099c7d6416378458</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/c45f5ee06ad9133bce1a080cdad464d71b94830a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/27169409181" target="_blank">2026-06-08 21:54:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21023" onclick="CopyToClipboard('tag21023');return false;" class="tag-decoration">release</div><div id="tag19050" onclick="CopyToClipboard('tag19050');return false;" class="tag-decoration">release-8ed8b88</div><div id="tag26307" onclick="CopyToClipboard('tag26307');return false;" class="tag-decoration">release-3.3.0</div><div id="tag31323" onclick="CopyToClipboard('tag31323');return false;" class="tag-decoration">release-v3</div><div id="tag19908" onclick="CopyToClipboard('tag19908');return false;" class="tag-decoration">release-v3.3</div><div id="tag26567" onclick="CopyToClipboard('tag26567');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/8ed8b883d8ab9f624270b81ee78d703379f2a160" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/26818360701" target="_blank">2026-06-02 12:01:23</a></td></tr>
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
