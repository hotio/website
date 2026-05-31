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
<tr><td><div id="tag9513" onclick="CopyToClipboard('tag9513');return false;" class="tag-decoration">nightly</div><div id="tag24872" onclick="CopyToClipboard('tag24872');return false;" class="tag-decoration">nightly-91fcd75</div><div id="tag29915" onclick="CopyToClipboard('tag29915');return false;" class="tag-decoration">nightly-ea010cf39ec93033b2b170c90eec344617d78fa3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/91fcd75cc3d105db7b9f0f1835491d4b8095a085" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/26712184802" target="_blank">2026-05-31 12:08:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19993" onclick="CopyToClipboard('tag19993');return false;" class="tag-decoration">release</div><div id="tag27225" onclick="CopyToClipboard('tag27225');return false;" class="tag-decoration">release-fdffdcb</div><div id="tag18613" onclick="CopyToClipboard('tag18613');return false;" class="tag-decoration">release-4.8.0</div><div id="tag7482" onclick="CopyToClipboard('tag7482');return false;" class="tag-decoration">release-v4</div><div id="tag5616" onclick="CopyToClipboard('tag5616');return false;" class="tag-decoration">release-v4.8</div><div id="tag3095" onclick="CopyToClipboard('tag3095');return false;" class="tag-decoration">release-v4.8.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/fdffdcb54515fff2447846b3cc33735bbe3bba1b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/26687060841" target="_blank">2026-05-30 15:02:22</a></td></tr>
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
