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
<tr><td><div id="tag18209" onclick="CopyToClipboard('tag18209');return false;" class="tag-decoration">nightly</div><div id="tag15762" onclick="CopyToClipboard('tag15762');return false;" class="tag-decoration">nightly-da1ac23</div><div id="tag22291" onclick="CopyToClipboard('tag22291');return false;" class="tag-decoration">nightly-2917f6f2bf3d84a4f09e0c6921ffe02b734a6b1b</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/da1ac23e7e026da40ef1d5d00ac950505a989470" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/30232468805" target="_blank">2026-07-27 02:33:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17086" onclick="CopyToClipboard('tag17086');return false;" class="tag-decoration">release</div><div id="tag16123" onclick="CopyToClipboard('tag16123');return false;" class="tag-decoration">release-fdd5955</div><div id="tag3121" onclick="CopyToClipboard('tag3121');return false;" class="tag-decoration">release-4.11.0</div><div id="tag32328" onclick="CopyToClipboard('tag32328');return false;" class="tag-decoration">release-v4</div><div id="tag7452" onclick="CopyToClipboard('tag7452');return false;" class="tag-decoration">release-v4.11</div><div id="tag24993" onclick="CopyToClipboard('tag24993');return false;" class="tag-decoration">release-v4.11.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/fdd595574714249740ac4e858248877e17d61f4e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/30173118159" target="_blank">2026-07-25 20:12:28</a></td></tr>
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
