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
<tr><td><div id="tag16207" onclick="CopyToClipboard('tag16207');return false;" class="tag-decoration">nightly</div><div id="tag15300" onclick="CopyToClipboard('tag15300');return false;" class="tag-decoration">nightly-7916c96</div><div id="tag20133" onclick="CopyToClipboard('tag20133');return false;" class="tag-decoration">nightly-ca2c596fef18fc7ef325c6a94193e5b5f66a2e28</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/7916c9697a168bbb66bf987295d2823fa5596970" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/28981577894" target="_blank">2026-07-08 22:59:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30871" onclick="CopyToClipboard('tag30871');return false;" class="tag-decoration">release</div><div id="tag14548" onclick="CopyToClipboard('tag14548');return false;" class="tag-decoration">release-6622ca6</div><div id="tag3496" onclick="CopyToClipboard('tag3496');return false;" class="tag-decoration">release-4.9.1</div><div id="tag20956" onclick="CopyToClipboard('tag20956');return false;" class="tag-decoration">release-v4</div><div id="tag6356" onclick="CopyToClipboard('tag6356');return false;" class="tag-decoration">release-v4.9</div><div id="tag11589" onclick="CopyToClipboard('tag11589');return false;" class="tag-decoration">release-v4.9.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/6622ca6b8598b9e1d2bc3de7ce61bab5e0dd8bf7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/28975415740" target="_blank">2026-07-08 21:01:01</a></td></tr>
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
