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
<tr><td><div id="tag28786" onclick="CopyToClipboard('tag28786');return false;" class="tag-decoration">nightly</div><div id="tag24110" onclick="CopyToClipboard('tag24110');return false;" class="tag-decoration">nightly-0300796</div><div id="tag14789" onclick="CopyToClipboard('tag14789');return false;" class="tag-decoration">nightly-779b6b613a62765f96ce5d3722a608bd6fdd6fb7</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/03007961ac5bbab05e701709112d307018060712" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/39699198326" target="_blank">2026-10-22 00:21:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30106" onclick="CopyToClipboard('tag30106');return false;" class="tag-decoration">release</div><div id="tag21040" onclick="CopyToClipboard('tag21040');return false;" class="tag-decoration">release-c19fe78</div><div id="tag4435" onclick="CopyToClipboard('tag4435');return false;" class="tag-decoration">release-4.14.0</div><div id="tag8014" onclick="CopyToClipboard('tag8014');return false;" class="tag-decoration">release-v4</div><div id="tag10544" onclick="CopyToClipboard('tag10544');return false;" class="tag-decoration">release-v4.14</div><div id="tag11777" onclick="CopyToClipboard('tag11777');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/c19fe7872d90d96ba9e0722bfba3e202db6205fe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/39699196859" target="_blank">2026-10-22 00:21:23</a></td></tr>
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
