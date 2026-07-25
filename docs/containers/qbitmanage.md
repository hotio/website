---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag27070" onclick="CopyToClipboard('tag27070');return false;" class="tag-decoration">nightly</div><div id="tag7005" onclick="CopyToClipboard('tag7005');return false;" class="tag-decoration">nightly-1848935</div><div id="tag27072" onclick="CopyToClipboard('tag27072');return false;" class="tag-decoration">nightly-c8edb14d002a92180bba70cfc0819f8cd70ff0c0</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/18489357df753dbc8e65a2eb12b8463919305b99" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/30173117508" target="_blank">2026-07-25 20:12:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12468" onclick="CopyToClipboard('tag12468');return false;" class="tag-decoration">release</div><div id="tag25970" onclick="CopyToClipboard('tag25970');return false;" class="tag-decoration">release-fdd5955</div><div id="tag7711" onclick="CopyToClipboard('tag7711');return false;" class="tag-decoration">release-4.11.0</div><div id="tag264" onclick="CopyToClipboard('tag264');return false;" class="tag-decoration">release-v4</div><div id="tag10902" onclick="CopyToClipboard('tag10902');return false;" class="tag-decoration">release-v4.11</div><div id="tag4306" onclick="CopyToClipboard('tag4306');return false;" class="tag-decoration">release-v4.11.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/fdd595574714249740ac4e858248877e17d61f4e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/30173118159" target="_blank">2026-07-25 20:12:28</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qbitmanage" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
