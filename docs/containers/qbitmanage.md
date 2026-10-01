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
<tr><td><div id="tag28697" onclick="CopyToClipboard('tag28697');return false;" class="tag-decoration">nightly</div><div id="tag3753" onclick="CopyToClipboard('tag3753');return false;" class="tag-decoration">nightly-90d5a46</div><div id="tag22814" onclick="CopyToClipboard('tag22814');return false;" class="tag-decoration">nightly-8931db03a23cb1a6e3e9bff1c9b5fb038bb1e762</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/90d5a46be3b1b26621eb51816560afd29574a750" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/36923790816" target="_blank">2026-10-01 20:44:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6052" onclick="CopyToClipboard('tag6052');return false;" class="tag-decoration">release</div><div id="tag5986" onclick="CopyToClipboard('tag5986');return false;" class="tag-decoration">release-2e961d2</div><div id="tag30818" onclick="CopyToClipboard('tag30818');return false;" class="tag-decoration">release-4.13.0</div><div id="tag29913" onclick="CopyToClipboard('tag29913');return false;" class="tag-decoration">release-v4</div><div id="tag3498" onclick="CopyToClipboard('tag3498');return false;" class="tag-decoration">release-v4.13</div><div id="tag10739" onclick="CopyToClipboard('tag10739');return false;" class="tag-decoration">release-v4.13.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/2e961d2d16867609335062638c1edbacaf8cafe2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/36745569263" target="_blank">2026-09-30 16:37:31</a></td></tr>
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
