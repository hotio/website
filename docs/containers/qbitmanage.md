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
<tr><td><div id="tag12084" onclick="CopyToClipboard('tag12084');return false;" class="tag-decoration">nightly</div><div id="tag15837" onclick="CopyToClipboard('tag15837');return false;" class="tag-decoration">nightly-fc60d85</div><div id="tag4046" onclick="CopyToClipboard('tag4046');return false;" class="tag-decoration">nightly-67ef76d658268184be4306992098ffb32373ea2a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/fc60d859fa759250a023ee58651b0b76238ab23d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/29543263111" target="_blank">2026-07-16 23:54:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16514" onclick="CopyToClipboard('tag16514');return false;" class="tag-decoration">release</div><div id="tag2722" onclick="CopyToClipboard('tag2722');return false;" class="tag-decoration">release-d2d23c1</div><div id="tag1694" onclick="CopyToClipboard('tag1694');return false;" class="tag-decoration">release-4.10.0</div><div id="tag25019" onclick="CopyToClipboard('tag25019');return false;" class="tag-decoration">release-v4</div><div id="tag8369" onclick="CopyToClipboard('tag8369');return false;" class="tag-decoration">release-v4.10</div><div id="tag7927" onclick="CopyToClipboard('tag7927');return false;" class="tag-decoration">release-v4.10.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/d2d23c19df3c23d86d491e40399cd33ae1152b4a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/29543264638" target="_blank">2026-07-16 23:54:07</a></td></tr>
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
