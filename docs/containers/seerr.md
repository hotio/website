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
<tr><td><div id="tag4501" onclick="CopyToClipboard('tag4501');return false;" class="tag-decoration">nightly</div><div id="tag27136" onclick="CopyToClipboard('tag27136');return false;" class="tag-decoration">nightly-de306a0</div><div id="tag9139" onclick="CopyToClipboard('tag9139');return false;" class="tag-decoration">nightly-77c977fa0ca905831e1177bf7aa6f00a4a889e14</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/de306a0480f567db8c88ae803fa2a401e0f9e7dc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/44889591333" target="_blank">2026-11-21 09:26:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11591" onclick="CopyToClipboard('tag11591');return false;" class="tag-decoration">release</div><div id="tag18041" onclick="CopyToClipboard('tag18041');return false;" class="tag-decoration">release-01def42</div><div id="tag20512" onclick="CopyToClipboard('tag20512');return false;" class="tag-decoration">release-3.5.2</div><div id="tag16377" onclick="CopyToClipboard('tag16377');return false;" class="tag-decoration">release-v3</div><div id="tag9367" onclick="CopyToClipboard('tag9367');return false;" class="tag-decoration">release-v3.5</div><div id="tag12597" onclick="CopyToClipboard('tag12597');return false;" class="tag-decoration">release-v3.5.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/01def42c59a2351ced3a757e0263feabd3a2b6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/43275363722" target="_blank">2026-11-12 18:00:40</a></td></tr>
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
