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
<tr><td><div id="tag29035" onclick="CopyToClipboard('tag29035');return false;" class="tag-decoration">nightly</div><div id="tag15000" onclick="CopyToClipboard('tag15000');return false;" class="tag-decoration">nightly-aec6971</div><div id="tag1318" onclick="CopyToClipboard('tag1318');return false;" class="tag-decoration">nightly-5132c2b61e8745387ad64e96d2b5774c570dfbf4</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/aec6971be7b06a137b4195716b24f589e110a5fe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/28536982658" target="_blank">2026-07-01 17:50:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24321" onclick="CopyToClipboard('tag24321');return false;" class="tag-decoration">release</div><div id="tag25523" onclick="CopyToClipboard('tag25523');return false;" class="tag-decoration">release-958cbd3</div><div id="tag26073" onclick="CopyToClipboard('tag26073');return false;" class="tag-decoration">release-4.9.1</div><div id="tag2582" onclick="CopyToClipboard('tag2582');return false;" class="tag-decoration">release-v4</div><div id="tag13222" onclick="CopyToClipboard('tag13222');return false;" class="tag-decoration">release-v4.9</div><div id="tag28025" onclick="CopyToClipboard('tag28025');return false;" class="tag-decoration">release-v4.9.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/958cbd3b93cfe856af252b5d612167601f689af1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/28439046243" target="_blank">2026-06-30 10:53:33</a></td></tr>
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
