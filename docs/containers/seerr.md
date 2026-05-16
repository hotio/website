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
<tr><td><div id="tag30509" onclick="CopyToClipboard('tag30509');return false;" class="tag-decoration">nightly</div><div id="tag7911" onclick="CopyToClipboard('tag7911');return false;" class="tag-decoration">nightly-4d0d5e9</div><div id="tag20665" onclick="CopyToClipboard('tag20665');return false;" class="tag-decoration">nightly-08b7bd4f461f51191d5fd4d5aad5252d630781ec</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/4d0d5e9d8f90cb898934858d4b6c6f9347b16474" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25960358208" target="_blank">2026-05-16 11:06:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31158" onclick="CopyToClipboard('tag31158');return false;" class="tag-decoration">release</div><div id="tag1919" onclick="CopyToClipboard('tag1919');return false;" class="tag-decoration">release-8d00072</div><div id="tag5980" onclick="CopyToClipboard('tag5980');return false;" class="tag-decoration">release-3.2.0</div><div id="tag23920" onclick="CopyToClipboard('tag23920');return false;" class="tag-decoration">release-v3</div><div id="tag22658" onclick="CopyToClipboard('tag22658');return false;" class="tag-decoration">release-v3.2</div><div id="tag11451" onclick="CopyToClipboard('tag11451');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/8d0007215ebe053c3513d897e43fb0e52d186ad0" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25932607260" target="_blank">2026-05-15 17:45:36</a></td></tr>
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
