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
<tr><td><div id="tag24903" onclick="CopyToClipboard('tag24903');return false;" class="tag-decoration">nightly</div><div id="tag20497" onclick="CopyToClipboard('tag20497');return false;" class="tag-decoration">nightly-686adf4</div><div id="tag23155" onclick="CopyToClipboard('tag23155');return false;" class="tag-decoration">nightly-14ed03dbb7238a98bfa95216592a8a062761775e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/686adf495e616d7e81c8338b3e306f58df84fb4f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/37446387203" target="_blank">2026-10-06 09:56:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16722" onclick="CopyToClipboard('tag16722');return false;" class="tag-decoration">release</div><div id="tag30001" onclick="CopyToClipboard('tag30001');return false;" class="tag-decoration">release-981638d</div><div id="tag22319" onclick="CopyToClipboard('tag22319');return false;" class="tag-decoration">release-3.5.0</div><div id="tag25361" onclick="CopyToClipboard('tag25361');return false;" class="tag-decoration">release-v3</div><div id="tag27669" onclick="CopyToClipboard('tag27669');return false;" class="tag-decoration">release-v3.5</div><div id="tag27611" onclick="CopyToClipboard('tag27611');return false;" class="tag-decoration">release-v3.5.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/981638d62e8a513e7bb92c581be8741540ba28ad" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/37497142940" target="_blank">2026-10-06 16:37:15</a></td></tr>
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
