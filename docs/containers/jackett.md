---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11871" onclick="CopyToClipboard('tag11871');return false;" class="tag-decoration">release</div><div id="tag4400" onclick="CopyToClipboard('tag4400');return false;" class="tag-decoration">release-fe669d8</div><div id="tag27558" onclick="CopyToClipboard('tag27558');return false;" class="tag-decoration">release-0.24.1089</div><div id="tag12212" onclick="CopyToClipboard('tag12212');return false;" class="tag-decoration">release-v0</div><div id="tag596" onclick="CopyToClipboard('tag596');return false;" class="tag-decoration">release-v0.24</div><div id="tag9421" onclick="CopyToClipboard('tag9421');return false;" class="tag-decoration">release-v0.24.1089</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/fe669d85091f403d230b3bbd09bf8ae0b52c37f7" target="_blank">Version update: 0.24.1074 => 0.24.1089</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21854054820" target="_blank">2026-02-10 06:18:53</a></td></tr>
<tr><td><div id="tag16300" onclick="CopyToClipboard('tag16300');return false;" class="tag-decoration">testing</div><div id="tag2556" onclick="CopyToClipboard('tag2556');return false;" class="tag-decoration">testing-afdd304</div><div id="tag9702" onclick="CopyToClipboard('tag9702');return false;" class="tag-decoration">testing-0.24.1089</div><div id="tag5378" onclick="CopyToClipboard('tag5378');return false;" class="tag-decoration">testing-v0</div><div id="tag2951" onclick="CopyToClipboard('tag2951');return false;" class="tag-decoration">testing-v0.24</div><div id="tag2649" onclick="CopyToClipboard('tag2649');return false;" class="tag-decoration">testing-v0.24.1089</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/afdd304e2d6201341241a4b8c9bca389a39e93fe" target="_blank">Version update: 0.24.1074 => 0.24.1089</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21854055161" target="_blank">2026-02-10 06:18:55</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
