---
hide:
  - toc
title: hotio/seerr
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
<tr><td><div id="tag3365" onclick="CopyToClipboard('tag3365');return false;" class="tag-decoration">nightly</div><div id="tag179" onclick="CopyToClipboard('tag179');return false;" class="tag-decoration">nightly-2d7d2b9</div><div id="tag17185" onclick="CopyToClipboard('tag17185');return false;" class="tag-decoration">nightly-b9194432020fc029bf5166dc1e0140989236f689</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/2d7d2b9e8c60650a623d5634eb29c8bd5484b8de" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/35983323096" target="_blank">2026-09-24 09:46:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25251" onclick="CopyToClipboard('tag25251');return false;" class="tag-decoration">release</div><div id="tag20764" onclick="CopyToClipboard('tag20764');return false;" class="tag-decoration">release-b6e8cd1</div><div id="tag23821" onclick="CopyToClipboard('tag23821');return false;" class="tag-decoration">release-3.4.1</div><div id="tag17990" onclick="CopyToClipboard('tag17990');return false;" class="tag-decoration">release-v3</div><div id="tag25514" onclick="CopyToClipboard('tag25514');return false;" class="tag-decoration">release-v3.4</div><div id="tag6776" onclick="CopyToClipboard('tag6776');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/b6e8cd1997e881fcd259a3ffad7c65a8ffe83878" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/35953875178" target="_blank">2026-09-24 04:01:29</a></td></tr>
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
