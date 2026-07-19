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
<tr><td><div id="tag27031" onclick="CopyToClipboard('tag27031');return false;" class="tag-decoration">nightly</div><div id="tag10411" onclick="CopyToClipboard('tag10411');return false;" class="tag-decoration">nightly-805892c</div><div id="tag27434" onclick="CopyToClipboard('tag27434');return false;" class="tag-decoration">nightly-67ef76d658268184be4306992098ffb32373ea2a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/805892cef9e33883c44395b6e1e7090e0df51466" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/29681301584" target="_blank">2026-07-19 09:16:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10986" onclick="CopyToClipboard('tag10986');return false;" class="tag-decoration">release</div><div id="tag20444" onclick="CopyToClipboard('tag20444');return false;" class="tag-decoration">release-d2d23c1</div><div id="tag8713" onclick="CopyToClipboard('tag8713');return false;" class="tag-decoration">release-4.10.0</div><div id="tag6942" onclick="CopyToClipboard('tag6942');return false;" class="tag-decoration">release-v4</div><div id="tag16523" onclick="CopyToClipboard('tag16523');return false;" class="tag-decoration">release-v4.10</div><div id="tag16600" onclick="CopyToClipboard('tag16600');return false;" class="tag-decoration">release-v4.10.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/d2d23c19df3c23d86d491e40399cd33ae1152b4a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/29543264638" target="_blank">2026-07-16 23:54:07</a></td></tr>
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
