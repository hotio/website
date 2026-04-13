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
<tr><td><div id="tag9621" onclick="CopyToClipboard('tag9621');return false;" class="tag-decoration">nightly</div><div id="tag22291" onclick="CopyToClipboard('tag22291');return false;" class="tag-decoration">nightly-f06b795</div><div id="tag15038" onclick="CopyToClipboard('tag15038');return false;" class="tag-decoration">nightly-a1339307e18647c936e8eccbb2f6c842f771e7ed</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/f06b79527d083125cc46d6adec81d1b023a0e029" target="_blank">Version update: 43eff257e17e781b126f633327117a0d1b43d318 => a1339307e18647c936e8eccbb2f6c842f771e7ed</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24335400903" target="_blank">2026-04-13 09:13:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26022" onclick="CopyToClipboard('tag26022');return false;" class="tag-decoration">release</div><div id="tag23397" onclick="CopyToClipboard('tag23397');return false;" class="tag-decoration">release-61e4a12</div><div id="tag16143" onclick="CopyToClipboard('tag16143');return false;" class="tag-decoration">release-3.1.0</div><div id="tag9815" onclick="CopyToClipboard('tag9815');return false;" class="tag-decoration">release-v3</div><div id="tag30622" onclick="CopyToClipboard('tag30622');return false;" class="tag-decoration">release-v3.1</div><div id="tag15897" onclick="CopyToClipboard('tag15897');return false;" class="tag-decoration">release-v3.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/61e4a126c6170ac9f9170f273b9f6bde04aa339f" target="_blank">Version update: 3.0.1 => 3.1.0</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22497080527" target="_blank">2026-02-27 17:40:24</a></td></tr>
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
