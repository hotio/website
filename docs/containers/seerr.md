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
<tr><td><div id="tag22356" onclick="CopyToClipboard('tag22356');return false;" class="tag-decoration">nightly</div><div id="tag29414" onclick="CopyToClipboard('tag29414');return false;" class="tag-decoration">nightly-a2bd394</div><div id="tag8929" onclick="CopyToClipboard('tag8929');return false;" class="tag-decoration">nightly-39ff48c650d30ced0516574c55914d0bd26c9983</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/a2bd3948bf63fde0c016b6066108bbeeb3844b92" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/31874813053" target="_blank">2026-08-15 08:34:19</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3470" onclick="CopyToClipboard('tag3470');return false;" class="tag-decoration">release</div><div id="tag2575" onclick="CopyToClipboard('tag2575');return false;" class="tag-decoration">release-55fa01a</div><div id="tag9485" onclick="CopyToClipboard('tag9485');return false;" class="tag-decoration">release-3.4.1</div><div id="tag8934" onclick="CopyToClipboard('tag8934');return false;" class="tag-decoration">release-v3</div><div id="tag8013" onclick="CopyToClipboard('tag8013');return false;" class="tag-decoration">release-v3.4</div><div id="tag11700" onclick="CopyToClipboard('tag11700');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/55fa01a6d88d83a6ded9d7e7c455362b72f654ed" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/31874812944" target="_blank">2026-08-15 08:34:18</a></td></tr>
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
