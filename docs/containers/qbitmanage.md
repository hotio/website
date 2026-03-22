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
<tr><td><div id="tag19632" onclick="CopyToClipboard('tag19632');return false;" class="tag-decoration">nightly</div><div id="tag27637" onclick="CopyToClipboard('tag27637');return false;" class="tag-decoration">nightly-d2daaca</div><div id="tag14823" onclick="CopyToClipboard('tag14823');return false;" class="tag-decoration">nightly-2031590d3ebd4619cda7528eabc40467582ebfa4</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/d2daaca7afe31aaa20985e165a3d4e1c6e2b0c6d" target="_blank">Version update: 94c37ff4fd08ebc678be85f99fc4bd2850ca12ae => 2031590d3ebd4619cda7528eabc40467582ebfa4</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/23415391710" target="_blank">2026-03-22 23:44:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14754" onclick="CopyToClipboard('tag14754');return false;" class="tag-decoration">release</div><div id="tag31728" onclick="CopyToClipboard('tag31728');return false;" class="tag-decoration">release-9b628ed</div><div id="tag31979" onclick="CopyToClipboard('tag31979');return false;" class="tag-decoration">release-4.6.6</div><div id="tag8984" onclick="CopyToClipboard('tag8984');return false;" class="tag-decoration">release-v4</div><div id="tag15631" onclick="CopyToClipboard('tag15631');return false;" class="tag-decoration">release-v4.6</div><div id="tag25198" onclick="CopyToClipboard('tag25198');return false;" class="tag-decoration">release-v4.6.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/9b628edff090bceba588d432577810ff986518f8" target="_blank">Version update: 4.6.5 => 4.6.6</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/23388245094" target="_blank">2026-03-21 20:33:38</a></td></tr>
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
