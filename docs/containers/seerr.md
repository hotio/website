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
<tr><td><div id="tag31744" onclick="CopyToClipboard('tag31744');return false;" class="tag-decoration">nightly</div><div id="tag19545" onclick="CopyToClipboard('tag19545');return false;" class="tag-decoration">nightly-23b4b36</div><div id="tag8424" onclick="CopyToClipboard('tag8424');return false;" class="tag-decoration">nightly-dfde4d34e69732935c0ffa72da4d1f15469b6774</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/23b4b36231384bc2cc043b99351a8ba72b65edba" target="_blank">fix build</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25711773125" target="_blank">2026-05-12 03:36:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18246" onclick="CopyToClipboard('tag18246');return false;" class="tag-decoration">release</div><div id="tag115" onclick="CopyToClipboard('tag115');return false;" class="tag-decoration">release-33d2f4a</div><div id="tag7336" onclick="CopyToClipboard('tag7336');return false;" class="tag-decoration">release-3.2.0</div><div id="tag31135" onclick="CopyToClipboard('tag31135');return false;" class="tag-decoration">release-v3</div><div id="tag1706" onclick="CopyToClipboard('tag1706');return false;" class="tag-decoration">release-v3.2</div><div id="tag22978" onclick="CopyToClipboard('tag22978');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/33d2f4abe625460eaa45dd107c9aa36c243ea1ec" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25701970881" target="_blank">2026-05-11 22:50:30</a></td></tr>
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
